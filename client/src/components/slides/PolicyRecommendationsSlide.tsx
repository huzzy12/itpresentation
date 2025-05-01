import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const PolicyRecommendationsSlide = ({ isActive }: SlideProps) => {
  const recommendations = [
    {
      title: "Education & Skills Development",
      icon: "fa-graduation-cap",
      color: "blue-500",
      items: [
        "Align university curricula with industry requirements",
        "Establish specialized tech bootcamps in underserved areas",
        "Create scholarship programs for advanced tech fields",
        "Design upskilling programs for mid-career professionals"
      ]
    },
    {
      title: "Infrastructure Enhancement",
      icon: "fa-building",
      color: "purple-500",
      items: [
        "Accelerate Special Technology Zone development",
        "Improve broadband coverage in secondary cities",
        "Develop renewable energy solutions for tech clusters",
        "Establish tier-2 and tier-3 tech hubs across provinces"
      ]
    },
    {
      title: "Financial & Regulatory Incentives",
      icon: "fa-file-invoice-dollar",
      color: "green-500",
      items: [
        "Extend tax exemptions for IT exports beyond 2025",
        "Simplify foreign currency retention mechanisms",
        "Create targeted R&D tax incentives for specific tech sectors",
        "Establish IT-specific credit guarantee fund"
      ]
    },
    {
      title: "International Market Access",
      icon: "fa-globe",
      color: "indigo-500",
      items: [
        "Enhance country brand promotion in target markets",
        "Establish Pakistan tech offices in key markets",
        "Facilitate trade delegation exchange programs",
        "Support industry certifications for international standards"
      ]
    }
  ];

  const implementationApproach = [
    {
      phase: "Phase 1: Immediate Actions",
      timeframe: "0-12 months",
      actions: [
        "Tax holiday extension confirmation",
        "Skills gap analysis across regions",
        "STZ fast-track approvals",
        "Branding & marketing campaign"
      ]
    },
    {
      phase: "Phase 2: Mid-term Development",
      timeframe: "1-3 years",
      actions: [
        "Curriculum modernization rollout",
        "Tier-2 city infrastructure expansion",
        "Tech investment incentives package",
        "Regulatory framework overhaul"
      ]
    },
    {
      phase: "Phase 3: Long-term Transformation",
      timeframe: "3-5 years",
      actions: [
        "Regional tech hub establishment",
        "R&D incentives program expansion",
        "Global center of excellence development",
        "Innovation ecosystem maturity"
      ]
    }
  ];

  return (
    <section
      data-slide="23"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Policy Recommendations
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {recommendations.map((recommendation, i) => (
            <motion.div
              key={recommendation.title}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
            >
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full bg-${recommendation.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                  <i className={`fas ${recommendation.icon} text-${recommendation.color} text-xs`}></i>
                </div>
                <h3 className="text-sm font-bold">{recommendation.title}</h3>
              </div>
              
              <ul className="space-y-1 pl-4">
                {recommendation.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="text-xs text-gray-700 relative"
                    initial={{ opacity: 0, x: -5 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) + (j * 0.05) }}
                  >
                    <span className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-center text-base font-bold mb-3">Implementation Roadmap</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {implementationApproach.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className={`p-3 rounded-lg ${
                  i === 0 ? 'bg-blue-50' : i === 1 ? 'bg-purple-50' : 'bg-green-50'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <h4 className={`text-sm font-bold mb-1 ${
                  i === 0 ? 'text-blue-700' : i === 1 ? 'text-purple-700' : 'text-green-700'
                }`}>
                  {phase.phase}
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  <i className="far fa-clock mr-1"></i>
                  {phase.timeframe}
                </p>
                
                <ul className="space-y-1">
                  {phase.actions.map((action, j) => (
                    <li key={j} className="flex items-start">
                      <i className={`fas fa-arrow-right text-[10px] mt-1 mr-1.5 ${
                        i === 0 ? 'text-blue-500' : i === 1 ? 'text-purple-500' : 'text-green-500'
                      }`}></i>
                      <span className="text-xs">{action}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-4 p-3 bg-indigo-50 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-xs text-indigo-800">
            <span className="font-medium">Key Success Factor:</span> Cross-ministerial collaboration with private sector engagement through a dedicated Digital Economy Taskforce
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">23 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PolicyRecommendationsSlide;