import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const SummaryKeyTakeawaysSlide = ({ isActive }: SlideProps) => {
  const keyTakeaways = [
    {
      title: "Economic Engine",
      description: "Vital economic contributor with above-GDP growth",
      icon: "fa-chart-line",
      color: "blue-500",
      stats: "8.3% vs 2.4% GDP growth",
      trend: "Accelerating"
    },
    {
      title: "Employment Generator",
      description: "High-value jobs for growing youth population",
      icon: "fa-users",
      color: "green-500",
      stats: "600,000+ IT professionals",
      trend: "Expanding"
    },
    {
      title: "Export Growth Leader",
      description: "Strong IT exports with exceptional growth",
      icon: "fa-globe",
      color: "purple-500",
      stats: "$3.22B exports (27% YoY)",
      trend: "Accelerating"
    },
    {
      title: "Competitive Edge",
      description: "Cost & talent advantages in global markets",
      icon: "fa-medal",
      color: "yellow-600",
      stats: "70-80% cost savings",
      trend: "Strengthening"
    }
  ];

  const actionItems = [
    {
      title: "Infrastructure",
      icon: "fa-building",
      actions: [
        "STZ rollout in tier-2 cities",
        "Enhance rural connectivity",
        "Improve tech zone power"
      ]
    },
    {
      title: "Education",
      icon: "fa-graduation-cap",
      actions: [
        "Modernize tech curricula",
        "Expand training programs",
        "Industry partnerships"
      ]
    },
    {
      title: "Policy",
      icon: "fa-gavel",
      actions: [
        "IT export incentives",
        "Ease business setup",
        "R&D support"
      ]
    },
    {
      title: "Global Access",
      icon: "fa-globe-americas",
      actions: [
        "Key market missions",
        "IT services branding",
        "Tech exhibitions"
      ]
    }
  ];

  return (
    <section
      data-slide="26"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-start items-center text-gray-900 p-4 pt-8`}
    >
      <div className="w-full max-w-6xl mx-auto space-y-4">
        <motion.h2
          className="text-center text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Summary & Key Takeaways
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {keyTakeaways.map((takeaway, i) => (
            <motion.div
              key={takeaway.title}
              className="bg-gray-50 p-3 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
            >
              <div className="flex items-start">
                <div className={`w-8 h-8 rounded-full bg-${takeaway.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                  <i className={`fas ${takeaway.icon} text-${takeaway.color} text-sm`}></i>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold truncate">{takeaway.title}</h3>
                    <span className={`text-xs font-medium ml-2 whitespace-nowrap ${
                      takeaway.trend === 'Accelerating' ? 'text-green-600' : 
                      takeaway.trend === 'Expanding' ? 'text-blue-600' : 
                      takeaway.trend === 'Strengthening' ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      <i className="fas fa-arrow-trend-up mr-1"></i>
                      {takeaway.trend}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1 line-clamp-2">{takeaway.description}</p>
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
          className="bg-gray-50 p-3 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-center text-sm font-bold mb-3">Recommended Actions</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {actionItems.map((action, i) => (
              <motion.div
                key={action.title}
                className="bg-white p-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <i className={`fas ${action.icon} text-blue-600 text-xs`}></i>
                  </div>
                  <h4 className="text-xs font-bold">{action.title}</h4>
                </div>
                
                <ul className="space-y-1">
                  {action.actions.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <i className="fas fa-arrow-right text-[8px] text-blue-500 mt-1 mr-1"></i>
                      <span className="text-[11px] text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="p-2 bg-blue-50 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-xs text-blue-800 font-medium">
            Pakistan's IT & Telecom sector stands at an inflection point - poised to become a transformative force for the national economy
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">26 / 27</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummaryKeyTakeawaysSlide;