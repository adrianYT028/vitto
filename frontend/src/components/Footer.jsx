import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Send } from 'lucide-react'

const footerSections = [
  {
    title: 'Pages',
    links: [
      { label: 'Homepage', href: '/' },
      { label: 'AI Platform', href: '/platform' },
      { label: 'Automation', href: '/automation' },
      { label: 'Collections', href: '/collections' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Agentic AI', href: '/agentic-ai' },
      { label: 'API Infrastructure', href: '/api' },
      { label: 'Self Sign-Up', href: '/signup' },
      { label: 'Book a Demo', href: '/contact' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Banks', href: '/about' },
      { label: 'NBFCs', href: '/about' },
      { label: 'Microfinance', href: '/about' },
      { label: 'Fintech', href: '/about' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter subscription:', email)
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="border-t border-white/[0.06] bg-navy-950">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand + Newsletter */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-vitto-500 to-vitto-700 flex items-center justify-center font-bold text-white text-sm">
                V
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Vitto</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              AI-native credit infrastructure for banks, NBFCs, and microfinance institutions.
            </p>

            {/* Newsletter signup */}
            <div>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">Stay Updated</p>
              {subscribed ? (
                <p className="text-sm text-accent-emerald">Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50"
                  />
                  <button type="submit" className="px-3 py-2 bg-vitto-500 rounded-lg hover:bg-vitto-600 transition-colors">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Vitto Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
              <a key={i} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
