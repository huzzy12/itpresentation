import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExportsGrowthSlide = ({ isActive }: SlideProps) => {
  // Data from Finance Division (Economic Survey 2023-24)
  const exportData = [
    { year: "2019", value: 1.19 },
    { year: "2020", value: 1.44 },
    { year: "2021", value: 1.87 },
    { year: "2022", value: 2.62 },
    { year: "2023", value: 2.97 },
    { year: "2024", value: 3.22 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`FY ${label}: $${payload[0].value.toFixed(2)}B`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="9"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Software & ITeS <span className="text-primary">Exports Growth</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          IT exports hit <strong>US $3.22B</strong> in FY 2023-24, showing 27% year-on-year growth
        </motion.p>
        
        <motion.div
          className="bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={exportData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Fiscal Year', position: 'insideBottom', offset: -5 }} />
                <YAxis 
                  label={{ value: 'US$ Billion', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="value" name="IT & ITeS Exports" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <motion.div
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary">
              <h3 className="font-data font-bold text-sm text-primary mb-1">Growth Factors</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-primary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Global demand for digital services</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-primary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Competitive rates & talent quality</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-primary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Government export incentives</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-secondary">
              <h3 className="font-data font-bold text-sm text-secondary mb-1">Export Composition</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-secondary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Software development (45%)</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-secondary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">IT Enabled Services (30%)</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-secondary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Freelancing (15%)</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-secondary mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Emerging niches (10%)</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-accent">
              <h3 className="font-data font-bold text-sm text-accent mb-1">Recent Highlights</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-accent mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">27% year-on-year growth in FY 2023-24</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-accent mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Mar 2024: $306M (↑36% YoY)</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-xs text-accent mt-1 mr-1"></i>
                  <p className="text-xs text-gray-600">Feb→Mar: ↑19% month-on-month</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-4 pt-4 border-t border-gray-200 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xs text-gray-500">
              <i className="fas fa-info-circle mr-1"></i>
              Source: Finance Division, Pakistan Economic Survey 2023-24
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportsGrowthSlide;