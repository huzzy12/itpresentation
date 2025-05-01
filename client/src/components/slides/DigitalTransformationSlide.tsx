import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const DigitalTransformationSlide = ({ isActive }: SlideProps) => {
  const securityInitiatives = [
    {
      year: "2021",
      title: "National Cybersecurity Policy",
      description: "Comprehensive framework for securing digital infrastructure",
      icon: "fa-shield-alt",
      color: "primary"
    },
    {
      year: "2022",
      title: "Personal Data Protection Bill",
      description: "Legislative draft for data privacy and consumer rights",
      icon: "fa-user-shield",
      color: "secondary"
    },
    {
      year: "2023",
      title: "Critical Infrastructure Protection",
      description: "Protection framework for financial and telecom systems",
      icon: "fa-lock",
      color: "accent"
    },
    {
      year: "2023",
      title: "Tier-1 Cybersecurity Ranking",
      description: "Pakistan achieved higher international security rating",
      icon: "fa-trophy",
      color: "green-600"
    },
    {
      year: "2024",
      title: "Digital Payments Security",
      description: "Enhanced security protocols for growing fintech sector",
      icon: "fa-credit-card",
      color: "purple-600"
    },
    {
      year: "2024",
      title: "Cloud Security Framework",
      description: "Guidelines for secure cloud infrastructure adoption",
      icon: "fa-cloud",
      color: "blue-600"
    }
  ];

  const securityStats = [
    {
      title: "Certified Security Professionals",
      value: "3,500+",
      icon: "fa-user-tie",
      description: "IT professionals with cybersecurity certifications"
    },
    {
      title: "Security Operations Centers",
      value: "7",
      icon: "fa-desktop",
      description: "Established across government and private institutions"
    },
    {
      title: "Annual Cybersecurity Investment",
      value: "$45M",
      icon: "fa-chart-line",
      description: "Growing investment in security infrastructure"
    },
    {
      title: "Reported Major Incidents",
      value: "-32%",
      icon: "fa-exclamation-triangle",
      description: "Year-on-year reduction in major security incidents"
    }
  ];

  return (
    <section
      data-slide="13"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-5`}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2
          className="font-heading text-3xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Cybersecurity</span> & <span className="text-secondary">Data Protection</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column - Initiatives */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg p-4 shadow-md h-full">
              <h3 className="font-data font-semibold text-base mb-3 text-primary">Key Security Initiatives</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {securityInitiatives.map((initiative, index) => (
                  <motion.div 
                    key={initiative.year}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="mr-2 flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-${initiative.color}/20 flex items-center justify-center text-${initiative.color}`}>
                        <i className={`fas ${initiative.icon} text-xs`}></i>
                      </div>
                    </div>
                    <div>
                      <div className={`text-[10px] font-medium rounded-full inline-block px-2 py-0.5 bg-${initiative.color}/10 text-${initiative.color} mb-0.5`}>
                        {initiative.year}
                      </div>
                      <h4 className="font-semibold text-xs">{initiative.title}</h4>
                      <p className="text-[10px] text-gray-600">{initiative.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Stats */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg p-4 shadow-md h-full">
              <h3 className="font-data font-semibold text-base mb-3 text-secondary">Security Metrics</h3>
              
              <div className="space-y-3">
                {securityStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    className="bg-gray-50 rounded-lg p-2 border border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="flex items-center">
                      <div className="mr-2 flex-shrink-0">
                        <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <i className={`fas ${stat.icon} text-xs`}></i>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-xs">{stat.title}</h4>
                        <p className="text-[9px] text-gray-500">{stat.description}</p>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-3 p-2 bg-primary/5 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <p className="text-xs text-gray-600">
                  <i className="fas fa-quote-left text-primary/50 mr-1 text-[9px]"></i>
                  Pakistan's focus on digital security has been critical to supporting trust in the growing digital economy and payment systems.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <span className="text-xs text-gray-500">13 / 27</span>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalTransformationSlide;
