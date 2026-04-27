import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <span className="footer-text">© 2024 Otto Saarimaa</span>
                <div className="footer-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
                    <a href="https://behance.net" target="_blank" rel="noopener">Behance</a>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </footer>
    );
}
