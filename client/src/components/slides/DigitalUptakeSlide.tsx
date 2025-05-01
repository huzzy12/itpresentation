import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DigitalUptakeSlide = ({ isActive }: SlideProps) => {
  // Data from PTA, SBP, and other authenticated sources
  const digitalAdoptionData = [
    { year: '2018', users: 32, transactions: 3.4 },
    { year: '2019', users: 41, transactions: 8.2 },
    { year: '2020', users: 52, transactions: 21.7 },
    { year: '2021', users: 65, transactions: 37.5 },
    { year: '2022', users: 79, transactions: 63.8 },
    { year: '2023', users: 92, transactions: 94.1 }
  ];

  const platformData = [
    { name: "Mobile Apps", value: 67, color: "#3B82F6" },
    { name: "Internet Banking", value: 22, color: "#10B981" },
    { name: "USSD/SMS", value: 7, color: "#8B5CF6" },
    { name: "Others", value: 4, color: "#94A3B8" }
  ];

  const digitalServices = [
    {
      title: "Digital Payments",
      growth: "+43.2%",
      value: "PKR 94.1T",
      description: "Annual digital transaction value (FY 2022-23)",
      icon: "fa-credit-card",
      color: "blue-500"
    },
    {
      title: "E-commerce",
      growth: "+36.5%",
      value: "PKR 1.2T",
      description: "Annual e-commerce sales in Pakistan (2023)",
      icon: "fa-shopping-cart",
      color: "green-500"
    },
    {
      title: "Digital Banking",
      growth: "+57.2%",
      value: "92M",
      description: "Digital banking accounts in Pakistan",
      icon: "fa-university",
      color: "purple-500"
    },
    {
      title: "Digital Identity",
      growth: "+28.4%",
      value: "165M",
      description: "NADRA digital identities issued (biometric)",
      icon: "fa-id-card",
      color: "indigo-500"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`Year: ${label}`}</p>
          <p className="text-xs text-blue-600">{`Digital Accounts: ${payload[0].value}M users`}</p>
          <p className="text-xs text-green-600">{`Transactions: PKR ${payload[1].value}T`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="26"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-4`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Digital Services Uptake
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            className="md:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">Digital Adoption & Transactions</h3>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={digitalAdoptionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Users (M)', angle: -90, position: 'insideLeft', offset: -5 }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Transactions (PKR T)', angle: 90, position: 'insideRight', offset: 5 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="users" 
                    name="Digital Accounts" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="transactions" 
                    name="Transaction Value" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-gray-500 mt-1 text-center">
              <i className="fas fa-info-circle mr-1"></i>
              Source: State Bank of Pakistan, PTA
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-base mb-2">Platform Distribution</h3>
            
            <div className="h-48 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-2 rounded-lg mt-2">
              <p className="text-xs text-gray-700 text-center">
                <span className="font-medium">Key Insight:</span> Mobile app dominance reflects smartphone-first digital adoption pattern
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {digitalServices.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 p-3 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full bg-${service.color}/20 flex items-center justify-center mr-2 flex-shrink-0`}>
                    <i className={`fas ${service.icon} text-${service.color} text-xs`}></i>
                  </div>
                  <h4 className="text-sm font-bold">{service.title}</h4>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  {service.growth}
                </span>
              </div>
              
              <p className="text-xl font-bold text-center mb-1">{service.value}</p>
              <p className="text-xs text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">26 / 28</span>
        </div>
      </div>
    </section>
  );
};

export default DigitalUptakeSlide;