import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import MotionIcon from '../components/MotionIcon';
import { TextEffect } from '../components/ui/text-effect';
import { AnimatedGroup } from '../components/ui/animated-group';
import { motion } from 'motion/react';
import { Code } from '../components/CodeCopy';
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

const HeroSection = () => {
    return (
        <>
            <main className="overflow-hidden">
                {/* Background Elements */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
                >
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                {/* Main Section */}
                <section>
                    <div className="relative pt-24 md:pt-36">
                        {/* Background gradient overlay */}
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                {/* Top Badge */}
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 mb-8">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-xs font-medium text-gray-700">3500+ Animated Icons</span>
                                    </div>
                                </AnimatedGroup>

                                {/* Main Heading */}
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-gray-800 mb-6 tracking-tight leading-none text-center">
      <span className="relative inline-block">
        <span className="bg-blue-200 px-2 py-1 rounded-md -rotate-1 inline-block">Beautiful</span>
      </span>
                                    {" "}
                                    <motion.span
                                        variants={transitionVariants.item}
                                        initial="hidden"
                                        animate="visible"
                                        className="inline-block"
                                    >
                                        Icons.
                                    </motion.span>
                                    <br />
                                    <motion.span
                                        variants={transitionVariants.item}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.2 }}
                                        className="inline-block"
                                    >
                                        Built for
                                    </motion.span>
                                    {" "}
                                    <span className="relative inline-block">
        <span className="bg-amber-200 px-2 py-1 rounded-md -rotate-1 inline-block">Motion.</span>
      </span>
                                </h1>

                                {/* Subheading */}
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                                >
                                    A lightweight React icon library with built-in animations. Customizable, accessible, and optimized for production.
                                </TextEffect>

                                <Code showCopyButton copyText="npm install @motion-icons/react lucide-react" className="mb-12">
                                    npm install @motion-icons/react lucide-react
                                </Code>

                                {/* CTA Buttons */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="flex items-center justify-center gap-4 mb-20"
                                >
                                    <Link to="/gallery">
                                        <Button size="lg" className="bg-gray-700 hover:bg-gray-800 text-white font-medium h-12 px-8 transition-transform hover:scale-105">
                                            Browse Icons
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/playground">
                                        <Button size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-50 h-12 px-8 transition-transform hover:scale-105">
                                            Playground
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HeroSection;