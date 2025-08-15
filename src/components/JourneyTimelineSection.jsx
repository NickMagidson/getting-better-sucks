'use client';

import Link from 'next/link';

// Converted from Webflow journey timeline section
// Original classes preserved for exact visual match
export default function JourneyTimelineSection() {
  const journeySteps = [
    {
      title: "Breathwork Discovery",
      description: "A pivotal moment that helped me manage anxiety and reconnect with my inner calm."
    },
    {
      title: "First Yoga Retreat", 
      description: "Immersed in movement, silence, and healing. I found clarity through stillness."
    },
    {
      title: "Becoming a Certified Instructor",
      description: "Transformed passion into purpose — to guide others on their healing path."
    },
    {
      title: "Breathwork Discovery",
      description: "A pivotal moment that helped me manage anxiety and reconnect with my inner calm."
    },
    {
      title: "First Yoga Retreat",
      description: "Immersed in movement, silence, and healing. I found clarity through stillness."
    },
    {
      title: "Launching Serenya",
      description: "The culmination of my personal journey — a space for others to breathe, heal, and grow."
    }
  ];

  return (
    <div className="section">
      <div className="proggress-holder">
        <div className="proggress-container">
          <div className="proggess-holder">
            <div className="proggess-text">
              <div className="fade-in-on-scroll">
                <h1 className="white-title">
                  How I <em>Got Here</em>
                </h1>
              </div>
              <div className="paragraph-holder m">
                <p className="white-paragraph">
                  My own healing journey began after years of burnout and anxiety. I turned to breathwork as a last resort — and it changed everything. Now I share the same tools that helped me find clarity, calm, and purpose.
                </p>
              </div>
              <div className="fade-in-on-scroll">
                <Link className="button accent w-button" href="/contact">
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className="proggess-tree-holder">
              <div className="proggess-tree-line-holder">
                <div className="proggess-tree-line"></div>
              </div>
              
              {journeySteps.map((step, index) => (
                <div key={index} className="proggess-tree-content">
                  <div className="proggess-tree-dot"></div>
                  <div className="proggess-tree-inside">
                    <div className="proggess-title">{step.title}</div>
                    <p className="proggess-paragraph">{step.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="proggess-box"></div>
              <div className="proggess-box bot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
