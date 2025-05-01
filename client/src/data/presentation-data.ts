import { KeyPoint, KeyProduct } from "@/types";

export const keyPoints: KeyPoint[] = [
  {
    title: "GDP Growth",
    description: "Contributing Rs. 213 billion to the national economy with long-term growth potential.",
    icon: "fa-chart-line",
    color: "primary"
  },
  {
    title: "Youth Employment",
    description: "Currently employing over 600,000 professionals with 128,000+ jobs via NICs.",
    icon: "fa-users",
    color: "secondary"
  },
  {
    title: "Exports",
    description: "Reaching the milestone of $3.22 billion in IT exports for 2024, showing consistent growth.",
    icon: "fa-globe",
    color: "accent"
  },
  {
    title: "Innovation",
    description: "Fostering startup ecosystems and technological innovation that drive economic modernization.",
    icon: "fa-rocket",
    color: "purple-500"
  }
];

export const keyProducts: KeyProduct[] = [
  {
    title: "IT Enabled Services",
    description: "Business process outsourcing, KPO, and remote customer support services.",
    icon: "fa-headset",
    color: "primary",
    items: ["Call Centers", "Technical Support", "Data Entry & Processing"],
    marketSize: "~$500M"
  },
  {
    title: "Fintech",
    description: "Digital financial services revolutionizing Pakistan's banking landscape.",
    icon: "fa-credit-card",
    color: "secondary",
    items: ["Mobile Wallets & Payments", "Digital Banking Solutions", "Blockchain Applications"],
    marketSize: "~$400M"
  },
  {
    title: "Software Development",
    description: "Custom software solutions for local and international clients.",
    icon: "fa-code",
    color: "accent",
    items: ["Enterprise Solutions", "Mobile Applications", "Web Development"],
    marketSize: "~$1.2B"
  },
  {
    title: "Freelancing",
    description: "Independent professionals providing services to global clients.",
    icon: "fa-laptop-house",
    color: "purple-500",
    items: ["Digital Marketing", "Graphic Design", "Content Writing"],
    marketSize: "~500K Freelancers"
  },
  {
    title: "E-Commerce",
    description: "Online marketplace and retail solutions for businesses.",
    icon: "fa-shopping-cart",
    color: "green-600",
    items: ["Online Marketplaces", "Payment Gateways", "Logistics Solutions"],
    marketSize: "~$600M"
  },
  {
    title: "BPO",
    description: "Business Process Outsourcing services for global firms.",
    icon: "fa-chart-network",
    color: "pink-500",
    items: ["Back Office Operations", "HR & Recruitment Services", "Accounting & Finance"],
    marketSize: "~$300M"
  }
];
