import React from 'react';
import { motion } from 'framer-motion';
import banner1 from '../assets/banner1.png';
import { useNavigate } from 'react-router';


function Home() {

  const navigate = useNavigate()

  const handleBtn = () =>{
     navigate('/services')
  }
  return (
    <div id='home' className='bg-neutralSilver'>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <img src={banner1} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            TechVivid - Powering Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4"
          >
            We build solutions that drive business success.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBtn}
            className="mt-6 px-6 py-3 bg-brandPrimary text-white font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Explore Services
          </motion.button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Reliable Service", desc: "We ensure 100% reliability in all our projects." },
              { title: "Affordable Pricing", desc: "Get the best services at the most competitive prices." },
              { title: "24/7 Support", desc: "We're here to assist you anytime, anywhere." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Web Development", desc: "We create stunning, responsive websites." },
              { title: "Mobile App Development", desc: "Custom mobile apps tailored for your needs." },
              { title: "Digital Marketing", desc: "Boost your business with data-driven strategies." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
