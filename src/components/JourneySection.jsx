'use client';

import { useEffect, useRef } from 'react';

export default function JourneySection() {
  const fadeInRefs = useRef([]);
  const sectionRef = useRef(null);

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

    // Handle the section-level animation with data-w-id trigger
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && sectionRef.current) {
          // Add any section-wide animations here if needed
          // This mimics the data-w-id="4b039407-a061-f08a-52df-8128daa03cf7" behavior
          sectionRef.current.classList.add('section-visible');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const addToFadeInRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  return (
    <div className="section dark-section" id="Pricing">
      <div 
        className="history-section-holder" 
        data-w-id="4b039407-a061-f08a-52df-8128daa03cf7"
        ref={sectionRef}
      >
        <div className="container journey">
          <div className="history-content">
            <div className="history-heading">
              <div 
                className="fade-in-on-scroll"
                ref={addToFadeInRefs}
              >
                <h1 className="white-title">
                  Your <em>Journey</em>, Your <em>Moments</em>
                </h1>
              </div>
            </div>
            <div className="paragraph-holder m">
              <p className="white-paragraph">
                Every path to wellness is unique. Use this space to showcase the experiences, environments, and rituals that have shaped your story.
              </p>
            </div>
            <div 
              className="fade-in-on-scroll"
              ref={addToFadeInRefs}
            >
              <a className="fancy-button w-inline-block" href="/contact">
                <div className="fancy-button-text white-text">Book Free Consultation</div>
                <div className="button-icon-holder">
                  <img 
                    alt="Arrow icon" 
                    className="button-icon" 
                    loading="lazy" 
                    src="/683caab15ddff5862cbab460_Arrow.svg"
                  />
                </div>
                <div className="button-icon-holder second">
                  <img 
                    alt="Arrow icon" 
                    className="button-icon" 
                    loading="lazy" 
                    src="/683caab15ddff5862cbab460_Arrow.svg"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="history-images-holder">
          <div className="history-images-container _01">
            <img 
              alt="Wellness journey moment - meditation space" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _02">
            <img 
              alt="Wellness journey moment - peaceful environment" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _03">
            <img 
              alt="Wellness journey moment - nature connection" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _04">
            <img 
              alt="Wellness journey moment - healing space" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _05">
            <img 
              alt="Wellness journey moment - mindful practice" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _06">
            <img 
              alt="Wellness journey moment - tranquil setting" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _08">
            <img 
              alt="Wellness journey moment - serene atmosphere" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
          <div className="history-images-container _09">
            <img 
              alt="Wellness journey moment - contemplative space" 
              className="history-image" 
              loading="eager" 
              src="/ian-stauffer-uftqFbfWGFY-unsplash.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
