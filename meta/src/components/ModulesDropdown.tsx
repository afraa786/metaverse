import React, { useState } from 'react';
import { 
  Cpu, 
  Network, 
  Shield, 
  Code, 
  Cloud, 
  HardDrive, 
  Bot, 
  Brain, 
  GitBranch, 
  Database,
  ChevronDown
} from 'lucide-react';
import ModuleCard from './ModuleCard';

const ModulesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      title: 'Computer Architecture',
      description: 'Explore 3D CPU models and hardware components',
      features: [
        'Walk through 3D CPU model (GLB in A-Frame)',
        'Interact with registers, ALU, memory buses',
        'Clickable VR elements',
        'Real-time instruction execution'
      ],
      icon: Cpu,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Networking',
      description: 'Visualize data flow and network protocols',
      features: [
        'Visualize OSI layers in 3D',
        'Simulate packet travel with color-coded spheres',
        'Three.js network animations',
        'Interactive protocol stack'
      ],
      icon: Network,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Gamified security challenges and simulations',
      features: [
        'Escape room: patch firewall, stop DDoS',
        'Real-time decision interactions',
        'Matrix-style terminal effects',
        'Threat visualization dashboard'
      ],
      icon: Shield,
      gradient: 'from-red-400 to-pink-500'
    },
    {
      title: 'Web Development',
      description: '3D architecture of modern web applications',
      features: [
        '3D layered frontend-backend-DB architecture',
        'Navigate through components',
        'A-Frame development scenes',
        'Interactive code visualization'
      ],
      icon: Code,
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Cloud Computing',
      description: 'Interactive cloud infrastructure visualization',
      features: [
        'Toggle public/private/hybrid setups',
        '3D virtual machines and containers',
        'Data flow visualization',
        'Scalability simulations'
      ],
      icon: Cloud,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Operating Systems',
      description: 'VR simulations of OS concepts',
      features: [
        'VR scheduling simulation (FIFO, Round Robin)',
        'Interactive memory blocks',
        'Process state visualization',
        'File system manipulation'
      ],
      icon: HardDrive,
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Robotics / IoT',
      description: 'Real-time XR overlays and sensor data',
      features: [
        'XR overlays of sensor feeds',
        'Robot path planning simulations',
        'MQTT data playback',
        'IoT network visualization'
      ],
      icon: Bot,
      gradient: 'from-teal-400 to-green-500'
    },
    {
      title: 'Machine Learning / AI',
      description: 'Step inside neural networks',
      features: [
        'Walk through neural network architecture',
        'Activate neurons, visualize backpropagation',
        'Animated node graph transitions',
        'Training process visualization'
      ],
      icon: Brain,
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Software Engineering',
      description: 'Interactive development pipelines',
      features: [
        'Simulate Agile/DevOps pipelines',
        'Interactive 3D Kanban board',
        'CI/CD stage animations',
        'Code review simulations'
      ],
      icon: GitBranch,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Database Systems',
      description: '3D relational schema exploration',
      features: [
        '3D relational schema viewer',
        'Trigger joins and queries',
        'Visual change propagation',
        'Query optimization visualization'
      ],
      icon: Database,
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-md border-2 border-cyan-400/50 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Explore Metaverse Modules
              </h2>
              <p className="text-gray-300">Immersive learning experiences in virtual reality</p>
            </div>
          </div>
          <ChevronDown 
            size={32} 
            className={`text-cyan-400 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>

      {/* Dropdown Content */}
      <div className={`overflow-hidden transition-all duration-700 ${
        isOpen ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Choose Your Learning Path</h3>
            <p className="text-gray-400">Each module offers unique 3D interactions and immersive experiences</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                features={module.features}
                icon={module.icon}
                gradient={module.gradient}
                isExpanded={expandedModule === index}
                onToggle={() => toggleModule(index)}
              />
            ))}
          </div>

          <div className="text-center pt-6 border-t border-cyan-400/30">
            <p className="text-gray-400 mb-4">Ready to start your metaverse learning journey?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Launch Full Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesDropdown;