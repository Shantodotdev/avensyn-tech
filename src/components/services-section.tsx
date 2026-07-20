import { MotionReveal } from './motion-reveal'
import { SectionHeading } from './section-heading'

const services = [
  {
    title: 'Websites that build trust',
    description:
      'Clear, fast websites that explain your business and help customers take the next step.',
  },
  {
    title: 'Facebook marketing that reaches more customers',
    description:
      'Focused campaigns that help the right people find your business, understand your offer, and contact you.',
  },
  {
    title: 'Software that simplifies daily work',
    description:
      'Practical tools that keep your team, information, and everyday operations organized.',
  },
  {
    title: 'Automation that saves time',
    description:
      'Reduce repeated manual work and keep important tasks moving without constant follow-up.',
  },
  {
    title: 'Reliable support after launch',
    description:
      'Ongoing maintenance, improvements, and technical help when your business needs it.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#2d0815] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            light
            title={<>What we can build for <span className="font-['Source_Serif_4'] font-normal tracking-[-0.035em] text-[#dd8fa6]">your business.</span></>}
          />
        </MotionReveal>

        <div className="mt-14 border-t border-white/18 sm:mt-16">
          {services.map((service, index) => (
            <MotionReveal key={service.title} delay={index * 0.06}>
              <article className="group grid gap-4 border-b border-white/18 py-10 transition-colors duration-300 sm:py-12 lg:grid-cols-[72px_1fr_0.9fr] lg:items-center lg:gap-10">
                <span className="font-['Source_Serif_4'] text-lg text-[#dd8fa6]">
                  0{index + 1}
                </span>
                <h3 className="max-w-xl text-3xl leading-[1.05] font-medium tracking-[-0.04em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-xl text-lg leading-8 text-white/68">
                  {service.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#6f1831] p-7 sm:flex-row sm:items-center sm:p-9">
          <p className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
            Have something specific in mind?
          </p>
          <a href="#contact" className="inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 text-base font-medium text-[#6f1831] transition-transform duration-300 hover:-translate-y-1">
            Let&apos;s discuss it
          </a>
        </MotionReveal>
      </div>
    </section>
  )
}
