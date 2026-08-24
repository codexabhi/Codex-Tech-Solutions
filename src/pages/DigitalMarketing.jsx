import Header from '../components/Header';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Digital <span>Marketing</span></h1>
            <p>Data-driven strategies that increase visibility, engagement, and conversions</p>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="web-services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-services-text digital-marketing-text">
                <h3>Strategic Digital Marketing</h3>
                <p>Codex Tech Solutions delivers comprehensive digital marketing solutions that drive measurable results. From SEO to social media, we create strategies that increase your online visibility and generate qualified leads.</p>
                <ul className="web-services-list">
                  <li>
                    <i className="fas fa-search"></i>
                    <span>SEO Optimization</span>
                  </li>
                  <li>
                    <i className="fas fa-bullhorn"></i>
                    <span>Social Media Marketing</span>
                  </li>
                  <li>
                    <i className="fas fa-ad"></i>
                    <span>PPC Advertising</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>Email Marketing</span>
                  </li>
                  <li>
                    <i className="fas fa-chart-line"></i>
                    <span>Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Digital Marketing" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Marketing Services</h2>
            <p>Comprehensive digital marketing solutions for business growth</p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Search Engine Optimization</h3>
                <p>Improve your search rankings and drive organic traffic with our proven SEO strategies</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Keyword Research</li>
                  <li><i className="fas fa-check"></i> On-Page SEO</li>
                  <li><i className="fas fa-check"></i> Link Building</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3>Social Media Marketing</h3>
                <p>Build brand awareness and engage your audience across all major social platforms</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Content Strategy</li>
                  <li><i className="fas fa-check"></i> Community Management</li>
                  <li><i className="fas fa-check"></i> Paid Social Ads</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-ad"></i>
                </div>
                <h3>PPC Advertising</h3>
                <p>Drive immediate results with targeted pay-per-click campaigns on Google and social media</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Campaign Setup</li>
                  <li><i className="fas fa-check"></i> Ad Optimization</li>
                  <li><i className="fas fa-check"></i> ROI Tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Grow Your Business?</h2>
          <p>Let's discuss how our digital marketing expertise can help you reach your goals.</p>
          <a href="/contact" className="cta-button">Start Your Campaign</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DigitalMarketing;
