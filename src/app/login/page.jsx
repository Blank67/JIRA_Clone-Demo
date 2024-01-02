"use client"
import React, { useState } from 'react';
import './Login.css';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password cannot be blank');
    } else {
      setError('');
    
    }
  };

  return (
    <div className='home-image'>
      <div className='login-container '>
        <div className='login-box'>
          <h1 className='heading'>VIRA</h1>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className='error-message'>{error}</div>}
          
          {!error ? (
  <Link href="/home">
    <button className="w-100 py-2" onClick={handleLogin}>
      Login
    </button>
  </Link>
) : (
  <button className="w-100 py-2" onClick={handleLogin}>
    Login
  </button>
)}

        </div>
      </div>
    </div>
  );
};

export default LoginPage;