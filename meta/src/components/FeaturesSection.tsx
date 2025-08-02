import React from 'react';
import { Server, Shield, Eye, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: 'Best Server',
      description: 'High-performance infrastructure',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Advanced security protocols',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Low Commission',
      description: 'Minimal transaction fees',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Live system analytics',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience next-generation technology with unparalleled security and performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;