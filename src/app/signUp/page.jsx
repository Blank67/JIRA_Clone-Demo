"use client"
import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (username.trim() === '' || password.trim() === '' || email.trim() === '' || phoneNumber.trim() === '') {
      setError('All fields are required');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email address');
      return;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Invalid phone number');
      return;
    }
    setLoading(true);
    try {
      router.push('/login');
    } catch (signupError) {
      setError('Error during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='home-image'>
      <div className='login-container'>
        <div className='login-box'>
          <h1 className='heading'>SignUp To VIRA</h1>
          <div className='form-group '>
          <TextField
          className='mb-2'
            label='Username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
          className='mb-2'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
          className='mb-2'
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label='Phone Number'
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
          />
          
          </div>
          <div className='signup'>
            <p className='loading-text'>{loading && 'Signing up...'}</p>
          </div>
          <div className='signup'>
            <Link  href="login"> <h6>Login</h6>  </Link>
            
          </div>
          {error && <div className='error-message'>{error}</div>}
          <Button
            variant='outlined'
            className='w-100 py-2'
            onClick={handleSignUp}
            disabled={loading }
          >
            {loading ? <CircularProgress size={24} color='inherit' /> : 'Sign Up'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
