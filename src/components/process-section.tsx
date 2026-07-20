import { MotionReveal } from './motion-reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'We learn about your business, your customers, and the problem you want to solve.',
  },
  {
    number: '02',
    title: 'Get a clear plan',
    description: 'You receive the scope, timeline, cost, and payment steps before the work begins.',
  },
  {
    number: '03',
    title: 'Review as we build',
    description: 'We share progress in stages so you can review the work and give feedback along the way.',
  },
  {
    number: '04',
    title: 'Launch with support',
    description: 'After final approval, we launch the project and provide the support agreed with you.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            title={<>A clear path from first conversation <span className="font-['Source_Serif_4'] font-normal tracking-[-0.035em] text-[#6f1831]">to launch.</span></>}
          />
        </MotionReveal>

        <div className="mt-14 border-t border-black/10 sm:mt-16">
          {steps.map((step, index) => (
            <MotionReveal key={step.number} delay={index * 0.08}>
              <article className="group grid gap-4 border-b border-black/10 py-9 sm:py-11 lg:grid-cols-[100px_0.85fr_1fr] lg:items-center lg:gap-10">
                <span className="font-['Source_Serif_4'] text-2xl text-[#6f1831]">
                  {step.number}
                </span>
                <h3 className="text-3xl leading-[1.05] font-medium tracking-[-0.04em] text-[#241a1e] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-lg leading-8 text-[#685d61]">
                  {step.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-14 grid gap-7 rounded-[2.2rem] bg-[#f8f0f3] p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-12">
          <p className="text-4xl leading-[1.05] font-medium tracking-[-0.045em] text-[#2a1d22] sm:text-5xl">
            Clear scope. Clear cost. Clear next step.
          </p>
          <p className="max-w-xl text-lg leading-8 text-[#685d61] lg:justify-self-end">
            You always know what we are working on, what we need from you, and what happens next.
          </p>
        </MotionReveal>
      </div>
    </section>
  )
}
