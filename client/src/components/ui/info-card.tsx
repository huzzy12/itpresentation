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
    <div className={`bg-gray-50 rounded-xl p-4 shadow-md border-t-4 border-${color} transform transition-all hover:scale-105`}>
      <div className="flex items-center mb-2">
        <div className={`bg-${color}/10 p-2 rounded-full mr-2`}>
          <i className={`fas ${icon} text-${color} text-sm`}></i>
        </div>
        <h3 className="font-data font-semibold text-base">{title}</h3>
      </div>
      <p className="text-gray-600 text-xs mb-2">{description}</p>
      
      {items && items.length > 0 && (
        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <i className={`fas fa-check-circle text-${color} mr-1 text-xs`}></i>
              <p className="text-gray-600 text-xs">{item}</p>
            </div>
          ))}
        </div>
      )}
      
      {marketSize && (
        <div className="mt-2 text-right">
          <span className="text-xs font-medium text-gray-500">Market Size: {marketSize}</span>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
