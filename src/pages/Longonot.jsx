import React from 'react';
import navimages from '../assets/navimages.jpeg';
import hells from '../assets/hells.jpeg';
import Footer from '../components/Footer';
import cycing from '../assets/cycing.jpeg';
import Longonot1 from '../assets/Longonot1.jpeg';
import MtLongonot from '../assets/MtLongonot.jpg';

const Longonot= () => {
  return (
    <>
   
    <div>
      <img 
        src={navimages} 
        alt='top' 
        className='w-full h-40 object-cover' 
      />
      <div className='flex flex-col md:flex-row-reverse p-6'>
        <div className="md:w-1/2 p-4">
          <h1 className='text-2xl font-bold mb-4 text-center'>About</h1>
          <p className='mb-4 font-serif'>Mount Longonot is a stratovolcano located southeast of Lake Naivasha in the Great Rift Valley of Kenya, Africa..</p>
          <p className='font-serif'> spectacular scenic views, abundant flora and fauna, towering cliffs,  rock towers
             The park is a bundle of fun waiting to be explored.
              Nature trails, picnic sites, and two circuits loop around the park offering a variety of scenic sites and wildlife viewing opportunities.</p>
        </div>
        <div className="md:w-1/2 p-4">
          <img 
            src={Longonot1} 
            alt="Mt Longonot" 
            className="w-full h-auto object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse p-6'>
        <div className="md:w-1/2 p-4">|
          <img 
            src={MtLongonot} 
            alt="Wonder of Hells Gate" 
            className="w-full h-auto object-cover rounded-lg shadow-lg" 
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className='text-2xl font-bold mb-4'>Mt Longonot wonders</h2>
           <h1 className='text-orange-800 '>Hiking Mount Longonot</h1>
            <p className='font-serif'>The stunning views from the crater are a testament to determination.</p><br/>

            <h1 className='text-orange-800'>Geothermal Activities</h1>
            <p className='font-serif'>Hells Gate is known for its breathtaking gorges, geothermal activity, and the chance to see wildlife up close.</p>

        </div>
      </div>
      
    </div>

    <Footer />
    </>

  );
}

export default Longonot;
