import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const DeregulationSlide = ({ isActive }: SlideProps) => {
  const policyChanges = [
    { year: "2003", title: "Telecom Deregulation Policy", description: "Opening market to competition" },
    { year: "2004", title: "Mobile Number Portability", description: "Increased consumer choice" },
    { year: "2006", title: "Establishment of USF", description: "Universal Service Fund for rural areas" },
    { year: "2007", title: "IT Policy & Action Plan", description: "First comprehensive IT roadmap" },
    { year: "2008", title: "Broadband Policy", description: "Accelerating internet adoption" }
  ];

  return (
    <section
      data-slide="4"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          2001–2010: <span className="text-secondary">Deregulation Era</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: PTCL Privatization */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 p-3 rounded-full mr-3">
                <i className="fas fa-building text-secondary text-xl"></i>
              </div>
              <h3 className="font-data font-semibold text-lg">PTCL Privatization</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">2005-2006: 26% shares sold to Etisalat for $2.6 billion</p>
              <p className="text-gray-600 text-sm">End of state monopoly in telecom sector</p>
              <p className="text-gray-600 text-sm">Modernization of infrastructure begins</p>
              <div className="pt-2">
                <img 
                  src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Telecom tower" 
                  className="rounded-lg h-32 w-full object-cover" 
                />
              </div>
            </div>
          </motion.div>
          
          {/* Column 2: Mobile Boom */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-3">
                <i className="fas fa-mobile-alt text-primary text-xl"></i>
              </div>
              <h3 className="font-data font-semibold text-lg">Mobile Boom</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">2000:</span>
                <span className="font-data font-semibold">0.3M users</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">2005:</span>
                <span className="font-data font-semibold">12.5M users</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">2010:</span>
                <span className="font-data font-semibold">100M+ users</span>
              </div>
              <div className="pt-2">
                <div className="relative">
                  <div className="relative h-10 bg-gray-200 rounded">
                    <div className="absolute top-0 left-0 h-full w-4 bg-gray-400 rounded-l"></div>
                    <div className="absolute top-0 left-4 h-full w-8 bg-blue-400"></div>
                    <div className="absolute top-0 left-12 h-full w-[calc(100%-3rem)] bg-primary rounded-r"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2000</span>
                    <span>2005</span>
                    <span>2010</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Introduction of new players: Telenor, Warid, Ufone dramatically increased competition</p>
            </div>
          </motion.div>
          
          {/* Column 3: Key Policy Changes */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-accent/10 p-3 rounded-full mr-3">
                <i className="fas fa-file-contract text-accent text-xl"></i>
              </div>
              <h3 className="font-data font-semibold text-lg">Key Policy Changes</h3>
            </div>
            <div className="space-y-3">
              {policyChanges.map((policy, index) => (
                <motion.div 
                  key={policy.year} 
                  className="flex"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="shrink-0 w-24 text-xs pt-1">{policy.year}</div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm">{policy.title}</p>
                    <p className="text-gray-500 text-xs">{policy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 border-t border-gray-200 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-center text-gray-600">
            <strong>Impact:</strong> This era laid the foundations for Pakistan's digital transformation with regulatory reforms that dramatically increased telecom access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeregulationSlide;
