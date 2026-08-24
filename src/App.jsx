import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import CreativeDesign from './pages/CreativeDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import WordPressDevelopment from './pages/WordPressDevelopment';
import Industries from './pages/Industries';
import WhyChooseUs from './pages/WhyChooseUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/creative-design" element={<CreativeDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/edit/:id" element={<Portfolio />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
