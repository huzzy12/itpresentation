import { GDPMetric, TelecomMetric } from "@/types";

export const gdpMetrics: GDPMetric[] = [
  {
    title: "Telecom Revenue",
    value: "Rs 735B",
    change: { value: "10.2%", positive: true },
    icon: "fa-chart-line",
    color: "primary"
  },
  {
    title: "GDP Contribution",
    value: "Rs 213B",
    change: { value: "2.1% of total GDP", positive: true },
    icon: "fa-percentage",
    color: "secondary"
  },
  {
    title: "Foreign Investment",
    value: "$173.3M",
    change: { value: "14.1%", positive: false },
    icon: "fa-arrow-down",
    color: "accent"
  },
  {
    title: "Tax Contribution",
    value: "Rs 325B",
    change: { value: "8.5%", positive: true },
    icon: "fa-chart-line",
    color: "purple-500"
  }
];

export const telecomMetrics: TelecomMetric[] = [
  {
    title: "Mobile Subscriptions",
    subtitle: "Total active SIMs",
    value: "189.4M",
    percentage: 85,
    growth: { value: "5.7%", positive: true },
    color: "primary"
  },
  {
    title: "Broadband Subscribers",
    subtitle: "Mobile + Fixed",
    value: "125.6M",
    percentage: 70,
    growth: { value: "8.1%", positive: true },
    color: "secondary"
  },
  {
    title: "Teledensity",
    subtitle: "% of population with access",
    value: "87.3%",
    percentage: 87,
    growth: { value: "3.4%", positive: true },
    color: "accent"
  },
  {
    title: "4G Coverage",
    subtitle: "% of population covered",
    value: "78.5%",
    percentage: 78,
    growth: { value: "5.2%", positive: true },
    color: "purple-500"
  }
];

export const growthCatalysts = [
  {
    text: "Digital consumer spending increased by 15.3%",
    icon: "fa-mobile-alt",
    color: "primary"
  },
  {
    text: "Digital financial transactions up 41.2% to Rs 435T",
    icon: "fa-wallet",
    color: "secondary"
  },
  {
    text: "Software exports reached $2.6B (81% of total IT exports)",
    icon: "fa-laptop-code",
    color: "accent"
  }
];
