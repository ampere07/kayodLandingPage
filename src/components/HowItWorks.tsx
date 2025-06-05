import React from 'react';
import { UserPlus, BriefcaseIcon, CheckCircle, DollarSign, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-white" />,
    title: 'Register to App',
    description: 'Create your account and complete your profile with skills and experience.',
    iconBg: 'bg-green-500',
  },
  {
    icon: <BriefcaseIcon className="w-10 h-10 text-white" />,
    title: 'Post a Job',
    description: 'Describe the job, set a budget, and specify requirements for applicants.',
    iconBg: 'bg-green-600',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    title: 'Accept Applicant',
    description: 'Review profiles, portfolios, and choose the right person for your job.',
    iconBg: 'bg-green-700',
  },
  {
    icon: <DollarSign className="w-10 h-10 text-white" />,
    title: 'Settle Payment',
    description: 'Once the job is completed, release payment securely through the platform.',
    iconBg: 'bg-green-800',
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: 'Finish Job',
    description: 'Rate your experience and provide feedback to help the community grow.',
    iconBg: 'bg-green-900',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works\" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How <span className="text-green-600">Kayod</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our simple process makes finding jobs and hiring talent easy.
          </p>
        </div>
        
        <div className="relative">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-green-600">
                    <ArrowRight 
                      className="absolute -right-1 -top-[11px] w-6 h-6 text-green-600"
                      strokeWidth={2}
                    />
                  </div>
                )}
                
                {/* Mobile view connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 top-20 w-0.5 h-24 bg-green-600">
                    <ArrowRight 
                      className="absolute -bottom-3 -left-[11px] rotate-90 w-6 h-6 text-green-600"
                      strokeWidth={2}
                    />
                  </div>
                )}
                
                <div className={`relative z-10 ${step.iconBg} rounded-full p-4 mb-4`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;