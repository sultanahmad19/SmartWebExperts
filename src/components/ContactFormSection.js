import React, { useState } from 'react';
import Button from './Button';
import '../styles/ContactFormSection.css';

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@smartwebexperts.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    e.target.form.reset();
    setSubmitStatus(null);
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-content">
          {/* Left Side - Image */}
          <div className="contact-form-image">
            <div className="image-overlay">
              <div className="image-content">
                <h3>Let's Start Your Project</h3>
                <p>Ready to bring your ideas to life? Our technology experts are here to help you create something amazing.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <h2>Feel Free to Write Our Technology Experts</h2>
              <p>We're here to help you with your next big project</p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="basic" />
              <input type="hidden" name="_next" value="http://yourdomain.com/thank-you" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows={5}
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}

              <div className="form-buttons">
                <Button type="submit" variant="style-one" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
                <Button type="reset" variant="style-three" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;