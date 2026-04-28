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
        <Link to="/" className="site-logo" style={{ padding: 0 }}>
          <img src="/assets/logo/osaarimaa.png" alt="O.Saarimaa" style={{ height: '52px', width: 'auto' }} />
        </Link>
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
