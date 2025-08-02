import React from 'react';
import { Rocket, Users, BookOpen, Globe } from 'lucide-react';
import TypewriterText from './TypewriterText';
import 'tailwindcss/tailwind.css';

const LearningHero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Learners', value: '50K+', color: 'from-cyan-400 to-blue-500' },
    { icon: BookOpen, label: 'Learning Modules', value: '10', color: 'from-green-400 to-emerald-500' },
    { icon: Globe, label: 'VR Experiences', value: '100+', color: 'from-purple-400 to-pink-500' },
    { icon: Rocket, label: 'Success Rate', value: '95%', color: 'from-yellow-400 to-orange-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Metaverse Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid floor */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgNTBoMTAwTTUwIDB2MTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        
        {/* Floating 3D shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full filter blur-xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-bl from-green-400/20 to-transparent rounded-full filter blur-xl animate-float-fast"></div>
        
        {/* Digital particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-white/30 text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['0', '1'][Math.floor(Math.random() * 2)]}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center space-y-12 relative z-10">
        {/* Main Title */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="w-12 h-12 text-cyan-400 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Metaverse
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <TypewriterText
              text="The Future of Learning"
              speed={150}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            />
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into immersive virtual classrooms where complex concepts come alive.
            Experience hands-on learning through 3D visualizations, interactive simulations,
            and cutting-edge XR technology.
          </p>
        </div>

        {/* Laptop Visualization - UNCHANGED */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl rounded-full transform scale-150"></div>
            <img src="/meta.png"
              className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute top-1/3 -right-12 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60 animate-ping"></div>
          </div>
        </div>

        {/* Stats Cards - Enhanced with 3D effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group perspective-1000"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              }}
            >
              <div className="relative preserve-3d group-hover:rotate-y-20 transition-transform duration-500">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Enhanced with holographic effect */}
        <div className="space-y-6 relative">
          <p className="text-lg text-gray-300">
            Ready to revolutionize your learning experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden">
              <span className="relative z-10">Start Learning Journey</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden">
              <span className="relative z-10">Watch Demo</span>
              <span className="absolute inset-0 bg-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      <style  >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-20 {
          transform: rotateY(20deg);
        }
      `}</style>
    </section>
  );
};

export default LearningHero;