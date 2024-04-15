import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div
    className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover p-4" style={{ backgroundImage: "url('/aboutusbg.jpg')" }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='py-20 px-4 max-w-6xl mx-auto'
    >
      <h1 className='text-4xl font-bold mb-8 text-gray-900'>About Dream Homes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <p className='mb-6 text-lg text-gray-700'>
            Dream Homes is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <p className='mb-6 text-lg text-gray-700'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mb-6 text-lg text-gray-700'>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
        </div>
        <div className="md:col-span-1">
          <motion.img 
            src="aboutus.jpg" 
            alt="About Us" 
            className="rounded-lg shadow-lg w-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
      <div className="mt-16">
  <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Find Your Dream Home?</h2>
  <p className="mb-6 text-lg text-gray-700">Contact us today to get started!</p>
  <Link to={'/contact-us'}>
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Contact Us</button>
  </Link>
</div>

    </motion.div>
    </div>
  );
}
