import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const InnovationEcosystemSlide = ({ isActive }: SlideProps) => {
  const innovationHubs = [
    {
      name: "National Incubation Centers",
      count: "5",
      locations: "Islamabad, Lahore, Karachi, Peshawar, Quetta",
      startups: "1,480+",
      icon: "fa-building",
      color: "blue-500"
    },
    {
      name: "Special Technology Zones",
      count: "23",
      locations: "Multiple cities across Pakistan",
      investment: "$1.4B",
      icon: "fa-map-marker-alt",
      color: "green-500"
    },
    {
      name: "University Incubators",
      count: "18+",
      locations: "Major universities nationwide",
      startups: "390+",
      icon: "fa-graduation-cap",
      color: "purple-500"
    },
    {
      name: "Private Accelerators",
      count: "12+",
      locations: "Major urban centers",
      investment: "$79M+",
      icon: "fa-rocket",
      color: "red-500"
    }
  ];

  const successStories = [
    {
      name: "Bazaar",
      sector: "B2B E-Commerce",
      funding: "$107.8M",
      description: "B2B marketplace connecting retailers directly with wholesalers and manufacturers",
      icon: "fa-shopping-basket"
    },
    {
      name: "Retailo",
      sector: "B2B Retail",
      funding: "$45M",
      description: "Streamlining supply chain for small retailers across MENA region",
      icon: "fa-store"
    },
    {
      name: "SadaPay",
      sector: "Fintech",
      funding: "$30.7M",
      description: "Digital wallet and financial services platform with simplified onboarding",
      icon: "fa-wallet"
    }
  ];

  return (
    <section
      data-slide="16"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Innovation Ecosystem
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-3">Innovation Infrastructure</h3>
            
            <div className="space-y-3">
              {innovationHubs.map((hub, i) => (
                <motion.div
                  key={hub.name}
                  className="bg-white p-3 rounded-lg shadow-sm border-l-2"
                  style={{ borderColor: `var(--${hub.color})` }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (i * 0.08) }}
                >
                  <div className="flex items-start">
                    <div className={`w-9 h-9 rounded-full bg-${hub.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                      <i className={`fas ${hub.icon} text-${hub.color}`}></i>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-sm font-bold">{hub.name}</h4>
                        <span className="ml-2 text-xs font-medium bg-gray-100 px-1.5 py-0.5 rounded">
                          {hub.count}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">
                        <span className="font-medium">Locations:</span> {hub.locations}
                      </p>
                      <p className="text-xs text-gray-600">
                        {hub.startups && <><span className="font-medium">Startups:</span> {hub.startups}</>}
                        {hub.investment && <><span className="font-medium">Investment:</span> {hub.investment}</>}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-medium text-base mb-3">Startup Success Stories</h3>
              
              <div className="grid grid-cols-1 gap-3">
                {successStories.map((story, i) => (
                  <motion.div
                    key={story.name}
                    className="bg-white p-3 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.08) }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <i className={`fas ${story.icon} text-blue-600 text-xs`}></i>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold">{story.name}</h4>
                          <p className="text-xs text-gray-500">{story.sector}</p>
                        </div>
                      </div>
                      <div className="bg-green-50 px-2 py-1 rounded">
                        <p className="text-xs font-medium text-green-600">{story.funding}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{story.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="font-medium text-base mb-3">Ecosystem Highlights</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <i className="fas fa-chart-line text-blue-600 mr-1.5 text-xs"></i>
                    <h4 className="text-xs font-bold text-blue-600">$373 Million</h4>
                  </div>
                  <p className="text-xs">
                    Total startup funding raised from 2015-2023
                  </p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <i className="fas fa-users text-green-600 mr-1.5 text-xs"></i>
                    <h4 className="text-xs font-bold text-green-600">128,000+ Jobs</h4>
                  </div>
                  <p className="text-xs">
                    Created through National Incubation Centers
                  </p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <i className="fas fa-laptop-code text-purple-600 mr-1.5 text-xs"></i>
                    <h4 className="text-xs font-bold text-purple-600">32+</h4>
                  </div>
                  <p className="text-xs">
                    Specialized incubation programs in 2023
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <i className="fas fa-rocket text-yellow-600 mr-1.5 text-xs"></i>
                    <h4 className="text-xs font-bold text-yellow-600">18%</h4>
                  </div>
                  <p className="text-xs">
                    Annual growth in new tech startups (2022-23)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">18 / 28</span>
        </div>
      </div>
    </section>
  );
};

export default InnovationEcosystemSlide;