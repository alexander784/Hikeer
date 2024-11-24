import React from 'react';
import navimages from '../assets/navimages.jpeg';
import Footer from '../components/Footer';
import walking from '../assets/walking.jpg';
import MKenya from '../assets/MKenya.jpg';
import Navbar from '../components/Navbar';
import mountback from '../assets/mountback.avif';

const KenyaDestination = () => {
  return (
    <>
    <Navbar />
    <div className='relative'>
      <img
        src={mountback}
        alt='top'
        className='w-full h-40 object-cover'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
      <h1 className='text-white text-2xl font-bold'>Mt Kenya National park</h1>
    </div>
    </div>

     <div className='flex flex-col md:flex-row-reverse p-6'>
     <div className="md:w-1/2 p-4">
    <h1 className='text-2xl font-bold mb-4 text-center'>About</h1>
    <p className='mb-4 font-serif'>
      Mt. Kenya National Park offers a unique experience for nature enthusiasts, blending adventure with the serenity of the wild.
    </p>
    <p className='font-serif'>
      Visitors can traverse diverse landscapes, from the dry, rugged terrain of Mount Kenya’s slopes, to the lush bamboo and highland forests found on the descent along the Chogoria path. This contrast in the environment makes the park an exciting destination for explorers.
    </p>
  </div>
  <div className="md:w-1/2 p-4">
    <img
      src={MKenya}
      alt="Mt Kenya"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
</div>

<div className='flex flex-col md:flex-row-reverse p-6'>
  <div className="md:w-1/2 p-4">
    <img
      src={walking}
      alt="Mt Kenya"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h2 className='text-2xl font-bold mb-4'>Mt. Kenya Wonders</h2>
    <h1 className='text-orange-800'>Scenic Views</h1>
    <p className='font-serif'>
      The stunning views from Mount Kenya are unparalleled, with dramatic landscapes that stretch across the park, offering visitors breathtaking vistas at every turn.
    </p>
    <br/>
    <h1 className='text-orange-800'>Hiking</h1>
    <p className='font-serif'>
      Tourist Enjoy Trekking through the dry side of the Mountain with its giant trees and rocky terrain,

    </p>
  </div>
</div>



    <Footer />
    </>

  );
}

export default KenyaDestination;
