import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const ThankYouSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="27"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col justify-center items-center text-white p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-3">Thank You!</h2>
          <p className="text-xl text-blue-200">Questions & Discussion</p>
        </motion.div>
        
        <motion.div
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-blue-200 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-200">Pakistan IT & Telecom Sector</h3>
            <p className="text-lg text-blue-300">Evolution, Impact & Outlook</p>
            <div className="mt-4 w-32 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div 
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-rocket text-blue-200 text-lg"></i>
              </div>
              <h4 className="text-blue-200 font-bold text-lg mb-2">Growth</h4>
              <p className="text-blue-100 text-sm">27% YoY export growth with strong future projections</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-users text-blue-200 text-lg"></i>
              </div>
              <h4 className="text-blue-200 font-bold text-lg mb-2">Employment</h4>
              <p className="text-blue-100 text-sm">Over 600,000 IT professionals and growing workforce</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-globe text-blue-200 text-lg"></i>
              </div>
              <h4 className="text-blue-200 font-bold text-lg mb-2">Impact</h4>
              <p className="text-blue-100 text-sm">Driving economic growth and digital transformation</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-lg text-blue-100 font-medium italic">
            "A vibrant IT & Telecom sector powers Pakistan's digital future"
          </p>
          
          <div className="flex justify-center mt-3">
            <span className="text-xs text-blue-300">27 / 27</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSlide;