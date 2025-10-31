import { useState, useMemo } from "react"
import * as LucideIcons from "lucide-react"
import { Search, Copy, Check, Menu, RotateCcw } from "lucide-react"
import MotionIcon from "../components/MotionIcon"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"

/**
 * SidebarContentComponent - Reusable sidebar content for both desktop and mobile
 */
const SidebarContentComponent = ({
    allAnimations,
    selectedAnimation,
    setSelectedAnimation,
    triggerModes,
    selectedTrigger,
    setSelectedTrigger,
    entranceAnimations,
    selectedEntrance,
    setSelectedEntrance,
    weightOptions,
    selectedWeight,
    setSelectedWeight,
    isInteractive,
    setIsInteractive,
    tailwindColors,
    selectedColorOption,
    setSelectedColorOption,
    iconSize,
    setIconSize,
    animationDuration,
    setAnimationDuration,
    animationDelay,
    setAnimationDelay,
    onMobileClose,
    onReset,
    isCollapsed = false,
}) => {
    // If collapsed, show icon-only view
    if (isCollapsed) {
        return (
            <div className="space-y-4 flex flex-col items-center py-4">
                {/* Animation icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Animation"
                >
                    <LucideIcons.Sparkles className="w-5 h-5" />
                </button>

                {/* Trigger icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Trigger"
                >
                    <LucideIcons.MousePointer className="w-5 h-5" />
                </button>

                {/* Entrance icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Entrance"
                >
                    <LucideIcons.LogIn className="w-5 h-5" />
                </button>

                {/* Weight icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Weight"
                >
                    <LucideIcons.Type className="w-5 h-5" />
                </button>

                {/* Interactive icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Interactive"
                >
                    <LucideIcons.Hand className="w-5 h-5" />
                </button>

                {/* Color icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Color"
                >
                    <LucideIcons.Palette className="w-5 h-5" />
                </button>

                {/* Size icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Size"
                >
                    <LucideIcons.Maximize2 className="w-5 h-5" />
                </button>

                {/* Duration icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Duration"
                >
                    <LucideIcons.Clock className="w-5 h-5" />
                </button>

                {/* Delay icon */}
                <button
                    onClick={() => { }}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-accent transition-colors"
                    title="Delay"
                >
                    <LucideIcons.Timer className="w-5 h-5" />
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Reset Button */}
            <SidebarGroup>
                <SidebarGroupContent>
                    <button
                        onClick={() => {
                            onReset?.()
                            onMobileClose?.()
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset to Defaults
                    </button>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Animation Selection */}
            <SidebarGroup>
                <SidebarGroupLabel>ANIMATION</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="grid grid-cols-2 gap-1">
                            {allAnimations.map((anim) => (
                                <SidebarMenuItem key={anim.id}>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            setSelectedAnimation(anim.id)
                                            onMobileClose?.()
                                        }}
                                        isActive={selectedAnimation === anim.id}
                                        className={`justify-center ${selectedAnimation === anim.id
                                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                            : ""
                                            }`}
                                    >
                                        {anim.name}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </div>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Trigger Mode */}
            <SidebarGroup>
                <SidebarGroupLabel>TRIGGER</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="grid grid-cols-2 gap-1">
                            {triggerModes.map((mode) => (
                                <SidebarMenuItem key={mode.id}>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            setSelectedTrigger(mode.id)
                                            onMobileClose?.()
                                        }}
                                        isActive={selectedTrigger === mode.id}
                                        className={`justify-center ${selectedTrigger === mode.id
                                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                            : ""
                                            }`}
                                    >
                                        {mode.label}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </div>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Entrance Animation */}
            <SidebarGroup>
                <SidebarGroupLabel>ENTRANCE</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="grid grid-cols-2 gap-1">
                            {entranceAnimations.slice(0, 6).map((entrance) => (
                                <SidebarMenuItem key={entrance.id}>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            setSelectedEntrance(entrance.id)
                                            onMobileClose?.()
                                        }}
                                        isActive={selectedEntrance === entrance.id}
                                        className={`justify-center ${selectedEntrance === entrance.id
                                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                            : ""
                                            }`}
                                    >
                                        {entrance.label}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </div>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Weight */}
            <SidebarGroup>
                <SidebarGroupLabel>WEIGHT</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="grid grid-cols-3 gap-1">
                            {weightOptions.map((weight) => (
                                <SidebarMenuItem key={weight.id}>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            setSelectedWeight(weight.id)
                                            onMobileClose?.()
                                        }}
                                        isActive={selectedWeight === weight.id}
                                        className={`justify-center ${selectedWeight === weight.id
                                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                            : ""
                                            }`}
                                    >
                                        {weight.label}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </div>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Interactive */}
            <SidebarGroup>
                <SidebarGroupLabel>INTERACTIVE</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <div className="grid grid-cols-2 gap-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    onClick={() => {
                                        setIsInteractive(false)
                                        onMobileClose?.()
                                    }}
                                    isActive={!isInteractive}
                                    className={`justify-center ${!isInteractive
                                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                        : ""
                                        }`}
                                >
                                    False
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    onClick={() => {
                                        setIsInteractive(true)
                                        onMobileClose?.()
                                    }}
                                    isActive={isInteractive}
                                    className={`justify-center ${isInteractive
                                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                                        : ""
                                        }`}
                                >
                                    True
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </div>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Color Picker */}
            <SidebarGroup>
                <SidebarGroupLabel>COLOR</SidebarGroupLabel>
                <SidebarGroupContent>
                    <div className="grid grid-cols-5 gap-2 px-2">
                        {tailwindColors.map((color) => (
                            <button
                                key={color.value}
                                onClick={() => {
                                    setSelectedColorOption(color.class)
                                    onMobileClose?.()
                                }}
                                className={`w-8 h-8 rounded border-2 transition-all ${selectedColorOption === color.class
                                    ? "border-blue-600 ring-2 ring-blue-200"
                                    : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: color.color }}
                                title={color.name}
                            />
                        ))}
                    </div>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Size Slider */}
            <SidebarGroup>
                <SidebarGroupLabel>SIZE: {iconSize}px</SidebarGroupLabel>
                <SidebarGroupContent>
                    <Slider
                        value={[iconSize]}
                        onValueChange={(value) => setIconSize(value[0])}
                        min={16}
                        max={128}
                        step={4}
                        className="w-full"
                    />
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Duration Slider */}
            <SidebarGroup>
                <SidebarGroupLabel>DURATION: {animationDuration}ms</SidebarGroupLabel>
                <SidebarGroupContent>
                    <Slider
                        value={[animationDuration]}
                        onValueChange={(value) => setAnimationDuration(value[0])}
                        min={100}
                        max={3000}
                        step={100}
                        className="w-full"
                    />
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Delay Slider */}
            <SidebarGroup>
                <SidebarGroupLabel>DELAY: {animationDelay}ms</SidebarGroupLabel>
                <SidebarGroupContent>
                    <Slider
                        value={[animationDelay]}
                        onValueChange={(value) => setAnimationDelay(value[0])}
                        min={0}
                        max={1000}
                        step={50}
                        className="w-full"
                    />
                </SidebarGroupContent>
            </SidebarGroup>
        </div>
    )
}

/**
 * DesktopSidebarWrapper - Wrapper component that uses useSidebar hook
 */
const DesktopSidebarWrapper = (props) => {
    const { state } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <Sidebar className="hidden lg:flex">
            <SidebarHeader className="border-b">
                <div className="flex items-center justify-between">
                    {!isCollapsed && <h3 className="text-sm font-semibold">Parameters</h3>}
                    <SidebarTrigger className={cn(isCollapsed && "mx-auto")} />
                </div>
            </SidebarHeader>
            <SidebarContent className={cn(isCollapsed && "p-0")}>
                <SidebarContentComponent
                    {...props}
                    isCollapsed={isCollapsed}
                />
            </SidebarContent>
        </Sidebar>
    )
}

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
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

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

    // Reset function to restore all defaults
    const handleReset = () => {
        setAnimationDuration(1000)
        setIconSize(48)
        setSelectedAnimation(defaultAnimation)
        setSelectedIcon(defaultIcon)
        setSelectedTrigger("always")
        setIconSearchQuery("")
        setSelectedEntrance("none")
        setAnimationDelay(0)
        setSelectedWeight("regular")
        setSelectedColorOption(iconColor)
        setIsInteractive(false)
    }

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
        const props = [];

        // Always include name (required)
        props.push(`name="${selectedIcon}"`);

        // Only include props that differ from defaults
        if (iconSize !== 24) {
            props.push(`size={${iconSize}}`);
        }

        if (selectedColor?.color !== '#000000' && selectedColorOption !== iconColor) {
            props.push(`color="${selectedColor?.color}"`);
        }

        if (selectedAnimation !== 'none') {
            props.push(`animation="${selectedAnimation}"`);
        }

        if (selectedEntrance !== 'none') {
            props.push(`entrance="${selectedEntrance}"`);
        }

        if (animationDuration !== 1000) {
            props.push(`animationDuration={${animationDuration}}`);
        }

        if (animationDelay !== 0) {
            props.push(`animationDelay={${animationDelay}}`);
        }

        if (selectedTrigger !== 'always') {
            props.push(`trigger="${selectedTrigger}"`);
        }

        if (selectedWeight !== 'regular') {
            props.push(`weight="${selectedWeight}"`);
        }

        if (isInteractive) {
            props.push(`interactive={true}`);
        }

        // Format the output
        if (props.length === 1) {
            return `<MotionIcon ${props[0]} />`;
        }

        return `<MotionIcon\n  ${props.join('\n  ')}\n/>`;
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(generateCode())
        setCopiedCode(true)
        setTimeout(() => setCopiedCode(false), 2000)
    }

    if (!showSidebar) {
        // Return original layout without sidebar
        return (
            <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    <div className="p-3 md:p-4 lg:p-6 space-y-4 md:space-y-6">
                        {/* Content without sidebar */}
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Icon Playground</h1>
                            <p className="text-sm text-gray-600">Customize and preview animated icons</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-16">
            <SidebarProvider defaultOpen={true}>
                <DesktopSidebarWrapper
                    allAnimations={allAnimations}
                    selectedAnimation={selectedAnimation}
                    setSelectedAnimation={setSelectedAnimation}
                    triggerModes={triggerModes}
                    selectedTrigger={selectedTrigger}
                    setSelectedTrigger={setSelectedTrigger}
                    entranceAnimations={entranceAnimations}
                    selectedEntrance={selectedEntrance}
                    setSelectedEntrance={setSelectedEntrance}
                    weightOptions={weightOptions}
                    selectedWeight={selectedWeight}
                    setSelectedWeight={setSelectedWeight}
                    isInteractive={isInteractive}
                    setIsInteractive={setIsInteractive}
                    tailwindColors={tailwindColors}
                    selectedColorOption={selectedColorOption}
                    setSelectedColorOption={setSelectedColorOption}
                    iconSize={iconSize}
                    setIconSize={setIconSize}
                    animationDuration={animationDuration}
                    setAnimationDuration={setAnimationDuration}
                    animationDelay={animationDelay}
                    setAnimationDelay={setAnimationDelay}
                    onReset={handleReset}
                />

                {/* Main Content */}
                <SidebarInset>
                    {/* Header */}
                    <div className="border-b border-gray-200 bg-white p-4 md:p-6 flex items-center justify-between">
                        <div>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Icon Playground</h1>
                            <p className="text-xs md:text-sm text-gray-600 mt-1">Customize and preview animated icons</p>
                        </div>
                        {/* Mobile menu button */}
                        <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                                    aria-label="Open sidebar"
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80 p-0 mt-16">
                                <div className="h-full overflow-y-auto">
                                    <div className="p-4 border-b">
                                        <h3 className="text-sm font-semibold">Parameters</h3>
                                    </div>
                                    <div className="p-4">
                                        <SidebarContentComponent
                                            allAnimations={allAnimations}
                                            selectedAnimation={selectedAnimation}
                                            setSelectedAnimation={setSelectedAnimation}
                                            triggerModes={triggerModes}
                                            selectedTrigger={selectedTrigger}
                                            setSelectedTrigger={setSelectedTrigger}
                                            entranceAnimations={entranceAnimations}
                                            selectedEntrance={selectedEntrance}
                                            setSelectedEntrance={setSelectedEntrance}
                                            weightOptions={weightOptions}
                                            selectedWeight={selectedWeight}
                                            setSelectedWeight={setSelectedWeight}
                                            isInteractive={isInteractive}
                                            setIsInteractive={setIsInteractive}
                                            tailwindColors={tailwindColors}
                                            selectedColorOption={selectedColorOption}
                                            setSelectedColorOption={setSelectedColorOption}
                                            iconSize={iconSize}
                                            setIconSize={setIconSize}
                                            animationDuration={animationDuration}
                                            setAnimationDuration={setAnimationDuration}
                                            animationDelay={animationDelay}
                                            setAnimationDelay={setAnimationDelay}
                                            onMobileClose={() => setMobileSidebarOpen(false)}
                                            onReset={handleReset}
                                        />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-3 md:p-4 lg:p-6 space-y-4 md:space-y-6">
                            {/* Icon Selection */}
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
                                                className={`p-2 md:p-3 rounded flex items-center justify-center transition-colors ${selectedIcon === icon
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

                            {/* Generated Code Section */}
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
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

export default AnimationDemo
