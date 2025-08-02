import React from 'react';
import { Users, DollarSign, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick, onRegisterClick }) => {
  const stats = [
    { icon: Users, label: 'Online Users', value: '124,847', color: 'from-cyan-400 to-blue-500' },
    { icon: DollarSign, label: 'Total Investment', value: '$2.4M', color: 'from-green-400 to-emerald-500' },
    { icon: Calendar, label: 'Project Started', value: '2021', color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              The Metaverse Can Change Society
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into the future of digital interaction. Experience immersive virtual worlds, 
              connect with global communities, and unlock unprecedented opportunities in the metaverse ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onLoginClick}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Register
            </button>
          </div>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2`}>
                  <stat.icon size={16} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - VR Headset */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl rounded-full transform scale-150"></div>
            <img
              src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="VR Headset"
              className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;