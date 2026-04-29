import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="container">
      <motion.section
        className="hero"
        style={{ paddingBottom: '2rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.25, 1] }}
      >
        <span className="hero-tag">About</span>
        <h1>About</h1>
      </motion.section>

      <motion.div
        className="about-layout"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.25, 1] }}
      >
        <div className="about-text">
          <p>
            Visual artist and photographer based in Finland.
          </p>
          <p>
            My practice combines oil on canvas, 35mm film, and digital photography. Grounded in a documentary approach, the work captures unforced moments, natural light, and the textures of the everyday.
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
              <a href="mailto:saarimaa7@gmail.com" className="about-email">
                saarimaa7@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
