import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-section col-md-3">
            <h3>Codex Tech Solutions</h3>
            <p>Building digital excellence for modern businesses. We transform your vision into powerful web solutions.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-section col-md-3">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section col-md-3">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/web-development">Web Development</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/creative-design">Creative Design</Link></li>
              <li><Link to="/wordpress-development">WordPress Development</Link></li>
              <li><Link to="/ecommerce-development">E-commerce Development</Link></li>
            </ul>
          </div>
          <div className="footer-section col-md-3">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-envelope"></i> info@codextechsolutions.com</li>
              <li><i className="fas fa-phone"></i> +91 98765 43210</li>
              <li><i className="fas fa-map-marker-alt"></i> Thane , Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Codex Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
