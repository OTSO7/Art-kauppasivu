import { useState } from 'react';
import { Product } from '../App';
import { Navigation } from './Navigation';
import { Button } from './ui/button';

interface GalleryPageProps {
  products: Product[];
  onNavigate: (view: 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout') => void;
  onViewProduct: (product: Product) => void;
  cartItemCount: number;
}

export function GalleryPage({ products, onNavigate, onViewProduct, cartItemCount }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={onNavigate}
        cartItemCount={cartItemCount}
        currentView="gallery"
      />

      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6">Collection</h1>
            <p className="text-zinc-300 text-lg">
              Browse our complete collection of original artworks. Each piece is 
              carefully crafted and comes with certificate of authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-zinc-800 sticky top-16 lg:top-20 bg-zinc-950/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-zinc-100 text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-zinc-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'work' : 'works'}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map(product => {
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => onViewProduct(product)}
                >
                  <div className="relative bg-zinc-900 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {discount > 0 && (
                      <div className="absolute top-4 right-4 bg-zinc-100 text-zinc-950 px-3 py-1 rounded-full">
                        -{discount}%
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3>{product.title}</h3>
                      <span className="text-zinc-400 text-sm px-2 py-1 bg-zinc-900 rounded">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm">
                      {product.dimensions} · {product.medium}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-zinc-100">€{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-zinc-500 line-through text-sm">
                          €{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-900/30 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">Elena Virtanen Studio</h3>
              <p className="text-zinc-400 text-sm">
                Contemporary art for collectors worldwide
              </p>
            </div>
            <div>
              <div className="text-zinc-400 mb-3">Shop</div>
              <div className="space-y-2">
                <button onClick={() => setSelectedCategory('All')} className="block text-sm hover:text-zinc-100 transition-colors">
                  All Works
                </button>
                <button onClick={() => setSelectedCategory('Abstract')} className="block text-sm hover:text-zinc-100 transition-colors">
                  Abstract
                </button>
                <button onClick={() => setSelectedCategory('Minimalist')} className="block text-sm hover:text-zinc-100 transition-colors">
                  Minimalist
                </button>
              </div>
            </div>
            <div>
              <div className="text-zinc-400 mb-3">Information</div>
              <div className="space-y-2">
                <button onClick={() => onNavigate('about')} className="block text-sm hover:text-zinc-100 transition-colors">
                  About
                </button>
                <a href="#" className="block text-sm hover:text-zinc-100 transition-colors">
                  Shipping
                </a>
                <a href="#" className="block text-sm hover:text-zinc-100 transition-colors">
                  Returns
                </a>
              </div>
            </div>
            <div>
              <div className="text-zinc-400 mb-3">Contact</div>
              <div className="space-y-2 text-sm">
                <p>Helsinki, Finland</p>
                <p>info@elenavirtanen.art</p>
                <p>+358 40 123 4567</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
            <p>© 2024 Elena Virtanen Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
