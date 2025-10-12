import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MotionIcon from '../components/MotionIcon';
import AnimatedCopyButton from '../components/AnimatedCopyButton';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from '../hooks/use-toast';
import * as LucideIcons from 'lucide-react';
import { Search, Copy, Check } from 'lucide-react';

const IconGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAnimation, setSelectedAnimation] = useState('pulse');
  const [copiedIcon, setCopiedIcon] = useState(null);

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

  const animations = [
    { id: 'pulse', label: 'Pulse' },
    { id: 'spin', label: 'Spin' },
    { id: 'bounce', label: 'Bounce' },
    { id: 'wiggle', label: 'Wiggle' },
    { id: 'swing', label: 'Swing' },
    { id: 'tada', label: 'Tada' },
    { id: 'none', label: 'None' }
  ];

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

    return filtered.slice(0, 200);
  }, [allIcons, searchQuery, selectedCategory, categories]);

  const handleCopyCode = (iconName) => {
    const code = `<MotionIcon name="${iconName}" animation="${selectedAnimation}" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
    toast({
      title: 'Copied to clipboard',
      description: code,
    });
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
            <Link to="/animations" className="text-sm text-gray-600 hover:text-black transition-colors">
              Playground
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
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">Icon Gallery</h1>
            <p className="text-lg text-gray-600">Browse and search {allIcons.length}+ icons with live animation preview</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base border-gray-300 focus:border-black focus:ring-black"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    className={selectedCategory === category.id 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Preview Animation</h3>
              <div className="flex flex-wrap gap-2">
                {animations.map(animation => (
                  <Button
                    key={animation.id}
                    variant={selectedAnimation === animation.id ? 'default' : 'outline'}
                    size="sm"
                    className={selectedAnimation === animation.id 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }
                    onClick={() => setSelectedAnimation(animation.id)}
                  >
                    {animation.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-black">{filteredIcons.length}</span> icons
            </p>
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {filteredIcons.map(iconName => (
              <button
                key={iconName}
                onClick={() => handleCopyCode(iconName)}
                className="group relative aspect-square bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-all hover:shadow-sm p-4 flex flex-col items-center justify-center gap-2"
              >
                <MotionIcon
                  name={iconName}
                  size={28}
                  animation={selectedAnimation}
                  className="text-black"
                />
                <span className="text-xs text-gray-600 text-center truncate w-full font-medium">
                  {iconName}
                </span>
                
                {/* Hover overlay with animated icon */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                  <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    {copiedIcon === iconName ? (
                      <>
                        <Check className="h-3 w-3 text-green-600" />
                        <span className="text-xs font-medium text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-black" />
                        <span className="text-xs font-medium text-black">Copy</span>
                      </>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div className="text-center py-20">
              <MotionIcon name="SearchX" size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No icons found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconGallery;