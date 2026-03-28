import { Zap, TrendingDown, Target, Plug } from 'lucide-react'

const metrics = [
  {
    icon: Zap,
    value: '34%',
    label: 'Faster Credit Decisions',
    description: 'Average reduction in time-to-decision across underwriting workflows, from application to disbursement.',
  },
  {
    icon: TrendingDown,
    value: '22%',
    label: 'Reduced Portfolio Risk',
    description: 'Measurable improvement in portfolio health through predictive risk scoring and early delinquency detection.',
  },
  {
    icon: Target,
    value: '3.1x',
    label: 'Increased Recovery Rates',
    description: 'Improvement in collection efficiency through AI-driven borrower segmentation and optimal contact strategies.',
  },
  {
    icon: Plug,
    value: '45+',
    label: 'Pre-Built Integrations',
    description: 'Ready-to-deploy connectors for bureaus, payment gateways, e-sign providers, account aggregators, and communication channels.',
  },
]

export default function BusinessImpact() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">Business impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Measurable from Day One
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Performance benchmarks observed across institutions using Vitto's platform in production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, idx) => (
            <div key={idx} className="glass-card p-7 text-center group hover:border-vitto-500/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-vitto-500/10 mb-5 mx-auto">
                <metric.icon className="w-6 h-6 text-vitto-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-200 mb-3">{metric.label}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
