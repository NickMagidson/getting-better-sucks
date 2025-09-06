'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * BlogPost Component - CMS Ready
 * 
 * This component is designed to work with CMS data from Contentful or similar services.
 * It maintains the original Webflow design while making it dynamic and CMS-compatible.
 * 
 * Expected CMS fields:
 * - title: string
 * - description: string  
 * - publishDate: Date
 * - slug: string
 * - featuredImage: { url: string, alt: string }
 * - content: Rich Text or HTML
 * - relatedPosts: Array of post objects
 * - socialShareUrls: object with platform URLs
 */

const BlogPost = ({ 
  // CMS data props - these would come from Contentful or your CMS
  post = {
    title: "Business Consulting 101: A Comprehensive Guide",
    description: "A comprehensive guide to understanding business consulting, its benefits, types, and how to choose the right consultant.",
    publishDate: "January 4, 2025",
    slug: "business-consulting-101",
    featuredImage: {
      url: "/683caab15ddff5862cbab458/6844bb1f53fa2b65f941ef9b_Blog_Images_03.jpg",
      alt: "Business consulting guide illustration"
    },
    content: `
      <h4>Understanding Business Consulting</h4>
      <p>Business consulting is a vital service that helps organizations improve their performance and efficiency. Consultants analyze businesses and create solutions to help them achieve their goals. This guide will explore the various aspects of business consulting, including its benefits, types, and how to choose the right consultant for your needs.</p>
      <h4>Benefits of Business Consulting</h4>
      <p>Engaging a business consultant can provide numerous advantages. They bring expertise and an outside perspective, which can be invaluable for identifying issues and opportunities. Additionally, consultants can help implement strategies that lead to increased productivity and profitability.</p>
      <blockquote>Consultants can help you see the bigger picture.</blockquote>
      <h2>Types of Business Consulting</h2>
      <ul role="list">
        <li><strong>Management Consulting</strong>: Focuses on improving organizational performance.</li>
        <li><strong>IT Consulting</strong>: Helps businesses leverage technology effectively.</li>
        <li><strong>Financial Consulting</strong>: Aids in financial planning and management.</li>
      </ul>
      <p>Choosing the right type of consultant is crucial for achieving your business objectives.</p>
    `
  },
  relatedPosts = [
    {
      title: "Navigating Business Challenges: Strategies for Success",
      description: "Strategies for overcoming common business challenges and ensuring success in a competitive landscape.",
      publishDate: "January 4, 2025",
      slug: "navigating-business-challenges",
      featuredImage: {
        url: "/683caab15ddff5862cbab458/6844bb3b2da81548f6440053_Blog_Images_05.jpg",
        alt: "Business challenges illustration"
      }
    }
  ],
  socialShareUrls = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com", 
    linkedin: "https://linkedin.com",
    copy: "#"
  }
}) => {
  // Animation states for Webflow-style animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    // Trigger load animations similar to Webflow
    setIsLoaded(true);
  }, []);

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubscriptionStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubscriptionStatus('success');
        setNewsletterEmail('');
      } else {
        setSubscriptionStatus('error');
        console.error('Newsletter subscription error:', data.error);
      }
    } catch (error) {
      setSubscriptionStatus('error');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <>
      {/* Blog Post Content Section */}
      <div className="section relative">
        <div className="container z-index-2">
          <div className="blog-grid-holder">
            <div className="blog-details-holder">
              <div className="blog-details-content">
                {/* Date */}
                <div 
                  className={`animate-on-load-01 ${isLoaded ? 'loaded' : ''}`}
                  style={!isLoaded ? {
                    transform: 'translate3d(0, 45px, 0)',
                    opacity: 0
                  } : {}}
                >
                  <div className="blog-date">{post.publishDate}</div>
                </div>

                {/* Title and Description */}
                <div 
                  className={`animate-on-load-02 ${isLoaded ? 'loaded' : ''}`}
                  style={!isLoaded ? {
                    transform: 'translate3d(0, 45px, 0)',
                    opacity: 0
                  } : {}}
                >
                  <div className="blog-name-details">
                    <div className="blog-details---title">{post.title}</div>
                    <p>{post.description}</p>
                  </div>
                </div>

                {/* Social Share Icons */}
                <div 
                  className={`animate-on-load-03 ${isLoaded ? 'loaded' : ''}`}
                  style={!isLoaded ? {
                    transform: 'translate3d(0, 45px, 0)',
                    opacity: 0
                  } : {}}
                >
                  <div className="share-blog-icons">
                    <a 
                      className="share-social-media-icon-holder w-inline-block" 
                      href={socialShareUrls.facebook} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        alt="Share on Facebook" 
                        className="share-icon" 
                        height="24" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab50b_Facebook_Icon.svg" 
                        width="24"
                      />
                    </a>
                    <a 
                      className="share-social-media-icon-holder w-inline-block" 
                      href={socialShareUrls.twitter} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        alt="Share on Twitter" 
                        className="share-icon" 
                        height="24" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab4fd_Twitter_Icon.svg" 
                        width="24"
                      />
                    </a>
                    <a 
                      className="share-social-media-icon-holder w-inline-block" 
                      href={socialShareUrls.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        alt="Share on LinkedIn" 
                        className="share-icon" 
                        height="24" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab531_LinkedIn_Icon.svg" 
                        width="24"
                      />
                    </a>
                    <a 
                      className="share-social-media-icon-holder w-inline-block" 
                      href={socialShareUrls.copy}
                    >
                      <img 
                        alt="Copy link" 
                        className="share-icon" 
                        height="24" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab51f_Link_Icon.svg" 
                        width="24"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div 
                className={`animate-on-load-04 ${isLoaded ? 'loaded' : ''}`}
                style={!isLoaded ? {
                  transform: 'translate3d(0, 45px, 0)',
                  opacity: 0
                } : {}}
              >
                <div className="blog-details-main-image-holder">
                  <Image
                    alt={post.featuredImage.alt}
                    className="blog-details-main-image"
                    src={post.featuredImage.url}
                    width={1200}
                    height={600}
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="blog-details-content">
                <div className="fade-in-on-scroll">
                  <div 
                    className="rich-text-block w-richtext"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="sign-up-letter-holder">
              <div className="sign-up-letter lower">
                <div className="sign-up-letter-content">
                  <div className="sign-up-title">Sign-up for news letter</div>
                  <p>Powerful, self-serve product and growth analytics to help you convert, engage.</p>
                </div>
                <div className="form-block-2 _100width w-form">
                  <form className="form-holder" onSubmit={handleNewsletterSubmit}>
                    <div className="form-2">
                      <input 
                        className="text-field w-input" 
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter email here" 
                        required
                        disabled={subscriptionStatus === 'loading'}
                      />
                      <input 
                        className="button w-button" 
                        type="submit" 
                        value={subscriptionStatus === 'loading' ? 'Subscribing...' : 'Get Started'}
                        disabled={subscriptionStatus === 'loading'}
                      />
                    </div>
                  </form>
                  
                  {subscriptionStatus === 'success' && (
                    <div className="success-message w-form-done" style={{ display: 'block' }}>
                      <div>Thank you! <br/>Your submission has been received!</div>
                    </div>
                  )}
                  
                  {subscriptionStatus === 'error' && (
                    <div className="error-message w-form-fail" style={{ display: 'block' }}>
                      <div>Oops! <br/>Something went wrong! Try again later</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="section overflow-hidden">
          <div className="hero-section less-spacing">
            <div className="container no-padding-bot">
              <div className="hero-center">
                <div className="hero-content-center">
                  <div className="hero-title-holder">
                    <h1 className="title">Other Blog posts</h1>
                  </div>
                  <div className="paragraph-holder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus, mi quis viverra ornare.</p>
                  </div>
                </div>
              </div>
              <div className="hero-blog-holder">
                <div className="blog-grid-twos-wrapper w-dyn-list">
                  <div className="blog-grid-2x w-dyn-items" role="list">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={relatedPost.slug} className="blog-grid-twos-item w-dyn-item" role="listitem">
                        <Link className="blog-item boxed w-inline-block" href={`/blog/${relatedPost.slug}`}>
                          <Image 
                            alt={relatedPost.featuredImage.alt} 
                            className="blog-thumbnail" 
                            src={relatedPost.featuredImage.url}
                            width={400}
                            height={250}
                            sizes="100vw"
                          />
                          <div className="blog-conte">
                            <div className="blog-date">{relatedPost.publishDate}</div>
                            <div className="blog-title">{relatedPost.title}</div>
                            <p>{relatedPost.description}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
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
                  <p className="white-paragraph-2">Let's take the first step together toward clarity, calm, and personal growth.</p>
                </div>
              </div>
              <div className="from-cta">
                <div className="fade-in-on-scroll">
                  <Link className="fancy-button w-inline-block" href="/contact">
                    <div className="fancy-button-text white-text">Book Free Consultation</div>
                    <div className="button-icon-holder">
                      <img 
                        alt="" 
                        className="button-icon" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab42f/683caab15ddff5862cbab460_Arrow.svg"
                      />
                    </div>
                    <div className="button-icon-holder second">
                      <img 
                        alt="" 
                        className="button-icon" 
                        loading="lazy" 
                        src="/683caab15ddff5862cbab42f/683caab15ddff5862cbab460_Arrow.svg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="background-image-holder">
            <Image
              alt=""
              className="background-image"
              src="/683caab15ddff5862cbab42f/684476a162d43bd845708237_image.avif"
              width={2839}
              height={1600}
              sizes="(max-width: 2839px) 100vw, 2839px"
            />
            <div className="cta-overlay"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-load-01,
        .animate-on-load-02,
        .animate-on-load-03,
        .animate-on-load-04 {
          transition: all 0.6s ease-out;
        }

        .animate-on-load-01.loaded,
        .animate-on-load-02.loaded,
        .animate-on-load-03.loaded,
        .animate-on-load-04.loaded {
          transform: translate3d(0, 0, 0) !important;
          opacity: 1 !important;
        }

        .fade-in-on-scroll {
          transition: opacity 0.6s ease-out;
        }

        .sign-up-letter.lower {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default BlogPost;
