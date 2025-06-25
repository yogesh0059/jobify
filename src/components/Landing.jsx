import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          🚀 Welcome to <span className="text-yellow-300">Job Board</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover your next opportunity. Find jobs that match your skills and passions.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-yellow-300 text-purple-800 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
