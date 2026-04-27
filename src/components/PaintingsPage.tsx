import { useState } from 'react';
import { paintings, Artwork } from '../data';
import ArtworkModal from './ArtworkModal';

export default function PaintingsPage() {
    const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

    return (
        <div className="container">
            <section className="page-hero">
                <span className="hero-tag">01 — Paintings</span>
                <h1 className="page-heading">Paintings</h1>
                <p className="page-desc">
                    Oil on canvas and mixed media works exploring texture, color,
                    and emotional depth.
                </p>
            </section>

            <div className="artwork-grid paintings-grid">
                {paintings.map((art, i) => (
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
