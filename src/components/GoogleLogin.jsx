import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../Context/AuthContext';

const GoogleLogin = () => {

  const { loginWithGoogle } = useAuth();
  
  return (
    <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      }}
      onError={() => {
          console.log('Login Failed');
      }}
    /> 
  )
}

export default GoogleLogin;