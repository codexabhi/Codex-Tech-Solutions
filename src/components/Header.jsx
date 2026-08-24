import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assetes/image/logo.png" alt="Codex Tech Solutions Logo" width="150" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/web-development"><i className="fas fa-code"></i> Web Development</Link></li>
                  <li><Link className="dropdown-item" to="/creative-design"><i className="fas fa-desktop"></i> Website Design</Link></li>
                  <li><Link className="dropdown-item" to="/wordpress-development"><i className="fab fa-wordpress"></i> WordPress Website Development</Link></li>
                  <li><Link className="dropdown-item" to="/digital-marketing"><i className="fas fa-bullhorn"></i> Digital Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/creative-design"><i className="fas fa-paint-brush"></i> Creative Design</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industries">Industries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/why-choose-us">Why Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="cta-btn">Dashboard</Link>
                <button onClick={handleLogout} className="cta-btn ms-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="cta-btn">Log In</Link>
                <Link to="/signup" className="cta-btn ms-2">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
