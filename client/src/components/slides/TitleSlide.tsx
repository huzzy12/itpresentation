import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const TitleSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="1"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center text-white p-8`}
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1639162055468-30ef79eab9d2?q=80&w=1974&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Pakistan tech background"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="font-heading font-bold text-5xl md:text-7xl mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary">Pakistan's</span> IT & Telecom Sector
        </motion.h1>
        
        <motion.h2
          className="font-heading text-3xl md:text-4xl mb-8 italic tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From Analog to AI
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <em>"30 minutes that will change how you see Pakistan's digital economy."</em>
        </motion.p>
        
        <motion.div
          className="mt-12 inline-block border-b-2 border-primary px-2 py-1 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wider">BBA 5th Semester Presentation</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TitleSlide;
