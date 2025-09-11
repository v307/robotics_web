import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/tutorials');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transform transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
            Master ROS2
          </span>
          <br />
          <span className="text-slate-800 hover:text-slate-900 transition-colors duration-300">
            Robotics Development
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Learn to develop autonomous robots using ROS 2 with comprehensive tutorials on 
          <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer"> Navigation</span>, 
          <span className="font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300 cursor-pointer"> SLAM</span>, and 
          <span className="font-semibold text-cyan-600 hover:text-cyan-800 transition-colors duration-300 cursor-pointer"> Manipulation</span>
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Step-by-step Tutorials', 'Real-world Projects', 'Expert Guidance'].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 
                         hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                         cursor-pointer group"
            >
              <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGetStarted}
            className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 
                       text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl 
                       transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                       relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="flex items-center space-x-2 relative z-10">
              <span>Get Started</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button
            onClick={() => navigate('/about')}
            className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-semibold 
                       px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:scale-105 border border-white/20 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative">Learn More</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Tutorials' },
            { number: '10K+', label: 'Students' },
            { number: '100%', label: 'Free' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm 
                         hover:bg-white/80 hover:shadow-lg transition-all duration-300 
                         transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-3xl font-bold text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements - Enhanced with hover effects */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse hover:opacity-30 transition-opacity duration-300 cursor-pointer"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000 hover:opacity-30 transition-opacity duration-300 cursor-pointer"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500 hover:opacity-30 transition-opacity duration-300 cursor-pointer"></div>
      
      {/* Additional floating elements for more dynamism */}
      <div className="absolute top-1/4 right-24 w-12 h-12 bg-blue-300 rounded-full opacity-10 animate-bounce delay-700 hover:opacity-20 transition-opacity duration-300 cursor-pointer"></div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-15 animate-bounce delay-1200 hover:opacity-25 transition-opacity duration-300 cursor-pointer"></div>
    </section>
  );
}