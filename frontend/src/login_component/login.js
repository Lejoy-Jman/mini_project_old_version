import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationReg = async (e) => {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:3002/Login', {
          email,
          password,
        });
        console.log(response.data);

        if (response.data.message === 'Login successful') {
          navigate('/Profile/');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Sign-in error:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/login/login3.png" alt="Login" />
      </div>
      <div className="login-right">
        <h1 className="h1">Welcome Back :)</h1>
        <form onSubmit={validationReg}>
          <div className="login-input-container">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="login-input-container">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="buttons">
            <Link to="/signup">
              <button className="oldloginbutton">New User?</button>
            </Link>
            <button className="loginbutton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
