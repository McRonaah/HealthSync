
import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Health System Branding Side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Health Information System</h1>
          <p className="text-primary-100 mb-8">Streamline healthcare management and improve patient outcomes</p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <blockquote className="text-lg italic">
              "This system has transformed how we manage patient data, resulting in better care coordination and improved health outcomes."
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/20"></div>
              <div className="ml-3">
                <p className="font-medium">Dr. Ronald Kipchirchir</p>
                <p className="text-sm text-primary-100">Medical Director</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">95%</p>
              <p className="text-xs">Satisfaction</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-xs">Support</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">+5k</p>
              <p className="text-xs">Clients</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <p className="text-sm text-primary-100">© 2025 Health Information System. All rights reserved.</p>
        </div>
      </div>
      
      {/* Auth Content Side */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
