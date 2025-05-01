import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const NewKeyProductsServicesSlide = ({ isActive }: SlideProps) => {
  const products = [
    {
      title: "IT Enabled Services",
      icon: "fa-headset",
      color: "green-500",
      description: "Business process outsourcing, KPO, and remote customer support services.",
      items: ["Call Centers", "Technical Support", "Data Entry & Processing"],
      marketSize: "~$500M"
    },
    {
      title: "Fintech",
      icon: "fa-credit-card",
      color: "blue-500",
      description: "Digital financial services revolutionizing Pakistan's banking landscape.",
      items: ["Mobile Wallets & Payments", "Digital Banking Solutions", "Blockchain Applications"],
      marketSize: "~$400M"
    },
    {
      title: "Software Development",
      icon: "fa-code",
      color: "orange-500",
      description: "Custom software solutions for local and international clients.",
      items: ["Enterprise Solutions", "Mobile Applications", "Web Development"],
      marketSize: "~$1.2B"
    },
    {
      title: "Freelancing",
      icon: "fa-laptop",
      color: "gray-700",
      description: "Independent professionals providing services to global clients.",
      items: ["Digital Marketing", "Graphic Design", "Content Writing"],
      marketSize: "~500K Freelancers"
    },
    {
      title: "E-Commerce",
      icon: "fa-shopping-cart",
      color: "gray-900",
      description: "Online marketplace and retail solutions for businesses.",
      items: ["Online Marketplaces", "Payment Gateways", "Logistics Solutions"],
      marketSize: "~$600M"
    },
    {
      title: "BPO",
      icon: "fa-building",
      color: "gray-800",
      description: "Business Process Outsourcing services for global firms.",
      items: ["Back Office Operations", "HR & Recruitment Services", "Accounting & Finance"],
      marketSize: "~$300M"
    }
  ];

  return (
    <section
      data-slide="8"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Key Products & Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              className="bg-gray-50 rounded-lg p-4 shadow-sm"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="flex items-center mb-2">
                <span className={`text-${product.color} mr-2`}>
                  <i className={`fas ${product.icon}`}></i>
                </span>
                <h3 className="text-sm font-bold">{product.title}</h3>
              </div>
              
              <p className="text-xs text-gray-600 mb-2">{product.description}</p>
              
              <ul className="space-y-1 mb-2">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className={`text-${product.color} text-xs mr-1`}>•</span>
                    <span className="text-xs">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-right text-xs text-gray-500">Market Size: {product.marketSize}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-3 py-2 px-4 bg-gray-50 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <p className="text-xs text-gray-700">
            Together, these sectors contribute to a diverse IT & ITeS ecosystem with a combined market size of 
            over $3 billion, employing hundreds of thousands of professionals.
          </p>
          
          <div className="flex justify-center items-center mt-1">
            <div className="flex items-center mx-1">
              <span className="text-xs text-gray-500">6 / 10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewKeyProductsServicesSlide;