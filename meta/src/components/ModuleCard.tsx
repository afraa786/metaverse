import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
  gradient,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className={`w-full text-left p-4 rounded-xl border transition-all duration-500 transform hover:scale-105 ${
          isExpanded 
            ? 'bg-black/60 border-cyan-400 shadow-2xl shadow-cyan-400/25' 
            : 'bg-black/30 border-white/20 hover:border-cyan-400/50'
        }`}
        style={{
          background: isExpanded 
            ? `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,212,255,0.1))` 
            : undefined
        }}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center transform transition-transform duration-300 ${isExpanded ? 'scale-110' : 'group-hover:scale-105'}`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isExpanded ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
            }`}>
              {title}
            </h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <div className="w-6 h-6 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/40 backdrop-blur-md border border-cyan-400/30 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Interactive Features:</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg border border-cyan-400/30 flex items-center justify-center">
                <div className="text-center">
                  <Icon size={32} className="text-cyan-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">3D Visualization Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse rounded-lg"></div>
            </div>
          </div>
          
          <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
            Launch {title} Module
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;