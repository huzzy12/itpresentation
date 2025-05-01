import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Seed export data
    await db.insert(schema.exportData).values([
      { year: "2015", value: 0.8 },
      { year: "2016", value: 0.9 },
      { year: "2017", value: 1.1 },
      { year: "2018", value: 1.4 },
      { year: "2019", value: 1.7 },
      { year: "2020", value: 2.1 },
      { year: "2021", value: 2.3 },
      { year: "2022", value: 2.6 },
      { year: "2023", value: 2.9 },
      { year: "2024", value: 3.22 }
    ]).onConflictDoNothing();

    // Seed employment stats
    await db.insert(schema.employmentStats).values([
      {
        title: "IT Professionals",
        value: "600,000+",
        percentage: 80,
        subtitle: "Formally employed in IT & Telecom sector",
        color: "primary"
      },
      {
        title: "Jobs via NICs",
        value: "128,000+",
        percentage: 40,
        subtitle: "Created through National Incubation Centers",
        color: "secondary"
      },
      {
        title: "Freelancers",
        value: "500,000+",
        percentage: 70,
        subtitle: "Independent workers on global platforms",
        color: "accent"
      },
      {
        title: "Women in Tech",
        value: "15%",
        percentage: 15,
        subtitle: "Percentage of women in IT workforce",
        color: "purple-500"
      }
    ]).onConflictDoNothing();

    // Seed geographic distribution
    await db.insert(schema.geoDistribution).values([
      { name: "Karachi", percentage: 30, color: "primary" },
      { name: "Lahore", percentage: 28, color: "secondary" },
      { name: "Islamabad", percentage: 25, color: "accent" },
      { name: "Others", percentage: 17, color: "purple-500" }
    ]).onConflictDoNothing();

    // Seed skill distribution
    await db.insert(schema.skillDistribution).values([
      { name: "Web Development", percentage: 85, color: "primary" },
      { name: "Mobile Apps", percentage: 75, color: "secondary" },
      { name: "AI/ML", percentage: 60, color: "accent" },
      { name: "DevOps", percentage: 55, color: "purple-500" },
      { name: "Blockchain", percentage: 40, color: "pink-500" }
    ]).onConflictDoNothing();

    // Seed GDP metrics
    await db.insert(schema.gdpMetrics).values([
      {
        title: "Telecom Revenue",
        value: "Rs 735B",
        changeValue: "10.2%",
        changePositive: true,
        icon: "fa-chart-line",
        color: "primary"
      },
      {
        title: "GDP Contribution",
        value: "Rs 213B",
        changeValue: "2.1% of total GDP",
        changePositive: true,
        icon: "fa-percentage",
        color: "secondary"
      },
      {
        title: "Foreign Investment",
        value: "$173.3M",
        changeValue: "14.1%",
        changePositive: false,
        icon: "fa-arrow-down",
        color: "accent"
      },
      {
        title: "Tax Contribution",
        value: "Rs 325B",
        changeValue: "8.5%",
        changePositive: true,
        icon: "fa-chart-line",
        color: "purple-500"
      }
    ]).onConflictDoNothing();

    // Seed telecom metrics
    await db.insert(schema.telecomMetrics).values([
      {
        title: "Mobile Subscriptions",
        subtitle: "Total active SIMs",
        value: "189.4M",
        percentage: 85,
        growthValue: "5.7%",
        growthPositive: true,
        color: "primary"
      },
      {
        title: "Broadband Subscribers",
        subtitle: "Mobile + Fixed",
        value: "125.6M",
        percentage: 70,
        growthValue: "8.1%",
        growthPositive: true,
        color: "secondary"
      },
      {
        title: "Teledensity",
        subtitle: "% of population with access",
        value: "87.3%",
        percentage: 87,
        growthValue: "3.4%",
        growthPositive: true,
        color: "accent"
      },
      {
        title: "4G Coverage",
        subtitle: "% of population covered",
        value: "78.5%",
        percentage: 78,
        growthValue: "5.2%",
        growthPositive: true,
        color: "purple-500"
      }
    ]).onConflictDoNothing();

    // Seed growth catalysts
    await db.insert(schema.growthCatalysts).values([
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
    ]).onConflictDoNothing();

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
