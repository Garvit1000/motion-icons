import React, { useState, useMemo, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../lib/utils';

// Built-in Tailwind animations
const tailwindAnimations = {
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    bounce: 'animate-bounce',
    none: ''
};

// Custom CSS animations
const customAnimations = {
    wiggle: 'motion-wiggle',
    flip: 'motion-flip',
    heartbeat: 'motion-heartbeat',
    shake: 'motion-shake',
    swing: 'motion-swing',
    tada: 'motion-tada',
    ping: 'motion-ping',
    rubber: 'motion-rubber'
};

// Entrance animations
const entranceAnimations = {
    fadeIn: 'motion-fade-in',
    fadeInUp: 'motion-fade-in-up',
    fadeInDown: 'motion-fade-in-down',
    fadeInLeft: 'motion-fade-in-left',
    fadeInRight: 'motion-fade-in-right',
    scaleIn: 'motion-scale-in',
    slideInUp: 'motion-slide-in-up',
    slideInDown: 'motion-slide-in-down',
    rotateIn: 'motion-rotate-in',
    zoomIn: 'motion-zoom-in'
};

const MotionIcon = ({
    name,
    size = 24,
    color = 'currentColor',
    weight = 'regular',
    animation = 'none',
    entrance = null, // Entrance animation
    animationDuration = 1000,
    animationDelay = 0,
    trigger = 'always',
    interactive = false,
    className = '',
    'aria-label': ariaLabel,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onAnimationEnd,
    ...props
}) => {
    const [isAnimating, setIsAnimating] = useState(trigger === 'always');
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasEntered, setHasEntered] = useState(!entrance);

    // Get the icon component from lucide-react
    const IconComponent = LucideIcons[name] || LucideIcons[`${name}Icon`] || LucideIcons[name.replace('Icon', '')];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    // Trigger entrance animation on mount
    useEffect(() => {
        if (entrance) {
            // Wait for both delay AND duration before removing entrance class
            const totalTime = animationDelay + animationDuration;
            const timer = setTimeout(() => {
                setHasEntered(true);
            }, totalTime);
            return () => clearTimeout(timer);
        }
    }, [entrance, animationDelay, animationDuration]);

    // Reset animation state when icon name changes
    useEffect(() => {
        setIsAnimating(trigger === 'always');
        setHasEntered(!entrance);
    }, [name, trigger, entrance]);

    // Determine stroke width based on weight
    const strokeWidth = useMemo(() => {
        switch (weight) {
            case 'light': return 1.5;
            case 'bold': return 2.5;
            case 'regular':
            default: return 2;
        }
    }, [weight]);

    // Handle animation triggers
    const handleMouseEnter = (e) => {
        if (trigger === 'hover') {
            setIsAnimating(true);
        }
        setIsHovered(true);
        onMouseEnter?.(e);
    };

    const handleMouseLeave = (e) => {
        if (trigger === 'hover') {
            setIsAnimating(false);
        }
        setIsHovered(false);
        onMouseLeave?.(e);
    };

    const handleClick = (e) => {
        if (trigger === 'click') {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), animationDuration);
        }

        // Prevent focus on click when trigger is 'focus' (keyboard-only)
        if (trigger === 'focus') {
            e.preventDefault();
            e.currentTarget.blur();
        }

        onClick?.(e);
    };

    const handleFocus = () => {
        if (trigger === 'focus') {
            setIsAnimating(true);
        }
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (trigger === 'focus') {
            setIsAnimating(false);
        }
        setIsFocused(false);
    };

    const handleAnimationEnd = (e) => {
        if (entrance && !hasEntered) {
            setHasEntered(true);
        }
        onAnimationEnd?.(e);
    };

    // Combine animation classes
    const animationClass =
        tailwindAnimations[animation] ||
        customAnimations[animation] ||
        '';

    const entranceClass = entrance && !hasEntered ? entranceAnimations[entrance] : '';
    const shouldAnimate = isAnimating && animation !== 'none';

    // Only apply interactive hover/focus scale when NOT animating to avoid transform conflicts
    const shouldShowInteractiveScale = (isHovered || isFocused) && interactive && !shouldAnimate;

    return (
        <span
            className={cn(
                'inline-flex items-center justify-center',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded',
                interactive && 'cursor-pointer transition-transform duration-200',
                shouldAnimate && animationClass,
                entranceClass,
                shouldShowInteractiveScale && 'scale-110',
                className
            )}
            style={{
                animationDuration: `${animationDuration}ms`,
                animationDelay: `${animationDelay}ms`,
                ...(entrance && !hasEntered && { opacity: 0 }),
                color
            }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onAnimationEnd={handleAnimationEnd}
            role={interactive ? 'button' : 'img'}
            aria-label={ariaLabel || name}
            tabIndex={interactive || trigger === 'focus' ? 0 : undefined}
            {...props}
        >
            <IconComponent
                size={size}
                strokeWidth={strokeWidth}
                aria-hidden="true"
            />
        </span>
    );
};

export default MotionIcon;