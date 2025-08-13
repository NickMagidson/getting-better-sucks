'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const fadeInRefs = useRef([]);

  // Testimonials data - extracted from the HTML
  const testimonials = [
    {
      id: 1,
      quote: "After my sessions with Sophia, I felt a calm I hadn't experienced in years. Her guidance brought me back to myself — gently and powerfully.",
      name: "Sarah Thompson",
      position: "CEO - Apple INC",
      image: "/683caab15ddff5862cbab552_Testimonal_Image_(1).jpg"
    },
    {
      id: 2,
      quote: "The atmosphere, the energy, the coaching — everything felt aligned. It's rare to find someone who creates such a safe and open space.",
      name: "Michael Johnson",
      position: "CEO - Apple INC",
      image: "/683caab15ddff5862cbab55e_Testimonal_Image_(4).jpg"
    },
    {
      id: 3,
      quote: "I came in feeling drained and left feeling energized and clear. It's more than wellness — it's a reset for the soul.",
      name: "David Rodriguez",
      position: "CEO - Apple INC",
      image: "/683caab15ddff5862cbab55c_Testimonal_Image_(5).jpg"
    },
    // {
    //   id: 4,
    //   quote: "I didn't think breathwork could change my life until I tried it here. Now it's part of my daily routine — and I feel grounded for the first time in years.",
    //   name: "Lisa Martinez",
    //   position: "CEO - Apple INC",
    //   image: "/683caab15ddff5862cbab566_Testimonal_Image_(2).jpg"
    // },
    // {
    //   id: 5,
    //   quote: "I came in feeling drained and left feeling energized and clear. It's more than wellness — it's a reset for the soul.",
    //   name: "Emily Parker",
    //   position: "CEO - Apple INC",
    //   image: "/683caab15ddff5862cbab582_Testimonal_Image_(6).jpg"
    // },
    // {
    //   id: 6,
    //   quote: "After my sessions with Sophia, I felt a calm I hadn't experienced in years. Her guidance brought me back to myself — gently and powerfully.",
    //   name: "Alex Carter",
    //   position: "CEO - Apple INC",
    //   image: "/683caab15ddff5862cbab596_Testimonal_Image_(3).jpg"
    // }
  ];

  // Replicate Webflow fade-in-on-scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translate3d(0, 0, 0)';
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Slider navigation functions - replicate Webflow slider behavior
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 1250); // Match Webflow duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 1250); // Match Webflow duration
  };

  // Auto-slide functionality (disabled by default like in Webflow)
  // Uncomment to enable auto-slide
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="section overflow-hidden" id="Pricing">
      <div className="container">
        <div className="spacing">
          <div className="left-title">
            <div 
              className="fade-in-on-scroll"
              ref={(el) => {
                if (el && !fadeInRefs.current.includes(el)) {
                  fadeInRefs.current.push(el);
                }
              }}
              style={{
                transform: 'translate3d(0, 45px, 0)',
                opacity: 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
              }}
            >
              <h2 className="title"><em>Words from the Heart</em></h2>
            </div>
            <div 
              className="fade-in-on-scroll"
              ref={(el) => {
                if (el && !fadeInRefs.current.includes(el)) {
                  fadeInRefs.current.push(el);
                }
              }}
              style={{
                transform: 'translate3d(0, 45px, 0)',
                opacity: 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                transitionDelay: '0.1s'
              }}
            >
              <div className="feature-paragraph-holder">
                <p>Every story shared here is a reflection of connection, trust, and transformation.</p>
              </div>
            </div>
          </div>
          <div 
            className="fade-in-on-scroll"
            ref={(el) => {
              if (el && !fadeInRefs.current.includes(el)) {
                fadeInRefs.current.push(el);
              }
            }}
            style={{
              transform: 'translate3d(0, 45px, 0)',
              opacity: 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            <div className="slider w-slider">
              <div className="mask w-slider-mask">
                <div 
                  className="testimonial-slides-wrapper"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: isAnimating ? 'transform 1250ms cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                    display: 'flex',
                    width: `${testimonials.length * 100}%`
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="testimonial-slide w-slide" style={{ width: `${100 / testimonials.length}%`, height: '400px' }}>
                      <div className="testimonail-slider-container-2" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                          <Image
                            alt="Quote icon"
                            className="qoute-icon"
                            loading="lazy"
                            src="/68446c25f462de4b2673d0fc_Qoute.svg"
                            width={40}
                            height={30}
                          />
                          <div className="testimonal-qoute" style={{ flex: '1', marginBottom: '2rem' }}>
                            {testimonial.quote}
                          </div>
                        </div>
                        <div className="testimonial-user-wrapper">
                          <div className="user-image-holder">
                            <Image
                              alt={`${testimonial.name} testimonial`}
                              className="user-image"
                              loading="lazy"
                              src={testimonial.image}
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="user-content-holder">
                            <div className="user-name">
                              <div>{testimonial.name}</div>
                            </div>
                            <div className="user-job-position">
                              <div>{testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="slider-arrow w-slider-arrow-left" onClick={prevSlide} style={{ display: 'none' }}>
                <div className="arrow-holder">
                  <Image
                    alt="Previous arrow"
                    className="arrow-icon rotated"
                    loading="lazy"
                    src="/683caab15ddff5862cbab4f3_Button_Arrow.svg"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="slider-arrow right w-slider-arrow-right" onClick={nextSlide} style={{ display: 'none' }}>
                <div className="arrow-holder">
                  <Image
                    alt="Next arrow"
                    className="arrow-icon"
                    loading="lazy"
                    src="/683caab15ddff5862cbab4f3_Button_Arrow.svg"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="hide w-slider-nav w-round w-num"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonial-slides-wrapper {
          height: 100%;
        }
        
        .slider-arrow {
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        
        .slider-arrow:hover {
          opacity: 0.8;
        }
        
        .slider-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
