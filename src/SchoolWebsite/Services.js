// src/App.js

import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Our Educational Approach</h1>
      </header>
      <main className="p-6 space-y-8">
        <div className="flex flex-wrap justify-center">
          <section className="bg-white shadow-md rounded-lg p-6 m-2 flex-grow">
            <h2 className="text-2xl font-bold text-blue-600">STEM & STEAM Learning</h2>
            <p className="mt-2">
              A future-focused educational approach that uses Science, Technology, Engineering, Arts, and Mathematics in our curriculum.
            </p>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 m-2 flex-grow">
            <h2 className="text-2xl font-bold text-blue-600">Smart Class</h2>
            <p className="mt-2">
              Our classrooms are smart rooms equipped with state-of-the-art digital repository.
            </p>
          </section>
        </div>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600">Experiential Learning</h2>
          <p className="mt-2">
            The best way to learn is by doing, and the Orbis Schools provide ample opportunities for this aspect of life-long learning.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600">Library</h2>
          <p className="mt-2">
            Eco-friendly computer and iLabs, ERP, GPS, Microsoft, and Google empowered teaching.
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 The Orbis Schools. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
