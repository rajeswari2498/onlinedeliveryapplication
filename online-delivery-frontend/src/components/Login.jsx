import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './Login.css';

function Login({ setUser }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Fetch the existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    const existingUser = storedUsers.find(user => user.email === email);

    if (existingUser) {
      if (existingUser.password === password) {
        setError('');
        setUser(existingUser);  // Set user state after successful login
        alert('Login Successful');  // Show alert
        navigate('/');  // Redirect to home page after showing alert
      } else {
        setError('Invalid password');
      }
    } else {
      setError('User not registered. Please register first.');
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-box">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
