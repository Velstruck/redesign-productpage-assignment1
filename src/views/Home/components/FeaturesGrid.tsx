import React from 'react';
import { motion } from 'framer-motion';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const FeaturesGrid: React.FC = () => {
  const solutions = [
    {
      icon: <BiGlobeAlt className="w-7 h-7" />,
      title: "Custom AI-Powered Website",
      description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
      color: "bg-blue-500"
    },
    {
      icon: <FaUserSecret className="w-7 h-7" />,
      title: "Enhanced Patient Conversion",
      description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences and insights.",
      color: "bg-purple-500"
    },
    {
      icon: <BiMessageSquare className="w-7 h-7" />,
      title: "Real-Time Query Handling",
      description: "Instant response system for patient inquiries with AI-powered chat support and 24/7 support for all queries.",
      color: "bg-green-500"
    },
    {
      icon: <FiFileText className="w-7 h-7" />,
      title: "Medical Report Analysis",
      description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
      color: "bg-orange-500"
    },
    {
      icon: <BiTrendingUp className="w-7 h-7" />,
      title: "Improved Lead Generation",
      description: "Data-driven lead generation strategies to attract and engage potential patients.",
      color: "bg-pink-500"
    },
    {
      icon: <BsDatabase className="w-7 h-7" />,
      title: "Healthcare Database",
      description: "Extensive medical information database for accurate patient guidance and support.",
      color: "bg-indigo-500"
    },
    {
      icon: <LuLanguages className="w-7 h-7" />,
      title: "Multilingual Support",
      description: "Breaking language barriers with comprehensive multilingual communication tools.",
      color: "bg-red-500"
    },
    {
      icon: <BiCreditCard className="w-7 h-7" />,
      title: "Seamless Payment Handling",
      description: "Secure and efficient payment processing for medical services globally.",
      color: "bg-teal-500"
    },
    {
      icon: <BiSearch className="w-7 h-7" />,
      title: "Marketing And SEO",
      description: "Optimized digital presence with advanced SEO and marketing strategies.",
      color: "bg-cyan-500"
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your healthcare practice with intelligent automation
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className={`${solution.color} inline-flex p-4 rounded-xl text-white mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <div className={`h-1.5 w-full ${solution.color}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;