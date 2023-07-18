import React from 'react'
import { useState } from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';
import '../Styles/login.css';


const Login = (props) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!pass) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email);
    }

    try {
      const user = signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
    }
    catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='bgclr'>
      <div className='uth-form' style={{ width: "20%", margin: "0 auto", marginTop: "90px" }}>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>email</label>

          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email id' id='email' name='email' />

          {errors.email && <div className='error'><p style={{ color: "red" }}>{errors.email}</p></div>}

          <label htmlFor='password'>Password</label>

          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Enter a password' id='password' name='password' />

          {errors.password && <div className='error' style={{ color: "red" }}>{errors.password}</div>}

          <button onClick={handleSubmit}>Log In</button>
          <button className='link-btn' onClick={() => navigate('/register')}>  Don't have an account? Register</button>
        </form>
      </div>
    </div>
  )
}
export default Login;