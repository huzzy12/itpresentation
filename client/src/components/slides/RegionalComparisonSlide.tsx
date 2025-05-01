import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RegionalComparisonSlide = ({ isActive }: SlideProps) => {
  // Data from World Bank, IT industry reports
  const exportData = [
    { country: "India", exports: 196 },
    { country: "Philippines", exports: 29 },
    { country: "Sri Lanka", exports: 1.7 },
    { country: "Pakistan", exports: 3.2 },
    { country: "Bangladesh", exports: 1.3 },
    { country: "Vietnam", exports: 12.5 }
  ];
  
  const growthData = [
    { country: "India", growth: 12.1 },
    { country: "Philippines", growth: 10.8 },
    { country: "Sri Lanka", growth: 8.2 },
    { country: "Pakistan", growth: 24.4 },
    { country: "Bangladesh", growth: 13.5 },
    { country: "Vietnam", growth: 15.2 }
  ];

  const comparisons = [
    {
      metric: "Market Size (IT)",
      data: [
        { country: "Pakistan", value: "$6.5B", color: "primary" },
        { country: "India", value: "$227B", color: "gray-500" },
        { country: "Philippines", value: "$30B", color: "gray-500" }
      ]
    },
    {
      metric: "IT Professionals",
      data: [
        { country: "Pakistan", value: "600K", color: "primary" },
        { country: "India", value: "5.4M", color: "gray-500" },
        { country: "Philippines", value: "1.3M", color: "gray-500" }
      ]
    },
    {
      metric: "Hourly Rates (Avg)",
      data: [
        { country: "Pakistan", value: "$25-35", color: "primary" },
        { country: "India", value: "$30-50", color: "gray-500" },
        { country: "Philippines", value: "$23-40", color: "gray-500" }
      ]
    },
    {
      metric: "Digital Readiness",
      data: [
        { country: "Pakistan", value: "51/100", color: "primary" },
        { country: "India", value: "65/100", color: "gray-500" },
        { country: "Vietnam", value: "62/100", color: "gray-500" }
      ]
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${label}`}</p>
          <p className="text-xs text-blue-600">{`IT Exports: $${payload[0].value}B`}</p>
        </div>
      );
    }
    return null;
  };

  const GrowthCustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${label}`}</p>
          <p className="text-xs text-green-600">{`YoY Growth: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="25"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Regional Comparison
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">IT Exports (US$ Billion, 2023)</h3>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={exportData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                  <XAxis type="number" tickFormatter={(value) => `$${value}B`} />
                  <YAxis type="category" dataKey="country" width={70} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="exports" 
                    name="IT Exports" 
                    fill="#94A3B8"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-gray-500 mt-1 text-center">
              <i className="fas fa-info-circle mr-1"></i>
              Source: World Bank, NASSCOM, PSEB, IBPAP
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">YoY Growth Rate (%, 2023)</h3>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={growthData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis type="category" dataKey="country" width={70} />
                  <Tooltip content={<GrowthCustomTooltip />} />
                  <Bar 
                    dataKey="growth" 
                    name="YoY Growth" 
                    fill="#10B981"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-gray-500 mt-1 text-center">
              <i className="fas fa-info-circle mr-1"></i>
              Source: Statista, World Bank, Finance Division
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-center text-base font-bold mb-3">Comparative Metrics</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {comparisons.map((comparison, i) => (
              <motion.div
                key={comparison.metric}
                className="bg-white p-3 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
              >
                <h4 className="text-sm font-bold text-center mb-2">{comparison.metric}</h4>
                
                <div className="space-y-1">
                  {comparison.data.map((item, j) => (
                    <div key={item.country} className="flex justify-between items-center">
                      <p className="text-xs">{item.country}</p>
                      <p className={`text-xs font-medium ${item.color === 'primary' ? 'text-primary font-bold' : 'text-gray-700'}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-4 p-3 bg-blue-50 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <p className="text-xs text-blue-800">
            <span className="font-medium">Key Takeaway:</span> Pakistan shows highest growth rate in the region despite smaller base,
            indicating strong potential to capture larger market share through strategic investments
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">25 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalComparisonSlide;