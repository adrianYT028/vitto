import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'

export default function ArticlePage() {
  return (
    <div className="pt-28">
      <article className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Article meta */}
            <div className="mb-10">
              <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">Insights</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Retrofit AI vs AI-Native Infrastructure in BFSI
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Vitto Engineering
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 min read
                </div>
              </div>
            </div>

            <div className="glow-line mb-10" />

            {/* Article body */}
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
              <p>
                There is a growing consensus in financial services that AI will reshape lending — from 
                underwriting to collections. Where institutions diverge is on the question of <em>how</em> to 
                get there. The two dominant approaches couldn't be more different in philosophy, cost structure, 
                and long-term viability.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Retrofit Approach</h2>
              <p>
                Most lending technology vendors today follow a pattern: take an existing loan origination system 
                or loan management system — often built 8-15 years ago on monolithic architectures — and layer 
                AI capabilities on top. A bureau-based scorecard gets replaced with an ML model. A static 
                collections queue gets a "predictive" overlay. A chatbot gets embedded in the borrower portal.
              </p>
              <p>
                On the surface, this looks pragmatic. The core system "works." The institution avoids a full 
                migration. The vendor gets to market the product as "AI-powered" without re-architecting.
              </p>
              <p>
                In practice, the retrofit approach creates three structural problems that compound over time.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. The Data Seam Problem</h3>
              <p>
                When ML models sit outside the core system, they don't share the same data layer. The 
                LOS has one view of the applicant. The ML scoring service has another. The collections 
                tool has a third. Models are trained on exports and batch feeds, not real-time event streams. 
                Feature drift goes undetected because the monitoring layer doesn't have access to the 
                production data pipeline.
              </p>
              <p>
                This isn't a minor integration issue. It means the model that scored an application 
                cannot learn from the repayment behavior of that same loan — because the feedback loop 
                crosses system boundaries.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. The Decisioning Gap</h3>
              <p>
                A retrofitted ML model produces a score. But the system that acts on that score — the 
                rule engine, the workflow router, the credit committee interface — was not designed to 
                consume probabilistic outputs. It was built for hard rules: IF bureau_score &gt; 700 AND 
                income &gt; 25000 THEN approve.
              </p>
              <p>
                Translating a continuous ML score into a binary rule-engine input destroys most of the 
                model's value. The nuance — the difference between a 0.72 and a 0.78 default probability — 
                gets flattened into buckets. The model knows which applicants are borderline. The system 
                treats them all the same.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. The Cost Accumulation</h3>
              <p>
                Retrofitting AI is not cheap. Each integration requires custom connectors, data mapping, 
                and ongoing maintenance. When the LOS vendor updates their schema, the ML pipeline breaks. 
                When the collections tool changes its API, the scoring integration needs rebuilding. Each 
                point-to-point connection is a maintenance liability.
              </p>
              <p>
                Over a 3-year period, institutions that retrofit AI into legacy stacks typically spend 
                40-60% more on technology maintenance than those that start with a unified architecture — 
                while getting measurably less from their ML investments.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">The AI-Native Alternative</h2>
              <p>
                An AI-native system is not the same system with better ML models. It is a fundamentally 
                different architecture where machine learning is not an add-on but a primitive — like 
                database queries or API calls.
              </p>
              <p>
                In an AI-native lending stack, the data layer is shared. Every event — application 
                submission, bureau pull, disbursement, repayment, collection contact — flows into a 
                unified event store. Feature engineering draws from this single source. Models trained 
                on origination data can access servicing outcomes. Collection models can reference 
                underwriting features. There are no data seams.
              </p>
              <p>
                The decisioning layer is designed for probabilistic inputs. The rule engine doesn't 
                just check thresholds — it operates on model outputs natively. A credit policy can 
                say: "If probability_of_default &lt; 0.15 AND income_stability_score &gt; 0.7, auto-approve 
                up to ₹3L." The model and the policy work together, not in sequence.
              </p>
              <p>
                Feedback loops are closed by design. When a loan disbursed today goes delinquent in 
                month 4, that outcome automatically feeds back into the origination model's training 
                pipeline. Performance drift triggers retraining. The system improves without manual 
                intervention.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why This Matters Now</h2>
              <p>
                The BFSI industry is entering a phase where the competitive advantage shifts from 
                distribution to decisioning. Most NBFCs and mid-tier banks have solved the digital 
                acquisition problem — applications come in. The question is: how fast can you evaluate 
                them? How accurately? How cheaply?
              </p>
              <p>
                Institutions running on retrofitted stacks will continue to face the same ceiling: 
                models that can't learn from outcomes, decisioning that can't use model outputs 
                effectively, and integration costs that consume the budget meant for innovation.
              </p>
              <p>
                The future of lending technology is not better AI plugged into old systems. It's new 
                systems built with AI as the foundation. The institutions that recognize this distinction 
                — and act on it — will have a structural advantage that compounds over every credit cycle.
              </p>

              <div className="glow-line mt-10 mb-10" />

              <p className="text-sm text-gray-500 italic">
                This article reflects the engineering perspective of the Vitto team, based on our 
                experience building and deploying lending infrastructure across banks, NBFCs, and 
                microfinance institutions.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 glass-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Building AI-Native Lending Infrastructure?</h3>
              <p className="text-gray-400 text-sm mb-6">
                If you're evaluating your technology stack, we'd like to show you what an AI-native 
                approach looks like in practice.
              </p>
              <Link to="/contact" className="btn-primary group">
                Book a Technical Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
