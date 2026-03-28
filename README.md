# Vitto — AI-Native Digital Credit Infrastructure

> AI-native infrastructure for banks, NBFCs, and microfinance institutions. Full-stack lending automation powered by ML decisioning and agentic AI.

**"A traditional LOS is a transaction system. Vitto is a decisioning system."**

## Live URLs

- **Frontend:** [Deployed URL Placeholder]
- **Backend:** [Deployed URL Placeholder]
- **API Health Check:** [Backend URL]/api/health

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite) + Tailwind CSS |
| Backend | Node.js + Express |
| Primary DB | PostgreSQL (leads storage) |
| Session/Cache DB | MongoDB (OTP sessions with TTL) |
| Auth | JWT-based session handling |
| Deployment | Vercel (frontend) + Render (backend) |

## Setup & Run Locally

### Prerequisites
- Node.js 18+
- PostgreSQL (pgAdmin)
- MongoDB (local or [MongoDB Atlas](https://cloud.mongodb.com) free tier)

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/vitto.git
cd vitto

# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 2. Configure Environment

```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
```

**Required environment variables:**
| Variable | Description |
|----------|------------|
| `PG_HOST` | PostgreSQL host (default: localhost) |
| `PG_PORT` | PostgreSQL port (default: 5432) |
| `PG_DATABASE` | Database name |
| `PG_USER` | Database user |
| `PG_PASSWORD` | Database password |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |

### 3. Create Database

Create a database in pgAdmin. The `leads` table is automatically created on server startup.

### 4. Run

```bash
# Terminal 1: Backend
cd backend && npm run dev
# → http://localhost:5000

# Terminal 2: Frontend
cd frontend && npm run dev
# → http://localhost:5173
```

## Database Schema

### PostgreSQL — `leads` table
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  institution_name VARCHAR(255) NOT NULL,
  institution_type VARCHAR(50), -- 'bank', 'nbfc', 'mfi'
  city VARCHAR(100),
  loan_book_size VARCHAR(50),
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### MongoDB — `otpsessions` collection
```js
{
  phone: String,        // indexed
  otp: String,          // bcrypt hashed
  attempts: Number,     // max 3
  verified: Boolean,
  createdAt: Date       // TTL: expires after 10 minutes
}
```

## API Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/health` | No | Health check |
| POST | `/api/auth/send-otp` | No | Send OTP to phone number |
| POST | `/api/auth/verify-otp` | No | Verify OTP, returns JWT |
| POST | `/api/leads` | JWT | Create lead record |
| GET | `/api/leads/:id` | JWT | Retrieve lead by ID |

> See [API_TESTING.md](./API_TESTING.md) for curl commands and example request/response payloads.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, problem framing, solution, AI modules, impact metrics, social proof |
| `/platform` | AI-First Platform | 6 AI modules + LLM vs SLM comparison + RAG pipeline |
| `/automation` | Full Stack Automation | 5 layers (A-E) with 3-5 submodules each |
| `/collections` | Collections Intelligence | Predictive recovery workflow |
| `/agentic-ai` | Agentic AI | 3 agents: Borrower, Field, Underwriter |
| `/api` | API Infrastructure | Endpoints + code example |
| `/about` | About Vitto | Origin, beliefs, target segments |
| `/contact` | Request Demo | Demo request form |
| `/signup` | Self Sign-Up | 3-step flow: OTP → org details → confirmation |
| `/insights/retrofit-vs-native` | Insights | Thought leadership article |

## Project Structure

```
vitto/
├── frontend/              # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/    # Navbar, Footer, homepage sections
│   │   ├── pages/         # All route-level pages
│   │   ├── App.jsx        # Router + layout
│   │   └── index.css      # Tailwind + custom styles
│   └── package.json
│
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── config/        # DB connections, environment
│   │   ├── controllers/   # Auth + leads logic
│   │   ├── middleware/     # JWT auth, Joi validation
│   │   ├── models/        # Mongoose OTP model
│   │   ├── routes/        # Express route definitions
│   │   └── utils/         # JWT + OTP helpers
│   ├── server.js
│   └── .env.example
│
├── SITEMAP.md             # Strategic sitemap
├── API_TESTING.md         # curl commands for all endpoints
└── README.md              # This file
```
