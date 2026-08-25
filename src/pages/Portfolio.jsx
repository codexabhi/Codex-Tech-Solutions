import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Portfolio = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    technologies: '',
    projectUrl: '',
    githubUrl: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (id) {
      fetchPortfolioItem();
    }
  }, [isAuthenticated, navigate, id]);

  const fetchPortfolioItem = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/portfolio`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const item = response.data.find(p => p._id === id);
      if (item) {
        setFormData({
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl || '',
          technologies: item.technologies?.join(', ') || '',
          projectUrl: item.projectUrl || '',
          githubUrl: item.githubUrl || ''
        });
      }
    } catch (error) {
      console.error('Error fetching portfolio item:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const data = {
        ...formData,
        technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t)
      };

      if (id) {
        await axios.put(`http://localhost:5000/api/portfolio/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post('http://localhost:5000/api/portfolio', data, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Error saving portfolio item');
    }
  };

  return (
    <>
    

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="unified-card">
                <h2 className="mb-4">{id ? 'Edit' : 'Create'} Portfolio Item</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="4"
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
    }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="imageUrl"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="technologies" className="form-label">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="technologies"
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleChange}
                      placeholder="React, Node.js, MongoDB"
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectUrl" className="form-label">Project URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="projectUrl"
                      name="projectUrl"
                      value={formData.projectUrl}
                      onChange={handleChange}
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="githubUrl" className="form-label">GitHub URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="githubUrl"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleChange}
                      style={{
                        backgroundColor: '#111',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '0.7rem',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="submit-btn">
                      {id ? 'Update' : 'Create'} Portfolio Item
                    </button>
                    <button 
                      type="button" 
                      className="submit-btn"
                      style={{background: '#6c757d'}}
                      onClick={() => navigate('/dashboard')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
