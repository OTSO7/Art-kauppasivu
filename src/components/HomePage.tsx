import { Link } from 'react-router-dom';
import { paintings, photography } from '../data';

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
          {paintings.slice(0, 3).map((art) => (
            <Link to="/paintings" key={art.id} className="preview-card">
              <div className="preview-img">
                {art.image ? (
                  <img src={art.image} alt={art.title} className="placeholder-img" />
                ) : (
                  <div className="placeholder-img">{art.placeholder}</div>
                )}
              </div>
              <div className="preview-info">
                <div className="preview-title">{art.title}</div>
                <div className="preview-meta">{art.meta}</div>
              </div>
            </Link>
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
          {photography.slice(0, 3).map((art) => (
            <Link to="/photography" key={art.id} className="preview-card">
              <div className="preview-img">
                {art.image ? (
                  <img src={art.image} alt={art.title} className="placeholder-img" />
                ) : (
                  <div className="placeholder-img">{art.placeholder}</div>
                )}
              </div>
              <div className="preview-info">
                <div className="preview-title">{art.title}</div>
                <div className="preview-meta">{art.meta}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* shop cta */}
      <section className="section">
        <div className="section-divider" />
        <div className="shop-cta">
          <div className="shop-cta-text">
            <h2 className="section-title">Shop</h2>
            <p className="shop-cta-desc">
              Original paintings and limited edition archival prints available for purchase.
            </p>
          </div>
          <Link to="/shop" className="btn-primary">
            Browse Shop <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
