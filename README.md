# 🍲 NALA AI — Complete Full-Stack Solution

> **"Turn What You Have Into What You'll Love."**  
> AI-Powered Smart Pantry Scanner, Recipe Intelligence Engine & Kitchen Waste Minimizer.

---

## 🎓 College Faculty Evaluation Overview

* **Project Title**: NALA AI — Smart Pantry Scanner & Recipe Recommendation System
* **Domain**: Full-Stack Web Development, Artificial Intelligence (Computer Vision & NLP), Smart Kitchen Assistant
* **Architecture**: Decoupled Monorepo (React/Vite Frontend + Express/Node.js Backend API + SQLite/PostgreSQL Database)
* **Frontend Repository**: [nala-ai-frontend](https://github.com/janu840853/nala-ai-frontend) *(or configured college repo)*
* **Backend Repository**: [nala-ai-backend](https://github.com/janu840853/nala-ai-backend) *(or configured college repo)*
* **Complete Monorepo**: [nala-ai-complete](https://github.com/janu840853/nala-ai-complete) *(or configured college repo)*
* **Live Deployment**: Hosted on Vercel

---

## 🏛️ System Architecture

```
                    ┌─────────────────────────────────────────┐
                    │               USER CLIENT               │
                    │   React 18 + TypeScript + Tailwind CSS  │
                    │   (Vite SPA with Mobile-First UI/UX)    │
                    └────────────────────┬────────────────────┘
                                         │
                         HTTPS REST API  │  JSON / Multipart
                                         ▼
                    ┌─────────────────────────────────────────┐
                    │              BACKEND API                │
                    │      Node.js + Express 4.21 + TS        │
                    ├─────────────────────────────────────────┤
                    │  • Auth Service (JWT + Bcrypt)          │
                    │  • Multi-Tier Vision Detection          │
                    │  • Pantry Match Scoring Engine          │
                    │  • Waste Tracker & Shopping List        │
                    └───────────┬───────────────────┬─────────┘
                                │                   │
             Embedded SQLite /  │                   │  API Calls
             PostgreSQL         ▼                   ▼
                     ┌───────────────┐     ┌────────────────┐
                     │    nala.db    │     │  Google Gemini │
                     │  250+ Recipes │     │  OpenAI Vision │
                     │  Reviews, Auth│     │  Local Vision  │
                     └───────────────┘     └────────────────┘
```

---

## 📂 Repository Directory Structure

```
NALA-AI-Complete/
├── client/                     # Frontend Application (React 18 + Vite)
│   ├── public/                 # Static web assets & icons
│   ├── src/                    # Components, Pages, Contexts, Services
│   ├── .env.example            # Client environment variables
│   ├── package.json            # Frontend dependencies
│   ├── tailwind.config.js      # Custom theme styling
│   ├── vercel.json             # Vercel SPA routing
│   └── vite.config.ts          # Vite configuration & dev proxy
│
├── server/                     # Backend API Service (Express + TypeScript)
│   ├── src/
│   │   ├── database/           # SQLite schemas, seeder (250+ dishes)
│   │   ├── middleware/         # JWT Auth & error handling
│   │   ├── routes/             # Scanner, Recipes, Auth, Shopping, Admin
│   │   └── services/           # AI Vision & Recipe Scoring logic
│   ├── .env.example            # Backend environment variables
│   ├── package.json            # Backend dependencies
│   └── tsconfig.json           # Server TypeScript config
│
├── nala.db                     # Pre-seeded SQLite Database
├── package.json                # Root workspace scripts runner
├── start-nala.bat              # 1-Click offline launch script for Windows
├── setup-on-new-laptop.bat     # Dependency installer for evaluation PCs
└── .gitignore                  # Git security & exclusion rules
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
* Node.js v18.0.0 or higher
* npm v9.0.0 or higher

### 1. One-Click Automated Run (Windows)
Double-click `start-nala.bat` in the project root. It will install dependencies if missing and launch both servers simultaneously.

### 2. Manual Command Line Run
```bash
# Clone the repository
git clone https://github.com/janu840853/nala-ai-complete.git
cd nala-ai-complete

# Install dependencies across all workspaces
npm install
npm --prefix client install
npm --prefix server install

# Run both servers concurrently
npm run dev
```

* **Frontend Web App**: [http://localhost:3000](http://localhost:3000)
* **Backend API**: [http://localhost:5000](http://localhost:5000)
* **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🔑 Default Evaluation Accounts

| Role | Email | Password | Permissions |
|---|---|---|---|
| **Admin** | `admin@nala.ai` | `admin123` | Full access, analytics dashboard, review moderation |
| **User** | `chef@nala.ai` | `chef123` | Pantry scanner, recipe reviews, shopping list |
| **New User** | *(Register in app)* | *(Any 6+ chars)* | Custom user profile, dietary preferences |

---

## 🚀 Cloud Deployment Instructions

### Frontend on Vercel
1. Import the `/client` directory into Vercel.
2. Preset: **Vite**
3. Set `VITE_API_URL` to your production backend URL.
4. Deploy!

### Backend on Render / Railway
1. Import the `/server` directory into Render or Railway.
2. Build Command: `npm install && npm run build`
3. Start Command: `npm start`
4. Set `NODE_ENV=production` and `JWT_SECRET`.
