import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Route for slide data
  app.get('/api/slides', async (req, res) => {
    try {
      const slides = await storage.getSlides();
      res.json(slides);
    } catch (error) {
      console.error('Error fetching slides:', error);
      res.status(500).json({ error: 'Failed to fetch slides' });
    }
  });

  // API Route for export data
  app.get('/api/export-data', async (req, res) => {
    try {
      const exportData = await storage.getExportData();
      res.json(exportData);
    } catch (error) {
      console.error('Error fetching export data:', error);
      res.status(500).json({ error: 'Failed to fetch export data' });
    }
  });

  // API Route for employment statistics
  app.get('/api/employment-stats', async (req, res) => {
    try {
      const employmentStats = await storage.getEmploymentStats();
      res.json(employmentStats);
    } catch (error) {
      console.error('Error fetching employment statistics:', error);
      res.status(500).json({ error: 'Failed to fetch employment statistics' });
    }
  });

  // API Route for GDP and telecom metrics
  app.get('/api/gdp-telecom-metrics', async (req, res) => {
    try {
      const metrics = await storage.getGdpTelecomMetrics();
      res.json(metrics);
    } catch (error) {
      console.error('Error fetching GDP and telecom metrics:', error);
      res.status(500).json({ error: 'Failed to fetch GDP and telecom metrics' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
