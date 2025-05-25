import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const navLinks = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
    { name: 'Recent Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="custom-header fade-in-header">
      <div className="header-inner">
        <div className="logo fade-in delay-1" onClick={() => handleNavigate('/')}>
          <h2>TS</h2>
        </div>

       <nav className="nav-links fade-in delay-1">
  {navLinks.map(link => (
    <p
      key={link.name}
      className={location.pathname === link.path ? 'active-nav' : ''}
      onClick={() => handleNavigate(link.path)}
    >
      {link.name}
    </p>
  ))}
</nav>


        <div className="header-actions fade-in delay-1">
          <button className="contact-btn" onClick={() => handleNavigate('/contact')}>
            Get In Touch
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-container">
            <button className="mobile-close" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <div className="mobile-links">
              {navLinks.map(link => (
                <p key={link.name} onClick={() => handleNavigate(link.path)}>
                  {link.name}
                </p>
              ))}
              <p onClick={() => handleNavigate('/contact')}>Get In Touch</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
