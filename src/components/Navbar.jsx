import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex fixed w-full bg-red-300  items-center justify-between p-4'>
      <div className='flex items-center'>
        <div className='bg-red-400 p-2 rounded'>
          <span className='text-white text-lg font-bold'>Brand</span>
        </div>
      </div>
      <div className='flex space-x-4'>
        <a href="/" className='text-white hover:text-gray-700'>Home</a>
        <a href="#" className='text-white hover:text-gray-700'>About</a>
        <a href="#" className='text-white hover:text-gray-700'>Services</a>
        <a href="#" className='text-white hover:text-gray-700'>Contact</a>
      </div>
      <div>
        <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
