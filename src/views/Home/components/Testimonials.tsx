import React, { useState, useEffect } from 'react';
import { BiStar, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  specialty?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Aisha Patel",
      role: "Cardiologist",
      content: "GoGetWell.ai transformed my practice. The AI agent handles patient inquiries 24/7, freeing me to focus on treatments. My online visibility has improved significantly with the custom website, and patient conversion rates have increased by 40% in just three months.",
      rating: 5,
      specialty: "Heart Specialist"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Orthopedic Surgeon",
      content: "As a medical facilitator connecting international patients with hospitals, GoGetWell.ai has streamlined our entire workflow. The AI-powered website manages initial consultations and screening, saving us countless hours. Patient satisfaction scores have never been higher!",
      rating: 5,
      specialty: "Joint Replacement Expert"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Healthcare Facilitator",
      content: "The digital business tools from GoGetWell.ai helped me scale my healthcare facilitation service from 5 to 50 patients per month. The automated follow-ups and integrated payment system have made operations seamless. It's been a game-changer for my business.",
      rating: 4,
      specialty: "Medical Tourism Specialist"
    },
    {
      id: 4,
      name: "Dr. Rajiv Sharma",
      role: "Neurologist",
      content: "GoGetWell.ai transformed my practice. The AI agent handles patient inquiries 24/7, freeing me to focus on treatments. My online visibility has improved significantly with the custom website, and patient conversion rates have increased by 40% in just three months.",
      rating: 5,
      specialty: "Brain & Spine Specialist"
    },
    {
      id: 5,
      name: "Emily Roberts",
      role: "Medical Coordinator",
      content: "The digital business tools from GoGetWell.ai helped me scale my healthcare facilitation service from 5 to 50 patients per month. The automated follow-ups and integrated payment system have made operations seamless. It's been a game-changer for my business.",
      rating: 5,
      specialty: "International Patient Services"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  
  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      let itemsToShow = 1;
      if (window.innerWidth >= 768) itemsToShow = 2;
      if (window.innerWidth >= 1280) itemsToShow = 3;
      
      updateVisibleTestimonials(itemsToShow);
    };
    
    // Initial setup
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);
  
  const updateVisibleTestimonials = (itemsToShow: number) => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    setVisibleTestimonials(visible);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <BiStar 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how healthcare professionals are transforming their practices with our AI-powered solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-6 md:-left-6 transform -translate-y-1/2 z-10 ">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors "
              aria-label="Previous testimonial"
            >
              <BiChevronLeft className="w-5 h-5 text-primary" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors "
              aria-label="Next testimonial"
            >
              <BiChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
              >
                <div className="p-6 relative">
                  <FaQuoteLeft className="absolute top-6 right-6 w-8 h-8 text-indigo-100" />
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center mt-4">
                      <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-primary mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex flex-col">
                          <p className="text-primary text-sm">{testimonial.role}</p>
                          {testimonial.specialty && (
                            <p className="text-gray-500 text-xs">{testimonial.specialty}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1 w-full bg-primary"></div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 mx-1 rounded-full transition-all focus:outline-none
                  ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;