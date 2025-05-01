import { motion } from "framer-motion";
import { SlideProps } from "@/types";

const CompetitiveAdvantagesSlide = ({ isActive }: SlideProps) => {
  const advantages = [
    {
      title: "Skilled Workforce",
      description: "Growing pool of English-proficient IT professionals with diverse technical skills",
      icon: "fa-users",
      color: "blue-500",
      stats: [
        { label: "IT Graduates/Year", value: "25,000+" },
        { label: "English Proficiency", value: "EF EPI Rank 16 in Asia" },
        { label: "IT Certification Rate", value: "+18% YoY" }
      ]
    },
    {
      title: "Cost Advantage",
      description: "Competitive labor and operational costs compared to regional competitors",
      icon: "fa-hand-holding-usd",
      color: "green-500",
      stats: [
        { label: "Developer Cost Saving", value: "70-80% vs Western" },
        { label: "Office Space", value: "60-70% Lower Cost" },
        { label: "Operational Expense", value: "PKR 45-65/sqft" }
      ]
    },
    {
      title: "Government Incentives",
      description: "Special policies and financial incentives to boost IT exports and growth",
      icon: "fa-university",
      color: "purple-500",
      stats: [
        { label: "Tax Exemption", value: "Through 2025" },
        { label: "USD Retention", value: "35% of Exports" },
        { label: "STZs", value: "10-year Tax Holiday" }
      ]
    },
    {
      title: "Geographic Advantage",
      description: "Strategic location bridging time zones between East and West",
      icon: "fa-globe-asia",
      color: "yellow-600",
      stats: [
        { label: "Overlap with Europe", value: "4-5 Hours" },
        { label: "Overlap with US East", value: "3-4 Hours" },
        { label: "Flight to Gulf", value: "2-3 Hours" }
      ]
    }
  ];

  return (
    <section
      data-slide="18"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Competitive Advantages
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage.title}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
            >
              <div className="flex items-start mb-3">
                <div className={`w-10 h-10 rounded-full bg-${advantage.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                  <i className={`fas ${advantage.icon} text-${advantage.color}`}></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold">{advantage.title}</h3>
                  <p className="text-xs text-gray-600">{advantage.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3">
                <div className="grid grid-cols-1 gap-2">
                  {advantage.stats.map((stat, j) => (
                    <motion.div
                      key={stat.label}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) + (j * 0.05) }}
                    >
                      <p className="text-xs text-gray-600">{stat.label}</p>
                      <p className="text-xs font-medium">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="bg-blue-50 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <i className="fas fa-trophy text-blue-500 mr-2"></i>
              <h4 className="text-sm font-bold text-blue-700">Rankings</h4>
            </div>
            <p className="text-xs text-gray-700 mb-1">
              #2 in global freelancer supply (Oxford Internet Institute)
            </p>
            <p className="text-xs text-gray-700 mb-1">
              #4 in growth momentum for IT services (Kearney)
            </p>
            <p className="text-xs text-gray-700">
              Top 3 in software developer growth rate (TOSCA)
            </p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <i className="fas fa-comments-dollar text-green-500 mr-2"></i>
              <h4 className="text-sm font-bold text-green-700">Cost Comparison</h4>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <p className="text-xs font-bold">Pakistan</p>
                <p className="text-xs">$25-35/h</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold">India</p>
                <p className="text-xs">$30-50/h</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold">US/EU</p>
                <p className="text-xs">$100-150/h</p>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">
              Average hourly development rates (Enterprise)
            </p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <i className="fas fa-rocket text-purple-500 mr-2"></i>
              <h4 className="text-sm font-bold text-purple-700">Growth Enablers</h4>
            </div>
            <ul className="space-y-1">
              <li className="flex items-center">
                <i className="fas fa-check text-xs text-purple-500 mr-1.5"></i>
                <p className="text-xs">Improving cybersecurity frameworks</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-xs text-purple-500 mr-1.5"></i>
                <p className="text-xs">Growing venture capital interest</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-xs text-purple-500 mr-1.5"></i>
                <p className="text-xs">Increasing global tech company presence</p>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">20 / 28</span>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantagesSlide;