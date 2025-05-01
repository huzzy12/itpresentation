import { ProgressStatProps } from "@/types";

export const employmentStats: ProgressStatProps[] = [
  {
    title: "IT Professionals",
    value: "600,000+",
    percentage: 80,
    color: "primary",
    subtitle: "Formally employed in IT & Telecom sector"
  },
  {
    title: "Jobs via NICs",
    value: "128,000+",
    percentage: 40,
    color: "secondary",
    subtitle: "Created through National Incubation Centers"
  },
  {
    title: "Freelancers",
    value: "500,000+",
    percentage: 70,
    color: "accent",
    subtitle: "Independent workers on global platforms"
  },
  {
    title: "Women in Tech",
    value: "15%",
    percentage: 15,
    color: "purple-500",
    subtitle: "Percentage of women in IT workforce"
  }
];

export const geoDistribution = [
  { name: "Karachi", percentage: 30, color: "primary" },
  { name: "Lahore", percentage: 28, color: "secondary" },
  { name: "Islamabad", percentage: 25, color: "accent" },
  { name: "Others", percentage: 17, color: "purple-500" }
];

export const skillDistribution = [
  { name: "Web Development", percentage: 85, color: "primary" },
  { name: "Mobile Apps", percentage: 75, color: "secondary" },
  { name: "AI/ML", percentage: 60, color: "accent" },
  { name: "DevOps", percentage: 55, color: "purple-500" },
  { name: "Blockchain", percentage: 40, color: "pink-500" }
];
