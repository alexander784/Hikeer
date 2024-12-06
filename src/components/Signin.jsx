import React from 'react';
import { GoogleLogin } from '@react-oauth/google';


const Signin = () => {
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

    <GoogleLogin
       onSuccess={credentialResponse => {
        console.log(credentialResponse);
    }}
    onError={() => {
        console.log('Login Failed');
    }}
    />
    <div className='mt-4 text-center text-sm text-black'>
    </div>
    

    </div>
    </div>

    
    )
}

export default Signin;