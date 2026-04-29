interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

/**
 * Ultra-optimized image component.
 * Uses native browser loading for minimum latency.
 * No React-state controlled delays or complex animations.
 */
export default function LazyImage({ src, alt, className = '', priority = false }: LazyImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`instant-image ${className}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{
                opacity: 1
            }}
            // @ts-ignore - fetchpriority is a new attribute
            fetchpriority={priority ? 'high' : 'auto'}
        />
    );
}
