"use client"

import { useState, useMemo } from "react"
import * as LucideIcons from "lucide-react"
import { Search, Copy, Check, X, Menu } from "lucide-react"
import MotionIcon from "../components/MotionIcon"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"


/**
 * AnimationDemo Component
 *
 * An interactive icon playground with a collapsible sidebar for parameter controls.
 * Displays icon preview and generated code below the play area.
 */
const AnimationDemo = ({
                           iconColor = "text-black",
                           defaultAnimation = "pulse",
                           defaultIcon = "Heart",
                           showSidebar = true,
                       }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    // State management for all animation controls
    const [animationDuration, setAnimationDuration] = useState(1000)
    const [iconSize, setIconSize] = useState(48)
    const [selectedAnimation, setSelectedAnimation] = useState(defaultAnimation)
    const [selectedIcon, setSelectedIcon] = useState(defaultIcon)
    const [selectedTrigger, setSelectedTrigger] = useState("always")
    const [iconSearchQuery, setIconSearchQuery] = useState("")
    const [selectedEntrance, setSelectedEntrance] = useState("none")
    const [animationDelay, setAnimationDelay] = useState(0)
    const [selectedWeight, setSelectedWeight] = useState("regular")
    const [selectedColorOption, setSelectedColorOption] = useState(iconColor)
    const [isInteractive, setIsInteractive] = useState(false)
    const [copiedCode, setCopiedCode] = useState(false)

    // Animation definitions
    const loopingAnimations = [
        { id: "pulse", name: "Pulse", icon: "Bell" },
        { id: "spin", name: "Spin", icon: "Loader2" },
        { id: "bounce", name: "Bounce", icon: "ArrowDown" },
        { id: "ping", name: "Ping", icon: "Zap" },
    ]

    const customAnimations = [
        { id: "wiggle", name: "Wiggle", icon: "Waves" },
        { id: "flip", name: "Flip", icon: "RefreshCw" },
        { id: "swing", name: "Swing", icon: "Wind" },
        { id: "tada", name: "Tada", icon: "Sparkles" },
        { id: "heartbeat", name: "Heartbeat", icon: "Heart" },
        { id: "rubber", name: "Rubber", icon: "Disc" },
        { id: "shake", name: "Shake", icon: "AlertTriangle" },
    ]

    const allAnimations = [...loopingAnimations, ...customAnimations]

    // Get all available Lucide icons
    const allIcons = useMemo(() => {
        return Object.keys(LucideIcons).filter((name) => {
            const isIconComponent = typeof LucideIcons[name] === "function" || typeof LucideIcons[name] === "object"
            const isNotIconSuffix = !name.endsWith("Icon")
            return isIconComponent && isNotIconSuffix
        })
    }, [])

    // Filter icons based on search query
    const filteredIcons = useMemo(() => {
        if (!iconSearchQuery) return allIcons.slice(0, 24)
        return allIcons.filter((icon) => icon.toLowerCase().includes(iconSearchQuery.toLowerCase()))
    }, [allIcons, iconSearchQuery])

    const triggerModes = [
        { id: "always", label: "Always" },
        { id: "hover", label: "Hover" },
        { id: "click", label: "Click" },
        { id: "focus", label: "Focus" },
    ]

    const entranceAnimations = [
        { id: "none", label: "None" },
        { id: "fadeIn", label: "Fade In" },
        { id: "fadeInUp", label: "Fade In Up" },
        { id: "fadeInDown", label: "Fade In Down" },
        { id: "fadeInLeft", label: "Fade In Left" },
        { id: "fadeInRight", label: "Fade In Right" },
        { id: "scaleIn", label: "Scale In" },
        { id: "slideInUp", label: "Slide In Up" },
        { id: "slideInDown", label: "Slide In Down" },
        { id: "rotateIn", label: "Rotate In" },
        { id: "zoomIn", label: "Zoom In" },
    ]

    const weightOptions = [
        { id: "light", label: "Light" },
        { id: "regular", label: "Regular" },
        { id: "bold", label: "Bold" },
    ]

    const tailwindColors = [
        { name: "Black", value: "black", class: "text-black", color: "#000000" },
        { name: "White", value: "white", class: "text-white", color: "#FFFFFF" },
        { name: "Gray 500", value: "gray-500", class: "text-gray-500", color: "#6B7280" },
        { name: "Red 500", value: "red-500", class: "text-red-500", color: "#EF4444" },
        { name: "Orange 500", value: "orange-500", class: "text-orange-500", color: "#F97316" },
        { name: "Amber 500", value: "amber-500", class: "text-amber-500", color: "#F59E0B" },
        { name: "Yellow 500", value: "yellow-500", class: "text-yellow-500", color: "#EAB308" },
        { name: "Lime 500", value: "lime-500", class: "text-lime-500", color: "#84CC16" },
        { name: "Green 500", value: "green-500", class: "text-green-500", color: "#22C55E" },
        { name: "Emerald 500", value: "emerald-500", class: "text-emerald-500", color: "#10B981" },
        { name: "Teal 500", value: "teal-500", class: "text-teal-500", color: "#14B8A6" },
        { name: "Cyan 500", value: "cyan-500", class: "text-cyan-500", color: "#06B6D4" },
        { name: "Sky 500", value: "sky-500", class: "text-sky-500", color: "#0EA5E9" },
        { name: "Blue 500", value: "blue-500", class: "text-blue-500", color: "#3B82F6" },
        { name: "Indigo 500", value: "indigo-500", class: "text-indigo-500", color: "#6366F1" },
        { name: "Violet 500", value: "violet-500", class: "text-violet-500", color: "#8B5CF6" },
        { name: "Purple 500", value: "purple-500", class: "text-purple-500", color: "#A855F7" },
        { name: "Fuchsia 500", value: "fuchsia-500", class: "text-fuchsia-500", color: "#D946EF" },
        { name: "Pink 500", value: "pink-500", class: "text-pink-500", color: "#EC4899" },
        { name: "Rose 500", value: "rose-500", class: "text-rose-500", color: "#F43F5E" },
    ]

    const generateCode = () => {
        const selectedColor = tailwindColors.find(c => c.class === selectedColorOption);
        return `<MotionIcon
  name="${selectedIcon}"
  size={${iconSize}}
  color="${selectedColor?.color || '#000000'}"
  animation="${selectedAnimation}"
  entrance={${selectedEntrance !== 'none' ? `"${selectedEntrance}"` : 'null'}}
  animationDuration={${animationDuration}}
  animationDelay={${animationDelay}}
  trigger="${selectedTrigger}"
  weight="${selectedWeight}"
  interactive={${isInteractive}}
/>`;
    };


    const handleCopyCode = () => {
        navigator.clipboard.writeText(generateCode())
        setCopiedCode(true)
        setTimeout(() => setCopiedCode(false), 2000)
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-background text-foreground overflow-hidden pt-16 lg:pt-16">
            {showSidebar && (
                <>
                    {/* Mobile overlay when sidebar is open */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 lg:hidden z-30"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Sidebar with smooth transition */}
                    <div
                        className={`fixed lg:relative top-0 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-40 flex flex-col ${
                            sidebarOpen ? "w-80 translate-x-0" : "w-16 -translate-x-full lg:translate-x-0"
                        }`}
                    >
                        {/* Toggle button - always visible */}
                        <div className="flex-shrink-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                aria-label="Toggle sidebar"
                            >
                                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                            <h3 className={`text-sm font-semibold transition-opacity duration-300 whitespace-nowrap ${sidebarOpen ? "opacity-100" : "opacity-0"}`}>
                                {sidebarOpen && "Parameters"}
                            </h3>
                        </div>

                        <div className={`flex-1 overflow-y-auto ${sidebarOpen ? "" : "overflow-hidden"}`}>
                            <div className="p-4 md:p-6 space-y-6">
                                {/* Animation Selection */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Animation</label>
                                    <div className="grid grid-cols-2 gap-1">
                                        {allAnimations.map((anim) => (
                                            <button
                                                key={anim.id}
                                                onClick={() => setSelectedAnimation(anim.id)}
                                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                    selectedAnimation === anim.id
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            >
                                                {anim.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Trigger Mode */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Trigger</label>
                                    <div className="grid grid-cols-2 gap-1">
                                        {triggerModes.map((mode) => (
                                            <button
                                                key={mode.id}
                                                onClick={() => setSelectedTrigger(mode.id)}
                                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                    selectedTrigger === mode.id
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            >
                                                {mode.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Entrance Animation */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Entrance</label>
                                    <div className="grid grid-cols-2 gap-1">
                                        {entranceAnimations.slice(0, 6).map((entrance) => (
                                            <button
                                                key={entrance.id}
                                                onClick={() => setSelectedEntrance(entrance.id)}
                                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                    selectedEntrance === entrance.id
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            >
                                                {entrance.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Weight */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Weight</label>
                                    <div className="grid grid-cols-3 gap-1">
                                        {weightOptions.map((weight) => (
                                            <button
                                                key={weight.id}
                                                onClick={() => setSelectedWeight(weight.id)}
                                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                    selectedWeight === weight.id
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            >
                                                {weight.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Interactive */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Interactive</label>
                                    <div className="grid grid-cols-2 gap-1">
                                        <button
                                            onClick={() => setIsInteractive(false)}
                                            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                !isInteractive
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        >
                                            False
                                        </button>
                                        <button
                                            onClick={() => setIsInteractive(true)}
                                            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                                isInteractive
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        >
                                            True
                                        </button>
                                    </div>
                                </div>

                                {/* Icon Color - Tailwind color customization */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Color</label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {tailwindColors.map((color) => (
                                            <button
                                                key={color.value}
                                                onClick={() => setSelectedColorOption(color.class)}
                                                className={`w-8 h-8 rounded border-2 transition-all ${
                                                    selectedColorOption === color.class ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-300"
                                                }`}
                                                style={{ backgroundColor: color.color }}
                                                title={color.name}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Size Slider */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">Size: {iconSize}px</label>
                                    <Slider
                                        value={[iconSize]}
                                        onValueChange={(value) => setIconSize(value[0])}
                                        min={16}
                                        max={128}
                                        step={4}
                                        className="w-full"
                                    />
                                </div>

                                {/* Duration Slider */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">
                                        Duration: {animationDuration}ms
                                    </label>
                                    <Slider
                                        value={[animationDuration]}
                                        onValueChange={(value) => setAnimationDuration(value[0])}
                                        min={100}
                                        max={3000}
                                        step={100}
                                        className="w-full"
                                    />
                                </div>

                                {/* Delay Slider */}
                                <div className={`space-y-2 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <label className="text-xs font-semibold text-gray-600 uppercase">
                                        Delay: {animationDelay}ms
                                    </label>
                                    <Slider
                                        value={[animationDelay]}
                                        onValueChange={(value) => setAnimationDelay(value[0])}
                                        min={0}
                                        max={1000}
                                        step={50}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header - simplified without toggle button */}
                <div className="border-b border-gray-200 bg-white p-4 md:p-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Icon Playground</h1>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">Customize and preview animated icons</p>
                    </div>
                    {/* Mobile toggle button - visible only on mobile when sidebar is closed */}
                    {showSidebar && !sidebarOpen && (
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Open sidebar"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-3 md:p-4 lg:p-6 space-y-4 md:space-y-6">
                        {/* Icon Selection with visible search icon */}
                        <div className="space-y-2 md:space-y-3">
                            <label className="text-xs md:text-sm font-semibold">Select Icon</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 pointer-events-none" />
                                <Input
                                    placeholder="Search icons..."
                                    value={iconSearchQuery}
                                    onChange={(e) => setIconSearchQuery(e.target.value)}
                                    className="pl-9 md:pl-10 text-sm md:text-base"
                                />
                            </div>
                            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5 md:gap-2 max-h-40 md:max-h-48 overflow-y-auto p-2 bg-white border border-gray-200 rounded-lg">
                                {filteredIcons.slice(0, 40).map((icon) => {
                                    const IconComponent = LucideIcons[icon]
                                    return (
                                        <button
                                            key={icon}
                                            onClick={() => setSelectedIcon(icon)}
                                            className={`p-2 md:p-3 rounded flex items-center justify-center transition-colors ${
                                                selectedIcon === icon
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                            title={icon}
                                        >
                                            {IconComponent && <IconComponent className="w-4 h-4 md:w-5 md:h-5" />}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Icon Preview Section */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 lg:p-12 flex items-center justify-center min-h-48 md:min-h-64">
                            <div className="flex flex-col items-center gap-3 md:gap-4">
                                <MotionIcon
                                    name={selectedIcon}
                                    size={iconSize}
                                    color={tailwindColors.find(c => c.class === selectedColorOption)?.color || '#000000'}
                                    animation={selectedAnimation}
                                    entrance={selectedEntrance !== 'none' ? selectedEntrance : null}
                                    animationDuration={animationDuration}
                                    animationDelay={animationDelay}
                                    trigger={selectedTrigger}
                                    weight={selectedWeight}
                                    interactive={isInteractive}
                                />
                                <div className="text-center">
                                    <p className="font-semibold text-sm md:text-base">{selectedIcon}</p>
                                    <p className="text-xs text-gray-600">{selectedAnimation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Generated Code Section - Moved below play area */}
                        <div className="space-y-2 md:space-y-3 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                            <div className="flex items-center justify-between">
                                <label className="text-xs md:text-sm font-semibold">Generated Code</label>
                                <button
                                    onClick={handleCopyCode}
                                    className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                    {copiedCode ? (
                                        <>
                                            <Check className="w-3 h-3 md:w-4 md:h-4" />
                                            <span className="hidden sm:inline">Copied</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3 h-3 md:w-4 md:h-4" />
                                            <span className="hidden sm:inline">Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <pre className="bg-gray-50 p-3 md:p-4 rounded-lg overflow-x-auto text-xs font-mono border border-gray-200">
                                <code>{generateCode()}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimationDemo