import { ProgressStatProps } from "@/types";

const ProgressStats = ({
  title,
  value,
  percentage,
  color,
  subtitle,
  growth
}: ProgressStatProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h4 className="font-medium text-gray-700">{title}</h4>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        <div className="text-right">
          <span className={`font-data font-bold text-2xl text-${color}`}>{value}</span>
          {growth && (
            <p className={`text-xs ${growth.positive ? 'text-green-500' : 'text-red-500'}`}>
              {growth.positive ? '+' : ''}{growth.value} YoY
            </p>
          )}
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressStats;
