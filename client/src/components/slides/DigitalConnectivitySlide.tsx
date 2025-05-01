import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const DigitalConnectivitySlide = ({ isActive }: SlideProps) => {
  // Data from PTA Annual Report and Economic Survey 2023-24
  const connectivityData = [
    { year: '2019', broadband: 78, mobile: 161 },
    { year: '2020', broadband: 85, mobile: 167 },
    { year: '2021', broadband: 93, mobile: 173 },
    { year: '2022', broadband: 102, mobile: 180 },
    { year: '2023', broadband: 109, mobile: 186 },
    { year: '2024', broadband: 115, mobile: 191 }
  ];

  const infrastructureStats = [
    {
      title: "Mobile Subscribers",
      value: "191M",
      penetration: "86.5%",
      growth: "+2.7%",
      icon: "fa-mobile-alt",
      color: "blue-500"
    },
    {
      title: "Broadband Users",
      value: "115M",
      penetration: "52.2%",
      growth: "+5.5%",
      icon: "fa-wifi",
      color: "green-500"
    },
    {
      title: "Fiber Coverage",
      value: "167,000 km",
      penetration: "~48%",
      growth: "+4.3%",
      icon: "fa-network-wired",
      color: "purple-500"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`Year: ${label}`}</p>
          <p className="text-xs text-blue-600">{`Mobile: ${payload[0].value}M subscribers`}</p>
          <p className="text-xs text-green-600">{`Broadband: ${payload[1].value}M users`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="17"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Digital Connectivity
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {infrastructureStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="bg-white p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <div className="flex items-start">
                <div className={`w-10 h-10 rounded-full bg-${stat.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                  <i className={`fas ${stat.icon} text-${stat.color}`}></i>
                </div>
                <div>
                  <h3 className="text-sm font-bold">{stat.title}</h3>
                  <div className="flex items-baseline">
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                    <p className="ml-2 text-xs font-medium text-green-600">
                      {stat.growth}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Penetration: {stat.penetration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-2">Connectivity Growth (Millions)</h3>
            
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={connectivityData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="mobile" 
                    name="Mobile Subscribers" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="broadband" 
                    name="Broadband Users" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="font-medium text-base mb-3">Infrastructure Highlights</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">4G/5G Networks</p>
                  <p className="text-xs text-gray-600">4G coverage in over 75% of districts; 5G trials underway</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded text-green-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Universal Service Fund</p>
                  <p className="text-xs text-gray-600">Rs 31B+ invested in rural connectivity since 2007</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-purple-100 p-1 rounded text-purple-600 mr-2 mt-0.5">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Data Center Growth</p>
                  <p className="text-xs text-gray-600">7 major data centers, 3 new facilities planned for 2024-25</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-medium">Telecom Investment (FY23)</p>
                  <p className="text-sm font-bold">US $633 Million</p>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>
                    <i className="fas fa-info-circle mr-1"></i>
                    Source: PTA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-4 bg-white p-3 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <p className="text-xs text-gray-700">
            The expanded digital infrastructure has been crucial for Pakistan's IT sector growth, 
            enabling remote work capabilities and supporting the rising digital economy.
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">19 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalConnectivitySlide;