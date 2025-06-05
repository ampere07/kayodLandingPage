import React from 'react';
import { Search, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-10 h-10 text-green-600" />,
    title: 'Find Jobs Quickly',
    description: 'Browse through hundreds of job listings tailored to your skills and preferences.',
  },
  {
    icon: <Award className="w-10 h-10 text-green-600" />,
    title: 'Quality Applicants',
    description: 'Connect with pre-screened, qualified applicants to fill your positions fast.',
  },
  {
    icon: <Clock className="w-10 h-10 text-green-600" />,
    title: 'Efficient Process',
    description: 'Our streamlined workflow makes hiring and job finding faster than traditional methods.',
  },
  {
    icon: <Shield className="w-10 h-10 text-green-600" />,
    title: 'Secure Payments',
    description: 'Built-in payment protection ensures both parties are satisfied before payment is released.',
  },
];

const Features = () => {
  return (
    <section id="features\" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-green-600">Kayod</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers a seamless experience for both job seekers and employers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4 bg-green-50 p-4 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;