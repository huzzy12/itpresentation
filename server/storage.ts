import { db } from "@db";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  async getSlides() {
    try {
      const slides = await db.query.slides.findMany({
        orderBy: schema.slides.order
      });
      return slides;
    } catch (error) {
      console.error("Error fetching slides:", error);
      throw error;
    }
  },

  async getExportData() {
    try {
      const exportData = await db.query.exportData.findMany({
        orderBy: schema.exportData.year
      });
      return exportData;
    } catch (error) {
      console.error("Error fetching export data:", error);
      throw error;
    }
  },

  async getEmploymentStats() {
    try {
      const employmentStats = await db.query.employmentStats.findMany();
      const geoDistribution = await db.query.geoDistribution.findMany();
      const skillDistribution = await db.query.skillDistribution.findMany({
        orderBy: schema.skillDistribution.percentage,
        direction: "desc"
      });

      return {
        employmentStats,
        geoDistribution,
        skillDistribution
      };
    } catch (error) {
      console.error("Error fetching employment statistics:", error);
      throw error;
    }
  },

  async getGdpTelecomMetrics() {
    try {
      const gdpMetrics = await db.query.gdpMetrics.findMany();
      const telecomMetrics = await db.query.telecomMetrics.findMany();
      const growthCatalysts = await db.query.growthCatalysts.findMany();

      return {
        gdpMetrics,
        telecomMetrics,
        growthCatalysts
      };
    } catch (error) {
      console.error("Error fetching GDP and telecom metrics:", error);
      throw error;
    }
  },
};
