import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Platform',
    children: [
      { label: 'AI-First Platform', href: '/platform', desc: 'ML models, fraud detection, decisioning' },
      { label: 'Agentic AI', href: '/agentic-ai', desc: 'Borrower, field & underwriter agents' },
      { label: 'Collections Intelligence', href: '/collections', desc: 'Predictive recovery workflows' },
    ],
  },
  { label: 'Full Stack Automation', href: '/automation' },
  { label: 'API Infrastructure', href: '/api' },
  {
    label: 'Company',
    children: [
      { label: 'About Vitto', href: '/about', desc: 'Why we built this' },
      { label: 'Insights', href: '/insights/retrofit-vs-native', desc: 'Thought leadership' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-vitto-500 to-vitto-700 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-vitto-500/20">
              V
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Vitto</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === idx && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-72 py-2 bg-navy-800/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl shadow-black/40 animate-fade-in">
                        {item.children.map((child, ci) => (
                          <Link key={ci} to={child.href} className="block px-4 py-3 hover:bg-white/[0.04] transition-colors">
                            <div className="text-sm font-medium text-white">{child.label}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{child.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={idx} to={item.href} className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/signup" className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2">Sign Up</Link>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">Book Demo</Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-300 hover:text-white" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-white/[0.06] animate-fade-in">
          <div className="section-container py-6 space-y-1">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div key={idx}>
                  <button onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)} className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-300 hover:text-white">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === idx && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child, ci) => (
                        <Link key={ci} to={child.href} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-lg">{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={idx} to={item.href} className="block px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg">{item.label}</Link>
              )
            )}
            <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
              <Link to="/signup" className="btn-secondary text-center">Sign Up</Link>
              <Link to="/contact" className="btn-primary text-center">Book Demo</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
