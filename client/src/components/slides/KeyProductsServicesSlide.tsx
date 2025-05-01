import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const KeyProductsServicesSlide = ({ isActive }: SlideProps) => {
  const products = [
    {
      title: "Custom Software",
      description: "Enterprise solutions, web apps, custom development",
      icon: "fa-code",
      color: "blue-600"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "fa-mobile-alt",
      color: "green-600"
    },
    {
      title: "Fintech",
      description: "Payment gateways, banking solutions, blockchain",
      icon: "fa-credit-card",
      color: "purple-600"
    },
    {
      title: "BPO/ITeS",
      description: "Call centers, back office, customer support",
      icon: "fa-headset",
      color: "yellow-600"
    },
    {
      title: "Cloud Services",
      description: "Infrastructure, platform, and SaaS solutions",
      icon: "fa-cloud",
      color: "indigo-600"
    },
    {
      title: "Cybersecurity",
      description: "Security consulting, network protection, audits",
      icon: "fa-shield-alt",
      color: "red-600"
    },
    {
      title: "Freelancing",
      description: "Independent digital services across platforms",
      icon: "fa-laptop-house",
      color: "teal-600"
    },
    {
      title: "AI/ML Solutions",
      description: "Automation, predictive analytics, data science",
      icon: "fa-brain",
      color: "pink-600"
    }
  ];

  return (
    <section
      data-slide="8"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Key Products & <span className="text-primary">Services</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="bg-white rounded-xl p-5 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
            >
              <div className={`w-12 h-12 rounded-full bg-${product.color}/20 flex items-center justify-center mb-3`}>
                <i className={`fas ${product.icon} text-${product.color} text-xl`}></i>
              </div>
              <h3 className="font-data font-bold text-base mb-1">{product.title}</h3>
              <p className="text-xs text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-8 bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="font-data font-semibold text-lg mb-3 text-primary">Industry Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
              <p className="text-sm">700+ tech companies registered with PSEB</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
              <p className="text-sm">300+ startups in various tech sectors</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
              <p className="text-sm">IT services exports to 170+ global markets</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-600 mr-2"></div>
              <p className="text-sm">Growing specialization in fintech, insurtech</p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-700">
              Pakistan's IT & ITeS sector serves diverse international clients, with exports dominated by software development (45%), IT-enabled services (30%), and freelancing (15%).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyProductsServicesSlide;