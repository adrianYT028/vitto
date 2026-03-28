import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BarChart3, TrendingUp, Shield, Zap } from 'lucide-react'

function DashboardMockup() {
  return (
    <div className="glass-card p-6 rounded-2xl animate-float">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-vitto-500" />
          <span className="text-xs font-medium text-gray-400">Vitto Dashboard — Live</span>
        </div>
        <span className="text-xs text-accent-emerald font-mono">● Connected</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Applications Today', value: '1,247', icon: BarChart3, change: '+12%', color: 'text-blue-400' },
          { label: 'Auto-Approved', value: '834', icon: Zap, change: '+8%', color: 'text-accent-emerald' },
          { label: 'Risk Flags', value: '23', icon: Shield, change: '-15%', color: 'text-vitto-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-navy-800/50 rounded-xl p-3 border border-white/[0.04]">
            <div className="flex items-center gap-1 mb-1">
              <stat.icon className={`w-3 h-3 ${stat.color}`} />
              <span className="text-[10px] text-gray-500 uppercase">{stat.label}</span>
            </div>
            <div className="text-lg font-bold text-white">{stat.value}</div>
            <span className="text-[10px] text-accent-emerald">{stat.change}</span>
          </div>
        ))}
      </div>
      {/* Mini chart bars */}
      <div className="bg-navy-800/50 rounded-xl p-3 border border-white/[0.04]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-gray-500 uppercase">Decisioning Pipeline</span>
          <TrendingUp className="w-3 h-3 text-accent-emerald" />
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92, 78, 96].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-vitto-500/60 to-vitto-400/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-vitto-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-navy-600/10 rounded-full blur-[100px]" />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vitto-500/10 border border-vitto-500/20 text-vitto-300 text-xs font-medium mb-8 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              AI-native infrastructure, not retrofitted tooling
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 animate-slide-up">
              AI-First Infrastructure for{' '}
              <span className="gradient-text">Modern Financial Services</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Purpose-built credit decisioning, lending automation, and collections intelligence
              for banks, NBFCs, and microfinance institutions.
            </p>
            <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              Not a legacy system with AI bolted on. Not fragmented point solutions stitched together.
              A unified platform where every layer — from acquisition to collections — is built around
              machine learning primitives and domain-specific models.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="btn-primary group">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/platform" className="btn-secondary">
                Explore Platform
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.04] animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Built for regulated financial institutions</p>
              <div className="flex flex-wrap items-center gap-3">
                {['ISO 27001', 'SOC 2 Type II', 'RBI Compliant', 'DPDPA Ready'].map((cert, i) => (
                  <span key={i} className="text-xs text-gray-500 font-medium px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.04]">{cert}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
