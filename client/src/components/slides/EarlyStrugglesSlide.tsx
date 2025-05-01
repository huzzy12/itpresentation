import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import TimelineItem from "@/components/ui/timeline-item";

const EarlyStrugglesSlide = ({ isActive }: SlideProps) => {
  const timelineItems = [
    {
      year: "1947-1962",
      title: "Post-Independence Era",
      description: "Post-independence communication infrastructure establishment. Telegraph and limited telephone services.",
      image: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?q=80&w=1974&auto=format&fit=crop",
      imageAlt: "Old telephone",
      position: "left" as const
    },
    {
      year: "1962-1990",
      title: "Analog Era",
      description: "Formation of Pakistan Telephone & Telegraph Department. Analog systems and limited urban coverage.",
      image: "https://images.unsplash.com/photo-1516024021116-5d760918bbf5?q=80&w=2071&auto=format&fit=crop",
      imageAlt: "Old technology",
      position: "right" as const
    },
    {
      year: "1990-2000",
      title: "PTCL Monopoly",
      description: "PTCL formed as state monopoly. Introduction of mobile services (Mobilink) in 1994. Internet arrives in late 1990s.",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065&auto=format&fit=crop",
      imageAlt: "Early mobile phone",
      position: "left" as const
    }
  ];
  
  return (
    <section
      data-slide="3"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-100 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          1947–2000: <span className="text-primary">Early Struggles</span> to Telecom Monopoly
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          {/* Timeline Items */}
          <div className="timeline-container">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: item.position === "left" ? -20 : 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === "left" ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="mb-8 last:mb-0"
              >
                <TimelineItem {...item} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-6 py-2 px-3 bg-gray-200 rounded-lg mx-auto max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-center text-xs font-medium text-gray-600">
              <i className="fas fa-lightbulb text-accent mr-1"></i> 
              In this era, telephone density was less than 2%, with long waiting lists for new connections.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarlyStrugglesSlide;
