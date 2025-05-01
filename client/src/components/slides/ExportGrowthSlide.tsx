import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { exportData } from "@/data/export-data";

const ExportGrowthSlide = ({ isActive }: SlideProps) => {
  const chartData = exportData.map(item => ({
    year: item.year,
    value: item.value
  }));

  const milestones = [
    {
      title: "Key Milestone",
      content: "2024: Reached historic $3.22 billion in IT & ITeS exports, marking a 33% year-on-year increase.",
      color: "primary"
    },
    {
      title: "Growth Factors",
      content: "Government incentives, increasing global demand for digital services, and a growing skilled workforce.",
      color: "secondary"
    },
    {
      title: "Export Composition",
      content: "Software development (45%), ITeS (30%), freelancing (15%), and emerging niches (10%).",
      color: "accent"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${label}: $${payload[0].value}B`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="7"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Export Growth <span className="text-primary">(2015–2024)</span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pakistan's IT & Telecom export trajectory shows consistent upward growth
        </motion.p>
        
        <motion.div
          className="bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${value}B`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  name="IT & ITeS Exports ($ Billion)" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  fill="#10B981"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className={`bg-white rounded-lg p-4 shadow-sm border-l-4 border-${milestone.color}`}
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <h3 className={`font-data font-semibold text-${milestone.color}`}>{milestone.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{milestone.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500">
            <i className="fas fa-info-circle mr-1"></i> Note: The actual export figures are likely higher as many transactions occur through informal channels not captured in official statistics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportGrowthSlide;
