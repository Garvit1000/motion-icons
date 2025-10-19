import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { Button } from '../components/ui/button';
import { RotateCw } from 'lucide-react';

const EntranceAnimations = () => {
    const [resetKeys, setResetKeys] = useState({});

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

    const handleReplay = (id) => {
        setResetKeys(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const handleReplayAll = () => {
        const newKeys = {};
        entranceTypes.forEach(entrance => {
            newKeys[entrance.id] = (resetKeys[entrance.id] || 0) + 1;
        });
        setResetKeys(prev => ({ ...prev, ...newKeys }));
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-24 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
                            Entrance Animations
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Make your icons appear with style using entrance animations
                        </p>
                        <Button
                            onClick={handleReplayAll}
                            variant="outline"
                            className="border-gray-300 hover:border-black"
                        >
                            <RotateCw className="w-4 h-4 mr-2" />
                            Replay All Entrances
                        </Button>
                    </div>

                    {/* Entrance Animations Grid */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-black mb-6">Entrance Effects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {entranceTypes.map((entrance) => (
                                <div
                                    key={entrance.id}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors"
                                >
                                    <div className="w-16 h-16 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                        <div key={resetKeys[entrance.id] || 0}>
                                            <MotionIcon
                                                name={entrance.icon}
                                                size={32}
                                                entrance={entrance.id}
                                                className="text-black"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-semibold text-black text-center mb-3">
                                        {entrance.name}
                                    </h3>
                                    <div className="bg-gray-900 rounded-lg p-2 mb-3">
                                        <code className="text-xs text-gray-100 font-mono block text-center">
                                            entrance="{entrance.id}"
                                        </code>
                                    </div>
                                    <Button
                                        onClick={() => handleReplay(entrance.id)}
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-gray-300 text-xs hover:border-black"
                                    >
                                        <RotateCw className="w-3 h-3 mr-1" />
                                        Replay
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Looping Animations */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-black mb-6">Looping Animations</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {loopingAnimations.map((anim) => (
                                <div
                                    key={anim.id}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors"
                                >
                                    <div className="w-16 h-16 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                        <MotionIcon
                                            name={anim.icon}
                                            size={32}
                                            animation={anim.id}
                                            className="text-black"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-black text-center mb-3">
                                        {anim.name}
                                    </h3>
                                    <div className="bg-gray-900 rounded-lg p-2">
                                        <code className="text-xs text-gray-100 font-mono block text-center">
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
                           

                            {/* Icon with Entrance + Loop */}
                            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                                <h3 className="text-lg font-semibold text-black mb-4">Entrance + Loop Animation</h3>
                                <p className="text-sm text-gray-600 mb-6">
                                    Combine entrance effects with looping animations
                                </p>
                                <div className="flex items-center justify-center h-24 mb-4">
                                    <div key={resetKeys['combo'] || 0}>
                                        <MotionIcon
                                            name="Heart"
                                            size={48}
                                            entrance="scaleIn"
                                            animation="heartbeat"
                                            animationDelay={200}
                                            className="text-black"
                                        />
                                    </div>
                                </div>
                                <Button
                                    onClick={() => handleReplay('combo')}
                                    variant="outline"
                                    size="sm"
                                    className="w-full mb-4 border-gray-300 hover:border-black"
                                >
                                    <RotateCw className="w-3 h-3 mr-1" />
                                    Replay
                                </Button>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`<MotionIcon
  name="Heart"
  entrance="scaleIn"
  animation="heartbeat"
  animationDelay={200}
/>`}
                  </pre>
                                </div>
                            </div>

                            {/* Sequential Entrance */}
                            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                                <h3 className="text-lg font-semibold text-black mb-4">Sequential Entrance</h3>
                                <p className="text-sm text-gray-600 mb-6">
                                    Stagger delays for cascading effects
                                </p>
                                <div className="flex items-center justify-center gap-4 h-24 mb-4">
                                    <div key={resetKeys['sequential'] || 0} className="flex gap-4">
                                        {['Star', 'Heart', 'Sparkles', 'Zap'].map((icon, idx) => (
                                            <MotionIcon
                                                key={icon}
                                                name={icon}
                                                size={36}
                                                entrance="fadeInUp"
                                                animationDelay={idx * 200}
                                                className="text-black"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <Button
                                    onClick={() => handleReplay('sequential')}
                                    variant="outline"
                                    size="sm"
                                    className="w-full mb-4 border-gray-300 hover:border-black"
                                >
                                    <RotateCw className="w-3 h-3 mr-1" />
                                    Replay
                                </Button>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="text-xs text-gray-800 font-mono overflow-x-auto">
{`{icons.map((icon, idx) => (
  <MotionIcon
    name={icon}
    entrance="fadeInUp"
    animationDelay={idx * 200}
  />
))}`}
                  </pre>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Animation Timing Guide */}
                    <div className="mb-20 bg-gray-50 border border-gray-200 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-black mb-6">Animation Timing Guide</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-sm font-semibold text-black mb-2">Fast (500ms)</h3>
                                <p className="text-xs text-gray-600 mb-4">Quick transitions, UI feedback</p>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <code className="text-xs text-gray-800 font-mono">
                                        animationDuration={'{500}'}
                                    </code>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-black mb-2">Normal (800ms)</h3>
                                <p className="text-xs text-gray-600 mb-4">Balanced, most use cases</p>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <code className="text-xs text-gray-800 font-mono">
                                        animationDuration={'{800}'}
                                    </code>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-black mb-2">Slow (1200ms)</h3>
                                <p className="text-xs text-gray-600 mb-4">Dramatic, attention-grabbing</p>
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                    <code className="text-xs text-gray-800 font-mono">
                                        animationDuration={'{1200}'}
                                    </code>
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
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">name</code> - Icon name from Lucide</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">size</code> - Size in pixels (16-96)</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">color</code> - Color value or "currentColor"</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">weight</code> - "light" | "regular" | "bold"</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">className</code> - Tailwind classes</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-300">Animation Props</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">animation</code> - Looping animation type</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">entrance</code> - One-time entrance effect</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">trigger</code> - "always" | "hover" | "click" | "focus"</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">animationDuration</code> - Duration in ms</li>
                                    <li><code className="text-white bg-gray-800 px-2 py-1 rounded">animationDelay</code> - Delay before start (ms)</li>
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