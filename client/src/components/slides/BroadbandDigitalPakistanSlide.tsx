import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const BroadbandDigitalPakistanSlide = ({ isActive }: SlideProps) => {
  const keyEvents = [
    {
      year: "2014",
      title: "3G Spectrum Auction",
      description: "Launched 3G services with nationwide rollout",
      icon: "fa-signal",
      color: "primary"
    },
    {
      year: "2017",
      title: "4G Launch",
      description: "Higher speed mobile internet services introduced",
      icon: "fa-wifi",
      color: "secondary"
    },
    {
      year: "2018",
      title: "Digital Pakistan Policy",
      description: "Comprehensive policy framework approved by Cabinet",
      icon: "fa-file-alt",
      color: "accent"
    },
    {
      year: "2019-20",
      title: "COVID-19 Acceleration",
      description: "Pandemic accelerated digital adoption nationwide",
      icon: "fa-rocket",
      color: "purple-500"
    }
  ];

  return (
    <section
      data-slide="6"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          2010–2020: <span className="text-accent">Broadband & Digital Pakistan</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Key Events */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-xl mb-6 text-accent">Key Developments</h3>
              
              <div className="space-y-5">
                {keyEvents.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center text-${item.color}`}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                    </div>
                    <div>
                      <p className="font-data font-bold text-base text-gray-900">{item.year}: {item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-6 bg-gray-50 rounded-lg p-3 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-xs text-gray-600">
                  <i className="fas fa-info-circle text-accent mr-1"></i>
                  Source: Ministry of Interior - Pakistan (Digital Pakistan Policy), Haq's Musings (3G/4G rollout)
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Digital Pakistan Pillars */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-xl mb-6 text-accent">Digital Pakistan Policy Objectives</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="mr-3 flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-data font-semibold text-base">Digital Infrastructure Development</h4>
                    <p className="text-sm text-gray-600">Expanding broadband access and reducing costs</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="mr-3 flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-data font-semibold text-base">E-Government Services</h4>
                    <p className="text-sm text-gray-600">Paperless, efficient government operations</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="mr-3 flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-data font-semibold text-base">Digital Skills & Literacy</h4>
                    <p className="text-sm text-gray-600">Training workforce for digital economy</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="mr-3 flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-data font-semibold text-base">IT Exports & Innovation</h4>
                    <p className="text-sm text-gray-600">Increasing IT exports and fostering startups</p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="mr-3 flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-data font-semibold text-base">Legal & Regulatory Framework</h4>
                    <p className="text-sm text-gray-600">Cybersecurity, data protection, and digital payments laws</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="mt-6 text-center p-3 bg-accent/10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-sm text-gray-700 italic">
                  "Strategic enabler for accelerated digitization"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  — Digital Pakistan Policy, Ministry of Interior
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandDigitalPakistanSlide;