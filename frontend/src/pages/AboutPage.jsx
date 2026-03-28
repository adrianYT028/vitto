import { Link } from 'react-router-dom'
import { ArrowRight, Target, Wrench, Shield, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">About Vitto</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Why We Built This
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Vitto exists because the lending technology stack in India — and much of the developing world — 
            isn't designed for the decisions institutions need to make today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">The Origin</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                We've spent years inside BFSI technology teams — writing underwriting engines, integrating 
                bureau APIs, building collection workflows, and debugging rule engines at 2 AM when a policy 
                change broke half the pipeline.
              </p>
              <p>
                The pattern was always the same: an institution would start with a LOS vendor, add a separate 
                LMS, bolt on a collections tool, integrate a third-party fraud API, and then wonder why nothing 
                talked to each other. ML models existed in Jupyter notebooks on somebody's laptop. 
                "AI-powered" meant a logistic regression that hadn't been retrained in 18 months.
              </p>
              <p>
                Vitto is the platform we wished existed when we were building for lenders. One architecture. 
                One data layer. ML at every decision point. Configurable by risk teams, not dependent on 
                engineering tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'AI should be the core, not the coating',
                desc: 'ML models should sit inside the decisioning loop — not alongside it. Every decision point in the lending lifecycle should have a model that learns from outcomes.',
              },
              {
                icon: Wrench,
                title: 'Lending tools should be configurable by lending teams',
                desc: 'Credit policy changes shouldn\'t require a JIRA ticket and a two-sprint cycle. Risk officers should be able to modify rules, thresholds, and strategies directly.',
              },
              {
                icon: Shield,
                title: 'Compliance is infrastructure, not compliance theater',
                desc: 'Audit trails, explainability, and regulatory reporting should be built into the data model — not bolted on as PDF exports after the fact.',
              },
              {
                icon: Users,
                title: 'The stack should be unified',
                desc: 'A lead captured through a partner API should flow into underwriting, disbursement, servicing, and collections without a single manual data transfer or CSV upload.',
              },
            ].map((belief, i) => (
              <div key={i} className="glass-card-hover p-7">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-vitto-600/10 mb-4">
                  <belief.icon className="w-5 h-5 text-vitto-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{belief.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-6">Who We're Built For</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Banks', desc: 'Private and public sector banks looking to modernize digital lending without ripping out existing core banking systems.' },
              { title: 'NBFCs', desc: 'Non-banking finance companies scaling loan disbursement with limited engineering teams and high operational leverage requirements.' },
              { title: 'Microfinance Institutions', desc: 'MFIs managing high-volume, low-ticket portfolios where field efficiency and collections intelligence determine profitability.' },
            ].map((seg, i) => (
              <div key={i} className="glass-card p-7">
                <h3 className="text-lg font-semibold text-white mb-3">{seg.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Talk Architecture</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            If you're evaluating lending platforms or rethinking your technology stack, 
            we'd like to show you what we've built.
          </p>
          <Link to="/contact" className="btn-primary group">
            Schedule a Conversation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
