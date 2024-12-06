import React from 'react';
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className='flex fixed w-full bg-black  items-center justify-between p-4'>
      <div className='flex items-center'>
        {/* <div className='bg-red-400 p-2 ro`unded'> */}
          <a href='/' className='text-white text-lg font-bold'>Hikeers</a>
        {/* </div> */}
      </div>
      <div className='flex space-x-4'>
        <a href="/" className='text-white hover:text-gray-700'>Home</a>
        <a href="" className='text-white hover:text-gray-700'>About</a>
        <a href="/" className='text-white hover:text-gray-700'>Services</a>
        <a href="footer" className='text-white hover:text-gray-700'>Contact</a>
      </div>
      <div>
        <a href='/signin' className='text-white'>
          <VscAccount className='white' />
          Account
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
