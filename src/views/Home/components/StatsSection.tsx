import React from 'react';
import { motion } from 'framer-motion';
import { BiTime, BiMoney, BiHappy, BiLineChart } from 'react-icons/bi';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <BiTime className="w-10 h-10 text-indigo-500" />,
      number: '80%',
      description: 'Time Saved on Administrative Tasks',
    },
    {
      icon: <BiMoney className="w-10 h-10 text-indigo-500" />,
      number: '40%',
      description: 'Increase in Revenue Generation',
    },
    {
      icon: <BiHappy className="w-10 h-10 text-indigo-500" />,
      number: '95%',
      description: 'Patient Satisfaction Rate',
    },
    {
      icon: <BiLineChart className="w-10 h-10 text-indigo-500" />,
      number: '3x',
      description: 'Growth in Patient Conversions',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Healthcare Business
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex p-4 bg-indigo-100 rounded-xl mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;