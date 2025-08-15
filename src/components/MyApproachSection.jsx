'use client';

import Image from 'next/image';

// Converted from Webflow "My Approach to Healing" section
// Original classes preserved for exact visual match
export default function MyApproachSection() {
  return (
    <>
      {/* Approach Text Section */}
      <div className="section bg" data-w-id="727270b5-b81a-0de8-61f3-4c20cd6f1bf2">
        <div className="container">
          <div className="spacing">
            <div className="center-text-holder">
              <div className="heading-holder">
                <div className="fade-in-on-scroll">
                  <h2>My Approach to Healing</h2>
                </div>
              </div>
              <div className="paragraph-holder">
                <p>
                  I believe that true wellness starts from within. My work blends modern mindfulness practices with ancient breathwork techniques to support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="profile-picture-holder">
          <div className="profile-picture-container">
            <Image 
              alt="Luna's profile picture" 
              className="profile-picture" 
              src="/683cac746a6b1fb8aae971de_image.avif" 
              width={400} 
              height={400}
              loading="lazy"
            />
          </div>
          <Image 
            alt="Decorative line" 
            className="line-image image" 
            src="/6844ad3f763b8fac9fe80e56_Line.svg" 
            width={200} 
            height={100}
            loading="lazy"
          />
          {/* Lottie animation placeholder - implement with proper Lottie library in production */}
          <div 
            className="line-image lottie" 
            data-animation-type="lottie" 
            data-autoplay="0" 
            data-default-duration="0" 
            data-direction="1" 
            data-duration="1.0166666666666666" 
            data-is-ix2-target="1" 
            data-loop="0" 
            data-renderer="svg" 
            data-src="https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/6845a5efe04c328c6427e525_Simple%20Line.json"
            data-w-id="397fb5af-e890-a5bd-110e-dc6ad801916a"
          >
            {/* Placeholder for Lottie animation - replace with proper implementation */}
          </div>
        </div>
      </div>
    </>
  );
}
