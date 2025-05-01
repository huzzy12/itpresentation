import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FutureGrowthSlide = ({ isActive }: SlideProps) => {
  // Data compiled from Planning Commission, SBP, and Finance Division projections
  const projectionData = [
    { year: '2023', exports: 3.2, direct: 0.6, freelance: 1.8 },
    { year: '2024', exports: 4.1, direct: 0.7, freelance: 2.2 },
    { year: '2025', exports: 5.3, direct: 0.78, freelance: 2.5 },
    { year: '2026', exports: 6.8, direct: 0.88, freelance: 2.9 },
    { year: '2027', exports: 8.7, direct: 1.0, freelance: 3.4 },
    { year: '2028', exports: 11.3, direct: 1.2, freelance: 4.0 }
  ];

  const growthDrivers = [
    {
      title: "Startups & Entrepreneurship",
      description: "Expanding startup ecosystem with potential for unicorns by 2028",
      metrics: "300+ incubated startups annually",
      icon: "fa-rocket",
      color: "blue-500"
    },
    {
      title: "Technology Zones",
      description: "Special Technology Zones creating clusters of innovation",
      metrics: "12+ STZs operational by 2026",
      icon: "fa-industry",
      color: "purple-500"
    },
    {
      title: "Global Capability Centers",
      description: "International companies establishing R&D and support centers",
      metrics: "25+ new GCCs by 2027",
      icon: "fa-building",
      color: "indigo-500"
    },
    {
      title: "Specialized Technology Niches",
      description: "Focus on high-value domains like AI, cloud, cybersecurity",
      metrics: "35% projected CAGR in AI services",
      icon: "fa-microchip",
      color: "teal-500"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`Year: ${label}`}</p>
          <p className="text-xs text-blue-600">{`IT Exports: $${payload[0].value}B`}</p>
          <p className="text-xs text-purple-600">{`Direct Employment: ${payload[1].value}M`}</p>
          <p className="text-xs text-green-600">{`Freelance Workforce: ${payload[2].value}M`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="21"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Growth Projections (2023-2028)
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            className="md:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">Five-Year Projections</h3>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={projectionData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="exports" 
                    name="IT Exports" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    fillOpacity={0.2} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="direct" 
                    name="Direct Employment" 
                    stroke="#8B5CF6" 
                    fill="#8B5CF6" 
                    fillOpacity={0.2} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="freelance" 
                    name="Freelance Workforce" 
                    stroke="#10B981" 
                    fill="#10B981" 
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-gray-500 mt-1 text-center">
              <i className="fas fa-info-circle mr-1"></i>
              Source: Finance Division, Planning Commission, PSEB projections
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">2028 Targets</h3>
            
            <div className="space-y-3 mt-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">IT Exports</span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">+253%</span>
                </div>
                <p className="text-xl font-bold mt-1">$11.3 Billion</p>
                <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">IT Professionals</span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-0.5 rounded">+100%</span>
                </div>
                <p className="text-xl font-bold mt-1">1.2 Million</p>
                <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Freelancers</span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">+122%</span>
                </div>
                <p className="text-xl font-bold mt-1">4 Million</p>
                <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-3">
          {growthDrivers.map((driver, i) => (
            <motion.div
              key={driver.title}
              className="bg-gray-50 p-3 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
            >
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full bg-${driver.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                  <i className={`fas ${driver.icon} text-${driver.color} text-xs`}></i>
                </div>
                <h4 className="text-sm font-bold">{driver.title}</h4>
              </div>
              
              <p className="text-xs text-gray-600 mb-2">{driver.description}</p>
              <p className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded inline-block">
                {driver.metrics}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <span className="text-xs text-gray-500">21 / 28</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureGrowthSlide;