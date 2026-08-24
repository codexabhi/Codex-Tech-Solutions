import Header from '../components/Header';
import Footer from '../components/Footer';

const WordPressDevelopment = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>WordPress <span>Development</span></h1>
            <p>Expert WordPress solutions with custom themes, plugins, and WooCommerce integration</p>
          </div>
        </div>
      </section>

      {/* WordPress Services Section */}
      <section className="web-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-services-text">
                <h3>Complete WordPress Solutions</h3>
                <p>Codex Tech Solutions specializes in WordPress development, from custom theme creation to plugin development and WooCommerce integration. We build scalable, secure, and high-performance WordPress websites tailored to your business needs.</p>
                <ul className="web-services-list">
                  <li>
                    <i className="fab fa-wordpress"></i>
                    <span>Custom Theme Development</span>
                  </li>
                  <li>
                    <i className="fas fa-plug"></i>
                    <span>Plugin Development</span>
                  </li>
                  <li>
                    <i className="fas fa-shopping-cart"></i>
                    <span>WooCommerce Integration</span>
                  </li>
                  <li>
                    <i className="fas fa-sync"></i>
                    <span>WordPress Migration</span>
                  </li>
                  <li>
                    <i className="fas fa-cogs"></i>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" alt="WordPress Development" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>WordPress Services</h2>
            <p>Professional WordPress development for all your needs</p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fab fa-wordpress"></i>
                </div>
                <h3>Custom Theme Development</h3>
                <p>Unique, responsive WordPress themes built from scratch to match your brand identity</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Custom Design</li>
                  <li><i className="fas fa-check"></i> Responsive Layout</li>
                  <li><i className="fas fa-check"></i> SEO Optimized</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3>WooCommerce Development</h3>
                <p>Complete e-commerce solutions with WooCommerce for online stores</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Product Setup</li>
                  <li><i className="fas fa-check"></i> Payment Integration</li>
                  <li><i className="fas fa-check"></i> Shipping Configuration</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-plug"></i>
                </div>
                <h3>Plugin Development</h3>
                <p>Custom WordPress plugins to extend functionality and meet specific requirements</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Custom Plugins</li>
                  <li><i className="fas fa-check"></i> Third-Party Integration</li>
                  <li><i className="fas fa-check"></i> API Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build with WordPress?</h2>
          <p>Let's discuss how we can create the perfect WordPress solution for your business.</p>
          <a href="/contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WordPressDevelopment;
