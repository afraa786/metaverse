import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    { icon: Award, label: 'ISO Certified', value: '2021' },
    { icon: Users, label: 'Active Users', value: '500K+' },
    { icon: Globe, label: 'Countries', value: '120+' },
    { icon: Zap, label: 'Uptime', value: '99.9%' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/20 to-transparent">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Certificate/Company Info */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-3xl rounded-3xl"></div>
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company Certificate"
                className="w-full rounded-xl mb-6 shadow-2xl"
              />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Certified Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our platform is built on trust, security, and innovation. We hold multiple 
                  certifications and comply with international standards for financial technology 
                  and blockchain operations.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-gray-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                About Our Company
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  We are pioneers in the metaverse revolution, creating immersive digital experiences 
                  that bridge the gap between virtual and physical realities. Our platform empowers 
                  users to explore, create, and invest in the future of digital interaction.
                </p>
                
                <p>
                  Since our founding in 2021, we've built a robust ecosystem that combines 
                  cutting-edge blockchain technology with intuitive user experiences. Our mission 
                  is to democratize access to the metaverse and create new opportunities for 
                  digital ownership and creativity.
                </p>
                
                <p>
                  With a team of world-class developers, designers, and visionaries, we're 
                  committed to pushing the boundaries of what's possible in virtual worlds. 
                  Join us as we shape the future of human connection and digital interaction.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Read More
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Download Whitepaper
              </button>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">2021</div>
                <div className="text-gray-400">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">$50M+</div>
                <div className="text-gray-400">Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `twinkle 3s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;