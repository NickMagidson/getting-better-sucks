'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href) => {
    return pathname === href;
  };

  return (
    <div className="navbar w-nav" data-collapse="medium" role="banner">
      <div className="container navbar-container">
        <div className="navbar-holder">
          <div className="navbar-container">
            {/* Brand/Logo */}
            <Link href="/" className={`brand w-nav-brand ${isActiveLink('/') ? 'w--current' : ''}`}>
              <img 
                alt="Serenya Logo" 
                className="brand-image" 
                loading="lazy" 
                src="/w-logo.svg"
              />
            </Link>

            {/* Navigation Menu */}
            <nav className={`nav-menu w-nav-menu ${isMenuOpen ? 'w--open' : ''}`} role="navigation">
              <div className="nav-menu-link-holder">
                <div className="nav-menu-link-container">
                  <div className="nav-links">
                    <Link 
                      href="/" 
                      className={`nav-link w-nav-link ${isActiveLink('/') ? 'w--current' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className={`nav-link w-nav-link ${isActiveLink('/about') ? 'w--current' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/blog" 
                      className={`nav-link w-nav-link ${isActiveLink('/blog') ? 'w--current' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/contact" 
                      className={`nav-link w-nav-link ${isActiveLink('/contact') ? 'w--current' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="nav-button-holder">
                  <a 
                    className="button" 
                    href="https://webflow.com/templates/designers/over-sight" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Template
                  </a>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="menu-button w-nav-button"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <div className="icon w-icon-nav-menu"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
