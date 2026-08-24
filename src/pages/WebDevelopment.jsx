import Header from '../components/Header';
import Footer from '../components/Footer';

const WebDevelopment = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional <span>Web Development</span></h1>
            <p>Custom websites and web applications built with cutting-edge technologies for optimal performance</p>
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="web-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-services-text">
                <h3>Complete Web Solutions</h3>
                <p>From domain registration to deployment, Codex Tech Solutions handles every aspect of your web infrastructure. Our comprehensive services ensure your online presence is secure, fast, and professionally managed.</p>
                <ul className="web-services-list">
                  <li>
                    <i className="fas fa-globe"></i>
                    <span>Domain & Hosting Registration</span>
                  </li>
                  <li>
                    <i className="fas fa-lock"></i>
                    <span>SSL Certificate Setup</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>Professional Email Services</span>
                  </li>
                  <li>
                    <i className="fas fa-laptop-code"></i>
                    <span>Website Design & Development</span>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt"></i>
                    <span>Responsive Web Design</span>
                  </li>
                  <li>
                    <i className="fas fa-shopping-cart"></i>
                    <span>E-commerce Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="web-services-image">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" alt="Web Development" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Development Services</h2>
            <p>Custom solutions designed to meet your specific business requirements</p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-desktop"></i>
                </div>
                <h3>Custom Website Development</h3>
                <p>Tailored web solutions built from scratch to match your unique business requirements and brand identity</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Unique Design</li>
                  <li><i className="fas fa-check"></i> Custom Features</li>
                  <li><i className="fas fa-check"></i> Scalable Architecture</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <h3>E-commerce Solutions</h3>
                <p>Robust online stores with secure payment gateways, inventory management, and conversion-optimized design</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Payment Gateway</li>
                  <li><i className="fas fa-check"></i> Product Management</li>
                  <li><i className="fas fa-check"></i> Order Tracking</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-mobile"></i>
                </div>
                <h3>Responsive Web Design</h3>
                <p>Mobile-first designs that deliver seamless user experiences across all devices and screen sizes</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Mobile-First Approach</li>
                  <li><i className="fas fa-check"></i> Cross-Browser Compatible</li>
                  <li><i className="fas fa-check"></i> Fast Loading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Launch Your Project?</h2>
          <p>Let's discuss how we can build a web solution that drives your business growth and achieves your goals.</p>
          <a href="/contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebDevelopment;
