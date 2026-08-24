import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('projects');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    featured: false
  });

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/dashboard');
    } else {
      fetchData();
    }
  }, [isAuthenticated, user, navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      const [projectsRes, contactsRes, usersRes] = await Promise.all([
        axios.get('http://localhost:5000/api/projects'),
        axios.get('http://localhost:5000/api/contacts', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);
      
      setProjects(projectsRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/projects', projectForm, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowProjectForm(false);
      setProjectForm({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        featured: false
      });
      fetchData();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error creating project');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleToggleFeatured = async (id, featured) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/projects/${id}`, { featured: !featured }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <>
      <Header />
      <section className="inner-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Admin <span>Dashboard</span></h1>
            <p>Manage projects, contacts, and users</p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Admin Panel</h2>
                <button 
                  className="cta-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Total Projects</h3>
                <p className="display-4">{projects.length}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Contact Messages</h3>
                <p className="display-4">{contacts.length}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="unified-card">
                <h3>Admin Access</h3>
                <p className="display-4">Active</p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <div className="nav nav-tabs" style={{borderBottom: '1px solid #333'}}>
                <button 
                  className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                  style={{color: activeTab === 'projects' ? '#FCE28E' : '#a1a1aa', border: 'none', borderBottom: activeTab === 'projects' ? '2px solid #FCE28E' : 'none'}}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
                <button 
                  className={`nav-link ${activeTab === 'contacts' ? 'active' : ''}`}
                  style={{color: activeTab === 'contacts' ? '#FCE28E' : '#a1a1aa', border: 'none', borderBottom: activeTab === 'contacts' ? '2px solid #FCE28E' : 'none'}}
                  onClick={() => setActiveTab('contacts')}
                >
                  Contact Messages
                </button>
              </div>
            </div>
          </div>

          {activeTab === 'projects' && (
            <>
              <div className="row mb-4">
                <div className="col-md-12">
                  <button 
                    className="cta-btn"
                    onClick={() => setShowProjectForm(!showProjectForm)}
                  >
                    {showProjectForm ? 'Cancel' : 'Add New Project'}
                  </button>
                </div>
              </div>

              {showProjectForm && (
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="unified-card">
                      <h3>Create New Project</h3>
                      <form onSubmit={handleProjectSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              value={projectForm.title}
                              onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
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
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Category</label>
                            <input
                              type="text"
                              className="form-control"
                              value={projectForm.category}
                              onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
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
                          <div className="col-md-12 mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                              className="form-control"
                              value={projectForm.description}
                              onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                              required
                              rows="3"
                              style={{
                                backgroundColor: '#111',
                                border: '1px solid #333',
                                color: '#fff',
                                padding: '0.7rem',
                                borderRadius: '10px'
                              }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Image URL</label>
                            <input
                              type="url"
                              className="form-control"
                              value={projectForm.imageUrl}
                              onChange={(e) => setProjectForm({...projectForm, imageUrl: e.target.value})}
                              style={{
                                backgroundColor: '#111',
                                border: '1px solid #333',
                                color: '#fff',
                                padding: '0.7rem',
                                borderRadius: '10px'
                              }}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">
                              <input
                                type="checkbox"
                                checked={projectForm.featured}
                                onChange={(e) => setProjectForm({...projectForm, featured: e.target.checked})}
                                style={{marginRight: '10px'}}
                              />
                              Featured Project
                            </label>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="submit-btn">Create Project</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              <div className="row">
                {projects.map((project) => (
                  <div className="col-md-4 mb-4" key={project._id}>
                    <div className="unified-card">
                      {project.imageUrl && (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1rem'}}
                        />
                      )}
                      <h4>{project.title}</h4>
                      <p className="text-muted">{project.category}</p>
                      <p>{project.description}</p>
                      <div className="d-flex gap-2 align-items-center">
                        <button 
                          className="service-btn"
                          onClick={() => handleToggleFeatured(project._id, project.featured)}
                        >
                          {project.featured ? 'Unfeature' : 'Feature'}
                        </button>
                        <button 
                          className="service-btn"
                          style={{background: '#dc3545'}}
                          onClick={() => handleDeleteProject(project._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'contacts' && (
            <div className="row">
              {contacts.length === 0 ? (
                <div className="col-md-12">
                  <div className="unified-card text-center">
                    <p>No contact messages yet</p>
                  </div>
                </div>
              ) : (
                contacts.map((contact) => (
                  <div className="col-md-6 mb-4" key={contact._id}>
                    <div className="unified-card">
                      <h4>{contact.name}</h4>
                      <p><strong>Email:</strong> {contact.email}</p>
                      {contact.service && <p><strong>Service:</strong> {contact.service}</p>}
                      <p><strong>Message:</strong> {contact.message}</p>
                      <p className="text-muted"><small>{new Date(contact.createdAt).toLocaleString()}</small></p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
