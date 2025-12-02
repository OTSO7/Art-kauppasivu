import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';
import { Button } from './ui/button';
import { Navigation } from './Navigation';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface ShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  cartItemCount: number;
}

export function ShoppingCart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  cartItemCount
}: ShoppingCartProps) {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleRemoveItem = (id: string, title: string) => {
    onRemoveItem(id);
    toast.error(`Removed ${title} from cart`);
  };

  return (
    <div className="min-h-screen">
      <Navigation
        cartItemCount={cartItemCount}
      />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-zinc-700" />
            <h2 className="mb-4 text-zinc-400">Your cart is empty</h2>
            <Button
              onClick={() => navigate('/gallery')}
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-900"
            >
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 lg:p-6 overflow-hidden"
                  >
                    <div className="flex gap-4 lg:gap-6">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-4 mb-2">
                          <div>
                            <h3 className="mb-1">{item.title}</h3>
                            <div className="text-zinc-400 text-sm">By {item.artist}</div>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id, item.title)}
                            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors h-fit"
                          >
                            <Trash2 className="w-5 h-5 text-zinc-400" />
                          </button>
                        </div>
                        <div className="text-zinc-400 text-sm mb-4">{item.dimensions}</div>
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-zinc-800 rounded-l-lg transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-zinc-800 rounded-r-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-zinc-100">
                            €{(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 sticky top-24">
                <h3 className="mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>
                    <span className="text-zinc-100">€{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="h-px bg-zinc-800" />
                  <div className="flex justify-between">
                    <span className="text-zinc-100">Total</span>
                    <span className="text-zinc-100">€{total.toLocaleString()}</span>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 h-12"
                >
                  Proceed to Checkout
                </Button>
                <button
                  onClick={() => navigate('/gallery')}
                  className="w-full mt-3 p-3 text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
