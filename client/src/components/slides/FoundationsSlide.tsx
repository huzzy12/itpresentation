import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const FoundationsSlide = ({ isActive }: SlideProps) => {
  const keyEvents = [
    {
      year: "1947",
      event: "Post & Telegraph Department established after independence"
    },
    {
      year: "1961",
      event: "Pakistan Telegraph & Telephone Department formed"
    },
    {
      year: "1980s",
      event: "PTCL builds basic fixed-line network infrastructure"
    },
    {
      year: "1991",
      event: "PTCL corporatized; still government monopoly"
    },
    {
      year: "1994",
      event: "First cellular licenses issued (Mobilink enters market)"
    },
    {
      year: "Late 1990s",
      event: "Internet services introduced with limited coverage"
    }
  ];

  return (
    <section
      data-slide="4"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-100 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          1947–2000: <span className="text-primary">Foundations</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6">
                <h3 className="font-data font-semibold text-xl mb-4">Key Developments</h3>
                
                <div className="space-y-4">
                  {keyEvents.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-16 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-data font-bold text-sm">
                          {item.year}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="h-60 bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567958451986-2de427a3a0fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Vintage telephone exchange" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs">
                  Vintage telephone exchange (representative image)
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="font-data font-semibold text-xl mb-4">Characteristics</h3>
                
                <ul className="space-y-2">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                    <p className="text-sm text-gray-600">Minimal private sector participation</p>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                    <p className="text-sm text-gray-600">Telephony primarily urban and limited to government and businesses</p>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                    <p className="text-sm text-gray-600">Long waiting times for new telephone connections</p>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                    <p className="text-sm text-gray-600">Monopolistic PTCL controlled all telecom infrastructure</p>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundationsSlide;