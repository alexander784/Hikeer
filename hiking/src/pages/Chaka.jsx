import React from 'react';
import navimages from '../assets/navimages.jpeg';
import hells from '../assets/hells.jpeg';
import Footer from '../components/Footer';
import cycing from '../assets/cycing.jpeg';
import Biking22 from '../assets/Biking22.avif';
import biking1 from '../assets/biking1.avif';

const Chaka = () => {
  return (
    <>
    <div className='relative'>
      <img 
        src={navimages} 
        alt='top' 
        className='w-full h-60 object-cover'
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className='text-white text-3xl font-bold bg-opacity-50 px-4 py-2 rounded'>
         Chaka Ranch
        </h1>
      </div>
    </div>

    <div className='flex flex-col md:flex-row-reverse p-6'>
      <div className="md:w-1/2 p-4">
        <h1 className='text-2xl font-bold mb-4 text-center'>About</h1>
        <p className='mb-4 font-serif'></p>
        <p className='font-serif'>The Chaka Ranch Leisure Park is an entertainment facility in Kiganjo, Nyeri County. Open DAILY including public holidays and only a two hour drive from Nairobi City Centre, the Chaka Ranch Leisure Park is a beautiful and intimate haven for outdoor lovers</p>
      </div>
      <div className="md:w-1/2 p-4">
        <img 
          src={biking1} 
          alt="Hells Gate" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
    
    <div className='flex flex-col md:flex-row-reverse p-6'>
      <div className="md:w-1/2 p-4">
        <img 
          src={Biking22} 
          alt="Wonder of Hells Gate" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className='text-2xl font-bold mb-4'>Chaka Ranch Wonders</h2>
        <h1 className='text-orange-800'>Quad Biking</h1>
        <p className='font-serif'>adrenalin-inducing thrill-ride of a quad bike ride</p><br/>

        <h1 className='text-orange-800'>Gun Games</h1>
        <p className='font-serif'>You’ll feel like a real cowboy, wearing chaps, a slick cowboy hat, and clicking your boots as you become a pro gunslinger. Pick your favorite weapon, and engage in a high-risk shootout in our challenges! </p>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default Chaka;
