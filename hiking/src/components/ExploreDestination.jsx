import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import destinations from '../destinations';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ExploreDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (destination) => {
    setSelectedDestination(destination);
    navigate(`/destinations/${destination.id}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '0', 

    
  }
  return (
    <>
    <div className="relative py-16 px-8 bg-white">
      <h2 className="text-black text-3xl font-bold text-center mb-8">Explore Our Destinations</h2>
      <div className="relative z-10">
        <Slider {...sliderSettings}>
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(destination)}
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-60 h-80 object-cover"
                />
                <div className="absolute inset-x-0 top-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-xl font-bold">{destination.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedDestination && (
        <div className="mt-8 p-4 bg-white shadow-md rounded relative z-10">
          <h3 className="text-xl font-bold">{selectedDestination.title}</h3>
          <p>{selectedDestination.description}</p>
        </div>
      )}
    </div>
    </>

  );
};

export default ExploreDestinations;
