// TextEffect.jsx
import { cn } from '@/lib/utils';
import {
    AnimatePresence,
    motion
} from 'motion/react';
import React from 'react';

const defaultStaggerTimes = {
    char: 0.03,
    word: 0.05,
    line: 0.1,
};

const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const defaultItemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
    exit: { opacity: 0 },
};

const presetVariants = {
    blur: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: 'blur(12px)' },
            visible: { opacity: 1, filter: 'blur(0px)' },
            exit: { opacity: 0, filter: 'blur(12px)' },
        },
    },
    'fade-in-blur': {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
        },
    },
    scale: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0 },
        },
    },
    fade: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
        },
    },
    slide: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
        },
    },
};

const AnimationComponent = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
    const content =
        per === 'line' ? (
            <motion.span variants={variants} className='block'>
                {segment}
            </motion.span>
        ) : per === 'word' ? (
            <motion.span
                aria-hidden='true'
                variants={variants}
                className='inline-block whitespace-pre'
            >
                {segment}
            </motion.span>
        ) : (
            <motion.span className='inline-block whitespace-pre'>
                {segment.split('').map((char, charIndex) => (
                    <motion.span
                        key={`char-${charIndex}`}
                        aria-hidden='true'
                        variants={variants}
                        className='inline-block whitespace-pre'
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        );

    if (!segmentWrapperClassName) {
        return content;
    }

    const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';

    return (
        <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
      {content}
    </span>
    );
});

AnimationComponent.displayName = 'AnimationComponent';

const extractTextFromChildren = (children) => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return String(children);

    // Handle arrays of children (like text with <br /> elements)
    if (Array.isArray(children)) {
        return children
            .map(child => {
                if (typeof child === 'string') return child;
                if (typeof child === 'number') return String(child);
                if (React.isValidElement(child) && child.type === 'br') return '\n';
                if (React.isValidElement(child)) return extractTextFromElement(child);
                return '';
            })
            .join('');
    }

    if (React.isValidElement(children)) {
        if (children.type === 'br') return '\n';
        return extractTextFromElement(children);
    }

    return String(children || '');
};

const extractTextFromElement = (element) => {
    if (!React.isValidElement(element)) return '';

    const { children: childContent } = element.props;

    if (typeof childContent === 'string') return childContent;
    if (typeof childContent === 'number') return String(childContent);

    if (Array.isArray(childContent)) {
        return childContent
            .map(child => {
                if (typeof child === 'string') return child;
                if (typeof child === 'number') return String(child);
                if (React.isValidElement(child)) return extractTextFromElement(child);
                return '';
            })
            .join('');
    }

    if (React.isValidElement(childContent)) {
        return extractTextFromElement(childContent);
    }

    return '';
};

const splitText = (text, per) => {
    const textStr = typeof text === 'string' ? text : String(text || '');
    if (per === 'line') return textStr.split('\n');
    return textStr.split(/(\s+)/);
};

const hasTransition = (variant) => {
    if (!variant) return false;
    return (
        typeof variant === 'object' && 'transition' in variant
    );
};

const createVariantsWithTransition = (
    baseVariants,
    transition
) => {
    if (!transition) return baseVariants;

    const { exit: _, ...mainTransition } = transition;

    return {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...(hasTransition(baseVariants.visible)
                    ? baseVariants.visible.transition
                    : {}),
                ...mainTransition,
            },
        },
        exit: {
            ...baseVariants.exit,
            transition: {
                ...(hasTransition(baseVariants.exit)
                    ? baseVariants.exit.transition
                    : {}),
                ...mainTransition,
                staggerDirection: -1,
            },
        },
    };
};

export function TextEffect({
                               children,
                               per = 'word',
                               as = 'p',
                               variants,
                               className,
                               preset = 'fade',
                               delay = 0,
                               speedReveal = 1,
                               speedSegment = 1,
                               trigger = true,
                               onAnimationComplete,
                               onAnimationStart,
                               segmentWrapperClassName,
                               containerTransition,
                               segmentTransition,
                               style,
                           }) {
    // Extract text from children, handling React elements like <br />
    const childrenString = React.useMemo(() => {
        return extractTextFromChildren(children);
    }, [children]);

    const segments = splitText(childrenString, per);
    const MotionTag = motion[as];

    const baseVariants = preset
        ? presetVariants[preset]
        : { container: defaultContainerVariants, item: defaultItemVariants };

    const stagger = defaultStaggerTimes[per] / speedReveal;

    const baseDuration = 0.3 / speedSegment;

    const customStagger = hasTransition(variants?.container?.visible ?? {})
        ? variants?.container?.visible?.transition?.staggerChildren
        : undefined;

    const customDelay = hasTransition(variants?.container?.visible ?? {})
        ? variants?.container?.visible?.transition?.delayChildren
        : undefined;

    const computedVariants = {
        container: createVariantsWithTransition(
            variants?.container || baseVariants.container,
            {
                staggerChildren: customStagger ?? stagger,
                delayChildren: customDelay ?? delay,
                ...containerTransition,
                exit: {
                    staggerChildren: customStagger ?? stagger,
                    staggerDirection: -1,
                },
            }
        ),
        item: createVariantsWithTransition(variants?.item || baseVariants.item, {
            duration: baseDuration,
            ...segmentTransition,
        }),
    };

    // If children is just a string or text, proceed with animation
    // If it contains JSX elements, render them as-is

    return (
        <AnimatePresence mode='popLayout'>
            {trigger && (
                <MotionTag
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={computedVariants.container}
                    className={className}
                    onAnimationComplete={onAnimationComplete}
                    onAnimationStart={onAnimationStart}
                    style={style}
                >
                    {per !== 'line' ? <span className='sr-only'>{children}</span> : null}
                    {segments.map((segment, index) => (
                        <AnimationComponent
                            key={`${per}-${index}-${segment}`}
                            segment={segment}
                            variants={computedVariants.item}
                            per={per}
                            segmentWrapperClassName={segmentWrapperClassName}
                        />
                    ))}
                </MotionTag>
            )}
        </AnimatePresence>
    );
}