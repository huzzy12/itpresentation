import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const EmploymentImpactSlide = ({ isActive }: SlideProps) => {
  const employmentStats = [
    {
      title: "IT Professionals",
      value: "600,000+",
      detail: "English-speaking IT/BPO professionals",
      icon: "fa-laptop-code",
      color: "primary"
    },
    {
      title: "Startups Incubated",
      value: "1,480+",
      detail: "Through various incubation programs",
      icon: "fa-seedling",
      color: "green-600"
    },
    {
      title: "Jobs Created",
      value: "128,000+",
      detail: "Through National Incubation Centers",
      icon: "fa-briefcase",
      color: "secondary"
    }
  ];

  const skillClusters = [
    { 
      name: "Software Development", 
      percentage: 35,
      skills: ["Web Development", "Mobile Apps", "Enterprise Solutions"]
    },
    { 
      name: "Digital Services", 
      percentage: 25,
      skills: ["BPO", "Customer Support", "Virtual Assistance"]
    },
    { 
      name: "Design & Creative", 
      percentage: 15,
      skills: ["UI/UX", "Graphic Design", "Animation"]
    },
    { 
      name: "Technical Specialties", 
      percentage: 25,
      skills: ["AI/ML", "Data Science", "Cybersecurity", "Blockchain"]
    }
  ];

  const regions = [
    { name: "Karachi", percentage: 30, color: "primary" },
    { name: "Lahore", percentage: 28, color: "secondary" },
    { name: "Islamabad", percentage: 25, color: "accent" },
    { name: "Other Cities", percentage: 17, color: "gray-500" }
  ];

  return (
    <section
      data-slide="11"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Employment <span className="text-primary">Impact</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {employmentStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-gray-50 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className={`w-14 h-14 rounded-full bg-${stat.color}/20 flex items-center justify-center mb-4`}>
                <i className={`fas ${stat.icon} text-${stat.color} text-xl`}></i>
              </div>
              <h3 className="font-data text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="font-data font-semibold text-lg mb-1">{stat.title}</p>
              <p className="text-sm text-gray-600">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Skill Distribution */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="font-data font-semibold text-lg mb-4">Skill Distribution</h3>
            
            <div className="space-y-4">
              {skillClusters.map((cluster, index) => (
                <motion.div 
                  key={cluster.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">{cluster.name}</p>
                    <p className="text-sm font-semibold">{cluster.percentage}%</p>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${cluster.percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {cluster.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Regional Distribution */}
          <motion.div
            className="bg-gray-50 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="font-data font-semibold text-lg mb-4">Geographic Distribution</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative pt-5">
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">IT Workforce</p>
                      <p className="font-data font-bold text-xl">600K+</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-36">
                  {regions.map((region, index) => (
                    <motion.div 
                      key={region.name}
                      className="mb-2 last:mb-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                    >
                      <div className={`h-3 w-3 rounded-full bg-${region.color} inline-block mr-2`}></div>
                      <span className="text-sm">{region.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <motion.div 
                    key={region.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{region.name}</p>
                      <p className="text-sm font-semibold">{region.percentage}%</p>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className={`bg-${region.color} h-2 rounded-full`} 
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  className="mt-6 pt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-xs text-gray-500">
                    <i className="fas fa-info-circle mr-1"></i>
                    Source: Finance Division, Pakistan Economic Survey
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentImpactSlide;