import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setSubmitting(true);
    try {
      const result = await signup(formData.name, formData.email, formData.password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div className="auth-card" style={{
        background: '#111',
        padding: '2rem',
        borderRadius: '20px',
        maxWidth: '450px',
        width: '90%',
        border: '1px solid #333',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        <h2 className="text-center mb-2" style={{color: '#fff'}}>Create your account</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{color: '#a1a1aa'}}>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '10px'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{color: '#a1a1aa'}}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '10px'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{color: '#a1a1aa'}}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '10px'
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label" style={{color: '#a1a1aa'}}>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '10px'
              }}
            />
          </div>
          <button type="submit" className="submit-btn w-100" disabled={submitting}>
            {submitting ? <><i className="fas fa-spinner fa-spin"></i> Creating account...</> : 'Create account'}
          </button>
        </form>
        <p className="text-center mt-3" style={{color: '#a1a1aa'}}>
          Already have an account? <Link to="/login" style={{color: '#FCE28E'}}>Login</Link>
        </p>
        <p className="text-center mt-2">
          <Link to="/" style={{color: '#a1a1aa', textDecoration: 'none'}}>← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
