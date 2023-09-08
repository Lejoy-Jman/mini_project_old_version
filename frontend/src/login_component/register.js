import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
// import { ToastContainer, toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['./register/register1.gif', './register/register2.gif', './register/register3.gif'];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  const validationReg = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    //   toast.error('Please fill in all fields.');
    alert("please fill the details")
    } else {
      try {
        const response = await axios.post('http://localhost:3002/api/Signup', data);
        console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="signup-container ">
      <div className="signup-left">
        <img src={images[imageIndex]} alt="Registration GIF" />
      </div>
      <div className="signup-right">
        <form>
          <h1>Create an account</h1>
          <div className="input-container">
            <i className="fa-regular fa-user"></i>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          </div>
          <div className="input-container">
            <i className="fa-regular fa-envelope"></i>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="input-container">
            <i className="fa-solid fa-lock"></i>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          </div>
          <div>
            <Link to="/">
              <button className="olduserbutton" type="submit">
                Have an account?
              </button>
            </Link>
            <button className="signupbutton" onClick={validationReg}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
