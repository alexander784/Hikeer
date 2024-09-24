import React from 'react';
import Hikeer2 from '../assets/Hikeer2.avif';
import ExploreDestinations from '../components/ExploreDestination';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import biking from '../assets/biking.avif';
import back from '../assets/back.avif';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div 
        className="h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${back})`}}
      >
        <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover The Best Hiking and Biking Destinations</h1>
          <p className="text-lg md:text-2xl">
            Explore breathtaking trails and scenic routes tailored for every adventurer. Book your next adventure today
            and journey into nature with ease.
          </p>
        </div>
      </div>

      <div 
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative" 
        style={{ backgroundImage: `url(${biking})`, backgroundAttachment: 'fixed' }}
      >
        <h2 className="text-white text-3xl font-bold text-center mb-8 absolute top-8">Your Adventure Starts Here</h2>
        <div className="flex flex-col md:flex-row items-start gap-8 z-10">
          <div className="flex-1">
            <div className="p-4">
              <h3 className="text-white text-xl font-bold mb-2">Fueled by enthusiasm, shaped by expertise</h3>
              <p className="mb-4 text-white">
                Whether you're looking to explore stunning natural landscapes, <br/>
                book a convenient ride to your destination, or find the perfect trail that matches your skill level, <br />
                we’ve got you covered. <br />
                Our mission is to make outdoor adventures accessible, enjoyable, and safe for everyone.
              </p>
              <button 
                onClick={() => navigate("/reserve")} 
                className="bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Reserve Hike
              </button>
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
      <ExploreDestinations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
