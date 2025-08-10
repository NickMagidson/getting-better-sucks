'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = ({
  title = {
    preText: "",
    highlight1: "Embrace",
    middleText: " Your Journey to ",
    highlight2: "Inner Peace",
    postText: ""
  },
  description = "Personalized wellness coaching to help you find balance, clarity, and vitality in everyday life.",
  ctaText = "Book Free Consultation",
  ctaLink = "/contact",
  heroImageSrc = "/hero-image.jpg",
  heroImageAlt = "Hero Image",
  arrowIconSrc = "/arrow.svg",
  enableAnimations = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (enableAnimations) {
      // Trigger animations after component mounts
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [enableAnimations]);

  return (
    <div className="section">
      <div className="container">
        <div className="hero-holder">
          <div className="hero-content">
            {/* Hero Title */}
            <div className="hero-heading-holder">
              <div 
                className={`animate-on-load-01 ${isLoaded ? 'loaded' : ''}`}
                style={!enableAnimations || isLoaded ? {} : {
                  transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                <h1 className="title"><em>Embrace</em> Your Journey to <em>Inner Peace</em></h1>
              </div>
            </div>

            {/* Hero Description */}
            <div className="hero-paragraph-holder">
              <div 
                className={`animate-on-load-02 ${isLoaded ? 'loaded' : ''}`}
                style={!enableAnimations || isLoaded ? {} : {
                  transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                <p className="paragraph">{description}</p>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className={`animate-on-load-03 ${isLoaded ? 'loaded' : ''}`}
              style={!enableAnimations || isLoaded ? {} : {
                transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              <Link 
                href={ctaLink} 
                className="fancy-button w-inline-block"
              >
                <div className="fancy-button-text">{ctaText}</div>
                <div className="button-icon-holder">
                  <Image 
                    src={arrowIconSrc}
                    alt="Arrow"
                    className="button-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="button-icon-holder second">
                  <Image 
                    src={arrowIconSrc}
                    alt="Arrow"
                    className="button-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-holder">
            <div 
              className={`animate-on-load-04 ${isLoaded ? 'loaded' : ''}`}
              style={!enableAnimations || isLoaded ? {} : {
                transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                className="hero-image"
                priority
                width={1710}
                height={1200}
                sizes="(max-width: 1710px) 100vw, 1710px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
