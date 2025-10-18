import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { ArrowRight, Code, Github } from 'lucide-react';
import HeroSection from '../components/hero-section';

import Features from "@/components/Features";
import {CTA} from "@/components/CallToAction";
import { motion } from 'framer-motion';
import {HandWrittenTitle} from '../components/ui/HandWrittenTitle';
import logo from '../assets/logo.jpg';
import CodeComparisonSection from '../components/CodeCompareSection';
const Home = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3, duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
        }),
    };

  const animationExamples = [
    { name: 'Heart', animation: 'pulse', label: 'Pulse', delay: 0 },
    { name: 'Loader2', animation: 'spin', label: 'Spin', delay: 100 },
    { name: 'ArrowDown', animation: 'bounce', label: 'Bounce', delay: 200 },
    { name: 'Bell', animation: 'wiggle', label: 'Wiggle', delay: 300 },
  ];

  const codeExample = `import { MotionIcon } from 'motion-icons';

function App() {
  return (
    <MotionIcon
      name="Heart"
      size={32}
      animation="pulse"
      entrance="fadeIn"
      trigger="hover"
      className="text-red-500"
    />
  );
}`;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
        <HeroSection/>

          {/* Animation Preview */}
        <h2 className="flex flex-col items-center text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Where Simplicity Meets Motion</h2>
          <div className="flex items-center justify-center gap-6 mb-12">

            {animationExamples.map((item, idx) => (
              <div key={item.name} className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all flex items-center justify-center group-hover:border-gray-400 group-hover:shadow-md">
                  <MotionIcon
                    name={item.name}
                    size={32}
                    animation={item.animation}
                    entrance="scaleIn"
                    animationDelay={item.delay}
                    className="text-black"
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

      {/* Code Example */}
      <CodeComparisonSection/>

      {/* Features Grid */}
        <Features/>

      {/* Stats Section */}
        <section className="py-20 px-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <HandWrittenTitle
                    title="Our Design Stats"
                    subtitle="Powerful, Lightweight & Animated"
                />

                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    {[
                        { value: "3500+", label: "Available Icons" },
                        { value: "15+", label: "Animation Presets" },
                        { value: "<2KB", label: "Per Icon Gzipped" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <motion.div className="text-5xl font-bold text-black mb-2">
                                {item.value}
                            </motion.div>
                            <motion.div className="text-sm text-gray-600">
                                {item.label}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* CTA Section */}
        <CTA/>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-black font-semibold">
             <img src={logo} alt="Motion Icons Logo" className="h-8 w-8"/>
              Motion Icons
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
                <Link to="/legal" className="hover:text-black transition-colors">Legal</Link>
              <Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link>
              <Link to="/animations" className="hover:text-black transition-colors">Animations</Link>
              <a href="#" className="hover:text-black transition-colors">Documentation</a>
              <a href="https://github.com/Garvit1000/npm-motion-icons" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 Motion Icons. Built with React.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home ;