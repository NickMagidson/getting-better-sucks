'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could integrate with API)
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="section">
      {/* CTA Section */}
      <div className="cta-holder-2">
        <div className="container-2">
          <div className="cta-content-2">
            <div className="cta-heading-holder">
              <div className="fade-in-on-scroll">
                <h2 className="white-heading">Start Your Healing Journey Today</h2>
              </div>
            </div>
            <div className="fade-in-on-scroll">
              <div className="paragraph-holder-2">
                <p className="white-paragraph-2">
                  Let's take the first step together toward clarity, calm, and personal growth.
                </p>
              </div>
            </div>
            <div className="from-cta">
              <div className="fade-in-on-scroll">
                <Link className="fancy-button w-inline-block" href="/contact">
                  <div className="fancy-button-text white-text">Book Free Consultation</div>
                  <div className="button-icon-holder">
                    <Image 
                      alt="Arrow icon" 
                      className="button-icon" 
                      src="/683caab15ddff5862cbab460_Arrow.svg" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                  <div className="button-icon-holder second">
                    <Image 
                      alt="Arrow icon" 
                      className="button-icon" 
                      src="/683caab15ddff5862cbab460_Arrow.svg" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="background-image-holder">
          <Image
            alt="Peaceful background for call to action"
            className="background-image"
            src="/hans-isaacson-FNS6mP4fsIs-unsplash.jpg"
            width={2839}
            height={1600}
            sizes="(max-width: 2839px) 100vw, 2839px"
          />
          <div className="cta-overlay"></div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="footer-holder">
        <div className="footer-container">
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-signup-holder">
                <div className="title-small">Join our newsletter</div>
                <div className="form-block w-form">
                  <form className="form" onSubmit={handleSubmit}>
                    <input 
                      className="text-field dark w-input" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email@example.com" 
                      required
                    />
                    <input 
                      className="button form-button w-button" 
                      type="submit" 
                      value="Sign up"
                    />
                  </form>
                  
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="success-message w-form-done">
                      <div>
                        <span>Thank you!</span> <br/><br/>We'll reach out soon
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Social Media */}
                <div className="social-media-holder">
                  <a className="social-media-container w-inline-block" href="https://ig.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                      alt="Instagram" 
                      className="social-media-image" 
                      src="/683caab15ddff5862cbab47c_Instagram_Icon.svg" 
                      width={24} 
                      height={24} 
                    />
                  </a>
                  <a className="social-media-container w-inline-block" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                      alt="Twitter" 
                      className="social-media-image" 
                      src="/683caab15ddff5862cbab4a4_Twitter_Icon.svg" 
                      width={24} 
                      height={24} 
                    />
                  </a>
                  <a className="social-media-container w-inline-block" href="mailto:email@dummy.com">
                    <Image 
                      alt="Email" 
                      className="social-media-image" 
                      src="/683caab15ddff5862cbab4c5_Mail_Icon.svg" 
                      width={24} 
                      height={24} 
                    />
                  </a>
                </div>
              </div>
              
              {/* Footer Content */}
              <div className="footer-content">
                <div className="footer-block">
                  <div className="title-small">Company</div>
                  <Link className="footer-link w--current" href="/" aria-current="page">Home</Link>
                  <Link className="footer-link" href="/about">About</Link>
                  <Link className="footer-link" href="/blog">Blog</Link>
                  <Link className="footer-link" href="/contact">Contact</Link>
                </div>
                
                <div className="footer-block">
                  <div className="title-small">Social media</div>
                  <a className="footer-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a className="footer-link" href="https://fb.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a className="footer-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
                  <a className="footer-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                
                <div className="footer-block">
                  <div className="title-small">Webflow stuff</div>
                  <Link className="footer-link" href="/template/style-guide">Style Guide</Link>
                  <Link className="footer-link" href="/template/licensing">Licensing</Link>
                  <Link className="footer-link" href="/template/instructions">Instructions</Link>
                  <Link className="footer-link" href="/template/change-log">Change Log</Link>
                  <a className="footer-link last" href="https://webflow.com/templates/html/fastest-website-template" target="_blank" rel="noopener noreferrer">GET TEMPLATE</a>
                </div>
              </div>
            </div>
            
            {/* Footer Copyright */}
            <div className="footer-divider">
              <div className="footer-copyright-holder">
                <div className="footer-copyright-center">
                  Created by <a className="dark-link" href="http://madebyoversight.com/" target="_blank" rel="noopener noreferrer">OVERSIGHT</a>
                </div>
              </div>
              <div className="footer-copyright-holder">
                <div className="footer-copyright-center">
                  Powered by <a className="dark-link" href="https://webflow.com/" target="_blank" rel="noopener noreferrer">WEBFLOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
