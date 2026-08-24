import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setMessage('Thank you for your inquiry! We will get back to you soon.');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      setMessage('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Start Your <span>Project</span></h1>
            <p>Let's discuss how we can help your business grow with our digital solutions</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="unified-card">
                <div className="">
                  <h2>Send Us a Message</h2>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter Name*" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter Email*" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    id="service" 
                    name="service" 
                    placeholder="Enter your requirement"
                    value={formData.service}
                    onChange={handleChange}
                  />
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Describe your project requirements and goals" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                  {message && (
                    <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="unified-card">
                <div className="contact-info">
                  <h3>Reach Out Directly</h3>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-text">
                      <h4>Email</h4>
                      <p>hello@codextechsolutions.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="info-text">
                      <h4>Phone</h4>
                      <p>+91 98765 43210</p>
                      <p style={{fontSize: '0.85rem', color: '#a1a1aa', marginTop: '0.3rem'}}>Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-text">
                      <h4>Office</h4>
                      <p>Digital City, India</p>
                      <p style={{fontSize: '0.85rem', color: '#a1a1aa', marginTop: '0.3rem'}}>Remote & On-site Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
