import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const PolicyWinsSlide = ({ isActive }: SlideProps) => {
  const policyWins = [
    {
      year: "2003",
      title: "Deregulation Policy",
      description: "Opened telecom market to private competition",
      icon: "fa-unlock",
      color: "primary"
    },
    {
      year: "2006",
      title: "PTCL Privatization",
      description: "26% stake sold to Etisalat for $2.6 billion",
      icon: "fa-handshake",
      color: "secondary"
    },
    {
      year: "2018",
      title: "Digital Pakistan Policy",
      description: "Comprehensive framework for digital economy",
      icon: "fa-file-alt",
      color: "accent"
    },
    {
      year: "2020-23",
      title: "IT Export Tax Breaks",
      description: "Tax exemptions for IT exporters & SEZs",
      icon: "fa-hand-holding-usd",
      color: "green-600"
    },
    {
      year: "2022",
      title: "Startup Fund",
      description: "Rs 2 billion to catalyze venture investments",
      icon: "fa-piggy-bank",
      color: "purple-600"
    },
    {
      year: "2022",
      title: "e-Rozgaar Program",
      description: "Skills training centers across 36 districts",
      icon: "fa-laptop-house",
      color: "blue-600"
    }
  ];

  return (
    <section
      data-slide="13"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Policy <span className="text-primary">Wins</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {policyWins.map((policy, index) => (
            <motion.div
              key={policy.title}
              className="bg-gray-50 rounded-lg p-3 shadow-sm border-l-4 border-t-0"
              style={{ borderLeftColor: `var(--${policy.color})` }}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-${policy.color}/20 flex items-center justify-center mr-2`}>
                  <i className={`fas ${policy.icon} text-${policy.color} text-xs`}></i>
                </div>
                <div>
                  <div className={`text-[10px] font-medium rounded-full inline-block px-2 py-0.5 bg-${policy.color}/10 text-${policy.color} mb-1`}>
                    {policy.year}
                  </div>
                  <h3 className="font-semibold text-sm">{policy.title}</h3>
                  <p className="text-xs text-gray-600">{policy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-4 bg-gray-50 rounded-lg p-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="font-semibold text-sm mb-2 text-primary">Key Impact Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary text-xs mt-0.5 mr-1.5"></i>
              <div>
                <p className="text-xs font-medium">Foreign Investment</p>
                <p className="text-[10px] text-gray-600">Attracted international telecom operators</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary text-xs mt-0.5 mr-1.5"></i>
              <div>
                <p className="text-xs font-medium">Technology Transfer</p>
                <p className="text-[10px] text-gray-600">Modernized infrastructure and services</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary text-xs mt-0.5 mr-1.5"></i>
              <div>
                <p className="text-xs font-medium">Export Growth</p>
                <p className="text-[10px] text-gray-600">Incentivized IT services exports</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary text-xs mt-0.5 mr-1.5"></i>
              <div>
                <p className="text-xs font-medium">Digital Skills</p>
                <p className="text-[10px] text-gray-600">Trained youth for tech economy</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-3">
            <span className="text-xs text-gray-500">12 / 27</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PolicyWinsSlide;