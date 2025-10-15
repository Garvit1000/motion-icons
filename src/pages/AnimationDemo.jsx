import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Search, X } from 'lucide-react';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';

const AnimationDemo = () => {
  const [animationDuration, setAnimationDuration] = useState(1000);
  const [iconSize, setIconSize] = useState(48);
  const [selectedAnimation, setSelectedAnimation] = useState('pulse');
  const [selectedIcon, setSelectedIcon] = useState('Heart');
  const [selectedTrigger, setSelectedTrigger] = useState('always');
  const [iconSearchQuery, setIconSearchQuery] = useState('');
  const [iconDialogOpen, setIconDialogOpen] = useState(false);

  const loopingAnimations = [
    { id: 'pulse', name: 'Pulse', icon: 'Bell' },
    { id: 'spin', name: 'Spin', icon: 'Loader2' },
    { id: 'bounce', name: 'Bounce', icon: 'ArrowDown' },
    { id: 'ping', name: 'Ping', icon: 'Zap' }
  ];

  const customAnimations = [
    { id: 'wiggle', name: 'Wiggle', icon: 'Waves' },
    { id: 'flip', name: 'Flip', icon: 'RefreshCw' },
    { id: 'swing', name: 'Swing', icon: 'Wind' },
    { id: 'tada', name: 'Tada', icon: 'Sparkles' },
    { id: 'heartbeat', name: 'Heartbeat', icon: 'Heart' },
    { id: 'rubber', name: 'Rubber', icon: 'Disc' },
    { id: 'shake', name: 'Shake', icon: 'AlertTriangle' }
  ];

  const allAnimations = [...loopingAnimations, ...customAnimations];

  // Get all available Lucide icons
  const allIcons = useMemo(() => {
    return Object.keys(LucideIcons).filter(name => {
      const isIconComponent = typeof LucideIcons[name] === 'function' || typeof LucideIcons[name] === 'object';
      const isNotIconSuffix = !name.endsWith('Icon');
      return isIconComponent && isNotIconSuffix;
    });
  }, []);

  // Filter icons based on search query
  const filteredIcons = useMemo(() => {
    if (!iconSearchQuery) return allIcons.slice(0, 24); // Show first 24 icons by default
    return allIcons.filter(icon =>
      icon.toLowerCase().includes(iconSearchQuery.toLowerCase())
    );
  }, [allIcons, iconSearchQuery]);

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
                  key={`${selectedIcon}-${selectedAnimation}-${selectedTrigger}`}
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
                  <div className="space-y-3">
                    {/* Quick Icon Selection */}
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Quick Select</p>
                      <div className="flex flex-wrap gap-2">
                        {iconOptions.map(icon => (
                          <button
                            key={icon}
                            onClick={() => setSelectedIcon(icon)}
                            className={`w-10 h-10 rounded-lg border transition-all ${
                              selectedIcon === icon
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
                            }`}
                          >
                            <MotionIcon
                              name={icon}
                              size={16}
                              className={selectedIcon === icon ? 'text-white' : 'text-black'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Browse All Icons */}
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Current: {selectedIcon}</p>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between"
                        onClick={() => setIconDialogOpen(true)}
                      >
                        <span className="flex items-center gap-2">
                          <MotionIcon name={selectedIcon} size={16} className="text-black" />
                          Browse All Icons ({allIcons.length})
                        </span>
                        <Search className="h-4 w-4" />
                      </Button>
                      
                      <Dialog open={iconDialogOpen} onOpenChange={setIconDialogOpen}>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                          <DialogHeader>
                            <DialogTitle>Select an Icon</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {/* Search Input */}
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="Search icons..."
                                value={iconSearchQuery}
                                onChange={(e) => setIconSearchQuery(e.target.value)}
                                className="pl-10"
                              />
                              {iconSearchQuery && (
                                <button
                                  onClick={() => setIconSearchQuery('')}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              )}
                            </div>

                            {/* Icon Grid */}
                            <div className="max-h-96 overflow-y-auto">
                              <div className="grid grid-cols-8 gap-2">
                                {filteredIcons.map(icon => (
                                  <button
                                    key={icon}
                                    onClick={() => {
                                      setSelectedIcon(icon);
                                      setIconDialogOpen(false);
                                    }}
                                    className={`p-3 rounded-lg border transition-all hover:border-gray-400 ${
                                      selectedIcon === icon
                                        ? 'border-blue-500 bg-blue-500 text-white'
                                        : 'border-gray-300 bg-white text-black hover:bg-gray-50'
                                    }`}
                                    title={icon}
                                  >
                                    <MotionIcon
                                      name={icon}
                                      size={20}
                                      className={selectedIcon === icon ? 'text-white' : 'text-black'}
                                    />
                                  </button>
                                ))}
                              </div>
                              {filteredIcons.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                  No icons found matching "{iconSearchQuery}"
                                </div>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                {/* Animation Type */}
                <div>
                  <label className="text-sm font-semibold text-black mb-3 block">
                    Animation Type
                  </label>
                  
                  {/* Looping Animations */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Looping Animations</h4>
                    <div className="flex flex-wrap gap-2">
                      {loopingAnimations.map(anim => (
                        <Button
                          key={anim.id}
                          variant={selectedAnimation === anim.id ? 'default' : 'outline'}
                          size="sm"
                          className={selectedAnimation === anim.id 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }
                          onClick={() => setSelectedAnimation(anim.id)}
                        >
                          {anim.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Animations */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Custom Animations</h4>
                    <div className="flex flex-wrap gap-2">
                      {customAnimations.map(anim => (
                        <Button
                          key={anim.id}
                          variant={selectedAnimation === anim.id ? 'default' : 'outline'}
                          size="sm"
                          className={selectedAnimation === anim.id 
                            ? 'bg-purple-500 text-white hover:bg-purple-600' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }
                          onClick={() => setSelectedAnimation(anim.id)}
                        >
                          {anim.name}
                        </Button>
                      ))}
                    </div>
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
            
            {/* Looping Animations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Looping Animations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loopingAnimations.map(anim => (
                  <button
                    key={anim.id}
                    onClick={() => setSelectedAnimation(anim.id)}
                    className={`bg-white border rounded-xl p-4 hover:border-blue-400 transition-all text-left ${
                      selectedAnimation === anim.id ? 'border-blue-500 shadow-md bg-blue-50' : 'border-gray-200'
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
                    <p className="text-xs text-gray-500">Continuous loop</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Animations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Custom Animations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {customAnimations.map(anim => (
                  <button
                    key={anim.id}
                    onClick={() => setSelectedAnimation(anim.id)}
                    className={`bg-white border rounded-xl p-4 hover:border-purple-400 transition-all text-left ${
                      selectedAnimation === anim.id ? 'border-purple-500 shadow-md bg-purple-50' : 'border-gray-200'
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
                    <p className="text-xs text-gray-500">One-time effect</p>
                  </button>
                ))}
              </div>
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