'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
    router.push('/');
  };

  return (
    <div className='signup-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='signup-card bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>
        <h2 className='signup-title text-2xl font-semibold mb-6 text-center text-gray-800'>Sign Up</h2>
        <form className='signup-form flex flex-col space-y-4' onSubmit={handleSubmit}>
          <input
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
            className='signup-input p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
            className='signup-input p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='signup-input p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className='signup-input p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button type='submit' className='signup-button bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;