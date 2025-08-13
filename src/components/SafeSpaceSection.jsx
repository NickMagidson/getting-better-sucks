'use client';

import { useEffect, useRef } from 'react';

export default function SafeSpaceSection() {
  const fadeInRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Handle fade-in animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate3d(0, 0, 0)';
          entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
      });
    }, observerOptions);

    // Observe fade-in elements
    fadeInRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translate3d(0, 45px, 0)';
        observer.observe(ref);
      }
    });

    // Handle image animations - replicate the Webflow staggered fade-in
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // First image appears immediately
          if (entry.target.dataset.imageIndex === '0') {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transition = 'opacity 1s ease';
            }, 200);
          }
          // Second image appears with delay
          if (entry.target.dataset.imageIndex === '1') {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transition = 'opacity 1s ease';
            }, 600);
          }
        }
      });
    }, observerOptions);

    // Observe images
    imageRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        imageObserver.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  const addToFadeInRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  const addToImageRefs = (el, index) => {
    if (el && !imageRefs.current.includes(el)) {
      el.dataset.imageIndex = index.toString();
      imageRefs.current.push(el);
    }
  };

  return (
    <div className="section overflow-hidden" id="Pricing">
      <div className="container">
        <div className="spacing">
          <div className="new-features-holder">
            <div className="w-layout-grid new-features-grid">
              <div 
                className="feature-grid-content" 
                id="w-node-_4e283ee6-2316-29fb-079b-76cf86d3cbfb-2cbab422"
              >
                <div className="left-title">
                  <div 
                    className="fade-in-on-scroll"
                    ref={addToFadeInRefs}
                  >
                    <h2 className="title">
                      <em>Your Safe Space for Calm &amp; Clarity</em>
                    </h2>
                  </div>
                  <div 
                    className="fade-in-on-scroll"
                    ref={addToFadeInRefs}
                  >
                    <div className="feature-paragraph-holder">
                      <p>
                        We believe that true healing starts with presence. Whether you&apos;re new to mindfulness or looking to deepen your journey, our space is open to you &mdash; online or in person.
                      </p>
                    </div>
                  </div>
                  <div className="list-with-icons">
                    <div className="list-with-icon">
                      <img 
                        alt="Clock icon indicating daily hours" 
                        className="list-icon" 
                        loading="lazy" 
                        src="/683cb7a2ba958d15093fa67b_Icons_07.svg"
                      />
                      <p className="paragraph">
                        Open daily from <strong className="dark-text">7:00 AM</strong> to <strong className="dark-text">6:00 PM</strong>
                      </p>
                    </div>
                    <div className="list-with-icon">
                      <img 
                        alt="Availability icon" 
                        className="list-icon" 
                        loading="lazy" 
                        src="/683cb7a2ea25314590745078_Icons_08.svg"
                      />
                      <p className="paragraph">Available during all open hours</p>
                    </div>
                  </div>
                  <div 
                    className="fade-in-on-scroll"
                    ref={addToFadeInRefs}
                  >
                    <a className="button w-button" href="/about">Learn More</a>
                  </div>
                </div>
              </div>
              <div 
                className="feature-graphic-holder" 
                id="w-node-_4e283ee6-2316-29fb-079b-76cf86d3cc16-2cbab422"
              >
                <div className="feature-image-container">
                  <img 
                    alt="Peaceful wellness space interior" 
                    className="feature-image-full" 
                    loading="lazy" 
                    src="/jared-rice-NTyBbu66_SI-unsplash.jpg"
                    ref={(el) => addToImageRefs(el, 0)}
                    style={{ opacity: 0 }}
                  />
                  <img 
                    alt="Serene meditation environment" 
                    className="feature-image-full _02" 
                    loading="lazy" 
                    src="/jared-rice-NTyBbu66_SI-unsplash.jpg"
                    ref={(el) => addToImageRefs(el, 1)}
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
