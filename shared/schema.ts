import { pgTable, text, serial, integer, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Base user table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Presentation slides
export const slides = pgTable("slides", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(),
  content: text("content"),
  order: integer("order").notNull(),
  isActive: boolean("is_active").default(true),
});

export const insertSlideSchema = createInsertSchema(slides);
export type InsertSlide = z.infer<typeof insertSlideSchema>;
export type Slide = typeof slides.$inferSelect;

// Export data for charts
export const exportData = pgTable("export_data", {
  id: serial("id").primaryKey(),
  year: text("year").notNull(),
  value: decimal("value", { precision: 10, scale: 2 }).notNull(),
});

export const insertExportDataSchema = createInsertSchema(exportData);
export type InsertExportData = z.infer<typeof insertExportDataSchema>;
export type ExportData = typeof exportData.$inferSelect;

// Employment statistics
export const employmentStats = pgTable("employment_stats", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  value: text("value").notNull(),
  percentage: integer("percentage").notNull(),
  subtitle: text("subtitle"),
  color: text("color").notNull(),
});

export const insertEmploymentStatsSchema = createInsertSchema(employmentStats);
export type InsertEmploymentStats = z.infer<typeof insertEmploymentStatsSchema>;
export type EmploymentStats = typeof employmentStats.$inferSelect;

// Geographic distribution
export const geoDistribution = pgTable("geo_distribution", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: integer("percentage").notNull(),
  color: text("color").notNull(),
});

export const insertGeoDistributionSchema = createInsertSchema(geoDistribution);
export type InsertGeoDistribution = z.infer<typeof insertGeoDistributionSchema>;
export type GeoDistribution = typeof geoDistribution.$inferSelect;

// Skill distribution
export const skillDistribution = pgTable("skill_distribution", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: integer("percentage").notNull(),
  color: text("color").notNull(),
});

export const insertSkillDistributionSchema = createInsertSchema(skillDistribution);
export type InsertSkillDistribution = z.infer<typeof insertSkillDistributionSchema>;
export type SkillDistribution = typeof skillDistribution.$inferSelect;

// GDP and telecom metrics
export const gdpMetrics = pgTable("gdp_metrics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  value: text("value").notNull(),
  changeValue: text("change_value").notNull(),
  changePositive: boolean("change_positive").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const insertGdpMetricsSchema = createInsertSchema(gdpMetrics);
export type InsertGdpMetrics = z.infer<typeof insertGdpMetricsSchema>;
export type GdpMetrics = typeof gdpMetrics.$inferSelect;

// Telecom metrics
export const telecomMetrics = pgTable("telecom_metrics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  value: text("value").notNull(),
  percentage: integer("percentage").notNull(),
  growthValue: text("growth_value").notNull(),
  growthPositive: boolean("growth_positive").notNull(),
  color: text("color").notNull(),
});

export const insertTelecomMetricsSchema = createInsertSchema(telecomMetrics);
export type InsertTelecomMetrics = z.infer<typeof insertTelecomMetricsSchema>;
export type TelecomMetrics = typeof telecomMetrics.$inferSelect;

// Growth catalysts
export const growthCatalysts = pgTable("growth_catalysts", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const insertGrowthCatalystsSchema = createInsertSchema(growthCatalysts);
export type InsertGrowthCatalysts = z.infer<typeof insertGrowthCatalystsSchema>;
export type GrowthCatalysts = typeof growthCatalysts.$inferSelect;
