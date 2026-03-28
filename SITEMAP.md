# Vitto — Sitemap & Information Architecture

## Strategic Overview

Every page in the Vitto site serves a specific conversion purpose for a defined audience segment.
The architecture follows a **progressive disclosure pattern**: homepage establishes credibility → 
platform pages demonstrate technical depth → conversion pages capture intent.

---

## Page Map

### 1. Homepage (`/`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Establish Vitto as an AI-native lending infrastructure platform. Differentiate from retrofitted vendors. Create urgency around the limitations of current BFSI technology stacks. |
| **Primary Audience** | CTOs, Heads of Credit, Digital Transformation Leaders evaluating lending technology vendors |
| **Conversion Goal** | Book a demo (primary), Explore platform pages (secondary) |
| **Key Sections** | Hero with positioning statement → Problem framing (4 cards) → Solution approach → AI Module overview (6 cards) → Business impact metrics → Social proof → CTA banner |

---

### 2. AI-First Platform (`/platform`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Provide deep technical detail on all 6 AI modules. Demonstrate that Vitto's ML capabilities are embedded in the core architecture, not superficial add-ons. This is the page that convinces technical evaluators. |
| **Primary Audience** | CTOs, Chief Risk Officers, Engineering leads conducting vendor due diligence |
| **Conversion Goal** | Book a technical demo, continue to Agentic AI or Collections deep-dives |
| **Key Sections** | 6 module breakdowns (Data Assessment, ML Model, Rule Engine, Fraud, Collections, Agentic AI) → LLM vs SLM comparison → RAG pipeline architecture → 3 Agent descriptions |

---

### 3. Full Stack Automation (`/automation`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Show that Vitto covers the entire lending lifecycle — not just origination or just collections. Position as a single-vendor replacement for fragmented tooling. |
| **Primary Audience** | CTOs evaluating build-vs-buy, Operations heads managing multiple vendor integrations |
| **Conversion Goal** | Request architecture review, explore API documentation |
| **Key Sections** | 5 layers (Acquisition → Underwriting & LOS → Collections → LMS → CRM & Communications), each with 3-5 submodules |

---

### 4. Collections Intelligence (`/collections`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Dedicated landing page for institutions whose primary pain point is collections efficiency. Demonstrates predictive approach vs. reactive DPD-based workflows. |
| **Primary Audience** | Chief Risk Officers, Heads of Collections, NPA management teams |
| **Conversion Goal** | Book a collections-specific demo |
| **Key Sections** | 4-step process (Predict → Segment → Orchestrate → Measure) → 6 detailed capability cards |

---

### 5. Agentic AI (`/agentic-ai`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Address the "why not just use ChatGPT?" question directly. Explain domain-trained SLMs, RAG architecture, and why compliance requires purpose-built agents. |
| **Primary Audience** | CTOs, Innovation teams, compliance officers evaluating AI adoption |
| **Conversion Goal** | Book an agentic AI demo |
| **Key Sections** | Why generic LLMs fail → Vitto's agent architecture → RAG pipeline → 3 agents (Borrower, Field, Underwriter) with detailed capabilities |

---

### 6. API Infrastructure (`/api`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Attract integrators, embedded finance providers, and technical teams who want to build on top of Vitto's primitives. Signal developer-first thinking. |
| **Primary Audience** | Engineering teams, technical product managers, integration architects |
| **Conversion Goal** | Sign up for sandbox API keys, contact engineering team |
| **Key Sections** | Design principles (JSON-first, versioned, idempotent) → Core endpoints listing → Quick-start code example |

---

### 7. About / Why Vitto (`/about`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Build trust through transparency. Explain the origin story and engineering philosophy. Show that the team understands BFSI from the inside. |
| **Primary Audience** | Decision-makers doing final vendor evaluation, anyone asking "who are these people?" |
| **Conversion Goal** | Schedule a conversation |
| **Key Sections** | Origin story → 4 core beliefs → Target segments (Banks, NBFCs, MFIs) |

---

### 8. Contact / Request Demo (`/contact`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Primary conversion page. Capture qualified leads with enough context to prepare a relevant demo. Not a generic "contact us" — structured for enterprise sales. |
| **Primary Audience** | All decision-makers ready to evaluate |
| **Conversion Goal** | Submit demo request form |
| **Key Sections** | Context panel (Technical Deep-Dive, Product Mapping, Sandbox Access) → Structured form (name, email, company, role, institution type, use case) |

---

### 9. Self Sign-Up (`/signup`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | Product-led growth entry point. Allow technical users to create sandbox accounts without going through sales. Captures developer-persona leads. |
| **Primary Audience** | Engineers, technical product managers, integration teams |
| **Conversion Goal** | Create sandbox account → explore API docs |
| **Key Sections** | 2-step form with progress indicator → Success state with API docs redirect |

---

### 10. Insights — Thought Leadership (`/insights/retrofit-vs-native`)

| Attribute | Detail |
|-----------|--------|
| **Strategic Purpose** | SEO and credibility content. Positions Vitto's engineering team as domain experts. Provides shareable content for CTO-level audiences. Can be distributed via LinkedIn, newsletters, and outbound sales. |
| **Primary Audience** | CTOs, VPs of Engineering, risk leaders evaluating AI strategy |
| **Conversion Goal** | Build trust, drive to demo request |
| **Key Sections** | 700-word article: Retrofit approach (3 structural problems) → AI-native alternative → Why it matters now → CTA |

---

## Conversion Flow

```
                    ┌─────────────┐
                    │  Homepage   │
                    └──────┬──────┘
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
     ┌──────────┐   ┌───────────┐   ┌──────────┐
     │ Platform │   │Automation │   │ Insights │
     └────┬─────┘   └─────┬─────┘   └────┬─────┘
          │               │              │
     ┌────┴────┐          │              │
     ▼         ▼          │              │
┌─────────┐ ┌──────┐     │              │
│Agentic  │ │Colln │     │              │
│   AI    │ │Intel │     │              │
└────┬────┘ └──┬───┘     │              │
     │         │          │              │
     └────┬────┘──────────┘──────────────┘
          ▼
   ┌─────────────┐     ┌──────────┐
   │ Contact /   │◄───►│ Sign Up  │
   │ Book Demo   │     │ (Self)   │
   └─────────────┘     └──────────┘
```
