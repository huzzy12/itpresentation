import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const SectorTimelineSlide = ({ isActive }: SlideProps) => {
  const timelinePillars = [
    {
      year: "1947",
      title: "Independence",
      description: "Post & Telegraph Department established",
      icon: "fa-flag",
      color: "gray-700"
    },
    {
      year: "2003",
      title: "Deregulation",
      description: "Market opened for private participation",
      icon: "fa-unlock",
      color: "primary"
    },
    {
      year: "2014-17",
      title: "3G/4G Era",
      description: "3G rollout (2014), 4G launch (2017)",
      icon: "fa-signal",
      color: "secondary"
    },
    {
      year: "2018+",
      title: "Digital Pakistan",
      description: "Policy launch & tech ecosystem growth",
      icon: "fa-laptop-code",
      color: "accent"
    },
    {
      year: "2023-24",
      title: "Growth Acceleration",
      description: "IT exports hit $3.22B, up 27% YoY",
      icon: "fa-rocket",
      color: "purple-500"
    }
  ];

  return (
    <section
      data-slide="3"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Sector Timeline <span className="text-primary">Overview</span>
        </motion.h2>
        
        <motion.div
          className="bg-white rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute h-1 bg-gray-200 top-10 left-0 right-0 z-0 mx-8"></div>
            
            <div className="flex justify-between relative z-10">
              {timelinePillars.map((pillar, index) => (
                <motion.div 
                  key={pillar.year}
                  className="flex flex-col items-center px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className={`w-10 h-10 rounded-full bg-${pillar.color} flex items-center justify-center text-white mb-2`}>
                    <i className={`fas ${pillar.icon}`}></i>
                  </div>
                  
                  <div className="text-center mt-2">
                    <p className="font-data font-bold text-sm">{pillar.year}</p>
                    <h3 className="font-data font-semibold text-base mb-1">{pillar.title}</h3>
                    <p className="text-xs text-gray-600 max-w-[150px]">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm text-gray-600">
            <i className="fas fa-info-circle mr-1"></i> 
            Each of these key periods represents a transformative shift in Pakistan's digital journey
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorTimelineSlide;