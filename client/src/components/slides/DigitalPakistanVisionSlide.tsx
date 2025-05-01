import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const DigitalPakistanVisionSlide = ({ isActive }: SlideProps) => {
  const policyObjectives = [
    {
      title: "Digital Infrastructure",
      description: "Expanding affordable broadband access nationwide",
      icon: "fa-network-wired",
      color: "primary"
    },
    {
      title: "E-Government",
      description: "Digitizing government services for efficiency",
      icon: "fa-landmark",
      color: "secondary"
    },
    {
      title: "Digital Skills",
      description: "Training workforce for digital economy demands",
      icon: "fa-graduation-cap",
      color: "accent"
    },
    {
      title: "Innovation & Entrepreneurship",
      description: "Supporting startups and tech innovation hubs",
      icon: "fa-lightbulb",
      color: "yellow-600"
    },
    {
      title: "Regulatory Framework",
      description: "Cybersecurity, data protection, and digital payments laws",
      icon: "fa-gavel",
      color: "purple-600"
    }
  ];

  return (
    <section
      data-slide="7"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Digital Pakistan <span className="text-primary">Vision</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="italic font-medium">"Strategic enabler for accelerated digitization"</span> — Designed to transform Pakistan into a knowledge-based economy through technology-driven growth
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {policyObjectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              className="bg-gray-50 rounded-xl px-4 py-6 shadow-md text-center h-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className={`w-16 h-16 rounded-full bg-${objective.color}/20 flex items-center justify-center mb-4`}>
                <i className={`fas ${objective.icon} text-${objective.color} text-xl`}></i>
              </div>
              <h3 className="font-data font-bold text-base mb-2">{objective.title}</h3>
              <p className="text-xs text-gray-600 flex-grow">{objective.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-8 max-w-3xl mx-auto bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="font-data font-semibold text-lg mb-3 text-primary">Policy Incentives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <p className="text-sm text-gray-700">Duty waivers on IT equipment imports</p>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <p className="text-sm text-gray-700">Tax holidays for IT exports</p>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <p className="text-sm text-gray-700">Special Technology Zones with incentives</p>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <p className="text-sm text-gray-700">Startup funding through government initiatives</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <i className="fas fa-info-circle mr-1"></i>
              Source: Ministry of Interior - Pakistan (Digital Pakistan Policy, 2018)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalPakistanVisionSlide;