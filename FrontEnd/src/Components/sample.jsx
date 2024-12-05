import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://tailwindcss.com/_next/static/media/hero@90.2237a1db.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-8 rounded-lg shadow-lg max-w-md w-full bg-gray-800 bg-opacity-75">
        <h2 className="text-2xl text-white font-bold mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
