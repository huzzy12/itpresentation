import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import ProgressStats from "@/components/ui/progress-stats";
import { employmentStats, skillDistribution, geoDistribution } from "@/data/employment-data";

const EmploymentImpactSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="8"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Employment Impact
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel: Numbers */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-data font-semibold text-xl text-primary mb-6">Employment Statistics</h3>
            
            <div className="space-y-6">
              {employmentStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                >
                  <ProgressStats
                    title={stat.title}
                    value={stat.value}
                    color={stat.color}
                    percentage={stat.percentage}
                    subtitle={stat.subtitle}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-6 p-3 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-sm text-gray-600">
                <i className="fas fa-lightbulb text-accent mr-2"></i> 
                With each IT job estimated to create 3-4 indirect jobs, the sector's total economic impact supports over 2 million livelihoods.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Panel: Distribution & Impact */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-data font-semibold text-xl text-secondary mb-6">Geographic & Sectoral Distribution</h3>
            
            {/* Geographic Distribution */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h4 className="font-medium text-gray-700 mb-3">IT Employment by City</h4>
              <div className="relative">
                <div className="grid grid-cols-2 gap-2">
                  {geoDistribution.map((city, index) => (
                    <div key={city.name} className="flex items-center">
                      <div 
                        className={`w-${16 - (index * 2)} h-4 bg-${city.color} rounded-sm mr-2`}
                      ></div>
                      <span className="text-xs text-gray-600">{city.name} ({city.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Skill Distribution */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h4 className="font-medium text-gray-700 mb-3">Top IT Skills in Demand</h4>
              
              <div className="space-y-3">
                {skillDistribution.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.2, delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="w-1/4 text-xs text-gray-600">{skill.name}</div>
                    <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`bg-${skill.color} h-2.5 rounded-full`} 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Impact Quote */}
            <motion.div
              className="mt-6 bg-gray-50 rounded-lg p-4 border-l-4 border-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="italic text-gray-600 text-sm">
                "Pakistan's IT sector has emerged as a vital source of quality employment for the youth, offering competitive salaries averaging 2-3x higher than traditional sectors."
              </p>
              <p className="text-right text-xs text-gray-500 mt-2">— Pakistan Economic Survey 2023-24</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentImpactSlide;
