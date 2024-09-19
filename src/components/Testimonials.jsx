import React from 'react';
import headshot1 from '../assets/headshot 1.jpeg';
import headshot from '../assets/headshot.jpeg';
import headshot2 from '../assets/headshot2.jpeg';


const testimonialData = [
    {
        name: 'John Doe',
        photo: headshot, 
        feedback: 'This is an amazing product! Highly recommend to everyone.',
    },
    {
        name: 'Jane Smith',
        photo: headshot1,
        feedback: 'Fantastic service and support. Very satisfied!',
    },
    {
        name: 'Alice Johnson',
        photo: headshot2,
        feedback: 'A truly transformative experience. Excellent quality!',
    },
];

const Testimonials = () => {
    return (
        <div className="bg-gray-100 py-8">
            <h2 className="text-center text-3xl font-semibold mb-8">Testimonials</h2>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-md max-w-xs text-center">
                        <img 
                            src={testimonial.photo || 'https://via.placeholder.com/150'}
                            alt={`${testimonial.name}`} 
                            className="w-16 h-16 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
