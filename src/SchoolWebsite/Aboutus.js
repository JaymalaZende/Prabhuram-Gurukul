import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigator = useNavigate();

  const cardsData = [
    {
      image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
      title: "Mr. Sandip Shete",
      description: "( Founder and Managing Head of Prabhuram Gurukul )"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
      title: "Mrs. Sunita Shete",
      description: "( Founder and Principal of Prabhuram Gurukul )"},
    {
      image: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
      title: "Dr. Shubham Shete",
      description: "( Founder and Chief Advisor of Prabhuram Gurukul )"
    },
    // Add more card data objects here...
  ];

  const firstHalf = cardsData.slice(0, 3);

  return (
    <div className="bg-slate-300 container max-w-full px-8 py-6 mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to Prabhuram Gurukul, where ancient wisdom meets modern education to cultivate well-rounded, value-driven individuals. Our curriculum integrates stories from the Ramayana, Mahabharata, Vedas, and Puranas, promoting both theoretical and applied knowledge. We focus on holistic development through sports, yoga, meditation, music, and dance, while providing dedicated healthcare facilities. Language proficiency in Sanskrit, English, Marathi, and Hindi is emphasized for effective communication. Join us on a journey of self-discovery, cultural enrichment, and lifelong learning.
      </p>
      <div className="flex flex-wrap justify-center">
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" data-aos="zoom-in">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='rounded-md text-3xl bg-blue-700 text-white' onClick={() => navigator("/Aboutuspage")}>Read More</button>
    </div>
  );
};

export default AboutUs;
