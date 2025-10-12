import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { Button } from '../components/ui/button';

const EntranceAnimations = () => {
  const [resetKey, setResetKey] = useState(0);

  const entranceTypes = [
    { id: 'fadeIn', name: 'Fade In', icon: 'Star' },
    { id: 'fadeInUp', name: 'Fade In Up', icon: 'ArrowUp' },
    { id: 'fadeInDown', name: 'Fade In Down', icon: 'ArrowDown' },
    { id: 'fadeInLeft', name: 'Fade In Left', icon: 'ArrowLeft' },
    { id: 'fadeInRight', name: 'Fade In Right', icon: 'ArrowRight' },
    { id: 'scaleIn', name: 'Scale In', icon: 'Maximize2' },
    { id: 'slideInUp', name: 'Slide In Up', icon: 'ChevronsUp' },
    { id: 'slideInDown', name: 'Slide In Down', icon: 'ChevronsDown' },
    { id: 'rotateIn', name: 'Rotate In', icon: 'RotateCw' },
    { id: 'zoomIn', name: 'Zoom In', icon: 'ZoomIn' }
  ];

  const loopingAnimations = [
    { id: 'wiggle', name: 'Wiggle', icon: 'Waves' },
    { id: 'swing', name: 'Swing', icon: 'Wind' },
    { id: 'tada', name: 'Tada', icon: 'Sparkles' },
    { id: 'rubber', name: 'Rubber', icon: 'Disc' },
    { id: 'heartbeat', name: 'Heartbeat', icon: 'Heart' }
  ];

  const handleReplay = () => {
    setResetKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-black font-semibold text-lg">
            <MotionIcon name="Sparkles" size={20} className="text-black" />
            Motion Icons
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="text-sm text-gray-600 hover:text-black transition-colors">
              Gallery
            </Link>
            <Link to="/animations" className="text-sm text-gray-600 hover:text-black transition-colors">
              Playground
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">Entrance Animations</h1>
            <p className="text-lg text-gray-600 mb-6">Make your icons appear with style using entrance animations</p>
            <Button onClick={handleReplay} variant="outline" className="border-gray-300">
              <MotionIcon name="RotateCw" size={16} className="mr-2" />
              Replay All
            </Button>
          </div>

          {/* Entrance Animations Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-6">Entrance Effects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" key={resetKey}>
              {entranceTypes.map((entrance) => (
                <div key={entrance.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors">
                  <div className="w-16 h-16 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <MotionIcon
                      name={entrance.icon}
                      size={32}
                      entrance={entrance.id}
                      className="text-black"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-black text-center mb-3">{entrance.name}</h3>
                  <div className="bg-gray-900 rounded-lg p-2">
                    <code className="text-xs text-gray-100 font-mono">
                      entrance="{entrance.id}"
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Looping Animations */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-6">New Looping Animations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {loopingAnimations.map((anim) => (
                <div key={anim.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors">
                  <div className="w-16 h-16 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <MotionIcon
                      name={anim.icon}
                      size={32}
                      animation={anim.id}
                      className="text-black"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-black text-center mb-3">{anim.name}</h3>
                  <div className="bg-gray-900 rounded-lg p-2">
                    <code className="text-xs text-gray-100 font-mono">
                      animation="{anim.id}"
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Examples */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-6">Real-World Examples</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Animated Copy Button */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Animated Copy Button</h3>
                <p className="text-sm text-gray-600 mb-6">Click to see the icon transition and state change animation</p>
                <AnimatedCopyButton textToCopy="npm install motion-icons">
                  Copy Install Command
                </AnimatedCopyButton>
                <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`<AnimatedCopyButton 
  textToCopy="npm install motion-icons"
>
  Copy Install Command
</AnimatedCopyButton>`}
                  </pre>
                </div>
              </div>

              {/* Icon with Entrance + Loop */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Entrance + Loop Animation</h3>
                <p className="text-sm text-gray-600 mb-6">Combine entrance effects with looping animations</p>
                <div className="flex items-center justify-center h-24" key={resetKey + 1000}>
                  <MotionIcon
                    name="Heart"
                    size={48}
                    entrance="scaleIn"
                    animation="heartbeat"
                    animationDelay={500}
                    className="text-black"
                  />
                </div>
                <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`<MotionIcon
  name="Heart"
  entrance="scaleIn"
  animation="heartbeat"
  animationDelay={500}
/>`}
                  </pre>
                </div>
              </div>

              {/* Sequential Entrance */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Sequential Entrance</h3>
                <p className="text-sm text-gray-600 mb-6">Stagger delays for cascading effects</p>
                <div className="flex items-center justify-center gap-4 h-24" key={resetKey + 2000}>
                  {['Star', 'Heart', 'Sparkles', 'Zap'].map((icon, idx) => (
                    <MotionIcon
                      key={icon}
                      name={icon}
                      size={36}
                      entrance="fadeInUp"
                      animationDelay={idx * 150}
                      className="text-black"
                    />
                  ))}
                </div>
                <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`{icons.map((icon, idx) => (
  <MotionIcon
    name={icon}
    entrance="fadeInUp"
    animationDelay={idx * 150}
  />
))}`}
                  </pre>
                </div>
              </div>

              {/* Interactive Hover */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-black mb-4">Interactive Hover Animation</h3>
                <p className="text-sm text-gray-600 mb-6">Trigger animations on user interaction</p>
                <div className="flex items-center justify-center h-24">
                  <Button variant="outline" className="border-gray-300">
                    <MotionIcon
                      name="Sparkles"
                      size={20}
                      animation="tada"
                      trigger="hover"
                      interactive
                      className="mr-2 text-black"
                    />
                    Hover Me
                  </Button>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`<MotionIcon
  name="Sparkles"
  animation="tada"
  trigger="hover"
  interactive
/>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Guide */}
          <div className="bg-black text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Full API Reference</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Basic Props</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><code className="text-white">name</code> - Icon name from Lucide</li>
                  <li><code className="text-white">size</code> - Size in pixels (16-96)</li>
                  <li><code className="text-white">color</code> - Color value or "currentColor"</li>
                  <li><code className="text-white">weight</code> - "light" | "regular" | "bold"</li>
                  <li><code className="text-white">className</code> - Tailwind classes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Animation Props</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><code className="text-white">animation</code> - Looping animation type</li>
                  <li><code className="text-white">entrance</code> - One-time entrance effect</li>
                  <li><code className="text-white">trigger</code> - "always" | "hover" | "click" | "focus"</li>
                  <li><code className="text-white">animationDuration</code> - Duration in ms</li>
                  <li><code className="text-white">animationDelay</code> - Delay before start (ms)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntranceAnimations;
