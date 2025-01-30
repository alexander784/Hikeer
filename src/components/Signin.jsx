import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import { AuthProvider, useAuth } from '../Context/AuthContext';
import GoogleLogin from './GoogleLogin';

const Signin = () => {
  const {login} = useAuth();

  const handleGoogleSuccess = (credentialResponse) => {
    const user = credentialResponse?.credential;
    if(user) {
      login(user);
      console.log('Logged in with Google', user);
    }
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    if (email && password) {
      const name = email.split('@')[0]
      login(name);
      console.log('logged in with email', name);

    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
      <h1 className='text-center text-xl'>Login</h1>
        <form>
            <input type='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded'
            />
            <input type='password' placeholder='Password' className='w-full p-2 mb-4 border border-gray-300 rounded'
            />
          <button type='submit' className='w-full py-2 bg-zinc-600 text-white rounded'>
            Sign In
          </button>
        </form>
       <h1 className='text-center text-black'>Login with Google</h1>

       {/* <GoogleLogin /> */}
    </div>
    </div>

    
    )
}

export default Signin;