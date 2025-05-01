import { motion } from "framer-motion";
import { SlideProps } from "@/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DeregulationSlide = ({ isActive }: SlideProps) => {
  // Data from PTA telecom indicators
  const subscriberData = [
    { year: 2001, subscribers: 0.3 },
    { year: 2003, subscribers: 2.4 },
    { year: 2006, subscribers: 22 },
    { year: 2009, subscribers: 60 },
    { year: 2012, subscribers: 95 },
    { year: 2015, subscribers: 125 },
    { year: 2018, subscribers: 160 }
  ];

  const keyEvents = [
    {
      year: "2003",
      event: "Deregulation Policy opens market to competition",
      icon: "fa-unlock"
    },
    {
      year: "2006",
      event: "Etisalat buys 26% PTCL stake for $2.6 billion",
      icon: "fa-handshake"
    },
    {
      year: "2007",
      event: "Pakistan Telecommunication (Re-Organization) Act amended",
      icon: "fa-file-alt"
    },
    {
      year: "2008",
      event: "LDI and LL licenses issued to new operators",
      icon: "fa-id-card"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="text-sm font-medium">{`${label}: ${payload[0].value}M subscribers`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      data-slide="5"
      className={`slide ${isActive ? 'active' : ''} absolute inset-0 bg-white flex flex-col justify-center items-center text-gray-900 p-8`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-4xl text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          2001–2010: <span className="text-secondary">Deregulation & Mobile Boom</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Key Events */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-xl mb-4 text-secondary">Key Developments</h3>
              
              <div className="space-y-4">
                {keyEvents.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                    </div>
                    <div>
                      <p className="font-data font-bold text-base">{item.year}</p>
                      <p className="text-sm text-gray-600">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-6 bg-white rounded-lg p-3 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-xs text-gray-600">
                  <i className="fas fa-info-circle text-secondary mr-1"></i>
                  Source: Finance Asia (PTCL sale), Ministry of Interior (Telecom Acts)
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Mobile Growth Chart */}
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-xl p-6 shadow-md h-full">
              <h3 className="font-data font-semibold text-xl mb-4 text-secondary">Mobile Subscribers Growth</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={subscriberData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
                    <XAxis dataKey="year" tick={{fontSize: 12}} />
                    <YAxis tickFormatter={(value) => `${value}M`} tick={{fontSize: 12}} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{fontSize: '10px'}} />
                    <Line 
                      type="monotone" 
                      dataKey="subscribers" 
                      name="Mobile Subscribers (Millions)" 
                      stroke="#7C3AED" 
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <motion.div
                className="mt-4 bg-white rounded-lg p-3 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Mobile subscribers:</p>
                    <p className="text-xs text-gray-600">2001: ~0.3M → 2018: ~160M</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">Source: Pakistan Telecommunication Authority (PTA)</p>
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

export default DeregulationSlide;