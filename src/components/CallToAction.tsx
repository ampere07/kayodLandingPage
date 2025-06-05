import React from 'react';
import DownloadButtons from './DownloadButtons';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Kayod Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Download the app now and join thousands of users already finding jobs and talent on Kayod.
            </p>
            
            <DownloadButtons 
              size="large" 
              className="justify-start" 
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kayod App in Action" 
                className="relative z-10 rounded-xl shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 bg-white text-green-700 px-6 py-2 rounded-lg font-bold shadow-lg z-20">
                Start today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;