import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      category: 'development',
      icon: 'fas fa-laptop-code',
      title: 'Custom Website Development',
      description: 'Tailored web solutions built with modern technologies for optimal performance',
      features: ['Custom Design', 'Responsive Layouts', 'User-Friendly'],
      link: '/web-development'
    },
    {
      id: 2,
      category: 'wordpress',
      icon: 'fab fa-wordpress',
      title: 'WordPress Solutions',
      description: 'Expert WordPress development with custom themes, plugins, and WooCommerce integration',
      features: ['Custom Themes', 'Plugin Development', 'SEO Optimized'],
      link: '/wordpress-development'
    },
    {
      id: 3,
      category: 'development',
      icon: 'fas fa-tools',
      title: 'Website Maintenance & Support',
      description: 'Ongoing security updates, performance optimization, and 24/7 technical support',
      features: ['Security Updates', 'Performance Tuning', 'Backups'],
      link: '/web-development'
    },
    {
      id: 4,
      category: 'development',
      icon: 'fas fa-code',
      title: 'Custom Web Applications',
      description: 'Scalable web applications with secure architecture and seamless API integrations',
      features: ['Custom Solutions', 'Scalable Architecture', 'API Integration'],
      link: '/web-development'
    },
    {
      id: 5,
      category: 'marketing',
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing Strategy',
      description: 'Data-driven SEO, PPC, and social media campaigns that increase conversions',
      features: ['SEO Optimization', 'Social Media', 'PPC Campaigns'],
      link: '/digital-marketing'
    },
    {
      id: 6,
      category: 'design',
      icon: 'fas fa-paint-brush',
      title: 'Brand Identity & Design',
      description: 'Professional logo design, branding, and creative visual assets',
      features: ['Logo Design', 'Brand Identity', 'Graphic Design'],
      link: '/creative-design'
    },
    {
      id: 7,
      category: 'design',
      icon: 'fas fa-desktop',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences',
      features: ['Modern UI/UX', 'Mobile First', 'Fast Loading'],
      link: '/web-development'
    },
    {
      id: 8,
      category: 'development',
      icon: 'fas fa-envelope',
      title: 'Professional Email Solutions',
      description: 'Secure business email with custom domain and enterprise-grade security',
      features: ['Custom Domain', 'Secure Email', 'Spam Protection'],
      link: '/contact'
    },
    {
      id: 9,
      category: 'wordpress',
      icon: 'fab fa-wordpress-simple',
      title: 'E-commerce Development',
      description: 'WooCommerce and custom e-commerce solutions for online sales',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce'],
      link: '/wordpress-development'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Web Development &  <span>Digital Growth</span></h1>
            <p>Codex Tech Solutions creates professional websites and digital marketing strategies that increase visibility, credibility, leads, and business growth.</p>
            <div className="hero-buttons">
              <a href="#services" className="hero-btn primary-btn">Our Services</a>
              <a href="#contact" className="hero-btn secondary-btn">Contact Us</a>
            </div>
            <div className="client-testimonial">
              <div className="avatars-container">
                <div className="avatar avatar-1">AK</div>
                <div className="avatar avatar-2">AY</div>
                <div className="avatar avatar-3">AB</div>
                <div className="avatar avatar-4">RJ</div>
                <div className="avatar avatar-5">+46</div>
              </div>
              <div className="testimonial-divider"></div>
              <div className="testimonial-text">
                <div className="testimonial-number">
                  <span className="stars">★★★★★</span>
                  <span className="rating">5.0</span>
                </div>
              </div>
            </div>
            <div className="hero-stats-cards">
              <div className="stat-card">
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years in Business</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" alt="Business Meeting" />
              </div>
              <div className="laptop-base"></div>
            </div>
            <div className="glow-effect"></div>
            <div className="floating-card card-1">
              <i className="fas fa-laptop-code"></i>
              <span>Web Design</span>
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-search"></i>
              <span>SEO & Ads</span>
            </div>
            <div className="floating-card card-3">
              <i className="fab fa-wordpress"></i>
              <span>WordPress</span>
            </div>
            <div className="floating-card card-4">
              <i className="fas fa-shield-alt"></i>
              <span>Hosting & SSL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-header">
            <h2>Professional Digital Services</h2>
            <p>End-to-end solutions for your online presence - from development to marketing</p>
          </div>
          <div className="category-filters">
            <button 
              className={`category-filter ${activeFilter === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('all')}
            >
              All Services
            </button>
            <button 
              className={`category-filter ${activeFilter === 'development' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('development')}
            >
              Development
            </button>
            <button 
              className={`category-filter ${activeFilter === 'design' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
            <button 
              className={`category-filter ${activeFilter === 'marketing' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`category-filter ${activeFilter === 'wordpress' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('wordpress')}
            >
              WordPress Development
            </button>
          </div>
          <div className="row">
            {filteredServices.map((service) => (
              <div className="col-md-4 mt-4" key={service.id}>
                <div className="service-card" data-category={service.category}>
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <a href={service.link} className="service-btn">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="web-services" id="web-services">
        <div className="container">   
          <div className="row">
            <div className="web-services-text col-md-6">
              <h3>Complete Web Infrastructure</h3>
              <p>Codex Tech Solutions handles everything from domain registration and hosting to SSL certificates and professional email setup. Get your online presence up and running with our comprehensive infrastructure services.</p>
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
              </ul>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" alt="Web Development" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>     
      </section>

      {/* Creative Designs Section */}
      <section className="pb-5" id="creative-designs">
        <div className="container">    
          <div className="creative-designs-text text-center">
            <div className="section-header">
              <h3>Strategic Creative Design</h3>
              <p>Creative designs that inspire audiences, strengthen brands, and drive meaningful business growth.</p>
            </div>
            <div className="row">
              <div className="col-md-3 mt-3">
                <div className="unified-card">
                  <div className="service-icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h4>Logo Design</h4>
                  <p>Unique brand logos</p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="unified-card">
                  <div className="service-icon">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h4>Brand Identity</h4>
                  <p>Complete branding</p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="unified-card">
                  <div className="service-icon">
                    <i className="fas fa-image"></i>
                  </div>
                  <h4>Graphics</h4>
                  <p>Marketing materials</p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
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
      </section>

      {/* Our Workflow Section */}
      <section className="workflow" id="workflow">
        <div className="section-header">
          <h2>Our Workflow</h2>
          <p>A proven 5-step process to deliver exceptional digital solutions</p>
        </div>
        <div className="row">
          <div className="col-md-3 col-12 mt-4">
            <div className="workflow-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Discovery</h3>
              <p>Codex Tech Solutions analyzes your requirements, understands your goals, and creates a strategic roadmap for your project.</p>
            </div>
          </div>
          <div className="col-md-3 col-12 mt-4">
            <div className="workflow-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3>Design</h3>
              <p>Codex Tech Solutions creates stunning visual designs and user experiences that align with your brand and objectives.</p>
            </div>
          </div>
          <div className="col-md-3 col-12 mt-4">
            <div className="workflow-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Development</h3>
              <p>Codex Tech Solutions builds your solution with clean, scalable code using modern technologies and best practices.</p>
            </div>
          </div>
          <div className="col-md-3 col-12 mt-4">
            <div className="workflow-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Launch & Support</h3>
              <p>Codex Tech Solutions deploys your project and provides ongoing support to ensure continued success and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" id="why-choose-us">
        <div className="container">
          <div className="why-choose-content row">
            <div className="why-choose-text col-md-6">
              <h2>Why Choose Us</h2>
              <p>Codex Tech Solutions delivers innovative websites, powerful digital marketing, reliable support, transparent communication, and measurable results to help your business grow faster.</p>
              <div className="why-choose-features row">
                <div className="col-md-6 col-12">
                  <div className="feature-card">
                    <div className="card-left">
                      <span className="card-number">1</span>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="card-title">Expert Team</h3>
                        <div className="card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="card-description">Skilled Developers & Creative Designers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="feature-card">
                    <div className="card-left">
                      <span className="card-number">2</span>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="card-title">Timely Delivery</h3>
                        <div className="card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </div>
                      <p className="card-description">Respectful of Your Deadlines</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="feature-card">
                    <div className="card-left">
                      <span className="card-number">3</span>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="card-title">24/7 Support</h3>
                        <div className="card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="card-description">Always Available Around the Clock</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="feature-card">
                    <div className="card-left">
                      <span className="card-number">4</span>
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="card-title">Competitive Pricing</h3>
                        <div className="card-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="8"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                      </div>
                      <p className="card-description">High-Quality, Budget-Friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" alt="Why Choose Us" style={{width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'}} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
