import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import StatCard from "@/components/ui/stat-card";

const TelecomInfrastructureSlide = ({ isActive }: SlideProps) => {
  // Based on data from Economic Survey 2023-24
  const infrastructureStats = [
    {
      title: "Fiber Optic Network",
      value: "165,000+ km",
      icon: "fa-network-wired",
      color: "primary",
      change: {
        value: "12%",
        positive: true
      }
    },
    {
      title: "Mobile Towers",
      value: "49,800+",
      icon: "fa-broadcast-tower",
      color: "secondary",
      change: {
        value: "9%",
        positive: true
      }
    },
    {
      title: "International Bandwidth",
      value: "4.7 Tbps",
      icon: "fa-globe-asia",
      color: "accent",
      change: {
        value: "21%",
        positive: true
      }
    },
    {
      title: "Submarine Cables",
      value: "7",
      icon: "fa-water",
      color: "purple-500",
      change: {
        value: "1 new",
        positive: true
      }
    }
  ];

  return (
    <section
      data-slide="telecom-infrastructure"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Telecom Infrastructure <span className="text-primary">Development</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Critical backbone supporting Pakistan's digital economy growth
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {infrastructureStats.map((stat, index) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <StatCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
                change={stat.change}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-gray-50 rounded-xl p-4 shadow-md border-l-4 border-primary">
            <h3 className="font-data font-semibold text-lg mb-2">Ongoing Projects</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                <p className="text-gray-600 text-sm">Universal Service Fund (USF) extending telecom services to underserved areas</p>
              </li>
              <li className="flex items-start">
                <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                <p className="text-gray-600 text-sm">5G spectrum auction planning underway for 2025 launch</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 shadow-md border-l-4 border-secondary">
            <h3 className="font-data font-semibold text-lg mb-2">Future Outlook</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                <p className="text-gray-600 text-sm">Development of South Asia-Middle East-Western Europe 6 (SMW-6) submarine cable</p>
              </li>
              <li className="flex items-start">
                <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                <p className="text-gray-600 text-sm">Expansion of internet exchange points (IXPs) to improve local traffic management</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TelecomInfrastructureSlide;