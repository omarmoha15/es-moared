import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Cookies from 'js-cookie'; // Import the Cookies library
import logo from '../public/logo-white.svg';

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const makeRequest = async (identity, password) => {
    const data = JSON.stringify({
      identity,
      password
    });
  
    const config = {
      method: 'post',
      url: 'http://10.0.0.215:7000/api/login',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNsszI2Nzg2OTg3NTIuMzUwNDEyODQsImp0aSI6IjA0MTI5ZWU0NjRhNWY0ODQyZDgyNzZhYThmMWMzNzk1In0.Zh9Y_Eh5CGm7sBEvu5mm0XWVx0wYfwFVQ-L7dQvTluA', // Replace with your long token here
      },
      data: data
    };
  
    try {
      const response = await axios(config);
  
      // Save the CSRF token in local storage
      localStorage.setItem('csrfToken', response.headers['csrftoken']);
       const sessionId = localStorage.getItem('sessionId');
  
      // Save the response data in a cookie (for example, 'userData')
      Cookies.set('userData', JSON.stringify(response.data), {
        sameSite: 'None', // Set the SameSite attribute to None
        secure: true,     // Use the Secure attribute for HTTPS connections
      });
  
      console.log('Successful login:', response.data);
  
      // Check if you reach this point
      await router.push('/employerIfo'); // Redirect to employerInfo on success
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('الرجاء التأكد من رقم الهوية أو كلمة المرور'); // Set error message for network errors
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const identity = e.target.identity.value;
    const password = e.target.password.value;
    makeRequest(identity, password);
  };

  return (
    <div className="bg-gradient-to-t from-slate-800 via-teal to-teal-800 flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 rtl-grid">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src={logo} className="absolute top-1 right-4 m-1" style={{ width: 350, height: 180 }} alt="Logo" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
          تسجيل الدخول
        </h2>
      </div>

      <div className="bg-gray-200 px-6 py-12 shadow-lg rounded-3xl shadow-black mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        {errorMessage && <div className="text-red-600 text-center font-semibold mb-2">{errorMessage}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="identity" className="block text-sm font-medium leading-6 text-gray-900 text-right">
              رقم الهوية
            </label>
            <div className="mt-2">
              <input
                id="identity"
                name="identity"
                type="text"
                autoComplete="identity"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-right">
              كلمة المرور
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              تسجيل الدخول
            </button>
          </div>
        </form>
        <p className="text-sm font-light text-slate-950 dark:text-slate-400 my-5">
          ما عندك حساب بالفعل !! 
          <Link href="/register" className="text-sm font-light text-indigo-500 hover:underline dark:text-primary-500"> انشاء حساب</Link>
        </p>

      </div>
    </div>
  );
}
