import React, { useState } from 'react';
import { Button } from './ui/button';
import MotionIcon from './MotionIcon';
import { Check, Copy } from 'lucide-react';
import { cn } from '../lib/utils';

const AnimatedCopyButton = ({ textToCopy, className, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={cn(
        'relative overflow-hidden border-gray-300 transition-all duration-300',
        copied && 'border-green-500 bg-green-50',
        className
      )}
    >
      <span className="flex items-center gap-2">
        <span className="relative w-4 h-4">
          {/* Copy icon - exits when copied */}
          <span
            className={cn(
              'absolute inset-0 transition-all duration-300',
              copied 
                ? 'opacity-0 scale-0 rotate-90' 
                : 'opacity-100 scale-100 rotate-0'
            )}
          >
            <Copy className="w-4 h-4 text-gray-700" />
          </span>
          
          {/* Check icon - enters when copied */}
          <span
            className={cn(
              'absolute inset-0 transition-all duration-300',
              copied 
                ? 'opacity-100 scale-100 rotate-0' 
                : 'opacity-0 scale-0 -rotate-90'
            )}
          >
            <Check className="w-4 h-4 text-green-600" />
          </span>
        </span>
        
        <span className="relative">
          {/* Text transition */}
          <span
            className={cn(
              'transition-all duration-300',
              copied ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
            )}
          >
            {children || 'Copy'}
          </span>
          <span
            className={cn(
              'absolute left-0 top-0 transition-all duration-300 text-green-600 font-medium',
              copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            Copied!
          </span>
        </span>
      </span>
      
      {/* Success ripple effect */}
      {copied && (
        <span className="absolute inset-0 bg-green-500/20 animate-ping rounded" />
      )}
    </Button>
  );
};

export default AnimatedCopyButton;