import React, { useState } from 'react';
import ParticleField from './components/ParticleField';
import Header from './components/Header';
import LearningHero from './components/LearningHero';
import ModulesDropdown from './components/ModulesDropdown';
import LoginModal from './components/LoginModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  const openLoginModal = () => {
    setModalMode('login');
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setModalMode('register');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Header */}
      <Header onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <LearningHero />
        
        {/* Modules Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ModulesDropdown />
        </section>
        
        {/* Additional Learning Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/40">
          <div className="container mx-auto text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Metaverse Learning?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-400/30 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Immersive 3D Learning</h3>
                <p className="text-gray-300">Experience concepts in three dimensions with interactive VR/AR environments that make complex topics intuitive and engaging.</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md border border-purple-400/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hands-On Simulations</h3>
                <p className="text-gray-300">Practice real-world scenarios in safe virtual environments. Make mistakes, learn, and iterate without real-world consequences.</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md border border-green-400/30 rounded-xl p-8 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Collaborative Spaces</h3>
                <p className="text-gray-300">Learn together in shared virtual classrooms. Collaborate on projects and share knowledge in immersive social environments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-white font-bold text-xl">MetaVerse</span>
              </div>
              <p className="text-gray-400 text-sm">
                Pioneering the future of digital interaction and virtual experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Investment</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MetaVerse Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login/Register Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
        onModeChange={setModalMode}
      />
    </div>
  );
}

export default App;