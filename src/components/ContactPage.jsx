'use client';

import { useEffect, useState } from 'react';

// Converted from Webflow contact page (gbs-webflow/contact/index.html)
// Preserves exact structure and styling from original design
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.message) {
      setHasError(true);
      setErrorMessage('Email and message are required fields.');
      return;
    }

    setIsLoading(true);
    setHasError(false);
    setErrorMessage('');

    try {
      // Submit form to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // API returned an error
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setHasError(true);
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Animation effects on load - mimics Webflow animations
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-load-02, .animate-on-load-03, .animate-on-load-04');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="section relative">
        <div className="hero-section less-spacing">
          <div className="container no-padding-bot">
            <div className="center-text-holder">
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
                <div className="title-holder l">
                  <h2 className="title">Contact me</h2>
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
                <div className="paragraph-holder">
                  <p>With a focus on mindfulness, breathwork, and self-love, I help you reconnect with your calm and rediscover balance in your daily life.</p>
                </div>
              </div>
            </div>
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
              {/* Contact Information and Form */}
              <div className="contact-email-container">
                {/* Email Section */}
                <div className="contact-email-holder">
                  <div className="contact-text-holder">
                    <div>EMAIL</div>
                    <a className="black-link w-inline-block" href="mailto:info@email.com">
                      <div>info@email.com</div>
                    </a>
                  </div>
                </div>
                
                {/* Location Section */}
                <div className="contact-email-holder">
                  <div className="contact-text-holder">
                    <div>LOCATION</div>
                    <a className="black-link w-inline-block" href="mailto:email@contact.com">
                      <div>Akshya Nagar 1st Block, Rammurthy nagar, Bangalore-560016</div>
                    </a>
                  </div>
                </div>
                
                {/* Contact Form Grid */}
                <div className="w-layout-grid form-grid">
                  <div>CONTACT FORM</div>
                  <div className="contact-from w-form" id="Contact-Form">
                    <form 
                      className="form-content-holder" 
                      data-name="Contact Form"
                      id="Serenya-Contact"
                      onSubmit={handleSubmit}
                    >
                      <input 
                        className="contact-text-field w-input" 
                        data-name="Name" 
                        id="name" 
                        maxLength="256" 
                        name="name" 
                        placeholder="Name" 
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      
                      <input 
                        className="contact-text-field w-input" 
                        data-name="Email" 
                        id="Email-2" 
                        maxLength="256" 
                        name="email" 
                        placeholder="Email*" 
                        required 
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      
                      <input 
                        className="contact-text-field w-node-e154c1cc-64fd-21ad-7e2c-c0b73b8d86ea-2cbab42e w-input" 
                        data-name="Subject" 
                        id="Subject" 
                        maxLength="256" 
                        name="subject" 
                        placeholder="Subject" 
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                      
                      <div className="text-area-holder" id="w-node-e154c1cc-64fd-21ad-7e2c-c0b73b8d86eb-2cbab42e">
                        <textarea 
                          className="contact-text-field text-areas w-node-e154c1cc-64fd-21ad-7e2c-c0b73b8d86ec-2cbab42e w-input" 
                          data-name="Message" 
                          id="Message" 
                          maxLength="5000" 
                          name="message" 
                          placeholder="Message" 
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <input 
                        className="button w-button" 
                        data-wait="Please wait..." 
                        id="w-node-e154c1cc-64fd-21ad-7e2c-c0b73b8d86ed-2cbab42e" 
                        type="submit" 
                        value={isLoading ? "Sending..." : "Submit"}
                        disabled={isLoading}
                        style={isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                      />
                    </form>
                    
                    {/* Success Message */}
                    {isSubmitted && (
                      <div className="success-message w-form-done" style={{ display: 'block' }}>
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                    )}
                    
                    {/* Error Message */}
                    {hasError && (
                      <div className="error-message w-form-fail" style={{ display: 'block' }}>
                        <div>{errorMessage || 'Oops! Something went wrong while submitting the form.'}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
