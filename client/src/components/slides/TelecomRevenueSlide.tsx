import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const TelecomRevenueSlide = ({ isActive }: SlideProps) => {
  // Data from Finance Division (Economic Survey 2023-24)
  const revenueData = [
    { year: "2019", revenue: 450, gdpContribution: 129 },
    { year: "2020", revenue: 510, gdpContribution: 147 },
    { year: "2021", revenue: 580, gdpContribution: 167 },
    { year: "2022", revenue: 650, gdpContribution: 187 },
    { year: "2023", revenue: 695, gdpContribution: 201 },
    { year: "2024", revenue: 735, gdpContribution: 213 }
  ];

  const keyMetrics = [
    {
      title: "Telecom Revenue",
      value: "Rs 735B",
      description: "FY 2024 total sector revenue",
      icon: "fa-chart-line",
      color: "primary"
    },
    {
      title: "GDP Contribution",
      value: "Rs 213B",
      description: "Direct economic impact",
      icon: "fa-percentage",
      color: "secondary"
    },
    {
      title: "Foreign Investment",
      value: "$173.3M",
      description: "14.1% decline from previous year",
      icon: "fa-arrow-down",
      color: "red-500"
    },
    {
      title: "Tax Contribution",
      value: "Rs 325B",
      description: "8.5% year-on-year increase",
      icon: "fa-chart-line",
      color: "green-500"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-semibold mb-1">FY {label}</p>
          <p className="text-xs text-gray-600">Revenue: Rs {payload[0].value}B</p>
          <p className="text-xs text-gray-600">GDP Impact: Rs {payload[1].value}B</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="10"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-gray-50 flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Telecom Revenues & <span className="text-primary">GDP Contribution</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          FY 2024: Telecom revenues reached Rs 735B with Rs 213B GDP contribution
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Key Metrics */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  className="bg-white rounded-xl p-4 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-full bg-${metric.color}/20 flex items-center justify-center mr-3 flex-shrink-0`}>
                      <i className={`fas ${metric.icon} text-${metric.color}`}></i>
                    </div>
                    <div>
                      <h3 className="font-data font-bold text-base">{metric.title}</h3>
                      <p className={`text-xl font-data font-bold ${metric.color === 'red-500' ? 'text-red-500' : `text-${metric.color}`}`}>{metric.value}</p>
                      <p className="text-xs text-gray-600 mt-1">{metric.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Chart */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-data font-semibold text-lg mb-4">Telecom Revenue vs. GDP Impact</h3>
              
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={revenueData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" orientation="left" label={{ value: 'Billion Rupees', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" name="Revenue (Rs B)" fill="#10B981" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="left" dataKey="gdpContribution" name="GDP Impact (Rs B)" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <motion.div
                className="mt-4 pt-4 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Key Drivers:</p>
                    <p className="text-xs text-gray-600">Mobile data usage, digital payments, enterprise solutions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      <i className="fas fa-info-circle mr-1"></i>
                      Source: Finance Division
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TelecomRevenueSlide;