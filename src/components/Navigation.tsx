import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/paintings', label: 'Paintings' },
  { to: '/photography', label: 'Photography' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-logo">Otto Saarimaa</Link>
        <nav className="site-nav">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={pathname === l.to ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
