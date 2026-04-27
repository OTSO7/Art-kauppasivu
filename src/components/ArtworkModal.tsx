import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Artwork, shopItems } from '../data';

interface ArtworkModalProps {
    artwork: Artwork | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
    // Prevent scrolling on background when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!artwork) return null;

    // Find associated shop items to show availability
    const originalItem = shopItems.find(
        (s) => s.category === 'painting' && s.title.toLowerCase() === artwork.title.toLowerCase()
    );

    const printItem = shopItems.find(
        (s) => s.category === 'print' && s.title.toLowerCase().includes(artwork.title.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="modal-layout">
                            {/* Image side */}
                            <div className="modal-image-container">
                                {artwork.image ? (
                                    <img src={artwork.image} alt={artwork.title} className="modal-image" />
                                ) : (
                                    <div className="modal-placeholder">{artwork.placeholder}</div>
                                )}
                            </div>

                            {/* Details side */}
                            <div className="modal-details">
                                <div className="modal-header">
                                    <h2 className="modal-title">{artwork.title}</h2>
                                    <p className="modal-meta">{artwork.meta}</p>
                                </div>

                                <div className="modal-separator" />

                                <div className="modal-shop-info">
                                    <h3 className="shop-info-title">Availability</h3>

                                    {/* Original Painting Logic */}
                                    <div className="shop-status-row">
                                        <span className="status-label">Original:</span>
                                        {originalItem ? (
                                            originalItem.available ? (
                                                <span className="status-value available">Available — €{originalItem.price}</span>
                                            ) : (
                                                <span className="status-value sold">Sold</span>
                                            )
                                        ) : (
                                            <span className="status-value hidden">Not available</span>
                                        )}
                                    </div>

                                    {/* Prints Logic */}
                                    <div className="shop-status-row">
                                        <span className="status-label">Prints:</span>
                                        {printItem ? (
                                            printItem.available ? (
                                                <span className="status-value available">Available — from €{printItem.price}</span>
                                            ) : (
                                                <span className="status-value sold">Sold out</span>
                                            )
                                        ) : (
                                            <span className="status-value hidden">No prints available</span>
                                        )}
                                    </div>

                                    {/* Shop CTA */}
                                    {(originalItem?.available || printItem?.available) && (
                                        <Link to="/shop" className="modal-shop-btn" onClick={onClose}>
                                            View in Shop <ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
