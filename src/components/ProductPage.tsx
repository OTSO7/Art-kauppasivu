import { useState } from 'react';
import { ShoppingCart, Shield, RotateCcw, Truck, Award, ZoomIn, X } from 'lucide-react';
import { Product } from '../App';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Navigation } from './Navigation';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  cartItemCount: number;
  onViewCart: () => void;
  onNavigate: (view: 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout') => void;
}

export function ProductPage({ product, onAddToCart, cartItemCount, onViewCart, onNavigate }: ProductPageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={onNavigate}
        cartItemCount={cartItemCount}
        currentView="product"
      />

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative group">
              <div
                className="relative bg-zinc-900 rounded-lg overflow-hidden cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/80 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
              {discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-zinc-100 text-zinc-950 hover:bg-zinc-100">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <Shield className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-100">Authenticity Guaranteed</div>
                  <div className="text-zinc-400 text-sm mt-1">Certificate included</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <RotateCcw className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-100">30-Day Returns</div>
                  <div className="text-zinc-400 text-sm mt-1">Money-back guarantee</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <Truck className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-100">Free Shipping</div>
                  <div className="text-zinc-400 text-sm mt-1">Insured delivery</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <Award className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-100">Museum Quality</div>
                  <div className="text-zinc-400 text-sm mt-1">Archival materials</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:pt-8">
            <div className="space-y-6">
              <div>
                <div className="text-zinc-400 mb-2">By {product.artist}</div>
                <h2 className="mb-4">{product.title}</h2>
                <div className="flex items-baseline gap-3">
                  <div className="text-zinc-100">€{product.price.toLocaleString()}</div>
                  {product.originalPrice && (
                    <div className="text-zinc-500 line-through">
                      €{product.originalPrice.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              <div className="h-px bg-zinc-800" />

              <p className="text-zinc-300 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between py-2">
                  <span className="text-zinc-400">Dimensions</span>
                  <span className="text-zinc-100">{product.dimensions}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-400">Medium</span>
                  <span className="text-zinc-100">{product.medium}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-400">Year</span>
                  <span className="text-zinc-100">{product.year}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-400">Edition</span>
                  <span className="text-zinc-100">{product.edition}</span>
                </div>
              </div>

              <div className="h-px bg-zinc-800" />

              <Button
                onClick={() => onAddToCart(product)}
                className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 h-14"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <div className="flex items-center gap-2 justify-center text-zinc-400 text-sm">
                <Shield className="w-4 h-4" />
                <span>Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] overflow-hidden cursor-zoom-out"
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
