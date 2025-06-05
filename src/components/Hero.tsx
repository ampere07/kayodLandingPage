import React from 'react';
import DownloadButtons from './DownloadButtons';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Find Work, <span className="text-green-600">Get Paid.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Kayod connects job seekers with employers for quick and reliable employment opportunities. Post a job or find work - all in one place.
            </p>
            
            <DownloadButtons size="large" className="mb-8" />
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <div>
                <p className="font-medium">Trusted by</p>
                <p className="text-sm text-gray-500">10,000+ users</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 ml-auto w-full max-w-md">
              <img 
                src="https://images.pexels.com/photos/7661627/pexels-photo-7661627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kayod App Interface" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute top-1/4 -left-8 w-48 h-48 bg-green-200 rounded-full opacity-70 filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-100 rounded-full opacity-70 filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;