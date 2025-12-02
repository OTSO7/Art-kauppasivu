import { Award, MapPin, Mail, Phone, Instagram, Globe } from 'lucide-react';
import { Navigation } from './Navigation';
import { Button } from './ui/button';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout') => void;
  cartItemCount: number;
}

export function AboutPage({ onNavigate, cartItemCount }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={onNavigate}
        cartItemCount={cartItemCount}
        currentView="about"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6">About Elena Virtanen</h1>
            <p className="text-zinc-300 text-lg">
              Contemporary artist exploring the boundaries of abstract expression 
              and minimalist design through bold colors and innovative techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="space-y-6">
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1610915965290-be9ee44cd034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ2NzY1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elena Virtanen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative bg-zinc-900 rounded-lg overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwYXJ0d29yayUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY0Njc2NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Born in Helsinki, Finland, Elena Virtanen has been creating art for over 
                  a decade, developing a distinctive style that merges contemporary abstract 
                  expressionism with Nordic minimalism.
                </p>
                <p>
                  Her work is characterized by bold use of color, dynamic compositions, and 
                  a deep exploration of emotional resonance through visual form. Each piece 
                  is an investigation into the relationship between viewer and artwork, 
                  creating spaces for contemplation and emotional engagement.
                </p>
                <p>
                  Elena's paintings are held in private collections across Europe, North America, 
                  and Asia, and have been featured in numerous exhibitions and galleries. She 
                  works exclusively with premium archival materials to ensure the longevity 
                  and museum-quality presentation of each piece.
                </p>
              </div>

              {/* Achievements */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-zinc-100 mb-1">Featured Artist</div>
                    <div className="text-zinc-400 text-sm">
                      Nordic Contemporary Art Fair 2023
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-zinc-100 mb-1">Solo Exhibition</div>
                    <div className="text-zinc-400 text-sm">
                      Gallery Musta, Helsinki 2022
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-zinc-100 mb-1">International Recognition</div>
                    <div className="text-zinc-400 text-sm">
                      Works in collections across 15+ countries
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3>Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                    <span>Helsinki, Finland</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Mail className="w-5 h-5 text-zinc-400" />
                    <a href="mailto:info@elenavirtanen.art" className="hover:text-zinc-100 transition-colors">
                      info@elenavirtanen.art
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Phone className="w-5 h-5 text-zinc-400" />
                    <a href="tel:+358401234567" className="hover:text-zinc-100 transition-colors">
                      +358 40 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="#"
                    className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <Button
                onClick={() => onNavigate('gallery')}
                className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 w-full sm:w-auto"
                size="lg"
              >
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-zinc-900/30 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Artistic Philosophy</h2>
            <blockquote className="text-zinc-300 text-lg italic leading-relaxed">
              "Art should not merely decorate walls, but transform spaces and evoke emotions. 
              Each piece I create is an invitation to pause, reflect, and connect with something 
              deeper within ourselves. Through color, form, and texture, I seek to create visual 
              poetry that resonates on a personal level with each viewer."
            </blockquote>
            <div className="mt-6 text-zinc-400">— Elena Virtanen</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Creative Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-zinc-100">1</span>
                </div>
                <h3 className="mb-3">Concept</h3>
                <p className="text-zinc-400 text-sm">
                  Every piece begins with an emotional concept or abstract idea to explore
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-zinc-100">2</span>
                </div>
                <h3 className="mb-3">Creation</h3>
                <p className="text-zinc-400 text-sm">
                  Using premium materials and techniques developed over years of practice
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-zinc-100">3</span>
                </div>
                <h3 className="mb-3">Curation</h3>
                <p className="text-zinc-400 text-sm">
                  Each work is carefully finished and authenticated before joining the collection
                </p>
              </div>
            </div>
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
