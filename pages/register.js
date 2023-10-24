import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import logo from '../public/logo-white.svg';

export default function Register() {
  const router = useRouter();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    identity: '',
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const identity = e.target.identity.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://10.0.0.215:7000/api/register', {
        identity,
        name,
        email,
        password,
      });

      if (response.status === 200) {
        // Registration was successful
        setRegistrationSuccess(true); // Set registration success state to true
        // Clear form fields
        setFormData({
          identity: '',
          name: '',
          email: '',
          password: '',
        });
        // Automatically redirect to the login page after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-t from-slate-800 via-teal to-teal-800 flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 rtl-grid">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image src={logo} className="absolute top-1 right-4 m-1" style={{ width: 350, height: 180 }} alt="Logo" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
          انشاء حساب
        </h2>
      </div>

      <div className="bg-gray-200 px-6 py-12 shadow-lg rounded-3xl shadow-black mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        {registrationSuccess && (
          <div className="text-green-600 text-center font-semibold mb-2">
            تم انشاء الحساب بنجاح
          </div>
        )}
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
                value={formData.identity}
                onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-right">
              الاسم
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-right">
              البريد الإلكتروني
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {registrationSuccess ? 'تم الانشاء بنجاح' : 'انشاء'}
            </button>
          </div>
        </form>
        <p className="text-sm font-light text-slate-950 dark:text-slate-400 my-5">
          لديك حساب بالفعل !!{' '}
          <Link href="/login" className="text-sm font-light text-indigo-500 hover:underline dark:text-primary-500">
            سجل دخولك
          </Link>
        </p>
      </div>
    </div>
  );
}
