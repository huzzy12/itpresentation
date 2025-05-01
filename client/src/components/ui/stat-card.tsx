import { StatItemProps } from "@/types";

const StatCard = ({
  title,
  value,
  change,
  icon,
  color
}: StatItemProps) => {
  return (
    <div className={`bg-gray-50 rounded-xl p-6 shadow-md border-b-4 border-${color} transform transition-all hover:scale-105`}>
      <p className="text-gray-500 text-sm uppercase tracking-wider">{title}</p>
      <h3 className={`font-data font-bold text-4xl mt-2 text-${color}`}>{value}</h3>
      {change && (
        <div className="mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <i className={`fas fa-${change.positive ? 'chart-line text-green-500' : 'arrow-down text-red-500'} mr-2`}></i>
            <span>{change.positive ? '' : '-'}{change.value} {change.positive ? 'increase' : 'decrease'} from 2023</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
