'use client';

import Image from 'next/image';
import Link from 'next/link';

// Converted from Webflow about hero section
// Original classes preserved for exact visual match
export default function AboutHero() {
  return (
    <div className="section bg">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-heading-holder">
              <div 
                className="animate-on-load-01" 
                style={{
                  WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                <h1 className="big-title">
                  <em>Hi, I'm Luna — your wellness coach</em>
                </h1>
              </div>
            </div>
            <div className="about-hero-paragraph-holder">
              <div 
                className="animate-on-load-02" 
                style={{
                  WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0
                }}
              >
                <p className="paragraph">
                  With a focus on mindfulness, breathwork, and self-love, I help you reconnect with your calm and rediscover balance in your daily life.
                </p>
              </div>
            </div>
            <div 
              className="animate-on-load-03" 
              style={{
                WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              <Link className="fancy-button w-inline-block" href="/contact">
                <div className="fancy-button-text">Book Free Consultation</div>
                <div className="button-icon-holder">
                  <Image 
                    alt="Arrow icon" 
                    className="button-icon" 
                    src="/683caab15ddff5862cbab460_Arrow.svg" 
                    width={24} 
                    height={24}
                    loading="lazy"
                  />
                </div>
                <div className="button-icon-holder second">
                  <Image 
                    alt="Arrow icon" 
                    className="button-icon" 
                    src="/683caab15ddff5862cbab460_Arrow.svg" 
                    width={24} 
                    height={24}
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="about-hero-video-holder">
            <div 
              className="animate-on-load-04" 
              style={{
                WebkitTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 45px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
              }}
            >
              <a className="lightbox-link w-inline-block w-lightbox" href="#">
                <div className="video-title-holder">
                  <div className="video-icon-holder">
                    <Image 
                      alt="Play icon" 
                      className="video-icon" 
                      src="/684478158b85adce8798edf4_Icon.svg" 
                      width={48} 
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <div className="video-title">
                    <div className="video-title-text">Yoga Classes</div>
                    <p className="white-paragraph">The combination of my passion.</p>
                  </div>
                </div>
                {/* Background video placeholder - in production, replace with proper video implementation */}
                <div 
                  className="bg-video w-background-video w-background-video-atom"
                  style={{
                    backgroundImage: 'url("https://cdn.prod.website-files.com/683caab15ddff5862cbab42f%2F68447986d33a94867647d70c_7521706-hd_1920_1080_25fps-poster-00001.jpg")'
                  }}
                >
                  {/* Video placeholder - implement with proper video player in production */}
                </div>
                <div className="about-video"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
