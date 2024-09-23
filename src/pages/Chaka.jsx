import React from 'react';
import chaka from '../assets/chaka.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ziplining from '../assets/Ziplining.jpeg';
import archery from '../assets/archery.jpeg';
import quad from '../assets/quad.jpeg';

const Chaka = () => {
  return (
    <>
    <Navbar />
    <div className="flex ">
      <div className="w-1/2 p-4">
        <img 
          src={chaka} 
          alt="Chaka" 
          className="w-full h-auto" 
        />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="date">Date:</label>
            <input 
              type="date" 
              id="date" 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="time">Time:</label>
            <input 
              type="time" 
              id="time" 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center h-screen'>
  <div className='p-6 rounded-lg shadow-md bg-white text-center'>
    <h1 className='text-2xl font-bold mb-4'>Exciting Experiences at Chaka Ranch</h1>
    <p className='text-lg text-gray-700 mb-4'>
      Dive into the thrill of outdoor adventures with hiking and biking, 
      complemented by exhilarating motocross rides, the art of archery, tranquil sundowners, and authentic bush dinners. 
      We also offer a variety of engaging activities, including pool games and board games, to enrich your stay.
    </p>
    <p className='text-lg text-black'>
      Let us help you create unforgettable memories in this serene and captivating environment.
    </p>
  </div>
  
  <div className='grid grid-cols-3 gap-6 mt-6'>
    <div className='text-center'>
      <img 
        src={Ziplining}
        alt='Ziplining Experience'
        className='w-full h-auto object-cover rounded-lg shadow-md max-w-4xl'
      />
      <h2 className='text-xl font-bold mt-4'>Ziplining</h2>
    </div>

    <div className='text-center'>
      <img 
        src={quad}
        alt='Motocross Adventure'
        className='w-full h-auto object-cover rounded-lg shadow-md max-w-4xl'
      />
      <h2 className='text-xl font-bold mt-4'>Quad Biking</h2>
    </div>

    <div className='text-center'>
      <img 
        src={archery}
        alt='Archery Practice'
        className='w-full h-auto object-cover rounded-lg shadow-md max-w-4xl'
      />
      <h2 className='text-xl font-bold mt-4'>Archery</h2>
    </div>
  </div>
</div>



   <Footer/>

    </>
  );
}

export default Chaka;
