import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-sm">🚀</div>
            </div>
            <span className="text-white font-bold text-xl">Metaverse Learning</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#modules" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Modules</a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Features</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="px-4 py-2 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-400 transition-all duration-300"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Features</a>
              <a href="#investment" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Investment</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About</a>
              <div className="flex space-x-4 px-3 py-2">
                <button
                  onClick={onLoginClick}
                  className="flex-1 px-4 py-2 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Login
                </button>
                <button
                  onClick={onRegisterClick}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-lg font-semibold"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;