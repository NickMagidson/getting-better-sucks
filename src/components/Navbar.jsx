'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './navbar.css';

// Converted from Webflow navbar section
// Original classes preserved with minor React adjustments
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div 
      className="navbar w-nav" 
      data-animation="default" 
      data-collapse="medium" 
      data-duration="400" 
      data-easing="ease" 
      data-easing2="ease" 
      role="banner"
    >
      <div className="container navbar-container">
        <div className="navbar-holder">
          <div className="navbar-container">
            {/* Brand/Logo - converted href to Link component */}
            <Link 
              href="/" 
              className={`brand w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              <Image 
                src="/logo.svg" 
                alt="Serenya Logo" 
                className="brand-image" 
                width={120}
                height={40}
                loading="lazy"
              />
            </Link>

            {/* Navigation Menu */}
            <nav 
              className={`nav-menu w-nav-menu ${isMobileMenuOpen ? 'w--open' : ''}`} 
              role="navigation"
            >
              <div className="nav-menu-link-holder">
                <div className="nav-menu-link-container">
                  <div className="nav-links">
                    {/* Navigation Links - converted to Next.js Link components */}
                    <Link 
                      href="/" 
                      className={`nav-link w-nav-link ${pathname === '/' ? 'w--current' : ''}`}
                      aria-current={pathname === '/' ? 'page' : undefined}
                    >
                      Home
                    </Link>
                    {/* <Link 
                      href="/about" 
                      className={`nav-link w-nav-link ${pathname === '/about' ? 'w--current' : ''}`}
                      aria-current={pathname === '/about' ? 'page' : undefined}
                    >
                      About
                    </Link> */}
                    <Link 
                      href="/blog" 
                      className={`nav-link w-nav-link ${pathname === '/blog' ? 'w--current' : ''}`}
                      aria-current={pathname === '/blog' ? 'page' : undefined}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/contact" 
                      className={`nav-link w-nav-link ${pathname === '/contact' ? 'w--current' : ''}`}
                      aria-current={pathname === '/contact' ? 'page' : undefined}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="nav-button-holder">
                  <a 
                    className="button w-button" 
                    href="https://webflow.com/templates/designers/over-sight" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Template
                  </a>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button - converted to React onClick handler */}
            <div 
              className={`menu-button w-nav-button ${isMobileMenuOpen ? 'w--open' : ''}`}
              onClick={toggleMobileMenu}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleMobileMenu();
                }
              }}
              aria-label="Toggle mobile menu"
            >
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
