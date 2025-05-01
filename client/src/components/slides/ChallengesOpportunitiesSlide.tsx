import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const ChallengesOpportunitiesSlide = ({ isActive }: SlideProps) => {
  const challenges = [
    {
      title: "Infrastructure Gaps",
      description: "Unreliable power supply, limited connectivity in rural areas",
      icon: "fa-bolt",
      color: "red-500"
    },
    {
      title: "Skill Mismatches",
      description: "Gap between academia and industry requirements",
      icon: "fa-user-graduate",
      color: "orange-500"
    },
    {
      title: "Access to Finance",
      description: "Limited venture capital, high interest rates, challenging collateral requirements",
      icon: "fa-coins",
      color: "yellow-600"
    },
    {
      title: "Regulatory Complexity",
      description: "Overlapping regulations, slow processing, compliance burdens",
      icon: "fa-balance-scale",
      color: "red-400"
    }
  ];

  const opportunities = [
    {
      title: "Global Outsourcing Shift",
      description: "China+1 strategy by global companies, nearshoring trends",
      icon: "fa-globe",
      color: "green-500"
    },
    {
      title: "Digital Transformation",
      description: "Accelerated adoption post-pandemic across all sectors",
      icon: "fa-digital",
      color: "blue-500"
    },
    {
      title: "Remote Work Revolution",
      description: "Global talent pool access, location-independent work",
      icon: "fa-laptop-house",
      color: "indigo-500"
    },
    {
      title: "Emerging Tech Demand",
      description: "Growing need for AI, blockchain, IoT expertise",
      icon: "fa-microchip",
      color: "purple-500"
    }
  ];

  const swotItems = [
    {
      category: "Strengths",
      items: [
        "Large, young English-speaking workforce",
        "Cost competitiveness (70-80% less than Western markets)",
        "Growing technical expertise in emerging technologies",
        "Strategic geographic location and timezone advantage"
      ],
      color: "green-100",
      textColor: "green-800"
    },
    {
      category: "Weaknesses",
      items: [
        "Infrastructure limitations (power, connectivity)",
        "Limited specialized talent in frontier technologies",
        "Inadequate R&D investment and innovation ecosystem",
        "Country perception and brand recognition challenges"
      ],
      color: "red-100",
      textColor: "red-800"
    },
    {
      category: "Opportunities",
      items: [
        "Rising global demand for digital transformation services",
        "Potential to capture market share from higher-cost destinations",
        "Growing domestic digitalization across sectors",
        "Emerging technology specialization (AI, blockchain, cloud)"
      ],
      color: "blue-100", 
      textColor: "blue-800"
    },
    {
      category: "Threats",
      items: [
        "Intense regional competition (India, Philippines, Vietnam)",
        "Rapid technology changes requiring continuous upskilling",
        "Macroeconomic instability affecting business environment",
        "Brain drain of top talent to higher-paying markets"
      ],
      color: "amber-100",
      textColor: "amber-800"
    }
  ];

  return (
    <section
      data-slide="20"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Challenges & Opportunities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-red-600">Key Challenges</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {challenges.map((challenge, i) => (
                <motion.div
                  key={challenge.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                >
                  <div className={`w-8 h-8 mt-0.5 rounded-full bg-${challenge.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                    <i className={`fas ${challenge.icon} text-${challenge.color} text-xs`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{challenge.title}</h4>
                    <p className="text-xs text-gray-600">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-green-600">Key Opportunities</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opportunities.map((opportunity, i) => (
                <motion.div
                  key={opportunity.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                >
                  <div className={`w-8 h-8 mt-0.5 rounded-full bg-${opportunity.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                    <i className={`fas ${opportunity.icon} text-${opportunity.color} text-xs`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{opportunity.title}</h4>
                    <p className="text-xs text-gray-600">{opportunity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-center text-base font-bold mb-3">SWOT Analysis</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {swotItems.map((swot, i) => (
              <motion.div
                key={swot.category}
                className={`bg-${swot.color} p-3 rounded-lg`}
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <h4 className={`text-sm font-bold mb-2 text-${swot.textColor}`}>{swot.category}</h4>
                
                <ul className="space-y-1">
                  {swot.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <i className={`fas fa-circle text-[5px] text-${swot.textColor} mt-1.5 mr-1.5`}></i>
                      <span className={`text-xs text-${swot.textColor}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="flex justify-center mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <span className="text-xs text-gray-500">20 / 28</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesOpportunitiesSlide;