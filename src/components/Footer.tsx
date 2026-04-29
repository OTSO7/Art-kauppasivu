import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <span className="footer-text">© 2026 Otto Saarimaa</span>
                <div className="footer-links">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </footer>
    );
}
