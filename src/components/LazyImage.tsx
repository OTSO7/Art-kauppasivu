import { useState, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    delay?: number;
    objectPosition?: string;
}

/**
 * Sequential Reveal Optimized Image.
 * Combines high-speed parallel loading with a controlled visual staggered reveal.
 */
export default function LazyImage({ src, alt, className = '', priority = false, delay = 0, objectPosition }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    // Trigger reveal only after image is loaded AND staggered delay is met
    useEffect(() => {
        if (isLoaded) {
            const timer = setTimeout(() => {
                setShouldShow(true);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoaded, delay]);

    return (
        <img
            src={src}
            alt={alt}
            className={`instant-image ${shouldShow ? 'is-revealed' : ''} ${className}`}
            style={{ objectPosition }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            // @ts-ignore - fetchpriority is a new attribute
            fetchpriority={priority ? 'high' : 'auto'}
        />
    );
}
