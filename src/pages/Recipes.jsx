import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import MotionIcon from '../components/MotionIcon';

const Recipes = () => {
    const [copiedCode, setCopiedCode] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    // States for interactive demos
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [hasNotifications, setHasNotifications] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [copiedText, setCopiedText] = useState(false);
    const [dashboardKey, setDashboardKey] = useState(0);
    const [activeTab, setActiveTab] = useState('home');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Replay keys for entrance animations
    const [replayKeys, setReplayKeys] = useState({});
    
    const handleReplay = (id) => {
        setReplayKeys(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const copyCode = (code, id) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const CodeBlock = ({ code, id }) => (
        <div className="relative group w-full">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                    onClick={() => copyCode(code, id)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/90 hover:bg-black rounded-md text-xs text-white transition-colors"
                >
                    {copiedCode === id ? <><Check className="w-3.5 h-3.5" />Copied</> : <><Copy className="w-3.5 h-3.5" />Copy</>}
                </button>
            </div>
            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 overflow-x-auto w-full">
                <code className="text-xs sm:text-sm text-gray-900 font-mono break-all whitespace-pre-wrap">{code}</code>
            </pre>
        </div>
    );

    const recipes = [
        {
            category: 'User Interactions',
            items: [
                {
                    id: 'hover-interactions',
                    title: 'Hover Interaction Effects',
                    problem: 'Need CSS keyframes or animation libraries for hover states',
                    solution: 'Single prop handles hover animations',
                    preview: (
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                            <button onClick={() => setIsLiked(!isLiked)} className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <MotionIcon name="Heart" size={18} animation="pulse" trigger="hover" className={isLiked ? 'fill-black' : ''} />
                            </button>
                            <button onClick={() => setIsBookmarked(!isBookmarked)} className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <MotionIcon name="Bookmark" size={18} animation="pulse" trigger="hover" className={isBookmarked ? 'fill-black' : ''} />
                            </button>
                            <button className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <MotionIcon name="Share2" size={18} animation="pulse" trigger="hover" />
                            </button>
                            <button className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <MotionIcon name="ShoppingCart" size={18} animation="pulse" trigger="hover" />
                            </button>
                        </div>
                    ),
                    code: `<MotionIcon name="Heart" animation="pulse" trigger="hover" />`
                },
                {
                    id: 'interactive-reactions',
                    title: 'Interactive Reactions',
                    problem: 'Social feedback needs visual confirmation',
                    solution: 'Heartbeat animation on interaction',
                    preview: (
                        <button onClick={() => setIsLiked(!isLiked)} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm sm:text-base">
                            <MotionIcon name="Heart" size={18} animation={isLiked ? "heartbeat" : "none"} className={isLiked ? 'fill-black' : ''} />
                            <span className={isLiked ? "text-black font-medium" : "text-gray-600"}>Like</span>
                        </button>
                    ),
                    code: `<MotionIcon name="Heart" animation={isLiked ? "heartbeat" : "none"} />`
                },
                {
                    id: 'bookmark-toggle',
                    title: 'Bookmark Toggle',
                    problem: 'Need animated feedback on save',
                    solution: 'Pop animation confirms action',
                    preview: (
                        <button onClick={() => setIsBookmarked(!isBookmarked)} className="p-2 sm:p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <MotionIcon name="Bookmark" size={18} animation={isBookmarked ? "tada" : "none"} className={isBookmarked ? 'fill-black' : ''} />
                        </button>
                    ),
                    code: `<MotionIcon name="Bookmark" animation={saved ? "tada" : "none"} />`
                },
            ]
        },
        {
            category: 'Loading & Status',
            items: [
                {
                    id: 'loading-states',
                    title: 'Loading States',
                    problem: 'Manual spinner implementation needed',
                    solution: 'Built-in spin animation',
                    preview: (
                        <button onClick={() => { setIsLoading(true); setTimeout(() => setIsLoading(false), 2000); }} disabled={isLoading} className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50 hover:bg-gray-800 transition-colors text-sm sm:text-base">
                            {isLoading && <MotionIcon name="Loader2" size={16} animation="spin" color="white" />}
                            <span>{isLoading ? 'Loading...' : 'Fetch Data'}</span>
                        </button>
                    ),
                    code: `<MotionIcon name="Loader2" animation="spin" />`
                },
                {
                    id: 'status-indicators',
                    title: 'Status Indicators',
                    problem: 'Connection states need visual feedback',
                    solution: 'Animated status icons',
                    preview: (
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                            <button onClick={() => setIsOnline(!isOnline)} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <MotionIcon name="Wifi" size={14} animation={isOnline ? "ping" : "none"} className={isOnline ? 'text-green-600' : 'text-red-500'} />
                                <span className="text-xs sm:text-sm">{isOnline ? "Online" : "Offline"}</span>
                            </button>
                            <button onClick={() => { setIsSyncing(true); setTimeout(() => setIsSyncing(false), 2000); }} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <MotionIcon name="RefreshCw" size={14} animation={isSyncing ? "spin" : "none"} />
                                <span className="text-xs sm:text-sm">{isSyncing ? "Syncing" : "Synced"}</span>
                            </button>
                        </div>
                    ),
                    code: `<MotionIcon name="Wifi" animation={online ? "ping" : "none"} />`
                },
                {
                    id: 'upload-progress',
                    title: 'Upload Progress',
                    problem: 'Users need upload feedback',
                    solution: 'Pulse animation during upload',
                    preview: (
                        <button onClick={() => { setIsUploading(true); setTimeout(() => setIsUploading(false), 3000); }} className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <MotionIcon name="Upload" size={18} animation={isUploading ? "pulse" : "none"} />
                            <span className="text-xs sm:text-sm font-medium">{isUploading ? "Uploading..." : "Upload File"}</span>
                        </button>
                    ),
                    code: `<MotionIcon name="Upload" animation={uploading ? "pulse" : "none"} />`
                },
            ]
        },
        {
            category: 'Notifications & Alerts',
            items: [
                {
                    id: 'notification-attention',
                    title: 'Notification Badge',
                    problem: 'Unread notifications need attention',
                    solution: 'Wiggle animation draws focus',
                    preview: (
                        <button onClick={() => setHasNotifications(!hasNotifications)} className="relative p-2.5 sm:p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <MotionIcon name="Bell" size={18} animation={hasNotifications ? "wiggle" : "none"} />
                            {hasNotifications && <span className="absolute -top-1 -right-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full border-2 border-white" />}
                        </button>
                    ),
                    code: `<MotionIcon name="Bell" animation={hasUnread ? "wiggle" : "none"} />`
                },
                {
                    id: 'error-indicators',
                    title: 'Error Indicators',
                    problem: 'Form errors need visual emphasis',
                    solution: 'Shake animation for errors',
                    preview: (
                        <div className="space-y-3 w-full">
                            <button onClick={() => { setShowError(true); setTimeout(() => setShowError(false), 2000); }} className="px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                                Trigger Error
                            </button>
                            {showError && (
                                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-red-50 border border-red-200 rounded-lg">
                                    <MotionIcon name="AlertCircle" size={18} animation="shake" className="text-red-500 shrink-0" />
                                    <span className="text-red-800 text-xs sm:text-sm font-medium">Something went wrong!</span>
                                </div>
                            )}
                        </div>
                    ),
                    code: `<MotionIcon name="AlertCircle" animation="shake" />`
                },
                {
                    id: 'success-confirmation',
                    title: 'Success Confirmation',
                    problem: 'Success states need celebration',
                    solution: 'Pop entrance for success',
                    hasEntrance: true,
                    preview: (
                        <div className="space-y-3 w-full">
                            <div className="flex gap-2 sm:gap-3 flex-wrap items-center justify-center">
                                <button onClick={() => { setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); }} className="px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                                    Save Changes
                                </button>
                                {showSuccess && (
                                    <div key={replayKeys['success-confirmation'] || 0} className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-green-50 border border-green-200 rounded-lg">
                                        <MotionIcon name="CheckCircle" size={18} entrance="zoomIn" animation="tada" animationDuration={600} className="text-green-600 shrink-0" />
                                        <span className="text-green-800 text-xs sm:text-sm font-medium">Saved!</span>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => handleReplay('success-confirmation')}
                                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
                            >
                                <RotateCcw className="w-3 h-3" />
                                Replay Entrance
                            </button>
                        </div>
                    ),
                    code: `<MotionIcon name="CheckCircle" entrance="zoomIn" animation="tada" animationDuration={600} />`
                },
            ]
        },
        {
            category: 'Navigation & UI',
            items: [
                {
                    id: 'sidebar-navigation',
                    title: 'Navigation Active State',
                    problem: 'Active nav items need emphasis',
                    solution: 'Pulse animation on active state',
                    preview: (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                            {['Home', 'Users', 'Settings'].map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab.toLowerCase())} className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors ${activeTab === tab.toLowerCase() ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                                    {tab === 'Home' && <MotionIcon name="Home" size={14} animation={activeTab === 'home' ? "pulse" : "none"} />}
                                    {tab === 'Users' && <MotionIcon name="Users" size={14} animation={activeTab === 'users' ? "pulse" : "none"} />}
                                    {tab === 'Settings' && <MotionIcon name="Settings" size={14} animation={activeTab === 'settings' ? "pulse" : "none"} />}
                                    <span className="text-xs sm:text-sm font-medium">{tab}</span>
                                </button>
                            ))}
                        </div>
                    ),
                    code: `<MotionIcon name="Home" animation={isActive ? "pulse" : "none"} />`
                },
                {
                    id: 'collapsible-sections',
                    title: 'Collapsible Sections',
                    problem: 'Expand/collapse needs clear indication',
                    solution: 'Flip animation for chevron',
                    preview: (
                        <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg w-full hover:bg-gray-50 transition-colors">
                            <MotionIcon name="ChevronDown" size={18} animation={isExpanded ? "flip" : "none"} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            <span className="text-xs sm:text-sm font-medium">{isExpanded ? "Collapse" : "Expand"} Section</span>
                        </button>
                    ),
                    code: `<MotionIcon name="ChevronDown" animation={expanded ? "flip" : "none"} />`
                },
            ]
        },
        {
            category: 'Marketing & CTA',
            items: [
                {
                    id: 'cta-buttons',
                    title: 'Call-to-Action Buttons',
                    problem: 'CTAs need attention-grabbing animations',
                    solution: 'Bounce animation on arrows',
                    preview: (
                        <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                            <span>Get Started</span>
                            <MotionIcon name="ArrowRight" size={16} animation="bounce" trigger="always" color="white" />
                        </button>
                    ),
                    code: `<MotionIcon name="ArrowRight" animation="bounce" trigger="always" />`
                },
                {
                    id: 'feature-highlights',
                    title: 'Feature Highlights',
                    problem: 'Feature icons need visual interest',
                    solution: 'Entrance animations on load',
                    hasEntrance: true,
                    preview: (
                        <div className="space-y-3 w-full">
                            <div key={replayKeys['feature-highlights'] || 0} className="grid grid-cols-3 gap-2 sm:gap-3">
                                {[{ icon: 'Zap', label: 'Fast' }, { icon: 'Shield', label: 'Secure' }, { icon: 'Sparkles', label: 'Magic' }].map((feature, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        <MotionIcon name={feature.icon} size={20} entrance="fadeInUp" animationDelay={i * 200} animationDuration={700} animation="pulse" trigger="hover" />
                                        <span className="text-[10px] sm:text-xs font-medium text-center">{feature.label}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => handleReplay('feature-highlights')}
                                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
                            >
                                <RotateCcw className="w-3 h-3" />
                                Replay Entrance
                            </button>
                        </div>
                    ),
                    code: `<MotionIcon name="Zap" entrance="fadeInUp" animationDelay={i * 200} animation="pulse" trigger="hover" />`
                },
                {
                    id: 'empty-states',
                    title: 'Empty States',
                    problem: 'Empty states feel static',
                    solution: 'Subtle bounce draws attention',
                    preview: (
                        <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 border border-gray-200 rounded-lg">
                            <MotionIcon name="Inbox" size={28} animation="bounce" trigger="always" className="text-gray-400" />
                            <p className="text-xs sm:text-sm text-gray-600 text-center">No messages yet</p>
                        </div>
                    ),
                    code: `<MotionIcon name="Inbox" animation="bounce" trigger="always" />`
                },
            ]
        },
    ];

    const categories = ['all', ...new Set(recipes.map(r => r.category))];
    const filteredRecipes = activeCategory === 'all' ? recipes : recipes.filter(r => r.category === activeCategory);

    return (
        <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
            {/* Header */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                    <div className="max-w-3xl mx-auto sm:mx-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 tracking-tight">
                            Recipes
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                            Production-ready animation patterns that solve real problems. Copy, customize, ship.
                        </p>
                    </div>
                </div>
            </div>

            {/* Category Pills */}
            <div className="sticky top-16 z-10 bg-white/80 backdrop-blur-lg border-b border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto py-3 sm:py-4">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                                    activeCategory === cat
                                        ? 'bg-black text-white'
                                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                                }`}
                            >
                                {cat === 'all' ? 'All' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recipes Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="space-y-12 sm:space-y-16 md:space-y-24">
                    {filteredRecipes.map((category, catIndex) => (
                        <section key={catIndex}>
                            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight whitespace-nowrap">{category.category}</h2>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                            </div>
                            
                            <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
                                {category.items.map((recipe) => (
                                    <article key={recipe.id} className="group w-full min-w-0">
                                        <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-black transition-colors w-full">
                                            {/* Header */}
                                            <div className="p-4 sm:p-6 space-y-3">
                                                <h3 className="text-base sm:text-lg font-semibold text-black">
                                                    {recipe.title}
                                                </h3>
                                                <div className="space-y-1.5">
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 shrink-0">Problem</span>
                                                        <p className="text-xs sm:text-sm text-gray-600">{recipe.problem}</p>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-0.5 shrink-0">Solution</span>
                                                        <p className="text-xs sm:text-sm text-black font-medium">{recipe.solution}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Preview */}
                                            <div className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 bg-gray-50 border-y border-gray-200 flex items-center justify-center min-h-[100px] sm:min-h-[120px] overflow-x-hidden">
                                                <div className="w-full max-w-full">
                                                    {recipe.preview}
                                                </div>
                                            </div>

                                            {/* Code */}
                                            <div className="p-4 sm:p-6 w-full overflow-hidden">
                                                <CodeBlock code={recipe.code} id={recipe.id} />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-12 sm:mt-16 md:mt-24 border-t border-gray-200 pt-12 sm:pt-16 md:pt-24">
                    <div className="text-center max-w-2xl mx-auto space-y-4 sm:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight px-4">
                            Ready to ship faster?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
                            Get started with Motion Icons and build delightful interfaces without the complexity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
                            <a href="https://none-9e5c6865.mintlify.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                View Documentation
                            </a>
                            <a href="/animations" className="px-6 py-3 border border-gray-200 text-black rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Try Playground
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
