# Vitto — Assignment Write-Up

**Candidate:** [Your Name]  
**Role:** Full Stack Intern  
**Date:** March 28, 2026

---

## What I Built

A complete, production-deployed AI-native credit infrastructure website for Vitto — covering all six deliverables:

- **10-page frontend** (React + Vite + Tailwind CSS) with a navy (#1A1A2E) and red (#D32F2F) design system, responsive layouts, scroll animations, and glassmorphism UI components
- **RESTful backend** (Node.js + Express) with JWT authentication, Joi input validation, PostgreSQL for lead storage, and MongoDB for OTP session management with TTL auto-expiry
- **3-step sign-up flow** with OTP verification (send → verify → submit org details), loading states on all API calls, and graceful error handling
- **Deployed live**: Frontend on Vercel, backend on Render, PostgreSQL on Render, MongoDB on Atlas

**Live URLs:**
- Frontend: https://vitto-eight.vercel.app
- Backend: https://vitto-api-brwp.onrender.com
- GitHub: https://github.com/adrianYT028/vitto

---

## Design Decisions

**Dark navy + red palette.** The color scheme signals institutional credibility while the red accent creates visual hierarchy for CTAs and important elements. This is the standard aesthetic for enterprise fintech products targeting CTOs and CROs — it needs to feel serious, not playful.

**Component-driven architecture.** Every homepage section (Hero, Problem, Solution, AI Modules, Business Impact, Social Proof, CTA) is a standalone React component. This makes the codebase maintainable and allows sections to be reordered or reused across pages without refactoring.

**Animated dashboard mockup instead of a static image.** The hero section includes a live React component that renders a dashboard with stats, a mini chart, and a connection indicator. This demonstrates the product's interface without requiring actual screenshot assets and is more engaging than a placeholder image.

**DATABASE_URL pattern for PostgreSQL.** Instead of hardcoding individual connection params, the backend checks for a `DATABASE_URL` environment variable first (which Render provides), then falls back to individual `PG_HOST`/`PG_PORT` vars for local development. This is the industry-standard approach for cloud-native deployments.

**MongoDB made optional.** The backend starts gracefully without MongoDB — OTP endpoints return 503 with a clear message, while the leads API works independently. This makes the system resilient and easier to set up for reviewers who may not have MongoDB installed locally.

**Copy and tone.** Every page is written from the perspective of someone who understands the BFSI lending lifecycle. Terms like "DPD-based triggers," "champion-challenger model deployment," "feature attribution," and "bureau pull" are used intentionally — they signal domain familiarity to the target audience (CTOs, CROs). No generic "unleash the power of AI" language appears anywhere.

---

## Most Challenging Part

**The Agentic AI content architecture.** Writing technically credible copy about why domain-trained SLMs outperform generic LLMs in regulated lending required understanding the actual constraints: hallucination risk in credit decisioning, the need for policy-grounded responses, audit trail requirements, and why RAG pipelines need a retrieval layer trained on credit policy documents — not general web data.

The solution was to structure the content around a concrete comparison (LLM vs SLM table), a named pipeline (Ingest → Retrieve → Generate → Validate), and three specific agent personas with enumerated capabilities. This gives the page technical depth without becoming a research paper.

---

## What I Would Do Differently

**With more time, I would build a visual lending lifecycle diagram.** An interactive SVG or React-rendered flowchart showing the path from lead acquisition → KYC → underwriting → disbursement → servicing → collections, with AI intervention nodes highlighted at each decision point. This would be the single most impactful visual asset for communicating Vitto's full-stack value proposition to a CTO evaluating vendor coverage.

I would also add end-to-end integration tests for the sign-up flow using Playwright, and implement proper email-based OTP delivery through a provider like MSG91 or AWS SES instead of the current console-based mock.

---

*This document accompanies the full codebase at https://github.com/adrianYT028/vitto*
