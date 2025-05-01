import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { keyPoints } from "@/data/presentation-data";

const IntroductionSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="2"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Why This Topic Matters
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="col-span-1 md:col-span-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-center text-gray-600">
              Pakistan's IT & Telecom sector represents one of the country's most promising avenues for:
            </p>
          </motion.div>
          
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-${point.color}/10 p-3 rounded-full mr-4`}>
                  <i className={`fas ${point.icon} text-${point.color} text-2xl`}></i>
                </div>
                <h3 className="font-data font-semibold text-xl">{point.title}</h3>
              </div>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSlide;
