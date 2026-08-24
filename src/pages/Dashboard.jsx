import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchPortfolio();
    }
  }, [isAuthenticated, navigate]);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/portfolio', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPortfolioItems(response.data);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  };

  const handleDeletePortfolio = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/portfolio/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPortfolio();
    } catch (error) {
      console.error('Error deleting portfolio:', error);
    }
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button 
          onClick={handleLogout}
          style={{
            background: '#dc3545',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Your Dashboard</h2>
                {user?.role === 'admin' && (
                  <button 
                    className="cta-btn"
                    onClick={() => navigate('/admin')}
                  >
                    Admin Panel
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Portfolio Items</h3>
                <p className="display-4">{portfolioItems.length}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Account Type</h3>
                <p className="display-4">{user?.role === 'admin' ? 'Admin' : 'User'}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Member Since</h3>
                <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Your Portfolio</h3>
                <button 
                  className="cta-btn"
                  onClick={() => navigate('/portfolio')}
                >
                  Manage Portfolio
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            {portfolioItems.length === 0 ? (
              <div className="col-md-12">
                <div className="unified-card text-center">
                  <p>No portfolio items yet. Start building your portfolio!</p>
                  <button 
                    className="cta-btn mt-3"
                    onClick={() => navigate('/portfolio')}
                  >
                    Create Portfolio Item
                  </button>
                </div>
              </div>
            ) : (
              portfolioItems.map((item) => (
                <div className="col-md-4 mb-4" key={item._id}>
                  <div className="unified-card">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1rem'}}
                      />
                    )}
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="d-flex gap-2">
                      <button 
                        className="service-btn"
                        onClick={() => navigate(`/portfolio/edit/${item._id}`)}
                      >
                        Edit
                      </button>
                      <button 
                        className="service-btn"
                        style={{background: '#dc3545'}}
                        onClick={() => handleDeletePortfolio(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
