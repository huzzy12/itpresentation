import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const GdpContributionSlide = ({ isActive }: SlideProps) => {
  // Data from Economic Survey 2023-24
  const sectorData = [
    { name: "IT & Telecom", value: 213, color: "#10B981" },
    { name: "Agriculture", value: 1150, color: "#6366F1" },
    { name: "Manufacturing", value: 1430, color: "#F59E0B" },
    { name: "Services", value: 2800, color: "#EC4899" },
    { name: "Others", value: 1670, color: "#9CA3AF" }
  ];

  const gdpMetrics = [
    {
      title: "Direct GDP Contribution",
      value: "Rs 213B",
      change: "+5.7%",
      description: "Annual contribution to national GDP",
      icon: "fa-chart-line",
      color: "green-500"
    },
    {
      title: "Growth Rate (IT)",
      value: "8.3%",
      change: "+2.1%",
      description: "Exceeding national GDP growth of 2.4%",
      icon: "fa-tachometer-alt",
      color: "blue-500"
    },
    {
      title: "IT Services Percentage",
      value: "0.8%",
      change: "+0.2%",
      description: "Of total GDP in FY 2023-24",
      icon: "fa-percentage",
      color: "purple-500"
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${payload[0].name}: Rs ${payload[0].value}B`}</p>
          <p className="text-xs text-gray-600">{`${(payload[0].value / 7263 * 100).toFixed(1)}% of GDP`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="14"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Contribution to National GDP
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {gdpMetrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              className="bg-gray-50 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="flex items-start">
                <div className={`w-10 h-10 rounded-full bg-${metric.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                  <i className={`fas ${metric.icon} text-${metric.color}`}></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold">{metric.title}</h3>
                  <div className="flex items-baseline">
                    <p className="text-xl font-bold text-gray-800">{metric.value}</p>
                    <p className="ml-2 text-xs font-medium text-green-600">
                      {metric.change}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-2">Sector Comparison (Rs Billion)</h3>
            
            <div className="flex-1 h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-3">Key Economic Impacts</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded text-green-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Fastest Growing Sector</p>
                  <p className="text-xs text-gray-600">8.3% annual growth rate compared to national average of 2.4%</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Tax Contribution</p>
                  <p className="text-xs text-gray-600">Rs 325B in direct and indirect taxes (FY 2023-24)</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-purple-100 p-1 rounded text-purple-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Secondary Benefits</p>
                  <p className="text-xs text-gray-600">Additional Rs 158B impact through supporting industries</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded text-yellow-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Growth Potential</p>
                  <p className="text-xs text-gray-600">Projected to reach 1.5% of GDP by 2027 (Rs 400B+)</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                <i className="fas fa-info-circle mr-1"></i>
                Source: Finance Division, Pakistan Economic Survey 2023-24
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">16 / 28</span>
        </div>
      </div>
    </section>
  );
};

export default GdpContributionSlide;