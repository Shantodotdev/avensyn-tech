import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { MotionReveal } from './motion-reveal'

export function ContactSection() {
  const whatsappMessage = encodeURIComponent(
    'Hello Avensyn Tech, I would like to discuss a project.',
  )

  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
      <MotionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#6f1831] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-5xl leading-[0.95] font-medium tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Have a business problem worth{' '}
              <span className="font-['Source_Serif_4'] font-normal tracking-[-0.035em] text-[#f3c4d1]">solving?</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Tell us what you want to improve. We will ask the right questions and suggest a practical next step.</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-stretch">
            <a href="mailto:krshanto2005@gmail.com?subject=Project%20discussion" className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[#6f1831] transition-transform duration-300 hover:-translate-y-1">
              <span className="flex items-center gap-3 font-medium">
                <Mail className="size-5" strokeWidth={1.6} />
                Email your project
              </span>
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={`https://wa.me/8801311237037?text=${whatsappMessage}`} className="group flex items-center justify-between rounded-2xl border border-white/25 px-5 py-4 text-white transition-colors duration-300 hover:bg-white/8">
              <span className="flex items-center gap-3 font-medium">
                <MessageCircle className="size-5" strokeWidth={1.6} />
                Start on WhatsApp
              </span>
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-2 text-sm leading-6 text-white/55">A short message about your business and the problem is enough to begin.</p>
          </div>
        </div>
      </MotionReveal>
    </section>
  )
}
