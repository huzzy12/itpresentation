import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import ProgressStats from "@/components/ui/progress-stats";

const DigitalTransformationSlide = ({ isActive }: SlideProps) => {
  const timelineEvents = [
    { year: "2014", title: "3G/4G Spectrum Auction", description: "$1.1 billion raised from auction, introducing high-speed mobile internet to Pakistan.", color: "secondary" },
    { year: "2015", title: "Freelancing Boom Begins", description: "Pakistan emerges as a top freelancing destination with over 200,000 freelancers.", color: "primary" },
    { year: "2018", title: "National Incubation Centers", description: "Establishment of NICs in major cities to foster tech startups and innovation.", color: "accent" },
    { year: "2019", title: "Digital Pakistan Vision", description: "PM launches comprehensive initiative focused on digital infrastructure, innovation, and inclusion.", color: "purple-500" }
  ];

  const progressStats = [
    { title: "Internet Penetration", startValue: "8%", endValue: "46%", color: "primary" },
    { title: "Mobile Subscribers", startValue: "100M", endValue: "167M", color: "secondary" },
    { title: "IT Exports", startValue: "$0.3B", endValue: "$2.1B", color: "accent" },
    { title: "Broadband Cost (1Mbps)", startValue: "Rs.2,000", endValue: "Rs.100", color: "purple-600" }
  ];

  return (
    <section
      data-slide="5"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          2010–2020: <span className="text-secondary">3G/4G Era & Digital Pakistan</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Timeline */}
          <div className="md:w-1/2">
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={event.year}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                >
                  <div className="shrink-0 mr-4">
                    <div className={`w-16 h-16 rounded-full bg-${event.color} flex items-center justify-center text-white font-data font-bold`}>
                      {event.year}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm flex-1">
                    <h3 className="font-data font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Data & Impacts */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-xl mb-6 text-primary">Impact of Digital Transformation</h3>
              
              <div className="space-y-6">
                {progressStats.map((stat, index) => (
                  <div key={stat.title} className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">{stat.title}</h4>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-gray-600">2010:</span>
                          <span className="text-xs font-semibold inline-block text-gray-800 ml-1">{stat.startValue}</span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block text-gray-600">2020:</span>
                          <span className={`text-xs font-semibold inline-block text-${stat.color} ml-1`}>{stat.endValue}</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div 
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400`} 
                          style={{ width: stat.title.includes("Broadband") ? "95%" : (stat.title === "Internet Penetration" ? "8%" : (stat.title === "Mobile Subscribers" ? "60%" : "15%")) }}
                        ></div>
                        <div 
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${stat.color}`} 
                          style={{ width: stat.title.includes("Broadband") ? "5%" : (stat.title === "Internet Penetration" ? "38%" : (stat.title === "Mobile Subscribers" ? "40%" : "85%")) }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <motion.div
                className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-sm text-gray-600">
                  This decade saw Pakistan's digital landscape transform with affordable connectivity, sparking growth in IT exports, e-commerce, and digital service adoption.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSlide;
