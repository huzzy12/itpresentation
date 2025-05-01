import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import InfoCard from "@/components/ui/info-card";
import { keyProducts } from "@/data/presentation-data";

const KeyProductsSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      data-slide="6"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Key Products & Services
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
            >
              <InfoCard
                title={product.title}
                description={product.description}
                icon={product.icon}
                color={product.color}
                items={product.items}
                marketSize={product.marketSize}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-8 p-4 bg-gray-100 rounded-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-center text-gray-600">
            Together, these sectors contribute to a diverse IT & Telecom ecosystem with a combined market size of over $3 billion, employing hundreds of thousands of professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyProductsSlide;
