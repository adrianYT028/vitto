import { Link } from 'react-router-dom'
import {
  ArrowRight, Users, FileCheck, PhoneCall, Calculator, MessageCircle,
  Zap, ChevronRight
} from 'lucide-react'

const layers = [
  {
    id: 'A',
    label: 'Layer A',
    title: 'Customer Acquisition',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'The acquisition layer handles everything from lead ingestion to pre-qualification. It connects marketing channels, partner integrations, and direct applications into a single pipeline with built-in deduplication, fraud screening, and eligibility pre-checks.',
    submodules: [
      { name: 'Lead Ingestion & Deduplication', desc: 'Multi-channel lead capture (API, web, partner feeds) with real-time deduplication across phone, email, PAN, and Aadhaar.' },
      { name: 'Pre-Qualification Engine', desc: 'Instant eligibility checks using bureau soft-pulls, policy rules, and ML-based propensity scoring before full application.' },
      { name: 'Digital KYC & eKYC', desc: 'Aadhaar-based eKYC, video KYC, and document verification with liveness detection and tampering checks.' },
      { name: 'Application Builder', desc: 'Configurable, multi-step application forms with conditional fields, auto-fill from eKYC, and progressive data capture.' },
      { name: 'Channel Attribution', desc: 'Source tracking across DSA, digital, branch, and partner channels with cost-per-disbursement analytics.' },
    ],
  },
  {
    id: 'B',
    label: 'Layer B',
    title: 'Underwriting & Loan Origination',
    icon: FileCheck,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
    description: 'The underwriting layer replaces spreadsheet-based credit assessment with a structured, ML-augmented decisioning pipeline. From data aggregation through credit committee routing, every step is automated, auditable, and explainable.',
    submodules: [
      { name: 'Bureau Integration Hub', desc: 'Unified API for CIBIL, Experian, CRIF, and Highmark with field normalization, caching, and fallback routing.' },
      { name: 'Bank Statement Analyzer', desc: 'Automated parsing of bank statements (PDF, netbanking, AA) with income, expense, obligation, and cash-flow pattern extraction.' },
      { name: 'Credit Decisioning Engine', desc: 'Hybrid ML + rules engine that outputs approve/reject/refer decisions with reason codes, confidence scores, and policy references.' },
      { name: 'Document Management', desc: 'OCR-based document verification, classification, and storage with tamper detection and auto-indexing.' },
      { name: 'Sanction & Disbursement', desc: 'Offer generation, e-agreement execution, e-NACH registration, and disbursement orchestration with real-time bank account verification.' },
    ],
  },
  {
    id: 'C',
    label: 'Layer C',
    title: 'Collections & Recovery',
    icon: PhoneCall,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    description: 'Collections in Vitto starts before the first missed payment. Predictive models identify at-risk borrowers during the current period, and the system auto-assigns the optimal recovery strategy per borrower based on their profile, history, and predicted behavior.',
    submodules: [
      { name: 'Pre-Delinquency Scoring', desc: 'ML model that predicts probability of default 15-30 days before the payment due date, enabling proactive intervention.' },
      { name: 'Borrower Segmentation', desc: 'Dynamic segmentation based on willingness-to-pay, ability-to-pay, and recovery probability — updated daily.' },
      { name: 'Multi-Channel Orchestration', desc: 'Automated sequencing of SMS, IVR, WhatsApp, email, calling, and field visit based on segment-specific strategies.' },
      { name: 'Field Agent Management', desc: 'Route optimization, visit scheduling, GPS-tagged disposition capture, and performance scoring for field teams.' },
      { name: 'Settlement & Legal Workflow', desc: 'Policy-bound settlement offer generation, NOC issuance, and legal notice automation with audit trails.' },
    ],
  },
  {
    id: 'D',
    label: 'Layer D',
    title: 'Loan Management System',
    icon: Calculator,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    description: 'The LMS handles post-disbursement lifecycle management — repayment tracking, interest accrual, penalty computation, restructuring, and closure. It is designed to handle complex structures: EMI holidays, moratoriums, step-up/step-down schedules, and part-prepayments.',
    submodules: [
      { name: 'Repayment Engine', desc: 'Configurable repayment schedule generation supporting reducing balance, flat rate, bullet, balloon, and hybrid structures.' },
      { name: 'Interest & Penalty Accrual', desc: 'Daily interest computation with support for penal interest, grace periods, and RBI-compliant compounding rules.' },
      { name: 'Restructuring Module', desc: 'One-click loan restructuring with automatic schedule regeneration, interest recalculation, and regulatory reporting.' },
      { name: 'Receipt & Allocation', desc: 'Multi-receipt handling with configurable payment allocation waterfalls: principal → interest → penalty → charges.' },
      { name: 'Closure & NOC', desc: 'Automated loan closure workflow with final settlement calculation, NOC generation, and charge release.' },
    ],
  },
  {
    id: 'E',
    label: 'Layer E',
    title: 'CRM & Communications',
    icon: MessageCircle,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    description: 'A unified communication layer that manages all borrower, partner, and internal interactions. From automated payment reminders to field agent coordination, every message is tracked, templated, and configurable by the operations team.',
    submodules: [
      { name: 'Omnichannel Engine', desc: 'Unified API for SMS, WhatsApp, email, push notifications, and IVR with delivery tracking and retry logic.' },
      { name: 'Borrower 360° View', desc: 'Consolidated profile showing loan history, communication history, disposition records, payment behavior, and support tickets.' },
      { name: 'Template Manager', desc: 'Dynamic, multi-language message templates with variable interpolation, DND compliance, and regulatory approval tracking.' },
      { name: 'Internal Workflow', desc: 'Task assignment, escalation routing, and approval workflows for credit teams, operations, and management.' },
    ],
  },
]

export default function FullStackAutomationPage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">Full Stack Automation</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Five Layers. One Lending Stack.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            From first contact to final closure — every layer of the lending lifecycle is automated, 
            instrumented, and connected through a shared data fabric.
          </p>
        </div>
      </section>

      {/* Layer navigation */}
      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-wrap gap-3">
            {layers.map((layer) => (
              <a
                key={layer.id}
                href={`#layer-${layer.id}`}
                className={`glass-card-hover px-4 py-2.5 inline-flex items-center gap-2 text-sm ${layer.color}`}
              >
                <layer.icon className="w-4 h-4" />
                <span className="font-medium">{layer.label}: {layer.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All layers */}
      {layers.map((layer, idx) => (
        <section key={layer.id} id={`layer-${layer.id}`} className="py-16 relative">
          {idx > 0 && <div className="glow-line mb-16" />}
          <div className="section-container">
            {/* Layer header */}
            <div className="flex items-start gap-5 mb-10">
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${layer.bg} flex items-center justify-center`}>
                <layer.icon className={`w-7 h-7 ${layer.color}`} />
              </div>
              <div>
                <div className={`text-xs font-semibold ${layer.color} uppercase tracking-wider mb-1`}>
                  {layer.label}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{layer.title}</h2>
                <p className="text-gray-400 leading-relaxed max-w-2xl">{layer.description}</p>
              </div>
            </div>

            {/* Submodules */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 lg:ml-[76px]">
              {layer.submodules.map((sub, si) => (
                <div key={si} className={`glass-card-hover p-6 border-l-2 ${layer.borderColor}`}>
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <ChevronRight className={`w-3.5 h-3.5 ${layer.color}`} />
                    {sub.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See the Full Stack in Action</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Walk through each layer with our team. We'll map Vitto's architecture to your existing 
            workflows and show you where the gaps close.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary group">
              Request Architecture Review
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/api" className="btn-secondary">
              View API Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
