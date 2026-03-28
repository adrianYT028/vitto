import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    institutionType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would POST to /api/leads
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">We'll Be in Touch</h1>
          <p className="text-gray-400 leading-relaxed">
            Thanks for reaching out. Our team will review your request and get back to you 
            within 24 hours with next steps.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28">
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Context */}
            <div>
              <p className="text-xs font-semibold text-vitto-400 uppercase tracking-wider mb-3">Request a Demo</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                See Vitto's Platform in Your Context
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8">
                We don't do generic demos. Tell us about your institution, your current stack, and the 
                problems you're trying to solve — and we'll walk you through the specific modules 
                and configurations that apply.
              </p>

              <div className="space-y-6">
                <div className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-white mb-1">Technical Deep-Dive</h3>
                  <p className="text-xs text-gray-400">Architecture walkthrough, API surface, integration patterns, and deployment options.</p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-white mb-1">Product Mapping</h3>
                  <p className="text-xs text-gray-400">We'll map your loan products, rules, and workflows to Vitto's configurable modules.</p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-white mb-1">Sandbox Access</h3>
                  <p className="text-xs text-gray-400">After the demo, you'll get sandbox credentials to test the platform with sample data.</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="Priya Sharma"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="priya@institution.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-1.5">Company / Institution</label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="ABC Finance Ltd"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-role" className="block text-sm font-medium text-gray-300 mb-1.5">Role</label>
                    <select
                      id="contact-role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-vitto-500/50 transition-colors"
                    >
                      <option value="" className="bg-slate-900">Select role</option>
                      <option value="cto" className="bg-slate-900">CTO / Tech Lead</option>
                      <option value="cro" className="bg-slate-900">CRO / Risk Head</option>
                      <option value="credit" className="bg-slate-900">Head of Credit</option>
                      <option value="digital" className="bg-slate-900">Digital Transformation</option>
                      <option value="product" className="bg-slate-900">Product Manager</option>
                      <option value="other" className="bg-slate-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="block text-sm font-medium text-gray-300 mb-1.5">Institution Type</label>
                    <select
                      id="contact-type"
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-vitto-500/50 transition-colors"
                    >
                      <option value="" className="bg-slate-900">Select type</option>
                      <option value="bank" className="bg-slate-900">Bank</option>
                      <option value="nbfc" className="bg-slate-900">NBFC</option>
                      <option value="mfi" className="bg-slate-900">Microfinance</option>
                      <option value="fintech" className="bg-slate-900">Fintech</option>
                      <option value="other" className="bg-slate-900">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">What are you looking to solve?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors resize-none"
                    placeholder="Tell us about your current lending stack, pain points, and what you're evaluating..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full group">
                  Request Demo
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
