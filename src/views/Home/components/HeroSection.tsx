import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/images/hero-dashboard.png'; // Replace with your actual image path
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { Button } from '@/components/ui';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
    
}) => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
            {/* Navbar */}
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />
            
            {/* Hero Background Shapes */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 md:pt-16 md:pb-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Hero Content */}
                    <motion.div 
                        className="w-full md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            AI Front Office for
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300"> Healthcare Agents</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0">
                            Create your AI-powered website in 2 minutes and automate patient interactions. Scale your business with intelligent digital marketing.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <HcfSignupPopup 
                                popupButtonStatus 
                                buttonChildren={
                                    <Button 
                                        block 
                                        variant='solid' 
                                        className="rounded-full py-3 px-8 text-lg shadow-lg bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary transition-all duration-300"
                                    >
                                        Get Started Free
                                    </Button>
                                } 
                            />
                            
                            <Button 
                                onClick={() => scrollToSection(featuresRef)}
                                block 
                                variant='plain' 
                                className="rounded-full border-2 border-indigo-300 text-white py-3 px-8 text-lg hover:bg-indigo-900/30"
                            >
                                See How It Works
                            </Button>
                        </div>
                        
                        {/* Stats Badge */}
                        <div className="mt-12 grid grid-cols-3 gap-4 p-4 bg-indigo-900/40 backdrop-blur-sm rounded-xl border border-indigo-700/30 max-w-lg mx-auto md:mx-0">
                            <div className="text-center">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">2,100<span className="text-primary">+</span></h3>
                                <p className="text-indigo-200 text-sm">Doctors</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">1,000<span className="text-primary">+</span></h3>
                                <p className="text-indigo-200 text-sm">Hospitals</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white">800<span className="text-primary">+</span></h3>
                                <p className="text-indigo-200 text-sm">Treatment Plans</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Hero Image */}
                    <motion.div 
                        className="w-full md:w-1/2 mt-12 md:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg transform rotate-6 scale-95 opacity-20 blur-lg"></div>
                            <img 
                                src={heroImage} 
                                alt="AI Front Office Dashboard" 
                                className="relative z-10 rounded-lg shadow-2xl border border-indigo-800/30"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;