import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const InvestmentSection: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const investmentPlans = [
    { id: 1, rate: '0.2%', period: 'Daily', amount: '$100-$1K', position: { top: '20%', left: '15%' } },
    { id: 2, rate: '2.4%', period: 'Weekly', amount: '$1K-$10K', position: { top: '10%', right: '20%' } },
    { id: 3, rate: '6.1%', period: 'Monthly', amount: '$10K-$50K', position: { top: '40%', right: '10%' } },
    { id: 4, rate: '12.5%', period: 'Quarterly', amount: '$50K+', position: { bottom: '30%', right: '25%' } },
    { id: 5, rate: '1.8%', period: 'Bi-weekly', amount: '$5K-$25K', position: { bottom: '20%', left: '20%' } },
    { id: 6, rate: '4.7%', period: 'Monthly', amount: '$25K-$100K', position: { top: '60%', left: '10%' } },
  ];

  return (
    <section id="investment" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our diverse investment options designed for every portfolio size
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full border-2 border-cyan-400/50 flex flex-col items-center justify-center backdrop-blur-md">
              <div className="text-3xl font-bold text-white mb-2">100M</div>
              <div className="text-cyan-400">Total Supply</div>
            </div>
          </div>

          {/* Investment Plan Nodes */}
          <div className="relative w-full h-96 sm:h-[500px]">
            {investmentPlans.map((plan) => (
              <div
                key={plan.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={plan.position}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <div className={`
                  bg-black/40 backdrop-blur-md border-2 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 
                  ${hoveredPlan === plan.id 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/25 scale-110' 
                    : 'border-white/20 hover:border-white/40'
                  }
                `}>
                  <div className="text-center space-y-2">
                    <div className={`text-2xl sm:text-3xl font-bold ${
                      hoveredPlan === plan.id ? 'text-cyan-400' : 'text-white'
                    }`}>
                      {plan.rate}
                    </div>
                    <div className="text-sm text-gray-400">{plan.period}</div>
                    <div className="text-xs text-purple-400">{plan.amount}</div>
                  </div>
                  
                  {hoveredPlan === plan.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 pointer-events-none"></div>
                  )}
                </div>

                {/* Connection Lines */}
                <svg className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none">
                  <line
                    x1="0"
                    y1="0"
                    x2={plan.position.left ? "100" : plan.position.right ? "-100" : "0"}
                    y2={plan.position.top ? "100" : plan.position.bottom ? "-100" : "0"}
                    stroke={hoveredPlan === plan.id ? "#00D4FF" : "#374151"}
                    strokeWidth="1"
                    opacity={hoveredPlan === plan.id ? "0.8" : "0.3"}
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">98.7%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-3"></div>
              <div className="text-2xl font-bold text-white mb-1">$2.4M</div>
              <div className="text-sm text-gray-400">Total Invested</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-3"></div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;