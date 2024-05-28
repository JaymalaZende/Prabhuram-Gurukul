import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const AboutUsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false }); // Initialize AOS with animations reset on scroll
  }, []);

  return (
    <div className="bg-gray-900 text-white">
   
      <div className="max-h-72">
      
      </div>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
            PRABHURAM GURUKUL: Nurturing Excellence and Values
          </h1>
          <p className="text-xl text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            Welcome to Prabhuram Gurukul, a sanctuary of holistic learning where ancient wisdom meets modern education. Our mission is to cultivate well-rounded individuals through a unique blend of value-based education, theoretical and applied knowledge, and a deep connection to our cultural heritage.
          </p>

          <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <Section
              title="Our Core Philosophy"
              text="At Prabhuram Gurukul, we believe that education extends beyond textbooks. Our approach is rooted in the principles of value-based education, ensuring that our students not only excel academically but also grow into morally upright and socially responsible individuals. We strive to instill virtues such as self-discipline, self-confidence, respect for elders, and effective communication skills."
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3VyJTIwQ29yZSUyMFBoaWxvc29waHklMjBpbiUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
              imagePosition="right"
            />
            <Section
              title="Wisdom from Ancient Texts"
              text="Our curriculum is enriched with fascinating stories and lessons from the Ramayana, Mahabharata, Vedas, and Puranas. These timeless epics and scriptures are not just tales of the past but are treasure troves of life-changing lessons. Through engaging narratives and thoughtful discussions, we help students uncover profound insights and apply them to their daily lives."
              image="https://plus.unsplash.com/premium_photo-1682284079705-dd1631f76f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D%3D"
              imagePosition="left"
            />
            <section className="mb-8 flex flex-col items-center">
              <div className="flex-1 text-center mb-8">
                <h2 className="text-3xl font-semibold text-black mb-4" data-aos="fade-up">Comprehensive Student Development</h2>
                <p className="text-lg text-gray-900" data-aos="fade-up" data-aos-delay="200">
                  Prabhuram Gurukul is dedicated to nurturing the multidimensional personalities of our students. We believe in the importance of a balanced education that includes:
                </p>
              </div>
              <ul className="list-disc list-inside text-lg text-black mb-4 w-full max-w-3xl">
                <li className="flex flex-col md:flex-row-reverse items-center mb-6" data-aos="fade-up" data-aos-delay="400">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/03/06/13/japan-1432826_640.jpg"
                    alt="Physical Fitness"
                    className="w-48 h-32 md:w-48 md:h-32 mb-4 md:mb-0 md:ml-4 rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
                  />
                  <div className="flex-1">
                    <strong className="text-black">Physical Fitness and Team Spirit:</strong>
                    <p>Physical activity is crucial for overall well-being. Our sports programs promote teamwork, discipline, and a healthy lifestyle.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row-reverse items-center mb-6" data-aos="fade-up" data-aos-delay="600">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/06/27/08/37/monk-7287041_640.jpg"
                    alt="Mental Clarity"
                    className="w-48 h-32 md:w-48 md:h-32 mb-4 md:mb-0 md:ml-4 rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
                  />
                  <div className="flex-1">
                    <strong className="text-black">Mental Clarity and Emotional Balance:</strong>
                    <p>Yoga and meditation are integral to maintaining mental clarity and emotional balance. Our students learn techniques to enhance focus, reduce stress, and cultivate inner peace.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row-reverse items-center mb-6" data-aos="fade-up" data-aos-delay="800">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/08/26/16/15/taj-mahal-5519945_640.jpg"
                    alt="Artistic Expression"
                    className="w-48 h-32 md:w-48 md:h-32 mb-4 md:mb-0 md:ml-4 rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
                  />
                  <div className="flex-1">
                    <strong className="text-black">Cultural and Artistic Expression:</strong>
                    <p>Artistic expression is a vital part of our curriculum. Music and dance help students develop creativity, rhythm, and an appreciation for cultural arts.</p>
                  </div>
                </li>
              </ul>
            </section>

            <Section
              title="Dedicated Healthcare Services"
              text="Understanding the importance of health in a student's life, we provide separate healthcare facilities within the Gurukul. Our dedicated health professionals ensure that every student receives the necessary medical attention and guidance to maintain their physical health."
              image="https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_640.jpg"
              imagePosition="left"
            />
            <section className="mb-8 flex flex-col items-center">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-black mb-4" data-aos="fade-up">Mastery of Languages</h2>
                <p className="text-lg text-black" data-aos="fade-up" data-aos-delay="200">
                  In today's globalized world, language skills are essential. At Prabhuram Gurukul, we offer comprehensive language education, focusing on:
                </p>
              </div>
              <div className="w-full max-w-3xl flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="400">
                <div className="flex-1 text-left mb-4 md:mb-0 md:mr-4">
                  <div className="text-lg text-black mb-4">
                    <strong className="text-black">Connecting with Heritage:</strong>
                    <p>Sanskrit connects students to their roots and enriches their understanding of ancient texts.</p>
                  </div>
                  <div className="text-lg text-black mb-4">
                    <strong className="text-black">Global Communication:</strong>
                    <p>English equips students with the global language of communication and commerce.</p>
                  </div>
                  <div className="text-lg text-gray-900 mb-4">
                    <strong className="text-black">Regional Pride:</strong>
                    <p>Marathi fosters a sense of regional pride and cultural identity.</p>
                  </div>
                  <div className="text-lg text-gray-950">
                    <strong className="text-black">National Unity:</strong>
                    <p>Hindi, as the national language, binds students to the larger Indian community.</p>
                  </div>
                </div>
                <img
                  src="https://cdn.pixabay.com/photo/2019/12/30/13/28/english-4729683_640.jpg"
                  alt="Language Mastery"
                  className="w-full md:w-1/3 rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
                />
              </div>
            </section>

            <Section
              title="Join Prabhuram Gurukul"
              text="Embark on a journey of holistic education, cultural enrichment, and personal growth with Prabhuram Gurukul. Join us in nurturing the leaders and visionaries of tomorrow. Admissions open for the upcoming academic year. Take the first step towards excellence today!"
              image="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg"
              imagePosition="right"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const Section = ({ title, text, image, imagePosition }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-12">
    <div className={`flex-1 ${imagePosition === 'right' ? 'md:ml-8' : 'md:mr-8'}`} data-aos="fade-up">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg text-black">{text}</p>
    </div>
    <div className={`flex-1 mt-8 md:mt-0 ${imagePosition === 'right' ? 'md:mr-8' : 'md:ml-8'}`} data-aos="fade-up" data-aos-delay="200">
      <img src={image} alt={title} className="w-full rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2" />
    </div>
  </div>
);

export default AboutUsPage;
