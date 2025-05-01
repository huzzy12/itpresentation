import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const NewEmploymentImpactSlide = ({ isActive }: SlideProps) => {
  const employmentStats = [
    {
      title: "IT Professionals",
      value: "600,000+",
      description: "English-speaking IT/BPO professionals",
      icon: "fa-laptop-code",
      color: "primary"
    },
    {
      title: "Startups Incubated",
      value: "1,480+",
      description: "Through various incubation programs",
      icon: "fa-seedling",
      color: "green-500"
    },
    {
      title: "Jobs Created",
      value: "128,000+",
      description: "Through National Incubation Centers",
      icon: "fa-briefcase",
      color: "blue-500"
    }
  ];
  
  const skillDistribution = [
    { name: "Software Development", percentage: 35 },
    { name: "Digital Services", percentage: 25 },
    { name: "Design & Creative", percentage: 15 },
    { name: "Technical Specialties", percentage: 25 }
  ];
  
  const geoDistribution = [
    { name: "Karachi", percentage: 30 },
    { name: "Lahore", percentage: 28 },
    { name: "Islamabad", percentage: 25 },
    { name: "Other Cities", percentage: 17 }
  ];
  
  const skillSubcategories = {
    "Software Development": ["Web Development", "Mobile Apps", "Enterprise Solutions"],
    "Digital Services": ["BPO", "Customer Support", "Virtual Assistance"],
    "Design & Creative": ["UI/UX", "Graphic Design", "Animation"],
    "Technical Specialties": ["AI/ML", "Data Science", "Cybersecurity", "Blockchain"]
  };

  return (
    <section
      data-slide="11"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Employment Impact
        </motion.h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {employmentStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="flex justify-center mb-2">
                <div className={`w-12 h-12 rounded-full bg-${stat.color}/20 flex items-center justify-center`}>
                  <i className={`fas ${stat.icon} text-${stat.color}`}></i>
                </div>
              </div>
              <h3 className="text-center text-2xl font-bold">{stat.value}</h3>
              <p className="text-center font-medium text-sm">{stat.title}</p>
              <p className="text-center text-xs text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Distribution Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skills Distribution */}
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-3">Skill Distribution</h3>
            
            <div className="space-y-3">
              {skillDistribution.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skillSubcategories[skill.name as keyof typeof skillSubcategories]?.map((subcat, j) => (
                      <span 
                        key={j}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                      >
                        {subcat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Geographic Distribution */}
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-3">Geographic Distribution</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Circle Visualization */}
              <div className="relative flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">IT Workforce</p>
                    <p className="font-bold text-xl">600K+</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-1">
                  {geoDistribution.map((region, i) => (
                    <div key={region.name} className="flex items-center">
                      <div className={`h-3 w-3 rounded-full ${
                        region.name === "Karachi" ? "bg-green-500" :
                        region.name === "Lahore" ? "bg-blue-500" :
                        region.name === "Islamabad" ? "bg-yellow-500" :
                        "bg-gray-500"
                      } mr-2`}></div>
                      <span className="text-xs">{region.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Percentage Bars */}
              <div className="space-y-3">
                {geoDistribution.map((region, i) => (
                  <div key={region.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{region.name}</span>
                      <span className="text-sm font-medium">{region.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className={`${
                          region.name === "Karachi" ? "bg-green-500" :
                          region.name === "Lahore" ? "bg-blue-500" :
                          region.name === "Islamabad" ? "bg-yellow-500" :
                          "bg-gray-500"
                        } h-2 rounded-full`}
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <i className="fas fa-info-circle mr-1"></i>
                    Source: Finance Division, Pakistan Economic Survey
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">8 / 10</span>
        </div>
      </div>
    </section>
  );
};

export default NewEmploymentImpactSlide;