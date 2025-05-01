import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const CaseStudiesSlide = ({ isActive }: SlideProps) => {
  const caseStudies = [
    {
      company: "Systems Limited",
      logo: "fa-desktop",
      color: "blue-600",
      type: "Enterprise Software Development",
      details: [
        "Founded: 1977 - Pakistan's first software company",
        "Services: Enterprise software, business process outsourcing",
        "Achievements: Listed on PSX, $158M annual revenue",
        "Global presence: UAE, USA, UK, Australia"
      ],
      impact: "700+ IT jobs, 20+ international enterprise clients"
    },
    {
      company: "10Pearls",
      logo: "fa-mobile-alt",
      color: "green-600",
      type: "Software & Product Development",
      details: [
        "Founded: 2004 by Pakistani entrepreneurs",
        "Services: Digital transformation, UX/UI, mobile apps",
        "Achievements: 7 global acquisitions since 2018",
        "Clients: PayPal, Cisco, Coca-Cola"
      ],
      impact: "1,200+ professionals, offices in 5 countries"
    },
    {
      company: "Afiniti",
      logo: "fa-robot",
      color: "purple-600",
      type: "AI Technology",
      details: [
        "Founded: 2005 by Zia Chishti in Pakistan",
        "Product: AI-based behavioral pairing technology",
        "Achievements: $1.6B+ valuation at peak",
        "Clients: Major telecoms in 18 countries"
      ],
      impact: "500+ employees worldwide, $200M+ annual revenue"
    },
    {
      company: "Careem (Tech Center)",
      logo: "fa-car",
      color: "teal-600",
      type: "Mobility & Fintech",
      details: [
        "Established: 2016 engineering center in Pakistan",
        "Services: Core product development for Careem",
        "Achievements: Key role in $3.1B Uber acquisition",
        "Scale: 300+ engineers in Pakistan office"
      ],
      impact: "Developed key components of Super App technology stack"
    }
  ];

  const successFactors = [
    {
      title: "Focus on Quality",
      description: "ISO/CMMI certifications, rigorous quality controls",
      icon: "fa-award"
    },
    {
      title: "Talent Investment",
      description: "Structured training, career progression, competitive benefits",
      icon: "fa-users-cog"
    },
    {
      title: "Innovation Focus",
      description: "R&D initiatives, emerging technology adoption",
      icon: "fa-lightbulb"
    },
    {
      title: "Global Partnerships",
      description: "Strategic alliances with international technology leaders",
      icon: "fa-handshake"
    }
  ];

  return (
    <section
      data-slide="24"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Success Stories: Case Studies
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.company}
              className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full bg-${study.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                    <i className={`fas ${study.logo} text-${study.color}`}></i>
                  </div>
                  <h3 className="text-sm font-bold">{study.company}</h3>
                </div>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                  {study.type}
                </span>
              </div>
              
              <ul className="space-y-1 mb-2">
                {study.details.map((detail, j) => (
                  <motion.li
                    key={j}
                    className="text-xs text-gray-700 flex items-start"
                    initial={{ opacity: 0, x: -5 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) + (j * 0.05) }}
                  >
                    <i className="fas fa-circle text-[5px] text-gray-400 mt-1.5 mr-1.5"></i>
                    {detail}
                  </motion.li>
                ))}
              </ul>
              
              <div className={`mt-2 pt-2 border-t border-gray-200 text-xs text-${study.color}`}>
                <i className="fas fa-chart-line mr-1.5"></i>
                <span className="font-medium">Impact:</span> {study.impact}
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
          <h3 className="text-center text-base font-bold mb-3">Common Success Factors</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {successFactors.map((factor, i) => (
              <motion.div
                key={factor.title}
                className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <i className={`fas ${factor.icon} text-blue-600`}></i>
                </div>
                <h4 className="text-sm font-bold mb-1">{factor.title}</h4>
                <p className="text-xs text-gray-600">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-4 p-3 bg-blue-50 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-bold text-blue-700">Global Recognition</h4>
              <p className="text-xs text-gray-700">
                Pakistani tech companies now serving 60+ countries across 5 continents
              </p>
            </div>
            
            <div className="mt-2 sm:mt-0 text-right">
              <span className="text-xs text-gray-500">24 / 28</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSlide;