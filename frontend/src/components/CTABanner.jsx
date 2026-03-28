import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="bg-vitto-500 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Discover the Key to Grow Your Business
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              See how Vitto can reduce your credit decisioning time, improve collection efficiency,
              and give your risk team models they can actually trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-vitto-600 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-[0.98] text-sm tracking-wide group">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/platform" className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border border-white/30 transition-all duration-300 hover:bg-white/10 active:scale-[0.98] text-sm tracking-wide">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
