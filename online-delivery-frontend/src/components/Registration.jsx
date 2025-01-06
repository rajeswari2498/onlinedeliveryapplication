import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, role } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Fetch the existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    const existingUser = storedUsers.find(user => user.email === email);
    if (existingUser) {
      setError('User is already registered with this email ID');
      return;
    }

    // Add the new user to the list
    const newUser = { firstName, lastName, email, password, role };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    setError('');
    alert(`Registration Successful! You are registered as a ${role}.`);
    navigate('/login');  // Redirect to login after successful registration
  };

  return (
    <div className="registration-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-box">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select a Role</option>
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="deliveryPersonnel">Delivery Personnel</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
