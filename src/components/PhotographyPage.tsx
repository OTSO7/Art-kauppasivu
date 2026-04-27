import { useState } from 'react';
import { photography, Artwork } from '../data';
import ArtworkModal from './ArtworkModal';

export default function PhotographyPage() {
    const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

    return (
        <div className="container">
            <section className="page-hero">
                <span className="hero-tag">02 — Photography</span>
                <h1 className="page-heading">Photography</h1>
                <p className="page-desc">
                    Analog 35mm film — street scenes, intimate portraits, and
                    Nordic landscapes.
                </p>
            </section>

            <div className="artwork-grid photography-grid">
                {photography.map((art, i) => (
                    <div
                        key={art.id}
                        className={`artwork-card ${art.span} ${art.aspect}`}
                        style={{ animationDelay: `${i * 80}ms` }}
                        onClick={() => setSelectedArt(art)}
                    >
                        <div className="image-wrapper">
                            {art.image ? (
                                <img src={art.image} alt={art.title} className="placeholder-img" />
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
