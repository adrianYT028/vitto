import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, BarChart3, Users, Zap, Route, Scale, Brain } from 'lucide-react'

export default function CollectionsPage() {
  return (
    <div className="pt-28">
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">Collections Intelligence</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Predictive Recovery, Not Reactive Chasing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Move from DPD-based bucket allocation to AI-driven, borrower-level recovery strategies 
            that predict delinquency before it happens and optimize every touchpoint.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">How Collection Intelligence Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: Brain, title: 'Predict', desc: 'ML models score every active loan for probability of default 15-30 days before due date, using repayment history, income patterns, and external signals.' },
              { step: '02', icon: Users, title: 'Segment', desc: 'Borrowers are dynamically grouped by willingness-to-pay, ability-to-pay, and self-cure probability — updated daily with new data.' },
              { step: '03', icon: Route, title: 'Orchestrate', desc: 'Each segment gets an optimized contact strategy: channel selection, message tone, timing, and escalation path — all configurable by the collections team.' },
              { step: '04', icon: BarChart3, title: 'Measure', desc: 'Resolution outcomes feed back into the prediction model. Strategies that work get reinforced; strategies that don\'t get replaced.' },
            ].map((s, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-amber-400/30 mb-3">{s.step}</div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 mb-4">
                  <s.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Pre-Delinquency Scoring', desc: 'Don\'t wait for DPD 1. The model identifies borrowers likely to miss their next payment while they\'re still current. This opens a window for soft interventions — reminders, payment links, restructuring offers — that are dramatically more effective than post-default outreach.' },
              { title: 'Dynamic Allocation Engine', desc: 'Not every borrower needs a phone call. The system assigns the optimal channel — automated SMS, WhatsApp, telecaller, field visit, or legal — based on the borrower\'s communication history, response patterns, and recovery probability.' },
              { title: 'Contact Timing Optimization', desc: 'Historical response data reveals that borrower X picks up calls between 10-11 AM, borrower Y responds to WhatsApp in the evening. The system schedules contacts during optimal windows, reducing wasted attempts and improving connection rates.' },
              { title: 'Field Agent Intelligence', desc: 'Field visits are expensive. The system routes agents only where the expected recovery value justifies the visit cost. GPS-tagged dispositions, photo documentation, and real-time settlement authority make every visit productive.' },
              { title: 'Settlement Recommendation', desc: 'For accounts heading toward write-off, the system calculates the optimal settlement amount based on outstanding balance, recovery costs, legal timelines, and historical settlement acceptance rates — all within policy bounds.' },
              { title: 'Regulatory Compliance', desc: 'All collection activities are logged with timestamps, communication content, and borrower consent status. DND compliance, time-of-day restrictions, and harassment prevention rules are enforced at the system level.' },
            ].map((cap, ci) => (
              <div key={ci} className="glass-card-hover p-7">
                <h3 className="text-base font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Collections Strategy</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            See how predictive collections can reduce your NPA ratios and improve recovery efficiency.
          </p>
          <Link to="/contact" className="btn-primary group">
            Book a Collections Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
