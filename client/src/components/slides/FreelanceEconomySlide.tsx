import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FreelanceEconomySlide = ({ isActive }: SlideProps) => {
  // Data from Business Recorder and ILO
  const remittanceData = [
    { month: "Jul'23", value: 34 },
    { month: "Aug'23", value: 36 },
    { month: "Sep'23", value: 33 },
    { month: "Oct'23", value: 37 },
    { month: "Nov'23", value: 38 },
    { month: "Dec'23", value: 41 },
    { month: "Jan'24", value: 43 },
    { month: "Feb'24", value: 42 },
    { month: "Mar'24", value: 46 }
  ];

  // Create total from the array
  const totalRemittances = remittanceData.reduce((acc, curr) => acc + curr.value, 0);

  const keyStats = [
    {
      title: "Freelance Remittances",
      value: `US $${totalRemittances}M`,
      description: "Jul 2023-Mar 2024 period",
      icon: "fa-money-bill-wave",
      color: "green-600"
    },
    {
      title: "Global Ranking",
      value: "#2",
      description: "Global supplier of digital labor (ILO)",
      icon: "fa-trophy",
      color: "yellow-600"
    },
    {
      title: "Active Freelancers",
      value: "500,000+",
      description: "Registered on global platforms",
      icon: "fa-users",
      color: "primary"
    },
    {
      title: "Revenue Growth",
      value: "41%",
      description: "Year-on-year increase",
      icon: "fa-chart-line",
      color: "secondary"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${label}: $${payload[0].value}M`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="12"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Freelance Economy & <span className="text-primary">Remittances</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pakistan ranked #2 global supplier of digital labor with growing remittances
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {keyStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="bg-white rounded-xl p-4 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-full bg-${stat.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                      <i className={`fas ${stat.icon} text-${stat.color}`}></i>
                    </div>
                    <div>
                      <h3 className="font-data font-bold text-base">{stat.title}</h3>
                      <p className={`text-xl font-data font-bold text-${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-gray-600 mt-1">{stat.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="font-data font-semibold text-base mb-3">Top Freelancing Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Software Development</span>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">34%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Creative & Design</span>
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded">22%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Digital Marketing</span>
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Writing & Translation</span>
                    <span className="text-xs font-medium bg-purple-600/10 text-purple-600 px-2 py-0.5 rounded">14%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Other Categories</span>
                    <span className="text-xs font-medium bg-gray-200 text-gray-600 px-2 py-0.5 rounded">12%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Chart */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-lg mb-4">Monthly Freelance Remittance Inflows</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={remittanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `$${value}M`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      name="Remittances (US$ Million)" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6, strokeWidth: 1, stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <motion.div
                className="mt-6 pt-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-sm text-gray-700">
                  <strong>Key Insight:</strong> Pakistan experienced record-breaking freelance remittances in March 2024, reaching US $46 million, highlighting accelerating growth in the digital gig economy.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <i className="fas fa-info-circle mr-1"></i>
                  Source: Business Recorder and State Bank of Pakistan
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceEconomySlide;