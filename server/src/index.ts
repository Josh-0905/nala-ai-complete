import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { initDatabase } from './database/db.js';
import { seedDatabase } from './database/seed.js';

import authRoutes from './routes/auth.js';
import scannerRoutes from './routes/scanner.js';
import recipeRoutes from './routes/recipes.js';
import shoppingListRoutes from './routes/shoppingList.js';
import foodWasteRoutes from './routes/foodWaste.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Enable CORS
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsers
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    appName: 'NALA AI Backend',
    tagline: 'Turn What You Have Into What You’ll Love.',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/scanner', scannerRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/shopping-list', shoppingListRoutes);
app.use('/api/food-waste', foodWasteRoutes);
app.use('/api/admin', adminRoutes);

// Static Client Serving (Production Unified Build)
const clientDistPath = path.resolve(process.cwd(), '../client/dist');
const clientDistLocal = path.resolve(process.cwd(), 'client/dist');
const effectiveClientDist = fs.existsSync(clientDistPath)
  ? clientDistPath
  : fs.existsSync(clientDistLocal)
  ? clientDistLocal
  : null;

if (effectiveClientDist) {
  app.use(express.static(effectiveClientDist));
  // Standard middleware without path pattern avoids path-to-regexp v8 PathError
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(effectiveClientDist, 'index.html'));
    }
    next();
  });
  console.log('✓ Serving unified client frontend from', effectiveClientDist);
}

// Polished 404 Handler for unhandled requests
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: 'The requested resource does not exist on NALA AI API.',
  });
});

// Centralized Error Handler (Section 29: User-friendly error formatting)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    error: 'NALA is taking a quick break. Please try again.',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Initialize database & start server
try {
  initDatabase();
  seedDatabase();

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`
=====================================================
🍽️  NALA AI is LIVE on:
🌐  Unified App: http://localhost:${PORT}
📡  Health Check: http://localhost:${PORT}/api/health
🌿  Tagline: "Turn What You Have Into What You’ll Love."
=====================================================
    `);
  });
} catch (error) {
  console.error('Fatal initialization error:', error);
  process.exit(1);
}

export default app;
