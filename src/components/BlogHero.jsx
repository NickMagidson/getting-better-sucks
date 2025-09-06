'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// Converted from Webflow blog hero section
// Includes animation classes and featured blog post display
export default function BlogHero() {
  useEffect(() => {
    // Simple animation on load - replaces Webflow's animation system
    const animateElements = document.querySelectorAll('.animate-on-load-01, .animate-on-load-02, .animate-on-load-03');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate3d(0, 0, 0)';
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section">
      <div className="container no-padding-bot">
        <div className="about-hero-content">
          <div 
            className="animate-on-load-01" 
            style={{
              WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0,
              transition: 'all 0.6s ease-out'
            }}
          >
            <h1><em>Insights for a Balanced Life</em></h1>
          </div>
          <div className="about-hero-paragraph-holder">
            <div 
              className="animate-on-load-02" 
              style={{
                WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
                transition: 'all 0.6s ease-out 0.2s'
              }}
            >
              <p className="paragraph">
                Explore mindful practices, wellness tips, and stories to support your journey inward. 
                Whether you're seeking clarity, calm, or inspiration, our blog is here to guide you 
                one breath at a time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Blog Post */}
        <div className="hero-blog-holder">
          <div 
            className="animate-on-load-03" 
            style={{
              WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0,
              transition: 'all 0.6s ease-out 0.4s'
            }}
          >
            <div className="blog-grid-twos-wrapper w-dyn-list">
              <div className="content w-dyn-items" role="list">
                <div className="blog-grid-twos-item w-dyn-item" role="listitem">
                  <Link className="blog-item hoziontal w-inline-block" href="/blog/business-consulting-101">
                    <Image 
                      alt="Business consulting guide illustration" 
                      className="blog-thumbnail horizontal" 
                      src="/6844bb1f53fa2b65f941ef9b_Blog_Images_03.jpg" 
                      width={600}
                      height={400}
                      priority
                    />
                    <div className="blog-conte featured-content">
                      <div className="blog-date">January 4, 2025</div>
                      <div className="blog-title l">Business Consulting 101: A Comprehensive Guide</div>
                      <p>A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
