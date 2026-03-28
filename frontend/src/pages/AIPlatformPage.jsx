import { Link } from 'react-router-dom'
import {
  BarChart3, Brain, Settings2, ShieldAlert, PhoneCall, Bot,
  ArrowRight, Database, Cpu, FileSearch, Zap, Network,
  UserCheck, Briefcase, Shield, MessageSquare
} from 'lucide-react'

const modules = [
  {
    id: 'data-assessment',
    icon: BarChart3,
    iconColor: 'text-blue-400',
    bg: 'bg-blue-500/10',
    title: 'Data-Based Assessment',
    subtitle: 'Multi-Source Risk Profiling',
    description: 'Every credit decision starts with data ingestion. Vitto aggregates and normalizes inputs from credit bureaus (CIBIL, Experian, CRIF), bank statement analyzers, GST returns, ITR data, device telemetry, and alternative data sources into a unified applicant profile.',
    capabilities: [
      'Automated bank statement parsing with income, expense, and obligation extraction',
      'Bureau data normalization across CIBIL, Experian, and CRIF formats',
      'GST and ITR cross-referencing for business income verification',
      'Device and behavioral signal aggregation for thin-file borrowers',
      'Configurable data quality scoring and missing-field imputation',
    ],
    technical: 'The aggregation layer uses schema-mapped ETL pipelines with field-level validation. Data from each source is versioned and stored in a canonical format, enabling consistent feature engineering regardless of provider API changes.',
  },
  {
    id: 'ml-model',
    icon: Brain,
    iconColor: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'ML Model',
    subtitle: 'BFSI-Specific Scoring Infrastructure',
    description: 'Vitto\'s ML layer goes beyond generic credit scores. It provides a managed model lifecycle — training, validation, deployment, monitoring, and retraining — purpose-built for lending use cases.',
    capabilities: [
      'Gradient-boosted models (XGBoost, LightGBM) for structured credit data',
      'Neural models for unstructured data: OCR outputs, text signals, behavioral sequences',
      'Champion-challenger deployment with automatic traffic splitting',
      'Model monitoring dashboards: PSI, KS, Gini, feature drift detection',
      'Automated retraining pipelines triggered by performance degradation',
    ],
    technical: 'Models are trained on institution-specific data — not generic datasets. Feature stores maintain versioned, point-in-time correct feature sets to prevent data leakage. Every prediction is logged with full feature vectors for auditability.',
  },
  {
    id: 'rule-engine',
    icon: Settings2,
    iconColor: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'Rule Engine & Decisioning',
    subtitle: 'Hybrid Policy + ML Decisioning',
    description: 'Credit policy can\'t be pure ML or pure rules — it needs both. Vitto\'s decisioning layer lets risk teams define policy rules that interact with model outputs in a structured, auditable workflow.',
    capabilities: [
      'Visual rule builder for non-technical policy teams',
      'Waterfall, scorecard, and multi-model ensemble strategies',
      'Policy versioning with rollback and A/B testing support',
      'Pre-bureau, post-bureau, and post-model rule stages',
      'Auto-approve, auto-reject, and manual review routing',
    ],
    technical: 'Rules execute in a deterministic order with short-circuit evaluation. Each decision produces a structured output: action, score, reason codes, and the complete rule trace — enabling full regulatory explainability.',
  },
  {
    id: 'fraud',
    icon: ShieldAlert,
    iconColor: 'text-rose-400',
    bg: 'bg-rose-500/10',
    title: 'Fraud Intelligence',
    subtitle: 'Application and Transaction-Level Detection',
    description: 'Fraud in lending is different from payments fraud. It involves manufactured identities, synthetic documents, repeat application patterns, and agent collusion. Vitto\'s fraud layer is designed specifically for this threat landscape.',
    capabilities: [
      'Device fingerprinting and emulator detection',
      'Velocity checks: application frequency, document reuse, IP clustering',
      'Network graph analysis for identifying application rings',
      'Document tampering detection via OCR inconsistency scoring',
      'Configurable alert thresholds with precision-recall tradeoff controls',
    ],
    technical: 'Fraud features are computed in real-time during the application flow, not in batch. The system maintains a rolling 90-day graph of applicant connections. Alerts include full evidence chains for investigation teams.',
  },
  {
    id: 'collections',
    icon: PhoneCall,
    iconColor: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Collection Intelligence',
    subtitle: 'Predictive Recovery Workflows',
    description: 'Traditional collections operate on DPD buckets — 0-30, 30-60, 60-90. Vitto predicts delinquency risk before the borrower misses a payment and optimizes the recovery strategy for each individual.',
    capabilities: [
      'Pre-delinquency scoring using income patterns, repayment history, and external signals',
      'Dynamic allocation: assign borrowers to the optimal recovery channel (SMS, call, field, legal)',
      'Contact timing optimization based on historical response patterns',
      'Disposition tracking with outcome-linked performance metrics',
      'Settlement and restructuring recommendation engine',
    ],
    technical: 'The collection model retrains monthly on resolution outcomes. It outputs a probability of self-cure, optimal channel, and recommended contact window. Field assignment uses a constraint-optimization solver to balance portfolio coverage with agent capacity.',
  },
  {
    id: 'agentic-ai',
    icon: Bot,
    iconColor: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Agentic AI Layer',
    subtitle: 'Domain-Specific AI Agents for BFSI',
    description: 'Generic large language models are not suitable for regulated financial environments. They hallucinate, they lack domain context, and they can\'t provide the audit trail that compliance demands. Vitto uses domain-trained small language models (SLMs) through a retrieval-augmented generation (RAG) architecture designed for BFSI.',
    capabilities: [
      'RAG pipeline with institution-specific policy documents, product guidelines, and regulatory rules',
      'Domain-trained SLM — not a wrapper around GPT — with controlled output schemas',
      'Full audit trail: every agent response logs source documents, confidence scores, and reasoning chains',
      'Guardrails for hallucination detection, regulatory boundary enforcement, and escalation triggers',
    ],
    technical: 'The RAG pipeline indexes policy documents, product manuals, RBI circulars, and historical decision records into a vector store with chunk-level metadata. At inference time, the SLM retrieves relevant context, generates a structured response, and runs it through a validation layer before surfacing it to the user.',
  },
]

