import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { Search, Copy, Check, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import MotionIcon from '../components/MotionIcon';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTitle,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator
} from '../components/ui/sidebar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Sheet, SheetContent } from '../components/ui/sheet';


const IconGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAnimation, setSelectedAnimation] = useState('pulse');
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const itemsPerPage = 48;

  const allIcons = useMemo(() => {
    return Object.keys(LucideIcons).filter(name => {
      const isIconComponent = typeof LucideIcons[name] === 'function' || typeof LucideIcons[name] === 'object';
      const isNotIconSuffix = !name.endsWith('Icon');
      return isIconComponent && isNotIconSuffix;
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ui', label: 'UI', keywords: ['Menu', 'Settings', 'Edit', 'Delete', 'Plus', 'Minus', 'X', 'Check'] },
    { id: 'arrows', label: 'Arrows', keywords: ['Arrow', 'Chevron', 'Corner', 'Move'] },
    { id: 'media', label: 'Media', keywords: ['Play', 'Pause', 'Volume', 'Music', 'Video', 'Camera'] },
    { id: 'communication', label: 'Communication', keywords: ['Mail', 'Bell', 'Chat', 'Message', 'Phone'] },
    { id: 'business', label: 'Business', keywords: ['Briefcase', 'Chart', 'Trending', 'Calendar'] },
  ];

  const loopingAnimations = [
    { id: 'pulse', label: 'Pulse' },
    { id: 'spin', label: 'Spin' },
    { id: 'bounce', label: 'Bounce' },
    { id: 'ping', label: 'Ping' }
  ];

  const customAnimations = [
    { id: 'wiggle', label: 'Wiggle' },
    { id: 'flip', label: 'Flip' },
    { id: 'swing', label: 'Swing' },
    { id: 'tada', label: 'Tada' },
    { id: 'heartbeat', label: 'Heartbeat' },
    { id: 'rubber', label: 'Rubber' },
    { id: 'shake', label: 'Shake' }
  ];

  const allAnimations = [...loopingAnimations, ...customAnimations, { id: 'none', label: 'None' }];

  const filteredIcons = useMemo(() => {
    let filtered = allIcons;

    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.id === selectedCategory);
      if (category && category.keywords) {
        filtered = filtered.filter(icon =>
          category.keywords.some(keyword => icon.includes(keyword))
        );
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(icon =>
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [allIcons, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredIcons.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedIcons = filteredIcons.slice(startIdx, startIdx + itemsPerPage);

  const handleCopyCode = (iconName) => {
    const code = `<MotionIcon name="${iconName}" animation="${selectedAnimation}" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
    setMobileSidebarOpen(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleAnimationChange = (animId) => {
    setSelectedAnimation(animId);
    setMobileSidebarOpen(false);
  };

  const SidebarContentComponent = () => (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Categories</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {categories.map(category => (
              <SidebarMenuItem key={category.id}>
                <SidebarMenuButton
                  onClick={() => handleCategoryChange(category.id)}
                  isActive={selectedCategory === category.id}
                  className="justify-start"
                >
                  {category.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator />

      <SidebarGroup>
        <SidebarGroupLabel>Looping Animations</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {loopingAnimations.map(animation => (
              <SidebarMenuItem key={animation.id}>
                <SidebarMenuButton
                  onClick={() => handleAnimationChange(animation.id)}
                  isActive={selectedAnimation === animation.id}
                  className="justify-start"
                >
                  {animation.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator />

      <SidebarGroup>
        <SidebarGroupLabel>Custom Animations</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {customAnimations.map(animation => (
              <SidebarMenuItem key={animation.id}>
                <SidebarMenuButton
                  onClick={() => handleAnimationChange(animation.id)}
                  isActive={selectedAnimation === animation.id}
                  className="justify-start"
                >
                  {animation.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator />

      <SidebarGroup>
        <SidebarGroupLabel>No Animation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => handleAnimationChange('none')}
                isActive={selectedAnimation === 'none'}
                className="justify-start"
              >
                None
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex pt-16">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <div 
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-30 ${
              sidebarOpen ? 'w-72' : 'w-16'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                {sidebarOpen && (
                  <h2 className="text-lg font-semibold text-gray-900">Icon Gallery</h2>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="ml-auto"
                >
                  {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {sidebarOpen ? (
                  <SidebarContentComponent />
                ) : (
                  <div className="flex flex-col items-center space-y-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory('all')}
                      className={`w-8 h-8 p-0 ${selectedCategory === 'all' ? 'bg-gray-900 text-white' : ''}`}
                      title="All Categories"
                    >
                      <span className="text-xs">A</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedAnimation('pulse')}
                      className={`w-8 h-8 p-0 ${selectedAnimation === 'pulse' ? 'bg-blue-500 text-white' : ''}`}
                      title="Looping Animations"
                    >
                      <span className="text-xs">L</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedAnimation('wiggle')}
                      className={`w-8 h-8 p-0 ${customAnimations.some(anim => anim.id === selectedAnimation) ? 'bg-purple-500 text-white' : ''}`}
                      title="Custom Animations"
                    >
                      <span className="text-xs">C</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <div className="h-full">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Icon Gallery</h2>
              </div>
              <div className="p-4">
                <SidebarContentComponent />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:ml-72' : 'lg:ml-16'}`}>
          <div className="pt-6 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Mobile Menu Button */}
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setMobileSidebarOpen(true)}
                >
                  <Menu className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Desktop Toggle Button - Hidden since it's now in sidebar header */}
              <div className="hidden lg:block mb-8">
                {/* Toggle button moved to sidebar header */}
              </div>

              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                  Icon Gallery
                </h1>
                <p className="text-base sm:text-lg text-gray-600 font-light">
                  Browse and search from {allIcons.length} icons with live animation preview
                </p>
              </div>

              {/* Search */}
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search icons..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-12 text-base sm:text-lg h-12"
                  />
                </div>
              </div>

              {/* Results Info */}
              <div className="mb-8 text-center">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{paginatedIcons.length}</span> of{' '}
                  <span className="font-semibold text-gray-900">{filteredIcons.length}</span> icons
                </p>
              </div>

              {/* Icon Grid */}
              {paginatedIcons.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 mb-12">
                    {paginatedIcons.map(iconName => (
                      <button
                        key={iconName}
                        onClick={() => handleCopyCode(iconName)}
                        className="group relative aspect-square bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-all hover:shadow-md p-3 sm:p-4 flex flex-col items-center justify-center gap-2"
                      >
                        <MotionIcon
                          name={iconName}
                          size={24}
                          animation={selectedAnimation}
                        />
                        <span className="text-xs text-gray-700 text-center truncate w-full font-medium">
                          {iconName}
                        </span>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-md border border-gray-300">
                            {copiedIcon === iconName ? (
                              <>
                                <Check className="h-3 w-3 text-gray-700" />
                                <span className="text-xs font-medium text-gray-700">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 text-gray-700" />
                                <span className="text-xs font-medium text-gray-700">Copy</span>
                              </>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:bg-gray-100"
                        title="Previous page"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                      </button>

                      <div className="text-sm font-medium text-gray-700">
                        {currentPage} / {totalPages}
                      </div>

                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:bg-gray-100"
                        title="Next page"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <LucideIcons.SearchX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No icons found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconGallery;