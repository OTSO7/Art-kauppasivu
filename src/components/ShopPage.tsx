import { useState } from 'react';
import { shopItems, ShopItem } from '../data';

type Filter = 'all' | 'painting' | 'print';

interface CartEntry {
    item: ShopItem;
    qty: number;
}

export default function ShopPage() {
    const [filter, setFilter] = useState<Filter>('all');
    const [cart, setCart] = useState<CartEntry[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    const filtered = filter === 'all'
        ? shopItems
        : shopItems.filter((s) => s.category === filter);

    const addToCart = (item: ShopItem) => {
        setCart((prev) => {
            const exists = prev.find((e) => e.item.id === item.id);
            if (exists) return prev.map((e) => e.item.id === item.id ? { ...e, qty: e.qty + 1 } : e);
            return [...prev, { item, qty: 1 }];
        });
        setCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((e) => e.item.id !== id));
    };

    const totalItems = cart.reduce((s, e) => s + e.qty, 0);
    const totalPrice = cart.reduce((s, e) => s + e.item.price * e.qty, 0);

    const filters: { key: Filter; label: string }[] = [
        { key: 'all', label: 'All' },
        { key: 'painting', label: 'Original paintings' },
        { key: 'print', label: 'Prints' },
    ];

    return (
        <div className="container">
            <section className="page-hero">
                <span className="hero-tag">Shop</span>
                <h1 className="page-heading">Shop</h1>
                <p className="page-desc">
                    Original oil paintings and limited edition archival giclée prints.
                    Each print is signed and numbered.
                </p>
            </section>

            {/* filters + cart toggle */}
            <div className="shop-toolbar">
                <div className="filter-tabs">
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            className={`filter-tab ${filter === f.key ? 'active' : ''}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
                <button className="cart-toggle" onClick={() => setCartOpen(!cartOpen)}>
                    Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </button>
            </div>

            {/* cart drawer */}
            {cartOpen && (
                <div className="cart-drawer">
                    <div className="cart-drawer-header">
                        <h3>Your Cart</h3>
                        <button className="cart-close" onClick={() => setCartOpen(false)}>×</button>
                    </div>
                    {cart.length === 0 ? (
                        <p className="cart-empty">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.map((entry) => (
                                    <div key={entry.item.id} className="cart-item">
                                        <div className="cart-item-info">
                                            <div className="cart-item-title">{entry.item.title}</div>
                                            <div className="cart-item-meta">{entry.qty} × €{entry.item.price}</div>
                                        </div>
                                        <button className="cart-remove" onClick={() => removeFromCart(entry.item.id)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-total">
                                <span>Total</span>
                                <span className="cart-total-price">€{totalPrice}</span>
                            </div>
                            <button className="btn-primary btn-checkout">Checkout →</button>
                        </>
                    )}
                </div>
            )}

            {/* product grid */}
            <div className="shop-grid">
                {filtered.map((item, i) => (
                    <div
                        key={item.id}
                        className="shop-card"
                        style={{ animationDelay: `${i * 60}ms` }}
                    >
                        <div className="shop-card-img">
                            {item.image ? (
                                <img src={item.image} alt={item.title} className="placeholder-img" />
                            ) : (
                                <div className="placeholder-img">{item.placeholder}</div>
                            )}
                            {!item.available && <div className="sold-badge">Sold</div>}
                            {item.category === 'painting' && <div className="type-badge">Original</div>}
                        </div>
                        <div className="shop-card-body">
                            <div className="shop-card-title">{item.title}</div>
                            <div className="shop-card-details">
                                <span>{item.meta}</span>
                                <span className="dot">·</span>
                                <span>{item.dimensions}</span>
                            </div>
                            <div className="shop-card-bottom">
                                <div className="shop-card-price">
                                    €{item.price}
                                </div>
                                <button
                                    className="btn-add"
                                    disabled={!item.available}
                                    onClick={() => addToCart(item)}
                                >
                                    {item.available ? 'Add to cart' : 'Sold out'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
