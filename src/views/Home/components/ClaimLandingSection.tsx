import React from 'react';
import { motion } from 'framer-motion';
// import PatientSignUpPopup from '@/views/auth/PatientSignUp/Popup';
import { BiBot } from 'react-icons/bi';

const ClaimLandingSection: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    className="flex flex-col items-center text-center space-y-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg p-5 rounded-full">
                        <BiBot className="w-14 h-14 text-white" />
                    </div>

                    <div className="max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                            Claim Your Digital Front Office
                        </h2>
                        <p className="text-xl text-indigo-100 mb-10">
                            Use the power of AI to transform your online presence and automate patient interactions
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-6 w-full max-w-md">
                        <div className="bg-white bg-opacity-10 backdrop-blur p-1 rounded-lg">
                            <input
                                type="text"
                                placeholder="GoGetWell.ai/your_name"
                                className="w-full px-6 py-4 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            />
                        </div>
                        {/* <PatientSignUpPopup 
                            hcfLogin 
                            popupButtonStatus 
                            buttonChildren={
                                <button className="w-full bg-white text-indigo-900 py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors duration-300">
                                    Join the Waiting List
                                </button>
                            } 
                        /> */}
                    </div>
                    
                    <div className="pt-6 text-indigo-200 max-w-2xl">
                        <p className="text-sm">
                            By signing up, you'll get priority access when we launch. No credit card required.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClaimLandingSection;