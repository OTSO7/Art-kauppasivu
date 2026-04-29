export default function AboutPage() {
  return (
    <div className="container">
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <span className="hero-tag">About</span>
        <h1>About</h1>
      </section>

      <div className="about-layout">
        <div className="about-text">
          <p>
            Visual artist and photographer based in Finland.
          </p>
          <p>
            My practice combines oil on canvas, 35mm film, and digital photography. Grounded in a documentary approach, the work captures unforced moments, natural light, and the textures of the everyday.
          </p>
          <p>
            Kameralinssin läpi nähty valo siirtyy nykyään yhä useammin suoraan kankaalle siveltimenvetoina. Se mikä alkoi valon taltioimisena filmille, on syventynyt haluun rakentaa tuo valo kerros kerrokselta itse.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <div className="detail-label">Based in</div>
            <div className="detail-value">Vaasa, Finland</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Mediums</div>
            <div className="detail-value">Oil on canvas · 35mm film · digital photography</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Availability</div>
            <div className="detail-value">Commissions · prints · exhibitions</div>
          </div>
          <div className="detail-block">
            <div className="detail-label">Contact</div>
            <div className="detail-value">
              <a href="mailto:art@osaarimaa.com" className="about-email">
                art@osaarimaa.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
