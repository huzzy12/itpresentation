import { InfoCardProps } from "@/types";

const InfoCard = ({
  title,
  description,
  icon,
  color,
  items,
  marketSize
}: InfoCardProps) => {
  return (
    <div className={`bg-gray-50 rounded-xl p-6 shadow-md border-t-4 border-${color} transform transition-all hover:scale-105`}>
      <div className="flex items-center mb-4">
        <div className={`bg-${color}/10 p-3 rounded-full mr-3`}>
          <i className={`fas ${icon} text-${color} text-xl`}></i>
        </div>
        <h3 className="font-data font-semibold text-xl">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {items && items.length > 0 && (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <i className={`fas fa-check-circle text-${color} mr-2`}></i>
              <p className="text-gray-600 text-sm">{item}</p>
            </div>
          ))}
        </div>
      )}
      
      {marketSize && (
        <div className="mt-4 text-right">
          <span className="text-xs font-medium text-gray-500">Market Size: {marketSize}</span>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
