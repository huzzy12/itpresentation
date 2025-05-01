export interface SlideProps {
  isActive: boolean;
}

export interface StatItemProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  percentage?: number;
  change?: {
    value: string | number;
    positive: boolean;
  };
  subtitle?: string;
}

export interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  position: 'left' | 'right';
}

export interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  items?: string[];
  marketSize?: string;
}

export interface ProgressStatProps {
  title: string;
  value: string | number;
  maxValue?: number;
  color: string;
  percentage: number;
  subtitle?: string;
  growth?: {
    value: string;
    positive: boolean;
  };
}

export interface ExportDataPoint {
  year: string;
  value: number;
}

export interface ChartProps {
  data: ExportDataPoint[];
}

export type GDPMetric = {
  title: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: string;
  color: string;
};

export type TelecomMetric = {
  title: string;
  subtitle: string;
  value: string;
  percentage: number;
  growth: {
    value: string;
    positive: boolean;
  };
  color: string;
};

export type KeyPoint = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type KeyProduct = {
  title: string;
  description: string;
  icon: string;
  color: string;
  items: string[];
  marketSize?: string;
};
