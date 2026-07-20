import { ContactSection } from './contact-section'
import { HeroSection } from './hero-section'
import { ProcessSection } from './process-section'
import { ProjectShowcase } from './project-showcase'
import { ServicesSection } from './services-section'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-['DM_Sans'] text-[#21191c] selection:bg-[#6f1831] selection:text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
