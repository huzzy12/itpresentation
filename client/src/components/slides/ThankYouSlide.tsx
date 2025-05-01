import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const ThankYouSlide = ({ isActive }: SlideProps) => {
  const speakerInfo = {
    name: "Team Presentation",
    title: "Pakistan IT & Telecom Sector: Evolution, Impact & Outlook",
    email: "team@example.com",
    contact: "+92 300 1234567"
  };

  const references = [
    "Finance Division, Economic Survey of Pakistan 2023-24",
    "Pakistan Telecommunication Authority (PTA) Annual Report",
    "State Bank of Pakistan, Annual Reports & Quarterly Bulletins",
    "Pakistan Software Export Board (PSEB) Statistics",
    "Ministry of IT & Telecom, Digital Pakistan Policy",
    "World Bank Digital Economy Reports"
  ];

  return (
    <section
      data-slide="28"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col justify-center items-center text-white p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-5xl font-bold mb-2">Thank You!</h2>
          <p className="text-xl text-blue-200">Questions & Discussion</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-200">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-user text-blue-200"></i>
                </div>
                <div>
                  <p className="text-sm text-blue-100 opacity-80">Presenter</p>
                  <p className="font-medium">{speakerInfo.name}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-file-alt text-blue-200"></i>
                </div>
                <div>
                  <p className="text-sm text-blue-100 opacity-80">Presentation</p>
                  <p className="font-medium">{speakerInfo.title}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-envelope text-blue-200"></i>
                </div>
                <div>
                  <p className="text-sm text-blue-100 opacity-80">Email</p>
                  <p className="font-medium">{speakerInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-phone text-blue-200"></i>
                </div>
                <div>
                  <p className="text-sm text-blue-100 opacity-80">Contact</p>
                  <p className="font-medium">{speakerInfo.contact}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full">
                <i className="fab fa-linkedin text-blue-200"></i>
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full">
                <i className="fab fa-twitter text-blue-200"></i>
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full">
                <i className="fas fa-globe text-blue-200"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-200">Key References</h3>
            
            <ul className="space-y-2">
              {references.map((reference, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <i className="fas fa-book text-blue-300 mt-1 mr-2"></i>
                  <span className="text-sm">{reference}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8">
              <p className="text-xs text-blue-200 opacity-70 italic">
                This presentation is based on publicly available data from official sources.
                All statistics are derived from the Economic Survey of Pakistan 2023-24
                and other authenticated government publications.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-lg text-blue-100">
            "A vibrant IT & Telecom sector powers Pakistan's digital future"
          </p>
          
          <div className="flex justify-center mt-3">
            <span className="text-xs text-blue-300">28 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSlide;