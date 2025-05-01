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
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Policy <span className="text-primary">Wins</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {policyWins.map((policy, index) => (
            <motion.div
              key={policy.title}
              className="bg-gray-50 rounded-xl p-5 shadow-md border-l-4 border-t-0 md:even:mt-10"
              style={{ borderLeftColor: `var(--${policy.color})` }}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${policy.color}/20 flex items-center justify-center mr-3`}>
                  <i className={`fas ${policy.icon} text-${policy.color}`}></i>
                </div>
                <div>
                  <div className={`text-xs font-medium rounded-full inline-block px-2 py-0.5 bg-${policy.color}/10 text-${policy.color} mb-1`}>
                    {policy.year}
                  </div>
                  <h3 className="font-data font-semibold text-lg">{policy.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{policy.description}</p>
                </div>
              </div>
              
              <div className={`mt-4 pt-3 border-t border-${policy.color}/20`}>
                <div className={`w-6 h-6 rounded-full bg-${policy.color}/10 flex items-center justify-center float-right`}>
                  <i className="fas fa-medal text-xs" style={{ color: `var(--${policy.color})` }}></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-8 bg-gray-50 rounded-xl p-6 shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="font-data font-semibold text-lg mb-3 text-primary">Key Impact Areas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <div>
                <p className="text-sm font-medium">Foreign Investment</p>
                <p className="text-xs text-gray-600">Attracted international telecom operators</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <div>
                <p className="text-sm font-medium">Technology Transfer</p>
                <p className="text-xs text-gray-600">Modernized infrastructure and services</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <div>
                <p className="text-sm font-medium">Export Growth</p>
                <p className="text-xs text-gray-600">Incentivized IT services exports</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
              <div>
                <p className="text-sm font-medium">Digital Skills</p>
                <p className="text-xs text-gray-600">Trained youth for tech economy</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 text-right">
            <p className="text-xs text-gray-500">
              <i className="fas fa-info-circle mr-1"></i>
              Sources: Ministry of IT & Telecom, Finance Division, Pakistan Observer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PolicyWinsSlide;