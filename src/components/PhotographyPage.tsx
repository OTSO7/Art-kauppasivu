import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { photography, Artwork } from '../data';
import ArtworkModal from './ArtworkModal';
import LazyImage from './LazyImage';

const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVars: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.25, 1] }
    }
};

export default function PhotographyPage() {
    const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

    return (
        <div className="container">
            <section className="hero" style={{ paddingBottom: '2rem' }}>
                <span className="hero-tag">02 — Photography</span>
                <h1>Photography</h1>
                <p className="hero-intro">
                    Street scenes, intimate portraits, and
                    Nordic landscapes.
                </p>
                <br />
                <br />
                <br />
            </section>

            <div
                className="artwork-grid photography-grid"
            >
                {photography.map((art, i) => (
                    <div
                        key={art.id}
                        className={`artwork-card ${art.span} ${art.aspect}`}
                        onClick={() => setSelectedArt(art)}
                    >
                        <div className="image-wrapper">
                            {art.image ? (
                                <LazyImage
                                    src={art.image}
                                    alt={art.title}
                                    priority={i < 4}
                                    delay={i % 4 * 0.1}
                                    objectPosition={art.objectPosition}
                                />
                            ) : (
                                <div className="placeholder-img">{art.placeholder}</div>
                            )}
                        </div>
                        <div className="card-body">
                            <div className="card-title">{art.title}</div>
                            <div className="card-meta">{art.meta}</div>
                        </div>
                    </div>
                ))}
            </div>

            <ArtworkModal
                artwork={selectedArt}
                isOpen={!!selectedArt}
                onClose={() => setSelectedArt(null)}
            />
        </div>
    );
}
