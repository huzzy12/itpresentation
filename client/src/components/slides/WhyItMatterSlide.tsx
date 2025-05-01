import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const WhyItMatterSlide = ({ isActive }: SlideProps) => {
  const keyStats = [
    {
      title: "GDP Contribution",
      value: "58% services; ICT ~1.5%",
      description: "Services = ~58% of GDP; ICT ~1.5% and rising",
      icon: "fa-chart-pie",
      color: "primary"
    },
    {
      title: "IT Exports Growth",
      value: "US $3.22B",
      description: "IT exports hit US $3.22B in FY 2023-24 (up 27% YoY)",
      icon: "fa-chart-line",
      color: "secondary"
    },
    {
      title: "Mobile & Broadband",
      value: "80% & 56%",
      description: "Mobile teledensity ~80% & broadband penetration ~56%",
      icon: "fa-mobile-alt",
      color: "accent"
    },
    {
      title: "IT Professionals",
      value: "600K+",
      description: "600K+ IT professionals; 128K jobs via incubators",
      icon: "fa-users",
      color: "purple-500"
    }
  ];

  return (
    <section
      data-slide="2"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Why IT & Telecom <span className="text-primary">Matter</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Key economic indicators from Finance Division and PTA data
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-gray-50 rounded-xl p-5 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className={`w-12 h-12 rounded-full bg-${stat.color}/20 flex items-center justify-center mb-4`}>
                <i className={`fas ${stat.icon} text-${stat.color} text-xl`}></i>
              </div>
              <h3 className="font-data font-bold text-lg mb-1">{stat.title}</h3>
              <p className="text-2xl font-data font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <i className="fas fa-info-circle mr-1"></i> 
                  Source: {index < 2 ? "Finance Division" : (index === 2 ? "PTA" : "Finance Division")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatterSlide;