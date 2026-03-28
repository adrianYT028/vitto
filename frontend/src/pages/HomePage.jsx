import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import AIModulesGrid from '../components/AIModulesGrid'
import BusinessImpact from '../components/BusinessImpact'
import SocialProof from '../components/SocialProof'
import CTABanner from '../components/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AIModulesGrid />
      <BusinessImpact />
      <SocialProof />
      <CTABanner />
    </>
  )
}
