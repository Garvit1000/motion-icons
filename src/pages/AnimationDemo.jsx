import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';

const AnimationDemo = () => {
  const [animationDuration, setAnimationDuration] = useState(1000);
  const [iconSize, setIconSize] = useState(48);
  const [selectedAnimation, setSelectedAnimation] = useState('pulse');
  const [selectedIcon, setSelectedIcon] = useState('Heart');
  const [selectedTrigger, setSelectedTrigger] = useState('always');

  const animations = [
    { id: 'pulse', name: 'Pulse', icon: 'Bell' },
    { id: 'spin', name: 'Spin', icon: 'Loader2' },
    { id: 'bounce', name: 'Bounce', icon: 'ArrowDown' },
    { id: 'wiggle', name: 'Wiggle', icon: 'Waves' },
    { id: 'flip', name: 'Flip', icon: 'RefreshCw' },
    { id: 'swing', name: 'Swing', icon: 'Wind' },
    { id: 'tada', name: 'Tada', icon: 'Sparkles' },
    { id: 'heartbeat', name: 'Heartbeat', icon: 'Heart' },
    { id: 'rubber', name: 'Rubber', icon: 'Disc' },
    { id: 'shake', name: 'Shake', icon: 'AlertTriangle' }
  ];

  const iconOptions = [
    'Heart', 'Star', 'Sparkles', 'Zap', 'Bell', 'Award',
    'Flame', 'Sun', 'Moon', 'Cloud', 'Leaf', 'Flower'
  ];

  const triggerModes = [
    { id: 'always', label: 'Always' },
    { id: 'hover', label: 'Hover' },
    { id: 'click', label: 'Click' },
    { id: 'focus', label: 'Focus' }
  ];

  const generateCode = () => {
    return `<MotionIcon
  name="${selectedIcon}"
  size={${iconSize}}
  animation="${selectedAnimation}"
  animationDuration={${animationDuration}}
  trigger="${selectedTrigger}"
  className="text-black"
/>`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-black font-semibold text-lg">
            <MotionIcon name="Sparkles" size={20} className="text-black" animation="pulse" />
            Motion Icons
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="text-sm text-gray-600 hover:text-black transition-colors">
              Gallery
            </Link>
            <Link to="/entrance" className="text-sm text-gray-600 hover:text-black transition-colors">
              Animations
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">Interactive Playground</h1>
            <p className="text-lg text-gray-600">Customize and preview animations in real-time</p>
          </div>

          {/* Interactive Playground */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Preview */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 flex items-center justify-center min-h-[400px]">
                <MotionIcon
                  name={selectedIcon}
                  size={iconSize}
                  animation={selectedAnimation}
                  animationDuration={animationDuration}
                  trigger={selectedTrigger}
                  interactive={selectedTrigger !== 'always'}
                  className="text-black"
                />
              </div>

              {/* Controls */}
              <div className="space-y-8">
                {/* Icon Selection */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Icon
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {iconOptions.map(icon => (
                      <button
                        key={icon}
                        onClick={() => setSelectedIcon(icon)}
                        className={`w-12 h-12 rounded-lg border transition-all ${
                          selectedIcon === icon
                            ? 'border-black bg-black'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                      >
                        <MotionIcon
                          name={icon}
                          size={20}
                          className={selectedIcon === icon ? 'text-white' : 'text-black'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animation Type */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Animation Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {animations.map(anim => (
                      <Button
                        key={anim.id}
                        variant={selectedAnimation === anim.id ? 'default' : 'outline'}
                        size="sm"
                        className={selectedAnimation === anim.id 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }
                        onClick={() => setSelectedAnimation(anim.id)}
                      >
                        {anim.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Trigger Mode */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Trigger Mode
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {triggerModes.map(trigger => (
                      <Button
                        key={trigger.id}
                        variant={selectedTrigger === trigger.id ? 'default' : 'outline'}
                        size="sm"
                        className={selectedTrigger === trigger.id 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }
                        onClick={() => setSelectedTrigger(trigger.id)}
                      >
                        {trigger.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Icon Size */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Icon Size: <span className="font-mono text-gray-600">{iconSize}px</span>
                  </label>
                  <Slider
                    value={[iconSize]}
                    onValueChange={([value]) => setIconSize(value)}
                    min={24}
                    max={96}
                    step={8}
                    className="w-full"
                  />
                </div>

                {/* Animation Duration */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Duration: <span className="font-mono text-gray-600">{animationDuration}ms</span>
                  </label>
                  <Slider
                    value={[animationDuration]}
                    onValueChange={([value]) => setAnimationDuration(value)}
                    min={500}
                    max={3000}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Code Output */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-black">
                      Generated Code
                    </label>
                    <AnimatedCopyButton textToCopy={generateCode()} />
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                    <pre className="text-xs text-gray-100 font-mono overflow-x-auto">
                      <code>{generateCode()}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-6">All Animations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {animations.map(anim => (
                <button
                  key={anim.id}
                  onClick={() => setSelectedAnimation(anim.id)}
                  className={`bg-white border rounded-xl p-4 hover:border-gray-400 transition-all text-left ${
                    selectedAnimation === anim.id ? 'border-black shadow-md' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
                      <MotionIcon
                        name={anim.icon}
                        size={20}
                        animation={anim.id}
                        className="text-black"
                      />
                    </div>
                    <span className="text-sm font-semibold text-black">{anim.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Usage Examples */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-6">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Loading State */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex justify-center">
                  <MotionIcon name="Loader2" size={32} animation="spin" className="text-black" />
                </div>
                <h3 className="text-sm font-semibold text-black mb-2 text-center">Loading</h3>
                <p className="text-xs text-gray-600 text-center">Spinner animation</p>
              </div>

              {/* Notification */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex justify-center">
                  <MotionIcon name="Bell" size={32} animation="wiggle" className="text-black" />
                </div>
                <h3 className="text-sm font-semibold text-black mb-2 text-center">Notification</h3>
                <p className="text-xs text-gray-600 text-center">Attention grabber</p>
              </div>

              {/* Success */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex justify-center">
                  <MotionIcon name="Sparkles" size={32} animation="tada" className="text-black" />
                </div>
                <h3 className="text-sm font-semibold text-black mb-2 text-center">Success</h3>
                <p className="text-xs text-gray-600 text-center">Celebration effect</p>
              </div>

              {/* Interactive */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="mb-4 flex justify-center">
                  <MotionIcon 
                    name="Heart" 
                    size={32} 
                    animation="heartbeat" 
                    trigger="hover" 
                    interactive 
                    className="text-black"
                  />
                </div>
                <h3 className="text-sm font-semibold text-black mb-2 text-center">Interactive</h3>
                <p className="text-xs text-gray-600 text-center">Hover to animate</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-black text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Performance</h3>
                <p className="text-sm text-gray-400">All animations use CSS transforms for 60fps performance. Avoid animating too many icons simultaneously for best results.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Accessibility</h3>
                <p className="text-sm text-gray-400">Animations respect <code className="text-white">prefers-reduced-motion</code> settings. Users with motion sensitivity won't see animations.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Customization</h3>
                <p className="text-sm text-gray-400">Use <code className="text-white">className</code> prop for Tailwind styling. Supports all Tailwind color utilities with <code className="text-white">currentColor</code>.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Triggers</h3>
                <p className="text-sm text-gray-400">Combine <code className="text-white">trigger="hover"</code> with <code className="text-white">interactive</code> prop for better UX on interactive elements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemo;