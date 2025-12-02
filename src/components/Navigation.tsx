import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onNavigate: (view: 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout') => void;
  cartItemCount: number;
  currentView?: string;
}

export function Navigation({ onNavigate, cartItemCount, currentView }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: 'home' as const },
    { label: 'Gallery', view: 'gallery' as const },
    { label: 'About', view: 'about' as const },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="tracking-tight hover:text-zinc-300 transition-colors"
          >
            Elena Virtanen Studio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`text-sm tracking-wide transition-colors ${
                  currentView === item.view
                    ? 'text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zinc-100 text-zinc-950 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-800 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-zinc-800">
            <div className="space-y-1">
              {navItems.map(item => (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.view
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
