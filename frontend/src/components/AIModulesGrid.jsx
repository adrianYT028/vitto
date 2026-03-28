import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Brain, Settings2, ShieldAlert, PhoneCall, Bot } from 'lucide-react'

const modules = [
  {
    icon: BarChart3,
    title: 'Data-Based Assessment',
    description: 'Multi-source data aggregation — bureau, bank statements, GST, device signals — normalized into a unified risk profile.',
    href: '/platform',
    iconColor: 'text-blue-400',
  },
  {
    icon: Brain,
    title: 'ML Model',
    description: 'Gradient-boosted and neural scoring models trained on BFSI-specific feature sets with champion-challenger deployment.',
    href: '/platform',
    iconColor: 'text-violet-400',
  },
  {
    icon: Settings2,
    title: 'Rule Engine & Decisioning',
    description: 'Hybrid decisioning layer combining ML scores with configurable policy rules. Waterfall, scorecard, and ensemble strategies.',
    href: '/platform',
    iconColor: 'text-cyan-400',
  },
  {
    icon: ShieldAlert,
    title: 'Fraud Intelligence',
    description: 'Real-time fraud scoring using device fingerprinting, velocity checks, network analysis, and application pattern detection.',
    href: '/platform',
    iconColor: 'text-vitto-400',
  },
  {
    icon: PhoneCall,
    title: 'Collection Intelligence',
    description: 'Predictive delinquency models that trigger recovery workflows before DPD milestones. Dynamic allocation and contact optimization.',
    href: '/collections',
    iconColor: 'text-accent-amber',
  },
  {
    icon: Bot,
    title: 'Agentic AI Layer',
    description: 'Domain-trained small language models powering borrower self-service, field agent decisioning, and underwriter copilots.',
    href: '/agentic-ai',
    iconColor: 'text-accent-emerald',
  },
]

export default function AIModulesGrid() {
  return (
    <section className="section-padding relative">
      <div className="glow-line mb-20" />
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">The AI Layer of Vitto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Six Modules of Intelligence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each module operates independently but shares a unified data fabric.
            Models in one layer inform decisions across the entire lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, idx) => (
            <Link
              key={idx}
              to={mod.href}
              className="glass-card-hover p-7 group flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] mb-5">
                <mod.icon className={`w-5 h-5 ${mod.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{mod.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{mod.description}</p>
              <div className="flex items-center gap-1 text-xs text-vitto-400 font-medium group-hover:text-vitto-300 transition-colors">
                Explore
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
