"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const validationSchema = yup.object({
  username: yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
  password: yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
  email: yup.string().matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,'Invalid email address').required('Email is required'),
  phoneNumber: yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required'),
});

const SignUp = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // signup logic
        router.push('/login');
      } catch (signupError) {
        console.error('Error during signup:', signupError);
      }
    },
  });

  return (
    <div className='home-image'>
      <div className='login-container'>
        <div className='login-box'>
          <h1 className='heading'>SignUp To VIRA</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='form-group '>
              <TextField
                className='mb-2'
                label='Username'
                type='text'
                fullWidth
                {...formik.getFieldProps('username')}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                className='mb-2'
                label='Password'
                type='password'
                fullWidth
                {...formik.getFieldProps('password')}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                className='mb-2'
                label='Email'
                type='email'
                fullWidth
                {...formik.getFieldProps('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label='Phone Number'
                type='tel'
                maxLength={10}
                fullWidth
                {...formik.getFieldProps('phoneNumber')}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
            </div>
            <div className='signup'>
              <p className='loading-text'>{formik.isSubmitting && 'Signing up...'}</p>
            </div>
            <div className='signup'>
              <Link href='login'>
                <h6>Login</h6>
              </Link>
            </div>
            {formik.errors.general && <div className='error-message'>{formik.errors.general}</div>}
            <Button
              variant='outlined'
              className='w-100 py-2'
              type='submit'
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <CircularProgress size={24} color='inherit' />
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
