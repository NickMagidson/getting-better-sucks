'use client';

import Image from 'next/image';
import Link from 'next/link';

// Converted from Webflow final CTA section
// Original classes preserved for exact visual match
export default function FinalCTASection() {
  return (
    <div className="section">
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
          </div>
        </div>
        
        {/* Background Image */}
        <div className="background-image-holder">
          <Image 
            alt="Background image for CTA section" 
            className="background-image" 
            src="/684476a162d43bd845708237_image.avif" 
            fill
            sizes="100vw"
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
          <div className="cta-overlay"></div>
        </div>
      </div>
    </div>
  );
}
