import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const SummaryKeyTakeawaysSlide = ({ isActive }: SlideProps) => {
  const keyTakeaways = [
    {
      title: "Economic Engine",
      description: "IT & Telecom sector is a vital economic contributor with sustained growth above national GDP rates",
      icon: "fa-chart-line",
      color: "blue-500",
      stats: "8.3% growth rate vs 2.4% national GDP growth",
      trend: "Accelerating"
    },
    {
      title: "Employment Generator",
      description: "Creates high-value employment opportunities for Pakistan's growing youth population",
      icon: "fa-users",
      color: "green-500",
      stats: "600,000+ IT professionals with 128,000+ new jobs",
      trend: "Expanding"
    },
    {
      title: "Export Growth Leader",
      description: "IT exports demonstrating strong resilience and exceptional growth trajectory",
      icon: "fa-globe",
      color: "purple-500",
      stats: "$3.22B current exports with 27% YoY growth",
      trend: "Accelerating"
    },
    {
      title: "Competitive Advantages",
      description: "Unique cost, talent, and geographic advantages position Pakistan competitively in global markets",
      icon: "fa-medal",
      color: "yellow-600",
      stats: "70-80% cost savings vs Western markets",
      trend: "Strengthening"
    }
  ];

  const actionItems = [
    {
      title: "Infrastructure Development",
      icon: "fa-building",
      actions: [
        "Accelerate STZ rollout in tier-2 cities",
        "Enhance connectivity in underserved areas",
        "Improve power reliability for tech zones"
      ]
    },
    {
      title: "Skills & Education",
      icon: "fa-graduation-cap",
      actions: [
        "Modernize tech curricula in universities",
        "Expand specialized training programs",
        "Enhance industry-academia partnerships"
      ]
    },
    {
      title: "Policy Framework",
      icon: "fa-gavel",
      actions: [
        "Extend IT export tax holidays",
        "Simplify business registration process",
        "Create targeted R&D incentives"
      ]
    },
    {
      title: "Global Market Access",
      icon: "fa-globe-americas",
      actions: [
        "Establish tech missions in key markets",
        "Develop country brand for IT services",
        "Participate in major tech exhibitions"
      ]
    }
  ];

  return (
    <section
      data-slide="27"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Summary & Key Takeaways
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {keyTakeaways.map((takeaway, i) => (
            <motion.div
              key={takeaway.title}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
            >
              <div className="flex items-start mb-2">
                <div className={`w-10 h-10 rounded-full bg-${takeaway.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                  <i className={`fas ${takeaway.icon} text-${takeaway.color}`}></i>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold">{takeaway.title}</h3>
                    <span className={`text-xs font-medium ml-2 ${
                      takeaway.trend === 'Accelerating' ? 'text-green-600' : 
                      takeaway.trend === 'Expanding' ? 'text-blue-600' : 
                      takeaway.trend === 'Strengthening' ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      <i className="fas fa-arrow-trend-up mr-1"></i>
                      {takeaway.trend}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{takeaway.description}</p>
                  <p className="text-xs font-medium">
                    <i className="fas fa-chart-pie text-[10px] mr-1.5 text-gray-500"></i>
                    {takeaway.stats}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-center text-base font-bold mb-3">Recommended Action Areas</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {actionItems.map((action, i) => (
              <motion.div
                key={action.title}
                className="bg-white p-3 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <i className={`fas ${action.icon} text-blue-600 text-xs`}></i>
                  </div>
                  <h4 className="text-sm font-bold">{action.title}</h4>
                </div>
                
                <ul className="space-y-1.5">
                  {action.actions.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <i className="fas fa-arrow-right text-[8px] text-blue-500 mt-1 mr-1.5"></i>
                      <span className="text-xs text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-4 p-3 bg-blue-50 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-sm text-blue-800 font-medium">
            Pakistan's IT & Telecom sector stands at an inflection point - with the right policy mix
            and sustained focus, it can become a transformative force for the national economy
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">27 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummaryKeyTakeawaysSlide;