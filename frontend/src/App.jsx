import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AIPlatformPage from './pages/AIPlatformPage'
import FullStackAutomationPage from './pages/FullStackAutomationPage'
import CollectionsPage from './pages/CollectionsPage'
import AgenticAIPage from './pages/AgenticAIPage'
import APIInfrastructurePage from './pages/APIInfrastructurePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SignUpPage from './pages/SignUpPage'
import ArticlePage from './pages/ArticlePage'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

function AppLayout() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<><ScrollToTop /><HomePage /></>} />
          <Route path="/platform" element={<><ScrollToTop /><AIPlatformPage /></>} />
          <Route path="/automation" element={<><ScrollToTop /><FullStackAutomationPage /></>} />
          <Route path="/collections" element={<><ScrollToTop /><CollectionsPage /></>} />
          <Route path="/agentic-ai" element={<><ScrollToTop /><AgenticAIPage /></>} />
          <Route path="/api" element={<><ScrollToTop /><APIInfrastructurePage /></>} />
          <Route path="/about" element={<><ScrollToTop /><AboutPage /></>} />
          <Route path="/contact" element={<><ScrollToTop /><ContactPage /></>} />
          <Route path="/signup" element={<><ScrollToTop /><SignUpPage /></>} />
          <Route path="/insights/retrofit-vs-native" element={<><ScrollToTop /><ArticlePage /></>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return <AppLayout />
}
