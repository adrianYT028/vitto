import { AlertTriangle, Layers, BrainCircuit, ShieldOff } from 'lucide-react'

const problems = [
  {
    num: '01',
    icon: Layers,
    title: 'Fragmented Systems',
    description: 'Siloed LOS, LMS, CRM with no unified data layer. Every integration is a custom build. Every workflow has gaps between systems that don\'t share data or context.',
  },
  {
    num: '02',
    icon: BrainCircuit,
    title: 'Non-AI Native Vendors',
    description: 'AI bolted on top of legacy systems. Models sit outside the decisioning loop. Predictions exist, but the system doesn\'t act on them natively.',
  },
  {
    num: '03',
    icon: AlertTriangle,
    title: 'Reactive Collections',
    description: 'No predictive capability, manual prioritization. DPD-based triggers. Static bucket allocation. By the time the system flags a borrower, the window for early intervention has closed.',
  },
  {
    num: '04',
    icon: ShieldOff,
    title: 'Static Rule Engines',
    description: 'Rules that don\'t learn or adapt. Hard-coded IF-THEN rules that can\'t learn from outcomes. Every policy change requires engineering effort.',
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">The problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Reality of Today's Lending Technology
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Most lending institutions operate on infrastructure that was never designed for the decisions they need to make today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, idx) => (
            <div key={idx} className="glass-card-hover p-7 group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.03] select-none">{problem.num}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-vitto-500/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-vitto-400" />
                </div>
                <span className="text-sm font-bold text-vitto-400">{problem.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
