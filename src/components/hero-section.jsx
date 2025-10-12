import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import MotionIcon from '../components/MotionIcon';
import { TextEffect } from '../components/ui/text-effect';
import { AnimatedGroup } from '../components/ui/animated-group';
import { motion } from 'motion/react';

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
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-50 h-12 px-8 transition-transform hover:scale-105">
                                            <MotionIcon name="Github" size={18} className="text-black mr-2" />
                                            GitHub
                                        </Button>
                                    </a>
                                </AnimatedGroup>
                            </div>
                        </div>

                        {/* Hero Image Section */}
                        <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <img
                                    className="aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="/mail2.png"
                                    alt="app screen"
                                />
                                <img
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src="/mail2-light.png"
                                    alt="app screen"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customers Section */}
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                to="/"
                                className="block text-sm duration-150 hover:opacity-75"
                            >
                                <span>Meet Our Customers</span>
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HeroSection;