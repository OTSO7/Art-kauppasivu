import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ProductPage } from './components/ProductPage';
import { ShoppingCart } from './components/ShoppingCart';
import { CheckoutForm } from './components/CheckoutForm';

export interface Product {
  id: string;
  title: string;
  artist: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  dimensions: string;
  medium: string;
  year: string;
  edition: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Abstract Harmony',
    artist: 'Elena Virtanen',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1681235014294-588fea095706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhaW50aW5nfGVufDF8fHx8MTc2NDY0MzMyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A stunning piece that captures the essence of modern abstract expressionism. This original artwork brings vibrant energy and sophisticated aesthetic to any space.',
    dimensions: '100 × 120 cm',
    medium: 'Acrylic on canvas',
    year: '2024',
    edition: 'Original, signed',
    category: 'Abstract'
  },
  {
    id: '2',
    title: 'Minimalist Serenity',
    artist: 'Elena Virtanen',
    price: 899,
    image: 'https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0NTk3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Peaceful minimalist composition that embodies tranquility and balance. Perfect for modern interiors seeking calm sophistication.',
    dimensions: '80 × 100 cm',
    medium: 'Oil on canvas',
    year: '2024',
    edition: 'Original, signed',
    category: 'Minimalist'
  },
  {
    id: '3',
    title: 'Contemporary Vision',
    artist: 'Elena Virtanen',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1720802703504-a5b28e0edb40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR3b3JrfGVufDF8fHx8MTc2NDU4NzU0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bold contemporary piece with striking composition. A statement artwork that commands attention and conversation.',
    dimensions: '120 × 150 cm',
    medium: 'Mixed media on canvas',
    year: '2024',
    edition: 'Original, signed',
    category: 'Contemporary'
  },
  {
    id: '4',
    title: 'Color Symphony',
    artist: 'Elena Virtanen',
    price: 1099,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc2NDYyMTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Vibrant explosion of colors creating a dynamic visual experience. This piece energizes any room with its bold palette.',
    dimensions: '90 × 120 cm',
    medium: 'Acrylic on canvas',
    year: '2024',
    edition: 'Original, signed',
    category: 'Abstract'
  },
  {
    id: '5',
    title: 'Classical Beauty',
    artist: 'Elena Virtanen',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR8ZW58MXx8fHwxNzY0NjI5NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Timeless elegance meets contemporary technique. A sophisticated piece for collectors who appreciate refined artistry.',
    dimensions: '110 × 140 cm',
    medium: 'Oil on canvas',
    year: '2023',
    edition: 'Original, signed',
    category: 'Contemporary'
  },
  {
    id: '6',
    title: 'Fluid Dreams',
    artist: 'Elena Virtanen',
    price: 799,
    image: 'https://images.unsplash.com/photo-1713815539197-78db123d8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0NjQzMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Delicate watercolor composition that evokes emotion and movement. A subtle yet powerful addition to any collection.',
    dimensions: '70 × 90 cm',
    medium: 'Watercolor on paper',
    year: '2024',
    edition: 'Original, signed',
    category: 'Watercolor'
  }
];

type ViewType = 'home' | 'gallery' | 'about' | 'product' | 'cart' | 'checkout';

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setView('cart');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setView('product');
  };

  const navigateTo = (newView: ViewType) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {view === 'home' && (
        <HomePage
          onNavigate={navigateTo}
          onViewProduct={handleViewProduct}
          cartItemCount={getTotalItems()}
          featuredProducts={PRODUCTS.slice(0, 3)}
        />
      )}

      {view === 'gallery' && (
        <GalleryPage
          products={PRODUCTS}
          onNavigate={navigateTo}
          onViewProduct={handleViewProduct}
          cartItemCount={getTotalItems()}
        />
      )}

      {view === 'about' && (
        <AboutPage
          onNavigate={navigateTo}
          cartItemCount={getTotalItems()}
        />
      )}

      {view === 'product' && selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onAddToCart={addToCart}
          cartItemCount={getTotalItems()}
          onViewCart={() => setView('cart')}
          onNavigate={navigateTo}
        />
      )}

      {view === 'cart' && (
        <ShoppingCart
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onContinueShopping={() => setView('gallery')}
          onCheckout={() => setView('checkout')}
          onNavigate={navigateTo}
          cartItemCount={getTotalItems()}
        />
      )}

      {view === 'checkout' && (
        <CheckoutForm
          items={cart}
          subtotal={getSubtotal()}
          onBack={() => setView('cart')}
          onNavigate={navigateTo}
          cartItemCount={getTotalItems()}
        />
      )}
    </div>
  );
}