const agents = [
  {
    icon: MessageSquare,
    title: 'Borrower Agent',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    description: 'A self-service interface for borrowers to check eligibility, understand loan terms, get repayment schedules, request restructuring, and resolve disputes — without waiting for a human agent.',
    capabilities: [
      'Natural language query handling: "What is my EMI if I prepay ₹50,000?"',
      'Eligibility pre-checks using real-time bureau and policy data',
      'Document upload guidance with validation feedback',
      'Repayment schedule visualization and forecasting',
      'Escalation to human agents with full conversation context',
    ],
  },
  {
    icon: Briefcase,
    title: 'Field Agent',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    description: 'Mobile-first agent for field collection officers and verification teams. Provides real-time decisioning support during field visits, enabling on-the-spot evaluations without back-office dependency.',
    capabilities: [
      'Borrower risk profile summary — portable, offline-capable',
      'Settlement authority calculator within approved policy bounds',
      'Visit outcome logging with GPS-tagged dispositions',
      'Dynamic script suggestions based on borrower segment and history',
      'Photo and document capture with instant quality validation',
    ],
  },
  {
    icon: Shield,
    title: 'Underwriter Agent',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    description: 'A copilot for credit analysts that surfaces relevant data, highlights anomalies, and provides structured recommendations — reducing review time while maintaining decision quality.',
    capabilities: [
      'Automated dossier preparation: consolidated view of bureau, bank statement, and verification data',
      'Anomaly highlighting: inconsistencies across income declarations, addresses, and employment history',
      'Policy-aware recommendations: "Approve with conditions" or "Decline — reason: X"',
      'Comparative analysis: similar past applications and their outcomes',
      'One-click decision documentation with auto-generated reason narratives',
    ],
  },
]

