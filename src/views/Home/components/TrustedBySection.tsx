import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection: React.FC = () => {
  // You would replace these with actual partner logos
  const partners = [
    { name: 'Hospital Partner 1', logo: '🏥' },
    { name: 'Medical Group 2', logo: '⚕️' },
    { name: 'Healthcare Provider 3', logo: '💉' },
    { name: 'Medical Center 4', logo: '🩺' },
    { name: 'Hospital Network 5', logo: '🏥' },
    { name: 'Medical Association 6', logo: '⚕️' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Trusted by leading healthcare providers
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Replace with actual logos */}
              <div className="h-12 flex items-center justify-center">
                <span className="text-4xl">{partner.logo}</span>
                <span className="ml-2 text-gray-600 font-medium">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBySection;