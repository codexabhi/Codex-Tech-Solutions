import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About <span>Codex Tech Solutions</span></h1>
            <p>Expert web development and digital marketing services that deliver measurable business results</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>Codex Tech Solutions is a full-service digital agency specializing in custom web development, strategic digital marketing, and professional brand design. We combine technical expertise with creative innovation to deliver solutions that help businesses thrive in the digital landscape.</p>
                <p>Our team brings together experienced developers, marketing strategists, and creative designers who work collaboratively to create comprehensive digital solutions. We focus on understanding your business objectives and translating them into effective online strategies.</p>
                <p>Whether you're a startup looking to establish your online presence or an established business seeking to optimize your digital performance, we provide the expertise and dedication needed to achieve your goals.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" className="rounded-4 img-fluid" alt="Our Team" style={{width: '100%', borderRadius: '20px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The foundation of our business philosophy and client relationships</p>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation First</h3>
                <p>We build modern websites and implement creative digital marketing strategies that keep your business ahead of the competition.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Results Driven</h3>
                <p>Every website, SEO campaign, and marketing strategy is focused on generating measurable growth, leads, and business success.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unified-card">
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Client Success</h3>
                <p>We prioritize transparency, timely delivery, and long-term partnerships to help our clients achieve sustainable digital growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section pt-5">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>The milestones that shaped our company</p>
          </div>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started with a mission to deliver exceptional web development services to businesses of all sizes.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>15+ Projects Completed</h3>
                <p>Expanded our team and services to include digital marketing and brand design solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h3>Global Client Base</h3>
                <p>Started serving international clients and established partnerships with industry leaders.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h3>25+ Success Stories</h3>
                <p>Celebrated helping hundreds of businesses achieve their digital transformation goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="founder-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="founder-image">
                <div className="image-wrapper">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop" alt="Founder & CEO" />
                  <div className="image-decoration"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="founder-content">
                <div className="founder-label">Founder & CEO</div>
                <h2 className="founder-name">Abhishek Yadav</h2>
                <div className="founder-quote">
                  <i className="fas fa-quote-left"></i>
                  <p>Building digital experiences that transform businesses and create lasting impact in the digital landscape.</p>
                </div>
                <p className="founder-description">With over 2 years of experience in web development and digital marketing, I founded Codex Tech Solutions with a vision to help businesses build a strong and impactful online presence. My expertise includes website development, WordPress development, and digital marketing, where I focus on creating modern, user-friendly, and result-driven solutions.</p>
                <p className="founder-description">I am passionate about turning ideas into effective digital experiences and committed to delivering quality, innovation, and excellence in every project we undertake.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