export default function AIPlatformPage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">AI-First Platform</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Six Modules. One Unified Intelligence Layer.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Every module in Vitto is built around machine learning primitives — not bolted on after the fact. 
            Models share data, features, and feedback loops across the entire lending lifecycle.
          </p>
        </div>
      </section>

      {/* All 6 modules */}
      {modules.map((mod, idx) => (
        <section key={mod.id} id={mod.id} className="py-16 relative">
          {idx > 0 && <div className="glow-line mb-16" />}
          <div className="section-container">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left: overview */}
              <div className="lg:col-span-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${mod.bg} mb-5`}>
                  <mod.icon className={`w-6 h-6 ${mod.iconColor}`} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{mod.title}</h2>
                <p className="text-sm text-vitto-400 font-medium mb-4">{mod.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{mod.description}</p>
                <div className="glass-card p-5">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Technical Detail</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{mod.technical}</p>
                </div>
              </div>

              {/* Right: capabilities */}
              <div className="lg:col-span-3">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Capabilities</h3>
                <div className="space-y-3">
                  {mod.capabilities.map((cap, ci) => (
                    <div key={ci} className="glass-card p-4 flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-vitto-600/10 flex items-center justify-center mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-vitto-400" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{cap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Agentic AI Deep Dive */}
      <section className="section-padding relative">
        <div className="glow-line mb-16" />
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">Deep Dive</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Generic LLMs Fail in Regulated Finance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Using ChatGPT or similar general-purpose LLMs in credit workflows is not just suboptimal — it creates 
              compliance, explainability, and reliability risks that regulated institutions cannot afford.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card p-8 border-rose-500/10">
              <h3 className="text-lg font-semibold text-rose-400 mb-4">Generic LLMs (GPT, Claude, Gemini)</h3>
              <ul className="space-y-3">
                {[
                  'Trained on internet-wide data — no BFSI domain depth',
                  'Opaque reasoning: can\'t explain why a borrower was flagged',
                  'Hallucinations are non-deterministic and undetectable without validation layers',
                  'No audit trail for regulatory compliance',
                  'Data privacy risks: inputs may be used for model training',
                  'Latency and cost make real-time decisioning impractical at scale',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-rose-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 border-emerald-500/10">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Vitto Domain-Trained SLM</h3>
              <ul className="space-y-3">
                {[
                  'Trained and fine-tuned on BFSI-specific corpora: RBI guidelines, lending policies, product documentation',
                  'Structured output schemas: every response follows a predictable, validatable format',
                  'Hallucination guardrails: confidence scoring, source attribution, and fallback routing',
                  'Full audit trail: source documents, reasoning chain, and confidence logs for every interaction',
                  'On-premise deployment option: data never leaves the institution\'s infrastructure',
                  'Sub-second inference optimized for real-time lending workflows',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RAG Architecture */}
          <div className="glass-card p-10 mb-16">
            <h3 className="text-xl font-bold text-white mb-4">RAG Pipeline Architecture in BFSI</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Retrieval-Augmented Generation in lending isn't just "search + summarize." The pipeline must handle 
              multi-format documents (circulars, policy PDFs, product term sheets), maintain version awareness 
              (which policy was active on the decision date?), and enforce access controls (which agent can see what).
            </p>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'Ingest', desc: 'Policy documents, circulars, and product guidelines are chunked, embedded, and stored with metadata tags.' },
                { step: '02', label: 'Retrieve', desc: 'At query time, the system retrieves the top-k relevant chunks using semantic similarity + metadata filters.' },
                { step: '03', label: 'Generate', desc: 'The SLM produces a structured response grounded in the retrieved context, with source citations.' },
                { step: '04', label: 'Validate', desc: 'A post-generation validation layer checks for hallucinations, regulatory boundary violations, and confidence thresholds.' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-vitto-400 mb-2">{s.step}</div>
                  <div className="text-sm font-semibold text-white mb-2">{s.label}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Three Agents */}
          <h3 className="text-2xl font-bold text-white text-center mb-10">Three Purpose-Built Agents</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {agents.map((agent, idx) => (
              <div key={idx} className="glass-card p-7">
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${agent.bg} mb-5`}>
                  <agent.icon className={`w-5 h-5 ${agent.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{agent.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{agent.description}</p>
                <ul className="space-y-2">
                  {agent.capabilities.map((cap, ci) => (
                    <li key={ci} className="flex items-start gap-2 text-xs text-gray-400">
                      <Zap className="w-3 h-3 text-vitto-400 mt-0.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See the Platform in Action</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Walk through each module with our engineering team. We'll show you real model outputs, 
            not slide decks.
          </p>
          <Link to="/contact" className="btn-primary group">
            Book a Technical Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
