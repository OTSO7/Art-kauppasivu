export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <span className="hero-tag">About</span>
        <h1 className="page-heading">About</h1>
      </section>

      <div className="about-layout">
        <div className="about-text">
          <p>
            Multidisciplinary visual artist and photographer based in
            Helsinki, Finland. Working primarily with oil on canvas and 35mm
            analog film.
          </p>
          <p>
            The work explores texture, atmosphere, and the quiet tension
            between light and darkness — informed by the Nordic landscape
            and the rhythms of everyday life.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <div className="detail-label">Based in</div>
            <div className="detail-value">Helsinki, Finland</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Mediums</div>
            <div className="detail-value">Oil on canvas · 35mm film · mixed media</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Availability</div>
            <div className="detail-value">Commissions · prints · exhibitions</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Contact</div>
            <div className="detail-value">
              <a href="mailto:hello@ottosaarimaa.com" className="about-email">
                hello@ottosaarimaa.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
