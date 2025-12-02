import { ArrowRight, ShoppingCart, Shield, Truck, Award, RotateCcw } from 'lucide-react';
import { Product } from '../App';
import { Button } from './ui/button';
import { Navigation } from './Navigation';

interface HomePageProps {
  onNavigate: (view: 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout') => void;
  onViewProduct: (product: Product) => void;
  cartItemCount: number;
  featuredProducts: Product[];
}

export function HomePage({ onNavigate, onViewProduct, cartItemCount, featuredProducts }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={onNavigate}
        cartItemCount={cartItemCount}
        currentView="home"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-zinc-950 z-0" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwYXJ0d29yayUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY0Njc2NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full mb-6">
              <span className="text-zinc-400">Limited Edition Collection 2024</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">
              Original Artworks by Elena Virtanen
            </h1>
            <p className="text-zinc-300 mb-8 text-lg md:text-xl max-w-2xl">
              Discover unique contemporary pieces that transform your space. 
              Each artwork is an original creation, signed and authenticated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onNavigate('gallery')}
                className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 h-14 px-8"
                size="lg"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('about')}
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-900 h-14 px-8"
                size="lg"
              >
                About the Artist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 border-t border-b border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="mb-2">Authenticity Guaranteed</h3>
              <p className="text-zinc-400 text-sm">
                Certificate of authenticity included with every purchase
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="mb-2">Free Shipping</h3>
              <p className="text-zinc-400 text-sm">
                Fully insured worldwide delivery at no extra cost
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="mb-2">30-Day Returns</h3>
              <p className="text-zinc-400 text-sm">
                Full money-back guarantee if you're not satisfied
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="mb-2">Museum Quality</h3>
              <p className="text-zinc-400 text-sm">
                Premium archival materials for lasting beauty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="mb-4">Featured Works</h2>
              <p className="text-zinc-400 max-w-xl">
                Carefully selected pieces from the latest collection
              </p>
            </div>
            <Button
              onClick={() => onNavigate('gallery')}
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-900 hidden sm:flex"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map(product => {
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
                    <h3>{product.title}</h3>
                    <p className="text-zinc-400 text-sm">{product.dimensions}</p>
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

          <div className="mt-8 flex justify-center sm:hidden">
            <Button
              onClick={() => onNavigate('gallery')}
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-900 w-full"
            >
              View All Works
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
                <span className="text-zinc-400">About the Artist</span>
              </div>
              <h2 className="mb-6">Elena Virtanen</h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Finnish contemporary artist based in Helsinki, creating bold abstract and 
                  minimalist works that explore the relationship between color, form, and emotion.
                </p>
                <p>
                  With over a decade of experience, Elena's work has been featured in galleries 
                  across Europe and is held in private collections worldwide.
                </p>
              </div>
              <Button
                onClick={() => onNavigate('about')}
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-900 mt-8"
                size="lg"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1610915965290-be9ee44cd034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ2NzY1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elena Virtanen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Start Your Collection Today</h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Own an original piece of contemporary art. Each work comes with 
              authenticity certificate and worldwide insured shipping.
            </p>
            <Button
              onClick={() => onNavigate('gallery')}
              className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 h-14 px-8"
              size="lg"
            >
              <ShoppingCart className="mr-2 w-5 h-5" />
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-900/30">
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
                <button onClick={() => onNavigate('gallery')} className="block text-sm hover:text-zinc-100 transition-colors">
                  All Works
                </button>
                <button onClick={() => onNavigate('gallery')} className="block text-sm hover:text-zinc-100 transition-colors">
                  Abstract
                </button>
                <button onClick={() => onNavigate('gallery')} className="block text-sm hover:text-zinc-100 transition-colors">
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
