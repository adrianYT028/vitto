import { Link } from 'react-router-dom'
import { ArrowRight, Bot, MessageSquare, Briefcase, Shield, Zap, BookOpen, Lock, Eye } from 'lucide-react'

export default function AgenticAIPage() {
  return (
    <div className="pt-28">
      <section className="section-padding pb-12">
        <div className="section-container">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">Agentic AI</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            Domain-Trained AI Agents for Financial Services
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Autonomous agents built on small language models trained specifically for BFSI workflows. 
            Not wrappers around general-purpose LLMs — purpose-built systems with full auditability.
          </p>
        </div>
      </section>

      {/* Why not generic LLMs */}
      <section className="section-padding">
        <div className="section-container">
          <div className="glass-card p-10">
            <h2 className="text-2xl font-bold text-white mb-6">The Problem with Generic AI in Regulated Finance</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Deploying a general-purpose LLM in a lending workflow is like using a general practitioner 
              for cardiac surgery. The foundational capabilities exist, but the domain specificity, reliability 
              guarantees, and accountability structures are absent.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: 'Explainability Gap', desc: 'Regulators require that every credit-related communication and decision be traceable to a policy, a data point, or a model output. Generic LLMs can\'t provide this.' },
                { icon: Lock, title: 'Compliance Risk', desc: 'A hallucinated interest rate, an incorrect policy reference, or an unauthorized restructuring offer isn\'t just an error — it\'s a regulatory violation.' },
                { icon: BookOpen, title: 'Domain Blindness', desc: 'A model trained on internet data doesn\'t understand the difference between a flat-rate and reducing-balance EMI. It can\'t reason about DPD buckets, FLDG obligations, or PSL norms.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500/10 mb-3">
                    <item.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vitto's approach */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-10">Vitto's Agent Architecture</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Retrieval-Augmented Generation for BFSI</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Every agent query goes through a four-stage pipeline: intent classification, context 
                retrieval from the institution's policy and product knowledge base, grounded response 
                generation by the domain SLM, and post-generation validation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The knowledge base isn't a static document dump. It's a versioned, metadata-tagged 
                vector store that understands document types (policy circular vs. product term sheet vs. 
                RBI notification), effective dates, and access controls.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This means the agent always responds based on the correct version of a policy, can cite 
                the specific clause it referenced, and never surfaces information the user isn't authorized to see.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Domain SLM', desc: 'Small language model fine-tuned on BFSI corpora. 10x smaller than GPT-4, 3x faster inference, zero data egress.' },
                { label: 'Vector Knowledge Store', desc: 'Policy docs, product guidelines, RBI circulars — chunked, embedded, and tagged with metadata for precision retrieval.' },
                { label: 'Guardrail Layer', desc: 'Post-generation validation for hallucination detection, regulatory boundary checks, and confidence scoring. Low-confidence responses route to humans.' },
                { label: 'Audit Logger', desc: 'Every agent interaction logs: user query, retrieved documents, generated response, confidence score, and validation outcome. Full trail for compliance.' },
              ].map((item, i) => (
                <div key={i} className="glass-card-hover p-5">
                  <h4 className="text-sm font-semibold text-vitto-300 mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three agents - detailed */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Three Purpose-Built Agents</h2>

          {/* Borrower Agent */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Borrower Agent</h3>
                <p className="text-sm text-gray-400">Self-service interface for borrowers</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 ml-16">
              {[
                'Check loan eligibility with real-time bureau data, not just generic calculators',
                'Get accurate EMI projections including processing fees, insurance, and GST',
                'Upload documents with instant quality validation and feedback',
                'Request prepayment with actual foreclosure amount calculation',
                'Initiate restructuring requests that follow institutional policy bounds',
                'Resolve disputes with full conversation history for agent handoff',
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* Field Agent */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Field Agent</h3>
                <p className="text-sm text-gray-400">Mobile-first support for collection officers</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 ml-16">
              {[
                'Access borrower risk profiles and payment history offline on mobile',
                'Calculate settlement amounts within pre-approved policy boundaries',
                'Log visit dispositions with GPS tagging and photo documentation',
                'Receive dynamic conversation scripts based on borrower segment',
                'Get real-time decisioning support without calling the back office',
                'Track daily targets and performance against portfolio allocation',
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* Underwriter Agent */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Underwriter Agent</h3>
                <p className="text-sm text-gray-400">Copilot for credit analysts</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 ml-16">
              {[
                'Automated dossier preparation: bureau, bank statements, verification data in one view',
                'Anomaly highlighting across income, address, and employment declarations',
                'Policy-aware decision recommendations with cited policy references',
                'Comparative analysis: similar historical applications and their performance',
                'One-click decision documentation with auto-generated reason narratives',
                'Real-time query answering: "What is the maximum LTV for this product in this geography?"',
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See the Agents in Action</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Watch a live demo of all three agents processing real lending scenarios with full audit trails.
          </p>
          <Link to="/contact" className="btn-primary group">
            Book an Agentic AI Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
