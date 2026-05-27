import { useState } from 'react';
import { motion } from 'framer-motion';
import { getHeadlineFromURL, getSubheadlineFromURL } from '../utils/dynamicText';
import { submitForm, FormData } from '../utils/formSubmit';
import { trackFormSubmission } from '../utils/analytics';
import '../styles/components/Hero.scss';

const Hero = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const dynamicHeadline = getHeadlineFromURL();
  const dynamicSubheadline = getSubheadlineFromURL();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await submitForm(formData);
    
    if (result.success) {
      trackFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company
      });
      setSubmitStatus({ type: 'success', message: result.message });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      setSubmitStatus({ type: 'error', message: result.message });
    }
    
    setIsSubmitting(false);
  };

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor"/>
        </svg>
      ),
      title: '3 PHASE POWER',
      description: 'Up to 400 amps available for heavy machinery and manufacturing.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
        </svg>
      ),
      title: 'CONVENIENT ACCESS',
      description: 'Seamless logistics with 12×14 grade-level automatic loading doors.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor"/>
        </svg>
      ),
      title: 'FLEXIBLE SPACE',
      description: 'High clear ceilings and office mezzanine options included.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor"/>
        </svg>
      ),
      title: 'SECURE SITE',
      description: '24/7 access with professional property management and lighting.'
    }
  ];

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <motion.div 
            className="hero__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/RP-logo.png" alt="Rockport Investment Group" className="hero__logo" />
            <span className="hero__badge">IMMEDIATE AVAILABILITY</span>
            <h1 className="hero__title">
              {dynamicHeadline} <span className="hero__title--accent">FOR RENT</span>
            </h1>
            <p className="hero__subtitle">{dynamicSubheadline}</p>
            
            <div className="hero__features">
              {features.map((feature, index) => (
                <div key={index} className="hero__feature">
                  <div className="hero__feature-icon">
                    {feature.icon}
                  </div>
                  <div className="hero__feature-content">
                    <h4 className="hero__feature-title">{feature.title}</h4>
                    <p className="hero__feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero__form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="hero__form" onSubmit={handleSubmit} id="contact-form">
              <h3 className="hero__form-title">SCHEDULE A SHOWING</h3>
              <p className="hero__form-subtitle">Our team will respond within 48 hours.</p>
              
              <div className="hero__form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="hero__form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@business.com"
                />
              </div>
              
              <div className="hero__form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 000-0000"
                />
              </div>
              
              <div className="hero__form-group">
                <label htmlFor="message">Primary Space Needs</label>
                <select
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="hero__form-select"
                >
                  <option value="">Select an option</option>
                  <option value="warehouse">Warehouse Space</option>
                  <option value="office">Office Space</option>
                  <option value="manufacturing">Manufacturing Space</option>
                  <option value="distribution">Distribution Center</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {submitStatus && (
                <div className={`hero__form-status hero__form-status--${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button type="submit" className="hero__form-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Reserve Your Spot'}
              </button>
              
              <p className="hero__form-disclaimer">
                By submitting, you agree to receive follow-up communication about our property availability.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
