import React from 'react';
import Hikeer from '../assets/Hikeer.avif';
import Hikeer2 from '../assets/Hikeer2.avif';

const Home = () => {
  return (
    <div>
      <div 
        className="h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${Hikeer})` }}
      >
        <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover The Best Hiking and Biking Destinations</h1>
          <p className="text-lg md:text-2xl">Explore breathtaking trails and scenic routes tailored for every adventurer. Book your next adventure today
             and journey into nature with ease</p>
        </div>
      </div>

      <div className="py-16 px-8 bg-orange-900">
      <h2 className="text-3xl font-bold text-center mb-8">Your Adventure Starts Here</h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Fueled by enthusiasm, shaped by expertise</h3>
            <p className="mb-4">
              Whether you're looking to explore stunning natural landscapes, <br/>
              book a convenient ride to your destination, or find the perfect trail that matches your skill level, <br />
              we’ve got you covered. <br />
              Our mission is to make outdoor adventures accessible, enjoyable, and safe for everyone.
            </p>
            <button className='bg-blue-500 rounded-sm'>Explore</button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={Hikeer2}
            alt="Adventure"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
