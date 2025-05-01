import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import StatCard from "@/components/ui/stat-card";
import ProgressStats from "@/components/ui/progress-stats";
import { gdpMetrics, telecomMetrics, growthCatalysts } from "@/data/telecom-metrics";

const GdpTelecomSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="9"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          GDP and Telecom Metrics <span className="text-accent">(2024)</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel: Key Statistics */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gdpMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                >
                  <StatCard
                    title={metric.title}
                    value={metric.value}
                    change={metric.change}
                    icon={metric.icon}
                    color={metric.color}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 bg-gray-50 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="font-data font-semibold text-xl mb-4">Economic Growth Catalysts</h3>
              <div className="space-y-3">
                {growthCatalysts.map((catalyst, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-full bg-${catalyst.color} flex items-center justify-center text-white mr-3`}>
                      <i className={`fas ${catalyst.icon}`}></i>
                    </div>
                    <p className="text-gray-600 text-sm">{catalyst.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Panel: Telecom Infrastructure Stats */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-data font-semibold text-xl mb-6">Telecom Infrastructure & Usage (2024)</h3>
            
            <div className="space-y-6">
              {telecomMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <ProgressStats
                    title={metric.title}
                    subtitle={metric.subtitle}
                    value={metric.value}
                    percentage={metric.percentage}
                    color={metric.color}
                    growth={metric.growth}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-6 bg-white rounded-lg p-4 border border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <h4 className="font-medium text-gray-700 mb-3">Internet Usage by Type</h4>
              <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                <span>Mobile Broadband (94.8%)</span>
                <span>Fixed Broadband (5.2%)</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary" style={{ width: '94.8%' }}></div>
                <div className="h-full bg-primary" style={{ width: '5.2%' }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 p-4 bg-gray-100 rounded-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-center text-gray-600">
            The sector continues to be a significant contributor to Pakistan's economy, with steady growth in infrastructure, revenue, and connectivity metrics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GdpTelecomSlide;
