import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'We evaluated six vendors before choosing Vitto. The difference was obvious — their ML models actually sat inside the decisioning loop instead of producing scores nobody acted on. Our underwriting team went from 45-minute reviews to 12-minute reviews without losing risk coverage.',
    name: 'Rajesh Menon',
    title: 'Head of Credit',
    org: 'Regional NBFC, 2M+ active borrowers',
  },
  {
    quote: 'The collections module changed how we approach early-stage delinquency. Instead of blanket DPD-based triggers, we now get borrower-level priority scores that account for income patterns, communication history, and recovery probability. Our resolution rate on 0-30 DPD improved by 27%.',
    name: 'Priya Sharma',
    title: 'Chief Risk Officer',
    org: 'Urban Microfinance Institution',
  },
]

const logos = ['Axis Finance', 'Muthoot', 'IIFL', 'Manappuram', 'Shriram']

export default function SocialProof() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        {/* Logo bar */}
        <div className="text-center mb-20">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-8">
            Deployed across regulated financial institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((name, idx) => (
              <div key={idx} className="px-6 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 relative">
              <Quote className="w-8 h-8 text-vitto-500/30 mb-4" />
              <blockquote className="text-sm text-gray-300 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-gray-400">{t.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
