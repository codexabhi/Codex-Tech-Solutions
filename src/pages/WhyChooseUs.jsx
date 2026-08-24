import Header from '../components/Header';
import Footer from '../components/Footer';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'Skilled developers and creative designers with years of experience'
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time, every time'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock support to address your needs and concerns'
    },
    {
      icon: 'fas fa-tags',
      title: 'Competitive Pricing',
      description: 'High-quality services at budget-friendly prices'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation First',
      description: 'We use the latest technologies and innovative approaches'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Client-Centric',
      description: 'Your success is our priority, we build lasting partnerships'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Why <span>Choose Us</span></h1>
            <p>Discover what sets Codex Tech Solutions apart from the competition</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Advantages</h2>
            <p>Reasons to partner with Codex Tech Solutions for your digital needs</p>
          </div>
          <div className="row">
            {reasons.map((reason, index) => (
              <div className="col-md-4 mt-4" key={index}>
                <div className="unified-card">
                  <div className="service-icon">
                    <i className={reason.icon}></i>
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Section */}
      <section className="web-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-services-text">
                <h3>Committed to Excellence</h3>
                <p>At Codex Tech Solutions, we believe in delivering nothing but the best. Our commitment to quality, innovation, and client satisfaction sets us apart in the digital landscape.</p>
                <ul className="web-services-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Quality Assurance</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Transparent Communication</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Agile Methodology</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Long-term Partnerships</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Continuous Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" alt="Why Choose Us" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Numbers that speak for our success</p>
          </div>
          <div className="row">
            <div className="col-md-3 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3>2+ Years</h3>
                <p>Industry Experience</p>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3>25+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-smile"></i>
                </div>
                <h3>25+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>5.0</h3>
                <p>Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Work with Us?</h2>
          <p>Let's discuss how we can help your business succeed in the digital world.</p>
          <a href="/contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WhyChooseUs;
