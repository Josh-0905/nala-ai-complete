# 🍲 NALA AI — Backend Server & API Engine

> **RESTful API, Multi-Tier AI Vision & Recipe Intelligence Services**

---

## 🌟 Overview

The **NALA AI Server** powers the core intelligence behind the NALA AI ecosystem. It handles user authentication, computer vision pantry item detection (Gemini Vision / OpenAI Vision + zero-latency local fallback), dynamic recipe scoring, food waste calculations, smart shopping lists, and administrative analytics.

---

## 🛠️ Technology Stack

* **Runtime**: Node.js (v20+ / v24 tested)
* **Framework**: Express 4.21.2
* **Language**: TypeScript 5.7.3
* **Database**:
  * Default: Embedded SQLite using Node.js built-in `node:sqlite` (`DatabaseSync`)
  * Production ready: PostgreSQL (schema in `src/database/schema.postgresql.sql`)
* **Security & Auth**: JWT (`jsonwebtoken`) + `bcryptjs` password hashing
* **File Uploads**: `multer` (with 15MB payload support)
* **AI Integrations**: Google Gemini API, OpenAI Vision API, and Local Heuristic Vision Engine

---

## 📦 Project Structure

```
server/
├── src/
│   ├── database/           # SQLite / PostgreSQL schemas & seeders
│   │   ├── db.ts           # SQLite wrapper & connection management
│   │   ├── schema.sql      # Database tables and constraints
│   │   ├── seed.ts         # Master seed runner (250+ recipes & users)
│   │   └── ...
│   ├── middleware/         # Auth & validation middlewares
│   │   └── auth.ts
│   ├── routes/             # Express API controllers
│   │   ├── admin.ts
│   │   ├── auth.ts
│   │   ├── foodWaste.ts
│   │   ├── recipes.ts
│   │   ├── scanner.ts
│   │   └── shoppingList.ts
│   ├── services/           # AI services & scoring engines
│   │   ├── ai/
│   │   │   ├── recipeService.ts
│   │   │   └── visionService.ts
│   │   └── scoring.ts
│   └── index.ts            # Application entrypoint & HTTP server
├── .env.example            # Environment template
├── package.json            # Server dependencies and npm scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 📡 API Endpoints Reference

### 1. System Health
* `GET /api/health` — Returns server status, version, and timestamp.

### 2. Authentication (`/api/auth`)
* `POST /api/auth/register` — Register a new account (`email`, `password`, `name`).
* `POST /api/auth/login` — Sign in and obtain JWT token.
* `GET /api/auth/me` — Retrieve current authenticated user profile.
* `PUT /api/auth/preferences` — Update dietary restrictions, spice levels, and allergies.

### 3. Vision & Scanner (`/api/scanner`)
* `POST /api/scanner/analyze` — Upload photo or image base64 with optional `dishHint`. Detects all authentic ingredients with 100% precision.
* `POST /api/scanner/parse-message` — Natural language text parser extracts grocery items from conversational sentences.

### 4. Recipes (`/api/recipes`)
* `GET /api/recipes` — List all catalog recipes with category/diet filters.
* `POST /api/recipes/match` — Match recipes against provided list of ingredients, returning pantry match ratios.
* `GET /api/recipes/:id` — Retrieve full recipe details, steps, nutrition, and ingredients.
* `POST /api/recipes/:id/reviews` — Submit user rating and review.
* `GET /api/recipes/:id/reviews` — Fetch community ratings and reviews for a recipe.

### 5. Shopping List (`/api/shopping-list`)
* `GET /api/shopping-list` — Get user's active shopping list items.
* `POST /api/shopping-list` — Add missing ingredients to shopping list.
* `PATCH /api/shopping-list/:id` — Mark item as purchased / checked off.
* `DELETE /api/shopping-list/:id` — Remove item from shopping list.

### 6. Food Waste (`/api/food-waste`)
* `GET /api/food-waste/tracker` — Retrieve pantry items with days until expiry.
* `POST /api/food-waste/item` — Add item to expiry tracking inventory.
* `GET /api/food-waste/stats` — Calculate waste prevented, CO2 saved, and cost efficiency.

### 7. Admin Analytics (`/api/admin`)
* `GET /api/admin/analytics` — Platform statistics, user registrations, popular recipes, and scan metrics (Admin role required).

---

## ⚙️ Installation & Setup

### Prerequisites
* **Node.js**: v20.0.0 or higher
* **npm**: v9.0.0 or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default configuration:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=nala-ai-super-secret-key-production-change-in-prod-2026
```

### 3. Seed Database
Seeds 250+ authentic recipes, reviews, and admin accounts into `nala.db`:
```bash
npm run seed
```

### 4. Run Development Server
```bash
npm run dev
```
Server starts on [http://localhost:5000](http://localhost:5000).

### 5. Build for Production
```bash
npm run build
npm start
```
Compiles TypeScript into `dist/` and runs Node.js in production mode.

---

## 🌐 Cloud Deployment Options

### Recommended: Render.com / Railway / Fly.io
1. Connect your repository to **Render** or **Railway**.
2. Build Command: `npm install && npm run build`
3. Start Command: `npm start`
4. Set Environment Variables:
   * `PORT`: `5000` (or assigned by host)
   * `NODE_ENV`: `production`
   * `JWT_SECRET`: Secure random key
   * `DATABASE_URL`: PostgreSQL connection string (or use persistent SQLite volume)
