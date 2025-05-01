import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const TitleSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="1"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/90 text-white flex flex-col justify-center items-center p-8`}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10 relative"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="font-heading text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pakistan's IT & Telecom Sector: <span className="text-accent">From Analog to AI</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          30 Minutes That Will Change How You See Our Digital Future
        </motion.p>
        
        <motion.div
          className="absolute inset-0 opacity-10 z-0"
          initial={{ scale: 1.1 }}
          animate={isActive ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TitleSlide;