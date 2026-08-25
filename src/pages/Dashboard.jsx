import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', timeout: 10000 });
const filters = ['Open', 'My tasks', 'Unassigned', 'Overdue', 'High priority', 'All'];
const emptyForm = { title: '', summary: '', description: '', type: 'Support', source: 'Admin', dueDate: '', crmLink: '', customer: '', project: '', assignedTo: 'Abhishek Yadav (Technical)', priority: 'Normal', status: 'Open' };

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Unassigned');
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => { if (!isAuthenticated) navigate('/login'); }, [isAuthenticated, navigate]);
  useEffect(() => { if (isAuthenticated) loadTasks(); }, [isAuthenticated]);

  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      setTasks(response.data);
    } catch (requestError) { setError('Unable to load tasks. Please try again.'); }
  };

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const addTask = () => { setError(''); setEditingTask(null); setForm(emptyForm); setShowOverview(false); setShowForm(true); };
  const editTask = (task) => { setError(''); setEditingTask(task); setForm({ ...emptyForm, ...task }); setShowOverview(false); setShowForm(true); };
  const deleteTask = async (task) => {
    if (!window.confirm(`Delete "${task.title}"?`)) return;
    try {
      await api.delete(`/tasks/${task._id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      await loadTasks();
    } catch (requestError) { setError(requestError.response?.data?.message || 'Unable to delete task.'); }
  };
  const saveTask = async (event) => {
    event.preventDefault();
    setSaving(true); setError('');
    try {
      const request = editingTask
        ? api.put(`/tasks/${editingTask._id}`, form, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        : api.post('/tasks', form, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      await request;
      await loadTasks(); setShowForm(false); setEditingTask(null); setFilter('All');
    } catch (requestError) { setError(requestError.response?.data?.message || (editingTask ? 'Unable to update task.' : 'Unable to create task.')); }
    finally { setSaving(false); }
  };
  const visibleTasks = tasks.filter((task) => filter === 'All' || (filter === 'Open' && task.status === 'Open') || (filter === 'My tasks' && task.assignedTo === (user?.name || 'Abhishek Yadav (Technical)')) || (filter === 'Unassigned' && !task.assignedTo) || (filter === 'Overdue' && task.status !== 'Completed') || (filter === 'High priority' && task.priority === 'High'));
  const handleLogout = () => { logout(); navigate('/'); };

  if (!isAuthenticated) return null;
  return (
    <div className="task-dashboard">
      <aside className="task-sidebar">
        <button className="sidebar-brand" onClick={() => { setShowForm(false); setShowProfile(false); setShowOverview(false); setFilter('My tasks'); }}><i className="fas fa-tasks"></i><span>My tasks</span></button>
        <button className={`sidebar-dashboard ${showOverview ? 'selected' : ''}`} onClick={() => { setShowForm(false); setShowProfile(false); setShowOverview(true); }}><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></button>
        <span className="sidebar-label">CRM</span>
        <div className="sidebar-group">
          <button className="sidebar-section" onClick={() => { setShowForm(false); setShowProfile(false); setShowOverview(false); }}><i className="fas fa-list-check"></i><span>Tasks</span><i className="fas fa-chevron-up sidebar-chevron"></i></button>
          <button className={`sidebar-subitem ${!showForm && !showOverview && !showProfile ? 'active' : ''}`} onClick={() => { setShowForm(false); setShowProfile(false); setShowOverview(false); setFilter('All'); }}><i className="fas fa-circle"></i>All tasks</button>
          <button className={`sidebar-subitem ${showForm ? 'active' : ''}`} onClick={addTask}><i className="fas fa-circle"></i>Add task</button>
          <button className="sidebar-subitem" onClick={() => { setShowForm(false); setFilter('My tasks'); }}><i className="fas fa-circle"></i>My tasks</button>
        </div>
      </aside>

      <main className="task-content">
        <div className="account-bar">
          <div className="account-menu">
            <button className="account-trigger" onClick={() => setProfileOpen(!profileOpen)} aria-expanded={profileOpen} aria-haspopup="menu">
              <span className="account-avatar">{(user?.name || 'AY').split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()}</span>
              <strong>{user?.name || 'Abhishek Yadav'}</strong><i className="fas fa-caret-down"></i>
            </button>
            {profileOpen && <div className="account-dropdown" role="menu">
              <div className="account-details"><strong>{user?.email || 'abhishek@indexsolutions.in'}</strong><span>Technical</span></div>
              <button onClick={() => { setProfileOpen(false); setShowProfile(true); setShowOverview(false); setShowForm(false); }}><i className="fas fa-user"></i>My profile</button>
              <button onClick={() => navigate('/')}><i className="fas fa-globe"></i>View website</button>
              <button className="dropdown-logout" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i>Log out</button>
            </div>}
          </div>
        </div>
        {showForm ? <TaskForm form={form} updateForm={updateForm} saveTask={saveTask} saving={saving} error={error} editing={!!editingTask} onCancel={() => { setShowForm(false); setEditingTask(null); }} /> : showProfile ? <Profile user={user} onDashboard={() => { setShowProfile(false); setShowOverview(true); }} /> : showOverview ? <DashboardOverview tasks={tasks} user={user} onTasks={() => setShowOverview(false)} onAddTask={addTask} /> : <>
          <section className="task-header"><div><h1><i className="fas fa-tasks"></i> Tasks</h1><p>{visibleTasks.length} shown · filter: {filter}</p></div><div className="task-header-actions"><button className="add-task-button" onClick={addTask}><i className="fas fa-plus"></i> Add task</button><button className="outline-dashboard-button" onClick={() => navigate('/')}>Dashboard</button></div></section>
          <div className="task-filters">{filters.map((item) => <button className={filter === item ? 'selected' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <section className="task-table-wrap"><div className="task-table-head"><span>ID</span><span>TITLE</span><span>TYPE</span><span>ASSIGNED</span><span>DUE</span><span>PRIORITY</span><span>STATUS</span><span>ACTION</span></div>{visibleTasks.length === 0 ? <div className="task-empty">No tasks match this filter.</div> : visibleTasks.map((task) => <div className="task-table-row" key={task._id}><span>{task._id.slice(-5)}</span><strong>{task.title}</strong><span>{task.type || 'Support'}</span><span>{task.assignedTo || 'Unassigned'}</span><span>{task.dueDate || '-'}</span><span>{task.priority}</span><span>{task.status}</span><span className="task-row-actions"><button title="Edit Task" onClick={() => editTask(task)} aria-label={`Edit ${task.title}`}><i className="fas fa-pen"></i></button><button className="delete-task-button" title="Delete Task" onClick={() => deleteTask(task)} aria-label={`Delete ${task.title}`}><i className="fas fa-trash"></i></button></span></div>)}</section>
        </>}
        <p className="task-user"><i className="fas fa-user-circle"></i> {user?.name || 'Account'}</p>
      </main>
    </div>
  );
};

const DashboardOverview = ({ tasks, user, onTasks, onAddTask }) => {
  const today = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  const openTasks = tasks.filter((task) => task.status === 'Open').length;
  const assignedTasks = tasks.filter((task) => task.assignedTo && task.assignedTo !== 'Unassigned').length;

  return <section className="dashboard-overview"><div className="overview-heading"><span className="form-kicker">INDEX TECH SOLUTIONS</span><h1>Welcome back, {user?.name || 'Abhishek Yadav'}</h1><p>{today} · Index Tech Solutions admin dashboard · Technical</p></div><div className="overview-actions"><button className="overview-primary" onClick={onAddTask}><i className="fas fa-plus"></i> Add task</button><button className="overview-secondary" onClick={onTasks}><i className="fas fa-tasks"></i> View tasks</button></div><section className="overview-section"><span className="form-kicker">WORK & CLIENTS</span><h2>Work & clients</h2><div className="overview-cards"><button onClick={onTasks}><strong>{openTasks}</strong><span>Open tasks</span><i className="fas fa-arrow-right"></i></button><button onClick={() => onTasks()}><strong>{assignedTasks}</strong><span>Assigned to you</span><i className="fas fa-arrow-right"></i></button></div></section></section>;
};

const Profile = ({ user, onDashboard }) => {
  const { updateUser } = useAuth();
  const [profile, setProfile] = useState({ name: user?.name || 'Abhishek Yadav', email: user?.email || 'abhishek@indexsolutions.in', mobile: user?.mobile || '' });
  const [saved, setSaved] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileError, setProfileError] = useState('');
  const updateProfile = (event) => { setProfile({ ...profile, [event.target.name]: event.target.value }); setSaved(false); };
  const saveProfile = async (event) => {
    event.preventDefault();
    setSavingProfile(true);
    setProfileError('');
    try {
      const response = await api.put('/user/profile', profile, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      updateUser(response.data);
      setProfile(response.data);
      setSaved(true);
    } catch (requestError) {
      setProfileError(requestError.response?.data?.message || 'Unable to update profile.');
    } finally {
      setSavingProfile(false);
    }
  };

  return <section className="profile-page">
    <div className="profile-header"><div><h1><i className="fas fa-user"></i> My profile</h1><p>{profile.email}</p></div><div className="profile-header-actions"><button className="profile-password-button" onClick={() => window.alert('Please contact your administrator to change your password.')}><i className="fas fa-key"></i> Change password</button><button className="profile-dashboard-button" onClick={onDashboard}>Dashboard</button></div></div>
    <div className="profile-grid">
      <section className="profile-card profile-picture-card"><h2><i className="fas fa-image"></i> Profile picture</h2><div className="profile-card-body"><div className="profile-avatar-large"><i className="fas fa-user"></i></div><input className="profile-file" type="file" accept="image/png,image/jpeg,image/webp" /><button className="profile-update-photo" onClick={() => window.alert('Choose an image first to update your photo.')}><i className="fas fa-upload"></i> Update photo</button><p>JPG, PNG, or WEBP up to 1000 KB.</p></div></section>
      <section className="profile-card account-details-card"><h2><i className="fas fa-id-card"></i> Account details</h2><div className="profile-card-body"><span className="profile-kicker">BASIC INFORMATION</span><div className="profile-divider"></div>{profileError && <div className="profile-error">{profileError}</div>}<form onSubmit={saveProfile}><div className="profile-fields"><label>Name<input name="name" value={profile.name} onChange={updateProfile} required /></label><label>Email<input type="email" name="email" value={profile.email} onChange={updateProfile} required /></label><label className="mobile-field">Mobile <em>*</em><div className="mobile-input"><span>+</span><input value="91" readOnly /><input name="mobile" value={profile.mobile} onChange={updateProfile} placeholder="10-digit mobile" /></div><small>Country code defaults to 91 (India). Enter digits only.</small></label></div><div className="profile-actions"><button className="profile-save" type="submit" disabled={savingProfile}><i className="fas fa-save"></i> {savingProfile ? 'Updating...' : saved ? 'Profile updated' : 'Update profile'}</button><button className="profile-cancel" type="button" onClick={onDashboard}>Cancel</button></div></form></div></section>
    </div>
  </section>;
};

const TaskForm = ({ form, updateForm, saveTask, saving, error, onCancel, editing }) => (
  <section className="task-form-panel">
    <div className="task-form-heading"><div><span className="form-kicker">{editing ? 'EDIT TASK' : 'NEW TASK'}</span><h1>Task details</h1><p>{editing ? 'Update the task details and keep the project moving.' : 'Create a clear task for your team and keep the project moving.'}</p></div><button className="form-close" onClick={onCancel} aria-label="Close task form"><i className="fas fa-times"></i></button></div>
    {error && <div className="task-form-error">{error}</div>}
    <form onSubmit={saveTask}>
      <div className="task-form-section"><h2>Task details</h2><div className="form-grid"><Field label="Title *" name="title" value={form.title} onChange={updateForm} placeholder="Short summary of the work" required wide /><Field label="Description" name="description" value={form.description} onChange={updateForm} placeholder="Details, steps, links…" textarea wide /></div></div>
      <div className="task-form-section"><div className="metadata-grid"><SelectField label="Type" name="type" value={form.type} onChange={updateForm} options={['Support', 'Development', 'Design', 'Marketing']} /><SelectField label="Source" name="source" value={form.source} onChange={updateForm} options={['Admin', 'Customer', 'System']} /><Field label="Due date" name="dueDate" value={form.dueDate} onChange={updateForm} placeholder="dd-mm-yyyy" /></div></div>
      <div className="task-form-section assignment-section"><h2>Assignment & status</h2><div className="assignment-grid"><SelectField label="Assigned to *" name="assignedTo" value={form.assignedTo} onChange={updateForm} options={['Abhishek Yadav (Technical)', 'Unassigned']} required /><SelectField label="Priority" name="priority" value={form.priority} onChange={updateForm} options={['Normal', 'High', 'Low']} /><SelectField label="Status" name="status" value={form.status} onChange={updateForm} options={['Open', 'In progress', 'Completed']} /></div></div>
      <div className="task-form-actions"><button type="button" className="form-cancel" onClick={onCancel}>Cancel</button><button type="submit" className="form-save" disabled={saving}>{saving ? 'Saving...' : editing ? 'Save changes' : 'Create task'}</button></div>
    </form>
  </section>
);

const Field = ({ label, name, value, onChange, placeholder, textarea, hint, required, wide }) => <label className={wide ? 'wide-field' : ''}><span>{label}</span>{textarea ? <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows="4" /> : <input name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} />}{hint && <small>{hint}</small>}</label>;
const SelectField = ({ label, name, value, onChange, options, required }) => <label><span>{label}</span><select name={name} value={value} onChange={onChange} required={required}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;

export default Dashboard;
