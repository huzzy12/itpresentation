import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const CallToActionSlide = ({ isActive }: SlideProps) => {
  const advantages = [
    { title: "Talent", description: "A young workforce of 67% under age 30", color: "primary" },
    { title: "Innovation", description: "Growing startup and incubator ecosystem", color: "secondary" },
    { title: "Ambition", description: "Target of $15B IT exports by 2030", color: "accent" }
  ];

  return (
    <section
      data-slide="10"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center text-white p-8`}
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1633763804526-1b13048f9e99?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Pakistan tech future"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-heading font-bold text-5xl md:text-6xl mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What if Pakistan became the next digital <span className="text-primary">superpower</span>?
        </motion.h2>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With its young population, improving digital infrastructure, and growing tech ecosystem, Pakistan stands at the threshold of a digital revolution.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                <h3 className={`font-data text-lg font-semibold text-${advantage.color} mb-2`}>{advantage.title}</h3>
                <p className="text-sm text-gray-200">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          className="mt-12 inline-block border-b-2 border-primary px-2 py-1 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wider">The future is digital. The future is now.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSlide;
