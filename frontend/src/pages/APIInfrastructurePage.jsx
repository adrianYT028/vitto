import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Lock, Zap, FileJson, Webhook, Key, Server, GitBranch } from 'lucide-react'

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/applications',
    desc: 'Create a new loan application with applicant data, requested product, and source channel.',
    auth: true,
  },
  {
    method: 'GET',
    path: '/api/v1/applications/:id',
    desc: 'Retrieve full application details including current status, decisioning output, and audit trail.',
    auth: true,
  },
  {
    method: 'POST',
    path: '/api/v1/decisions/evaluate',
    desc: 'Run credit decisioning on an application — ML scoring, policy rules, and final action.',
    auth: true,
  },
  {
    method: 'GET',
    path: '/api/v1/bureau/pull/:applicantId',
    desc: 'Trigger a bureau pull (CIBIL/Experian/CRIF) and return parsed, normalized data.',
    auth: true,
  },
  {
    method: 'POST',
    path: '/api/v1/collections/score',
    desc: 'Score a loan for delinquency risk and return recommended recovery strategy.',
    auth: true,
  },
  {
    method: 'POST',
    path: '/api/v1/webhooks/register',
    desc: 'Register a webhook for real-time event notifications (disbursement, repayment, delinquency).',
    auth: true,
  },
]

export default function APIInfrastructurePage() {
  return (
    <div className="pt-28">
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">API Infrastructure</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Build on Vitto's Lending Primitives
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            RESTful APIs for every module — from application ingestion to collections scoring. 
            Designed for integrators, embedded finance providers, and institutions building custom workflows.
          </p>
        </div>
      </section>

      {/* API Design Principles */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">Design Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: FileJson, title: 'JSON-First', desc: 'All endpoints return structured JSON with consistent envelope patterns. No XML. No SOAP.' },
              { icon: Key, title: 'API Key + JWT', desc: 'OAuth 2.0-based authentication with API keys for server-to-server and JWT for user-context calls.' },
              { icon: GitBranch, title: 'Versioned', desc: 'Semantic versioning with backward-compatible minor releases. Breaking changes in major versions only.' },
              { icon: Server, title: 'Idempotent', desc: 'All mutation endpoints support idempotency keys. Safe to retry without duplicate side effects.' },
            ].map((p, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 mb-4">
                  <p.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Endpoints */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">Core Endpoints</h2>
          <div className="space-y-3">
            {endpoints.map((ep, idx) => (
              <div key={idx} className="glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                    ep.method === 'GET' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {ep.method}
                  </span>
                  <code className="text-sm font-mono text-gray-200">{ep.path}</code>
                </div>
                <p className="text-xs text-gray-400 flex-1">{ep.desc}</p>
                {ep.auth && (
                  <div className="flex items-center gap-1 text-xs text-amber-400/60 flex-shrink-0">
                    <Lock className="w-3 h-3" />
                    Auth Required
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
          <div className="glass-card p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-gray-300 leading-relaxed">
{`// Create a loan application
const response = await fetch('https://api.vitto.ai/v1/applications', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY',
    'X-Idempotency-Key': 'unique-request-id'
  },
  body: JSON.stringify({
    applicant: {
      name: 'Rahul Mehta',
      pan: 'ABCDE1234F',
      phone: '+919876543210',
      employment_type: 'salaried'
    },
    product: 'personal_loan',
    requested_amount: 500000,
    source_channel: 'partner_api'
  })
});

const { data } = await response.json();
// data.application_id → "app_7Kx9mN2pQ1"
// data.status → "bureau_pull_pending"
// data.next_action → "await_bureau_response"`}
            </pre>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Integrate?</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Get sandbox credentials and start building in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup" className="btn-primary group">
              Get API Keys
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to Engineering
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
