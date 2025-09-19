import React, { useState } from 'react';
import Button from './Button';
import '../styles/EmailSubscription.css';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email subscription:', email);
    setEmail('');
  };

  return (
    <section className="email-subscription-section">
      <div className="container">
        <div className="subscription-content">
          <div className="subscription-left">
            <div className="subscription-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="subscription-text">
              <h3>Subscribe now to get latest updates</h3>
            </div>
          </div>
          
          <div className="subscription-right">
            <form onSubmit={handleSubmit} className="subscription-form">
              <div className="email-input-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  variant="style-one" 
                  size="small"
                  icon="fas fa-paper-plane"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription; 