import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Artwork } from '../data';

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
                            <div className="modal-image-container" onClick={onClose}>
                                {artwork.image ? (
                                    <img src={artwork.image} alt={artwork.title} className="modal-image" onClick={(e) => e.stopPropagation()} />
                                ) : (
                                    <div className="modal-placeholder" onClick={(e) => e.stopPropagation()}>{artwork.placeholder}</div>
                                )}
                            </div>

                            {/* Details side */}
                            <div className="modal-details">
                                <h2 className="modal-title">{artwork.title}</h2>

                                <div className="info-list">
                                    <div className="info-item">
                                        <span className="info-label">Medium & Year</span>
                                        <span className="info-value">{artwork.meta}</span>
                                    </div>

                                    {artwork.price && (
                                        <div className="info-item">
                                            <span className="info-label">Price</span>
                                            <span className="info-value">{artwork.price}</span>
                                        </div>
                                    )}
                                </div>

                                <a href={`mailto:art@osaarimaa.com?subject=Inquiry: ${artwork.title}`} className="modal-shop-btn">
                                    Osta teos / Inquire about this piece <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
