import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Artwork } from '../data';
import LazyImage from './LazyImage';

interface ArtworkModalProps {
    artwork: Artwork | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

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

    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

    // Reset size index when artwork changes
    useEffect(() => {
        setSelectedSizeIndex(0);
        setIsLightboxOpen(false);
    }, [artwork]);

    if (!artwork) return null;

    const hasImages = artwork.images && artwork.images.length > 0;
    const album = hasImages ? artwork.images! : (artwork.image ? [artwork.image] : []);

    // Interactive ordering logic for photography
    const hasPricing = artwork.pricing && artwork.pricing.length > 0;
    const currentPrice = hasPricing ? artwork.pricing![selectedSizeIndex].price : (artwork.price || '');
    const currentSize = hasPricing ? artwork.pricing![selectedSizeIndex].size : (artwork.dimensions || '');

    const emailSubject = `Inquiry: ${artwork.title}`;
    const emailBody = `Hi! I'm interested in "${artwork.title}"${hasPricing ? ` in size ${currentSize} (${currentPrice})` : ''}. 

[Your message here]`;

    const mailtoLink = `mailto:saarimaa7@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

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
                            {/* Image / Carousel side */}
                            <div className="modal-image-container">
                                {album.length > 1 ? (
                                    <div className="embla" ref={emblaRef}>
                                        <div className="embla__container">
                                            {album.map((img, i) => (
                                                <div className="embla__slide" key={i}>
                                                    <div className="modal-image-clickable" onClick={() => setIsLightboxOpen(true)}>
                                                        <LazyImage
                                                            src={img}
                                                            alt={`${artwork.title} view ${i + 1}`}
                                                            className="modal-image-carousel"
                                                            priority={i === 0}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Controls */}
                                        <button className="embla__prev" onClick={scrollPrev}>
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button className="embla__next" onClick={scrollNext}>
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Dots */}
                                        <div className="embla__dots">
                                            {scrollSnaps.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
                                                    onClick={() => scrollTo(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="modal-single-image">
                                        {artwork.image ? (
                                            <div className="modal-image-clickable" onClick={() => setIsLightboxOpen(true)}>
                                                <img src={artwork.image} alt={artwork.title} className="modal-image" />
                                            </div>
                                        ) : (
                                            <div className="modal-placeholder">{artwork.placeholder}</div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Details side */}
                            <div className="modal-details">
                                <h1 className="modal-title">{artwork.title}</h1>

                                <div className="info-list">
                                    <div className="info-item">
                                        <span className="info-label">Medium & Year</span>
                                        <span className="info-value">{artwork.meta}</span>
                                    </div>

                                    {artwork.status && (
                                        <div className="info-item">
                                            <span className="info-label">Status</span>
                                            <span className={`info-value status-${artwork.status}`}>
                                                {artwork.status === 'available' ? 'Available' : 'Sold'}
                                            </span>
                                        </div>
                                    )}

                                    {artwork.edition && (
                                        <div className="info-item">
                                            <span className="info-label">Edition</span>
                                            <span className="info-value">{artwork.edition}</span>
                                        </div>
                                    )}

                                    {hasPricing ? (
                                        <>
                                            <div className="info-item">
                                                <span className="info-label">Size (unframed)</span>
                                                <select
                                                    className="size-selector"
                                                    value={selectedSizeIndex}
                                                    onChange={(e) => setSelectedSizeIndex(parseInt(e.target.value))}
                                                >
                                                    {artwork.pricing!.map((opt, i) => (
                                                        <option key={i} value={i}>{opt.size}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="info-item">
                                                <span className="info-label">Price</span>
                                                <span className="info-value">{currentPrice}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {artwork.dimensions && (
                                                <div className="info-item">
                                                    <span className="info-label">Size</span>
                                                    <span className="info-value">{artwork.dimensions}</span>
                                                </div>
                                            )}

                                            {artwork.price && (
                                                <div className="info-item">
                                                    <span className="info-label">Price</span>
                                                    <span className="info-value">{artwork.price}</span>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {artwork.type === 'painting' && artwork.hasPrints && (
                                    <div className="prints-note">
                                        Also available as high quality fine art prints.
                                    </div>
                                )}

                                {artwork.status === 'sold' ? (
                                    <div className="modal-sold-btn">
                                        Sold
                                    </div>
                                ) : (
                                    <div className="modal-actions">
                                        <a href={mailtoLink} className="modal-shop-btn">
                                            {artwork.type === 'photography' ? 'ORDER THIS PRINT' : 'ASK ABOUT THIS PIECE'} <ArrowRight size={16} />
                                        </a>
                                        <span className="modal-email-fallback">saarimaa7@gmail.com</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>
                            <X size={32} />
                        </button>

                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={album[selectedIndex] || artwork.image}
                                alt={artwork.title}
                                className="lightbox-image"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatePresence>
    );
}
