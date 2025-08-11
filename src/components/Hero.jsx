'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  // Replicate Webflow animation using CSS transitions instead of transform styles
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-load-01, .animate-on-load-02, .animate-on-load-03, .animate-on-load-04');
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      animateElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transform = 'translate3d(0, 0, 0)';
          element.style.opacity = '1';
        }, index * 100); // Stagger animations by 100ms
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="hero-holder" style={{ minHeight: 'auto' }}>
          <div className="hero-content">
            <div className="hero-heading-holder">
              <div 
                className="animate-on-load-01" 
                style={{
                  transform: 'translate3d(0, 45px, 0)',
                  opacity: 0,
                  transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
              >
                <h1 className="title">
                  <em>Embrace</em> Your Journey to <em>Inner Peace</em>
                </h1>
              </div>
            </div>
            <div className="hero-paragraph-holder">
              <div 
                className="animate-on-load-02" 
                style={{
                  transform: 'translate3d(0, 45px, 0)',
                  opacity: 0,
                  transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
              >
                <p className="paragraph">
                  Personalized wellness coaching to help you find balance, clarity, and vitality in everyday life.
                </p>
              </div>
            </div>
            <div 
              className="animate-on-load-03" 
              style={{
                transform: 'translate3d(0, 45px, 0)',
                opacity: 0,
                transition: 'transform 0.8s ease, opacity 0.8s ease'
              }}
            >
              <a className="fancy-button w-inline-block" href="/contact">
                <div className="fancy-button-text">Book Free Consultation</div>
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
              </a>
            </div>
          </div>
          <div className="hero-image-holder">
            <div 
              className="animate-on-load-04" 
              style={{
                transform: 'translate3d(0, 45px, 0)',
                opacity: 0,
                transition: 'transform 0.8s ease, opacity 0.8s ease'
              }}
            >
              <Image
                alt="Hero image showing wellness and inner peace"
                className="hero-image"
                src="/683cac745b0230cea967580d_Hero.jpg"
                width={1710}
                height={1200}
                priority
                sizes="(max-width: 1710px) 100vw, 1710px"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
