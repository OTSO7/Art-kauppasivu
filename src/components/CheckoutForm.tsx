import { useState } from 'react';
import { Lock, CreditCard, Package, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../App';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Navigation } from './Navigation';
import { useNavigate } from 'react-router-dom';

interface CheckoutFormProps {
  items: CartItem[];
  subtotal: number;
  onClearCart: () => void;
  cartItemCount: number;
}

export function CheckoutForm({ items, subtotal, onClearCart, cartItemCount }: CheckoutFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      onClearCart();
    }, 2000);
  };

  if (isComplete) {
    return (
      <>
        <Navigation
          cartItemCount={0}
        />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="mb-4">Order Confirmed!</h2>
            <p className="text-zinc-400 mb-8">
              Thank you for your purchase. You will receive a confirmation email shortly with tracking information.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation
        cartItemCount={cartItemCount}
      />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-zinc-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Package className="w-5 h-5 text-zinc-400" />
                  <h3>Shipping Address</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-zinc-300">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-zinc-300">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-zinc-300">Address</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Street address"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-zinc-300">City</Label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Helsinki"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postal" className="text-zinc-300">Postal Code</Label>
                      <Input
                        id="postal"
                        type="text"
                        placeholder="00100"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-zinc-300">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder="Finland"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-zinc-300">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+358 40 123 4567"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-zinc-400" />
                  <h3>Payment Information</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber" className="text-zinc-300">Card Number</Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName" className="text-zinc-300">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-zinc-300">Expiry Date</Label>
                      <Input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-zinc-300">CVV</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        required
                        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 mt-1.5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 h-14"
              >
                {isProcessing ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Complete Order - €{total.toLocaleString()}
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
                <Lock className="w-4 h-4" />
                <span>256-bit SSL encrypted payment</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 sticky top-24">
              <h3 className="mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-zinc-100 text-sm mb-1">{item.title}</div>
                      <div className="text-zinc-400 text-sm">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-zinc-100 text-sm">
                      €{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-zinc-800 mb-4" />
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span className="text-zinc-100">€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="h-px bg-zinc-800" />
                <div className="flex justify-between">
                  <span className="text-zinc-100">Total</span>
                  <span className="text-zinc-100">€{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
