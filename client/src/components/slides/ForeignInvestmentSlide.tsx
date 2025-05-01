import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ForeignInvestmentSlide = ({ isActive }: SlideProps) => {
  // Data from Economic Survey 2023-24
  const investmentData = [
    { year: "2019", value: 195.1 },
    { year: "2020", value: 210.7 },
    { year: "2021", value: 186.3 },
    { year: "2022", value: 202.4 },
    { year: "2023", value: 173.3 }
  ];

  const keyInvestments = [
    {
      company: "PTCL/Etisalat",
      amount: "$2.6B",
      year: "2006",
      description: "26% stake acquisition in Pakistan Telecommunication Company",
      icon: "fa-building",
      color: "blue-500"
    },
    {
      company: "Telenor",
      amount: "$1.0B+",
      year: "2004-Present",
      description: "Infrastructure, 4G networks, and digital services",
      icon: "fa-broadcast-tower",
      color: "purple-500"
    },
    {
      company: "Jazz/Veon",
      amount: "$9.0B+",
      year: "1994-Present",
      description: "Network expansion and digital financial services",
      icon: "fa-signal",
      color: "red-500"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`FY ${label}: $${payload[0].value}M`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="15"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Foreign Direct Investment
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <motion.div
            className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-3">Major Foreign Investments</h3>
            
            <div className="space-y-4">
              {keyInvestments.map((investment, i) => (
                <motion.div
                  key={investment.company}
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                >
                  <div className={`w-10 h-10 rounded-full bg-${investment.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                    <i className={`fas ${investment.icon} text-${investment.color}`}></i>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <h4 className="text-sm font-bold">{investment.company}</h4>
                      <span className="ml-2 text-xs font-medium bg-gray-100 px-1.5 py-0.5 rounded">
                        {investment.year}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{investment.amount}</p>
                    <p className="text-xs text-gray-600">{investment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium">Total Telecom FDI (1997-2023)</p>
                <p className="text-sm font-bold">US $16.9 Billion</p>
              </div>
              
              <div className="text-xs text-gray-500">
                <p className="text-right">
                  <i className="fas fa-info-circle mr-1"></i>
                  Source: Board of Investment
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="md:col-span-3 bg-white p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="font-medium text-base mb-2">Annual FDI in IT & Telecom (US$ Million)</h3>
            
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={investmentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${value}M`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    dataKey="value" 
                    name="FDI in IT & Telecom" 
                    fill="#3B82F6" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="text-xs font-bold text-blue-600 mb-1">14.1% Decrease</h4>
                <p className="text-xs">
                  FY 2022-23 compared to previous year, reflecting regional economic trends
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="text-xs font-bold text-green-600 mb-1">5% Share</h4>
                <p className="text-xs">
                  Of total FDI in Pakistan across all sectors in FY 2022-23
                </p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="text-xs font-bold text-purple-600 mb-1">$2.5B Target</h4>
                <p className="text-xs">
                  Government's 5-year FDI target for IT & telecom through 2028
                </p>
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
            Foreign investment has played a vital role in infrastructure development, providing capital for 
            advanced technology deployment and accelerating digital transformation in Pakistan's economy.
          </p>
          
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500">17 / 28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeignInvestmentSlide;