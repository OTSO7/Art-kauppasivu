import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { paintings, photography } from '../data';
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

export default function HomePage() {
  return (
    <div className="container">
      {/* hero */}
      <section className="hero">
        <span className="hero-tag">Visual Artist &amp; Photographer</span>
        <h1>Selected Works</h1>
        <p className="hero-intro">
          Recent personal and commissioned work.
        </p>
      </section>

      {/* paintings preview */}
      <section className="section">
        <div className="section-divider" />
        <div className="section-top">
          <div>
            <div className="section-label">01</div>
            <h2 className="section-title">Paintings</h2>
          </div>
          <Link to="/paintings" className="view-all-link">
            View all <span className="arrow">→</span>
          </Link>
        </div>
        <div className="preview-row">
          {paintings.slice(0, 3).map((art, idx) => (
            <div key={art.id}>
              <Link to="/paintings" className="preview-card">
                <div className="preview-img">
                  {art.image ? (
                    <LazyImage
                      src={art.image}
                      alt={art.title}
                      priority={idx === 0}
                    />
                  ) : (
                    <div className="placeholder-img">{art.placeholder}</div>
                  )}
                </div>
                <div className="preview-info">
                  <div className="preview-title">{art.title}</div>
                  <div className="preview-meta">{art.meta}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* photography preview */}
      <section className="section">
        <div className="section-divider" />
        <div className="section-top">
          <div>
            <div className="section-label">02</div>
            <h2 className="section-title">Photography</h2>
          </div>
          <Link to="/photography" className="view-all-link">
            View all <span className="arrow">→</span>
          </Link>
        </div>
        <div className="preview-row">
          {photography.slice(0, 3).map((art, idx) => (
            <div key={art.id}>
              <Link to="/photography" className="preview-card">
                <div className="preview-img">
                  {art.image ? (
                    <LazyImage src={art.image} alt={art.title} />
                  ) : (
                    <div className="placeholder-img">{art.placeholder}</div>
                  )}
                </div>
                <div className="preview-info">
                  <div className="preview-title">{art.title}</div>
                  <div className="preview-meta">{art.meta}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
