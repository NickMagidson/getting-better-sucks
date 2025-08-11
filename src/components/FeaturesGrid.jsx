'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function FeaturesGrid() {
  const featuresRef = useRef(null);

  // Replicate Webflow scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate feature cards
          const featureCards = entry.target.querySelectorAll('.grid-feature-holder');
          featureCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 100);
          });

          // Animate stats boxes with 3D effect
          const statsBoxes = entry.target.querySelectorAll('.perspective');
          statsBoxes.forEach((box, index) => {
            setTimeout(() => {
              const boxElement = box.querySelector('.boxes');
              boxElement.style.transform = 'translate3d(0, 0, 0) rotateX(0deg)';
              boxElement.style.opacity = '1';
              
              // Animate inner content
              const innerElements = box.querySelectorAll('.box-paragraph-holder, .box-heading-holder');
              innerElements.forEach((element, innerIndex) => {
                setTimeout(() => {
                  element.style.transform = 'translate3d(0, 0, 0)';
                  element.style.opacity = '1';
                }, innerIndex * 100);
              });
            }, (index + 6) * 150); // Delay after feature cards
          });
        }
      });
    }, observerOptions);

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="section overflow-hidden" id="Pricing" ref={featuresRef}>
      <div className="container">
        <div className="line"></div>
        <div className="spacing">
          <div className="grid-features">
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Mindfulness icon" 
                className="grid-icon" 
                src="/683cac73bd28d04a527df573_Icons_06.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Mindfulness</h5>
              <p>Learn to reconnect with the present moment through calming breath.</p>
            </div>
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Wellness coaching icon" 
                className="grid-icon" 
                src="/683cac7361cd08b273eed54d_Icons_05.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Wellness Coaching</h5>
              <p>One-on-one sessions tailored to your unique needs, helping you build.</p>
            </div>
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Emotional healing icon" 
                className="grid-icon" 
                src="/683cac7353773d9881afe726_Icons_03.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Emotional Healing</h5>
              <p>Safe, compassionate space to explore emotions, release old.</p>
            </div>
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Growth icon" 
                className="grid-icon" 
                src="/683cac74e9fd0ed0ef78cba7_Icons_01.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Growth</h5>
              <p>Support through life transitions, identity shifts, or burnout recovery.</p>
            </div>
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Community icon" 
                className="grid-icon" 
                src="/683cac73455971148a66bce4_Icons_04.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Community</h5>
              <p>Group circles, workshops, and guided practices to remind you.</p>
            </div>
            <div 
              className="grid-feature-holder" 
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <Image 
                alt="Balance and longevity icon" 
                className="grid-icon" 
                src="/683cac73bd270c474e373aab_Icons_02.svg" 
                width={64} 
                height={64} 
              />
              <h5 className="title">Balance &amp; Longevity</h5>
              <p>Wellness routines and rituals that promote long-term harmony between.</p>
            </div>
          </div>
          <div className="grid-boxes">
            <div className="perspective">
              <div 
                className="boxes" 
                style={{
                  transform: 'translate3d(0, 150px, 0) rotateX(-70deg)',
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
              >
                <div 
                  className="box-paragraph-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <p className="white-paragraph">Clients Guided</p>
                </div>
                <div 
                  className="box-heading-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <div className="number">50</div>
                  <div className="yellow-text">K</div>
                </div>
              </div>
            </div>
            <div className="perspective">
              <div 
                className="boxes" 
                style={{
                  transform: 'translate3d(0, 150px, 0) rotateX(-70deg)',
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
              >
                <div 
                  className="box-paragraph-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <p className="white-paragraph">Success Rate</p>
                </div>
                <div 
                  className="box-heading-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <div className="number">60</div>
                  <div className="yellow-text">%</div>
                </div>
              </div>
            </div>
            <div className="perspective">
              <div 
                className="boxes" 
                style={{
                  transform: 'translate3d(0, 150px, 0) rotateX(-70deg)',
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s ease, opacity 0.8s ease'
                }}
              >
                <div 
                  className="box-paragraph-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <p className="white-paragraph">Minutes of Mindfulness</p>
                </div>
                <div 
                  className="box-heading-holder" 
                  style={{
                    transform: 'translate3d(0, 35px, 0)',
                    opacity: 0,
                    transition: 'transform 0.6s ease, opacity 0.6s ease'
                  }}
                >
                  <div className="number">100</div>
                  <div className="yellow-text">M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
