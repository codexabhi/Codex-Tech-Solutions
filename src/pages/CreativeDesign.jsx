import Header from '../components/Header';
import Footer from '../components/Footer';

const CreativeDesign = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional <span>Brand Design</span></h1>
            <p>Strategic visual solutions that communicate your brand's unique value proposition</p>
          </div>
        </div>
      </section>

      {/* Creative Designs Section */}
      <section>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="creative-designs-text">
                <h3>Strategic Creative Solutions</h3>
                <p>Codex Tech Solutions creates visual identities that communicate your brand's unique value proposition. Our design solutions are both aesthetically compelling and strategically aligned with your business goals.</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="unified-card">
                      <div className="service-icon">
                        <i className="fas fa-pencil-alt"></i>
                      </div>
                      <h4>Logo Design</h4>
                      <p>Unique brand logos</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unified-card">
                      <div className="service-icon">
                        <i className="fas fa-palette"></i>
                      </div>
                      <h4>Brand Identity</h4>
                      <p>Complete branding</p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="unified-card">
                      <div className="service-icon">
                        <i className="fas fa-image"></i>
                      </div>
                      <h4>Graphics</h4>
                      <p>Marketing materials</p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="unified-card">
                      <div className="service-icon">
                        <i className="fas fa-desktop"></i>
                      </div>
                      <h4>UI/UX Design</h4>
                      <p>User interface design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="creative-designs-image">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" alt="Creative Design" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Design Services</h2>
            <p>Professional visual solutions that elevate your brand identity</p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <h3>Professional Logo Design</h3>
                <p>Custom logos that capture your brand essence and create lasting impressions</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Custom Concepts</li>
                  <li><i className="fas fa-check"></i> Multiple Revisions</li>
                  <li><i className="fas fa-check"></i> All File Formats</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Brand Identity Systems</h3>
                <p>Comprehensive branding packages for consistent visual identity across all touchpoints</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Brand Guidelines</li>
                  <li><i className="fas fa-check"></i> Color Palette</li>
                  <li><i className="fas fa-check"></i> Typography</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-image"></i>
                </div>
                <h3>Marketing Graphics</h3>
                <p>Compelling visual content for marketing materials and digital campaigns</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Print Design</li>
                  <li><i className="fas fa-check"></i> Digital Graphics</li>
                  <li><i className="fas fa-check"></i> Social Media Assets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Elevate Your Brand?</h2>
          <p>Let's discuss how our design expertise can transform your visual identity.</p>
          <a href="/contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CreativeDesign;
