import React from 'react';

interface DownloadButtonsProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ 
  size = 'medium',
  className = ''
}) => {
  const getButtonClasses = () => {
    const baseClasses = "flex items-center space-x-3 rounded-lg border transition-all";
    
    switch(size) {
      case 'small':
        return `${baseClasses} px-3 py-1.5 text-sm`;
      case 'large':
        return `${baseClasses} px-6 py-3 text-lg`;
      default:
        return `${baseClasses} px-4 py-2`;
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <button 
        className={`${getButtonClasses()} bg-black text-white border-black hover:bg-gray-800`}
      >
        <svg viewBox="0 0 24 24" className={size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-7 h-7' : 'w-6 h-6'} fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-80">Download on the</span>
          <span className="font-semibold -mt-1">App Store</span>
        </div>
      </button>

      <button 
        className={`${getButtonClasses()} bg-black text-white border-black hover:bg-gray-800`}
      >
        <svg viewBox="0 0 24 24" className={size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-7 h-7' : 'w-6 h-6'} fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-80">Get it on</span>
          <span className="font-semibold -mt-1">Google Play</span>
        </div>
      </button>

      <a 
        href="https://kayodapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${getButtonClasses()} bg-black text-white border-black hover:bg-gray-800`}
      >
        <svg viewBox="0 0 24 24" className={size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-7 h-7' : 'w-6 h-6'} fill="currentColor">
          <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs opacity-80">Access on</span>
          <span className="font-semibold -mt-1">Windows</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;