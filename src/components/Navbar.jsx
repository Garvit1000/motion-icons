import { useState } from 'react';
import { Menu, X, Github, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'Gallery', href: '/gallery' },
        { label: 'Playground', href: '/animations' },
        { label: 'Animations', href: '/entrance' },
        { label: 'Docs', href: 'https://none-9e5c6865.mintlify.app/' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-1 text-black font-semibold text-lg flex-shrink-0">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                        <span className="text-black text-xl tracking-tight font-bold"> Motion Icons</span>
                    </div>
                </a>



                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/Garvit1000/npm-motion-icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <a
                        href="https://github.com/Garvit1000/npm-motion-icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-black transition-colors p-1"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-gray-600 hover:text-black transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}