import React from 'react';
import navimages from '../assets/navimages.jpeg';
import hells from '../assets/hells.jpeg';
import Footer from '../components/Footer';
import cycing from '../assets/cycing.jpeg';
import Navbar from '../components/Navbar';

const Hells = () => {
  return (
    <>
    <Navbar />
    <div className='relative'>
      <img 
        src={navimages} 
        alt='top' 
        className='w-full h-60 object-cover'
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className='text-white text-3xl font-bold bg-opacity-50 px-4 py-2 rounded'>
         Hells Gate
        </h1>
      </div>
    </div>

    <div className='flex flex-col md:flex-row-reverse p-6'>
      <div className="md:w-1/2 p-4">
        <h1 className='text-2xl font-bold mb-4 text-center'>About</h1>
        <p className='mb-4 font-serif'>Hells Gate National Park provides the ideal fun in the wild experience.</p>
        <p className='font-serif'>From panoramic picnic sites, spectacular scenic views, abundant flora and fauna, towering cliffs, water gouged gorges, rock towers geothermal steams from Olkaria Geothermal I power station located inside the park southwest of Naivasha, the park is a bundle of fun waiting to be explored. Nature trails, picnic sites, and two circuits loop around the park offering a variety of scenic sites and wildlife viewing opportunities.</p>
      </div>
      <div className="md:w-1/2 p-4">
        <img 
          src={hells} 
          alt="Hells Gate" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
    
    <div className='flex flex-col md:flex-row-reverse p-6'>
      <div className="md:w-1/2 p-4">
        <img 
          src={cycing} 
          alt="Wonder of Hells Gate" 
          className="w-full h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className='text-2xl font-bold mb-4'>Wonders of Hells Gate</h2>
        <h1 className='text-orange-800'>Hiking and Cycling</h1>
        <p className='font-serif'>The park is one of the few places in Kenya where you can walk and cycle alongside zebras and other wildlife</p><br/>

        <h1 className='text-orange-800'>Geothermal Activities</h1>
        <p className='font-serif'>Hells Gate is known for its breathtaking gorges, geothermal activity, and the chance to see wildlife up close.</p>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default Hells;
