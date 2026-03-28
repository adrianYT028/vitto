import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Loader2, Mail, Phone, Building2 } from 'lucide-react'

const API_BASE = 'http://localhost:5000'

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState('')
  const [leadId, setLeadId] = useState('')

  const [authData, setAuthData] = useState({ email: '', phone: '' })
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const [orgData, setOrgData] = useState({
    institution_name: '',
    institution_type: '',
    city: '',
    loan_book_size: '',
  })

  const handleAuthChange = (e) => setAuthData((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleOrgChange = (e) => setOrgData((p) => ({ ...p, [e.target.name]: e.target.value }))

  // Step 1: Send OTP
  const handleSendOtp = async () => {
    if (!authData.email || !authData.phone) {
      setError('Please enter both email and phone number')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: authData.phone }),
      })
      const data = await res.json()
      if (data.success) {
        setOtpSent(true)
      } else {
        setError(data.error || 'Failed to send OTP')
      }
    } catch (err) {
      setError('Network error. Please check if the backend is running.')
    }
    setLoading(false)
  }

  // Step 1: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    if (!otp) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: authData.phone, otp }),
      })
      const data = await res.json()
      if (data.success) {
        setToken(data.token)
        setStep(2)
      } else {
        setError(data.error || 'Invalid OTP')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  // Step 2: Submit org details
  const handleSubmitOrg = async (e) => {
    e.preventDefault()
    if (!orgData.institution_name || !orgData.institution_type || !orgData.city) {
      setError('Please fill in all required fields')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: authData.email,
          phone: authData.phone,
          institution_name: orgData.institution_name,
          institution_type: orgData.institution_type,
          city: orgData.city,
          loan_book_size: orgData.loan_book_size,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setLeadId(data.data.id)
        setStep(3)
      } else {
        setError(data.error || 'Failed to submit')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  // Step 3: Confirmation
  if (step === 3) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-accent-emerald" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">You're In</h1>
          <p className="text-gray-400 leading-relaxed mb-2">
            Our team will reach out within 24 hours to schedule your onboarding walkthrough.
          </p>
          {leadId && (
            <p className="text-xs text-gray-500 font-mono mb-6">Reference: {leadId}</p>
          )}
          <Link to="/platform" className="btn-primary group">
            Explore the Platform
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 min-h-screen flex items-center">
      <div className="section-container py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-3">Get Started with Vitto</h1>
            <p className="text-gray-400">Onboard your institution onto AI-native credit infrastructure.</p>
          </div>

          {/* Progress steps */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              { num: 1, label: 'Verify' },
              { num: 2, label: 'Details' },
              { num: 3, label: 'Confirm' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    step >= s.num ? 'bg-vitto-500 text-white' : 'bg-white/[0.05] text-gray-500'
                  }`}>
                    {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="text-[10px] text-gray-500">{s.label}</span>
                </div>
                {i < 2 && <div className={`w-12 h-0.5 mb-4 ${step > s.num ? 'bg-vitto-500' : 'bg-white/[0.06]'}`} />}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-vitto-500/10 border border-vitto-500/20 text-sm text-vitto-300">
              {error}
            </div>
          )}

          {/* Step 1: Email + Phone + OTP */}
          {step === 1 && (
            <div className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300 mb-1.5">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email" id="signup-email" name="email" required
                    value={authData.email} onChange={handleAuthChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="you@institution.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel" id="signup-phone" name="phone" required
                    value={authData.phone} onChange={handleAuthChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="+919876543210"
                  />
                </div>
              </div>

              {!otpSent ? (
                <button onClick={handleSendOtp} disabled={loading} className="btn-primary w-full group">
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Send OTP
                </button>
              ) : (
                <>
                  <div>
                    <label htmlFor="signup-otp" className="block text-sm font-medium text-gray-300 mb-1.5">Enter OTP</label>
                    <input
                      type="text" id="signup-otp" maxLength={6}
                      value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors text-center tracking-[0.5em] font-mono text-lg"
                      placeholder="••••••"
                      autoFocus
                    />
                    <p className="text-xs text-gray-500 mt-2">Check server console for the OTP (mock delivery)</p>
                  </div>
                  <button onClick={handleVerifyOtp} disabled={loading || otp.length !== 6} className="btn-primary w-full group">
                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    Verify & Continue
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </div>
          )}

          {/* Step 2: Organisation Details */}
          {step === 2 && (
            <form onSubmit={handleSubmitOrg} className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="org-name" className="block text-sm font-medium text-gray-300 mb-1.5">Institution Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text" id="org-name" name="institution_name" required
                    value={orgData.institution_name} onChange={handleOrgChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                    placeholder="ABC Finance Ltd"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="org-type" className="block text-sm font-medium text-gray-300 mb-1.5">Institution Type</label>
                <select
                  id="org-type" name="institution_type" required
                  value={orgData.institution_type} onChange={handleOrgChange}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-vitto-500/50 transition-colors"
                >
                  <option value="" className="bg-navy-800">Select type</option>
                  <option value="bank" className="bg-navy-800">Bank</option>
                  <option value="nbfc" className="bg-navy-800">NBFC</option>
                  <option value="mfi" className="bg-navy-800">Microfinance Institution</option>
                </select>
              </div>
              <div>
                <label htmlFor="org-city" className="block text-sm font-medium text-gray-300 mb-1.5">City</label>
                <input
                  type="text" id="org-city" name="city" required
                  value={orgData.city} onChange={handleOrgChange}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vitto-500/50 transition-colors"
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <label htmlFor="org-loanbook" className="block text-sm font-medium text-gray-300 mb-1.5">Approximate Loan Book Size</label>
                <select
                  id="org-loanbook" name="loan_book_size"
                  value={orgData.loan_book_size} onChange={handleOrgChange}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-vitto-500/50 transition-colors"
                >
                  <option value="" className="bg-navy-800">Select range</option>
                  <option value="<100cr" className="bg-navy-800">Under ₹100 Cr</option>
                  <option value="100-500cr" className="bg-navy-800">₹100 – 500 Cr</option>
                  <option value="500-2000cr" className="bg-navy-800">₹500 – 2,000 Cr</option>
                  <option value="2000-10000cr" className="bg-navy-800">₹2,000 – 10,000 Cr</option>
                  <option value=">10000cr" className="bg-navy-800">Over ₹10,000 Cr</option>
                </select>
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full group">
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Submit & Complete
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
