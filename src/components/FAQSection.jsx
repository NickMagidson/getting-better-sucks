'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function FAQSection() {
  // State to track which FAQ item is open (null means all closed)
  const [openFAQ, setOpenFAQ] = useState(null);
  const fadeInRefs = useRef([]);

  // FAQ data - extracted from the original HTML
  const faqs = [
    {
      id: 1,
      question: "What can I expect during a session?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      hasBg: true
    },
    {
      id: 2,
      question: "Do I need prior experience with meditation or coaching?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      hasBg: false
    },
    {
      id: 3,
      question: "Are sessions online or in-person?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      hasBg: true
    },
    {
      id: 4,
      question: "How long is each session?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      hasBg: false
    },
    {
      id: 5,
      question: "What can I expect during a session?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      hasBg: true
    }
  ];

  // Handle FAQ toggle functionality - replaces Webflow's accordion behavior
  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  // Replicate fade-in-on-scroll animations using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    fadeInRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Add ref to the fadeInRefs array
  const addToRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  return (
    <div className="section overflow-hidden" id="Pricing">
      <div className="container">
        <div className="spacing">
          {/* Header Section */}
          <div className="left-title">
            <div 
              className="fade-in-on-scroll"
              ref={addToRefs}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
              }}
            >
              <h2 className="title">
                <em>Questions? We're Here to Help you get started.</em>
              </h2>
            </div>
            <div 
              className="fade-in-on-scroll"
              ref={addToRefs}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '0.2s'
              }}
            >
              <div className="feature-paragraph-holder">
                <p>Whether you're new to wellness or exploring deeper support, we know you may have questions.</p>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="questions-holder-2">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className={`questions-container-2 ${!faq.hasBg ? 'no-bg' : ''}`}
              >
                <div 
                  className="question-2"
                  onClick={() => toggleFAQ(faq.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="question-icon-holder">
                    {/* Single icon with spin animation on click */}
                    <img 
                      alt="" 
                      className={` ${openFAQ === faq.id ? 'spinning' : ''}`}
                      loading="lazy" 
                      src="/67d0d63722d4148ddf75691d_Plus_Icon.svg"
                      style={{
                        transition: 'transform 0.3s ease',
                        transform: openFAQ === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                  <div className="question-text-2">{faq.question}</div>
                </div>
                
                {/* Answer section with smooth expand/collapse */}
                <div 
                  className="answer-holder-2"
                  style={{
                    maxHeight: openFAQ === faq.id ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                    opacity: openFAQ === faq.id ? 1 : 0
                  }}
                >
                  <div className="answer-text-2">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="pricing-footer">
            <div 
              className="fade-in-on-scroll"
              ref={addToRefs}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '0.4s'
              }}
            >
              <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
            <div 
              className="fade-in-on-scroll-delay"
              ref={addToRefs}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '0.6s'
              }}
            >
              <Link className="button w-button" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* CSS for fade-in animations */
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Spin animation keyframes */
        @keyframes spinIcon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(45deg); }
        }

        /* Question icon with spin animation */
        .question-icon-2.spinning {
          animation: spinIcon 0.3s ease-out forwards;
        }

        /* Hover effects for questions */
        .question-2:hover {
          opacity: 0.8;
        }

        /* Ensure proper positioning for icon */
        .question-icon-holder {
          position: relative;
          display: inline-block;
        }

        /* Add a subtle scale effect on hover */
        .question-2:hover .question-icon-2 {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}

/* 
CONVERSION NOTES:
1. Converted class -> className for JSX compatibility
2. Replaced <a> with Next.js Link component for internal navigation
3. Implemented accordion functionality using React state (replaces Webflow interactions)
4. Added smooth expand/collapse animations using CSS transitions
5. Implemented fade-in-on-scroll using Intersection Observer API (replaces Webflow animations)
6. Maintained all original Webflow CSS classes for styling consistency
7. Added interactive hover states and click handlers
8. Converted inline SVG icons to external files in /public directory
9. Used styled-jsx for component-specific styles to avoid global conflicts
10. Preserved exact layout structure and visual design from original Webflow export
*/
