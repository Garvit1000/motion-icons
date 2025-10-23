import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import MotionIcon from '../components/MotionIcon';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/hero-section';

import Features from "@/components/Features";
import { CTA } from "@/components/CallToAction";
import { motion } from 'framer-motion';
import { HandWrittenTitle } from '../components/ui/HandWrittenTitle';
import logo from '../assets/logo.png';
import CodeComparisonSection from '../components/CodeCompareSection';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
} from '@/components/kibo-ui/code-block';
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
      <HeroSection />

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
      <CodeComparisonSection />

      {/* Features Grid */}
      <Features />

      {/* Framework Support Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Works Everywhere
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supports Next.js, React, TypeScript, and more. Use with any framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Next.js Example */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Next.js</h3>
                      <p className="text-xs text-gray-500">App Router & Pages</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Supported</span>
                </div>
                <div className="flex items-center justify-center h-24">
                  <MotionIcon
                    name="Rocket"
                    size={48}
                    animation="bounce"
                    className="text-black"
                  />
                </div>
              </div>
              <div className="p-4">
                <CodeBlock
                  defaultValue="tsx"
                  data={[
                    {
                      language: 'tsx',
                      filename: 'page.tsx',
                      code: `'use client';
import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

export default function Page() {
  return (
    <MotionIcon 
      name="Rocket" 
      animation="bounce" 
    />
  );
}`,
                    },
                  ]}
                  className="text-xs"
                >
                  <CodeBlockHeader>
                    <CodeBlockCopyButton />
                  </CodeBlockHeader>
                  <CodeBlockBody>
                    {(item) => (
                      <CodeBlockItem
                        key={item.language}
                        value={item.language}
                        lineNumbers={false}
                        className="[&_code]:break-words [&_pre]:whitespace-pre-wrap"
                      >
                        <CodeBlockContent language={item.language}>
                          {item.code}
                        </CodeBlockContent>
                      </CodeBlockItem>
                    )}
                  </CodeBlockBody>
                </CodeBlock>
              </div>
            </div>

            {/* React + TypeScript Example */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">React + TypeScript</h3>
                      <p className="text-xs text-gray-500">Full type safety</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Supported</span>
                </div>
                <div className="flex items-center justify-center h-24">
                  <MotionIcon
                    name="Heart"
                    size={48}
                    animation="heartbeat"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-4">
                <CodeBlock
                  defaultValue="tsx"
                  data={[
                    {
                      language: 'tsx',
                      filename: 'App.tsx',
                      code: `import { MotionIcon } from 'motion-icons-react';
import 'motion-icons-react/style.css';

export const App = () => {
  return (
    <MotionIcon 
      name="Heart" 
      animation="heartbeat" 
    />
  );
};`,
                    },
                  ]}
                  className="text-xs"
                >
                  <CodeBlockHeader>
                    <CodeBlockCopyButton />
                  </CodeBlockHeader>
                  <CodeBlockBody>
                    {(item) => (
                      <CodeBlockItem
                        key={item.language}
                        value={item.language}
                        lineNumbers={false}
                        className="[&_code]:break-words [&_pre]:whitespace-pre-wrap"
                      >
                        <CodeBlockContent language={item.language}>
                          {item.code}
                        </CodeBlockContent>
                      </CodeBlockItem>
                    )}
                  </CodeBlockBody>
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Additional Framework Badges */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600 mb-6">Works with any React-based framework</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: 'Vite', color: 'bg-purple-100 text-purple-700' },
                { name: 'Create React App', color: 'bg-cyan-100 text-cyan-700' },
                { name: 'Astro', color: 'bg-orange-100 text-orange-700' },
              ].map((framework) => (
                <span
                  key={framework.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${framework.color}`}
                >
                  {framework.name}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Any framework that supports React components will work
            </p>
          </div>
        </div>
      </section>

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
      <CTA />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Logo Section */}
            <div className="flex items-center gap-2 text-black font-semibold text-base sm:text-lg">
              <img src={logo} alt="Motion Icons Logo" className="h-7 w-7 sm:h-8 sm:w-8" />
              Motion Icons
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm text-gray-600">
              <Link to="/legal" className="hover:text-black transition-colors">Legal</Link>
              <Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link>
              <Link to="/animations" className="hover:text-black transition-colors">Animations</Link>
              <a href="https://none-9e5c6865.mintlify.app/" className="hover:text-black transition-colors">Documentation</a>
              <a href="https://github.com/Garvit1000/npm-motion-icons" className="hover:text-black transition-colors">GitHub</a>
            </nav>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-500">
              © 2025 Motion Icons. Built with React.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;