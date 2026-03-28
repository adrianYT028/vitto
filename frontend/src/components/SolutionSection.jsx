import { Check, Database, GitMerge, Eye } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Domain-Trained Models',
    description: 'Models trained on BFSI-specific data — bureau patterns, income proxies, repayment behavior. Not general-purpose ML adapted for lending.',
  },
  {
    icon: GitMerge,
    title: 'Unified Architecture',
    description: 'A single data layer feeds acquisition, underwriting, servicing, and collections. One model output informs every downstream decision.',
  },
  {
    icon: Eye,
    title: 'Full Explainability',
    description: 'Every model decision comes with feature attribution, reason codes, and audit-ready documentation. Built for regulatory scrutiny.',
  },
]

export default function SolutionSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/20 via-transparent to-transparent" />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">Our approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              AI-Native Decisioning Meets Full Stack Operational Automation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Vitto doesn't add AI to a legacy core. The core <em>is</em> AI. Every module — from
              data ingestion to disbursement to recovery — runs through machine learning pipelines
              that learn, adapt, and improve with every transaction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              The result: a lending stack that reduces manual intervention, accelerates decisioning,
              and surfaces risks before they materialize — without stitching together five different vendors.
            </p>
            <div className="space-y-3">
              {[
                'ML models embedded at every decision point',
                'Single platform, full lifecycle coverage',
                'Configurable without engineering dependency',
                'Compliance-first architecture',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-emerald/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-emerald" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card-hover p-6 flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-vitto-500/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-vitto-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
