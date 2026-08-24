import Header from '../components/Header';
import Footer from '../components/Footer';

const Industries = () => {
  const industries = [
    {
      icon: 'fas fa-building',
      title: 'Corporate',
      description: 'Professional websites for businesses and corporations'
    },
    {
      icon: 'fas fa-shopping-bag',
      title: 'E-commerce',
      description: 'Online stores and retail solutions'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Healthcare',
      description: 'Medical and healthcare industry websites'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Educational institutions and e-learning platforms'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Restaurant',
      description: 'Food and hospitality industry websites'
    },
    {
      icon: 'fas fa-home',
      title: 'Real Estate',
      description: 'Property and real estate websites'
    },
    {
      icon: 'fas fa-plane',
      title: 'Travel',
      description: 'Travel and tourism industry solutions'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Professional Services',
      description: 'Consulting and professional services websites'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Industries We <span>Serve</span></h1>
            <p>Delivering digital excellence across diverse business sectors</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Industry Expertise</h2>
            <p>We specialize in creating digital solutions for various industries</p>
          </div>
          <div className="row">
            {industries.map((industry, index) => (
              <div className="col-md-3 mt-4" key={index}>
                <div className="unified-card">
                  <div className="service-icon">
                    <i className={industry.icon}></i>
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="web-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-services-text">
                <h3>Tailored Solutions for Every Industry</h3>
                <p>Codex Tech Solutions understands that each industry has unique requirements and challenges. We create customized digital solutions that address the specific needs of your business sector, ensuring optimal performance and user experience.</p>
                <ul className="web-services-list">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Industry-Specific Features</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Compliance & Security</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Scalable Solutions</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" alt="Industries" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>What's Your Industry?</h2>
          <p>Let's discuss how we can create the perfect digital solution for your business sector.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Industries;
