import { ArrowUpRight, CalendarDays, CarFront, PackageSearch } from 'lucide-react'
import { MotionReveal } from './motion-reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    name: 'Nexus Motors',
    type: 'Showroom website and inquiry system',
    summary:
      'A faster way for customers to browse available vehicles and contact the sales team.',
    icon: CarFront,
    accent: 'bg-[#6f1831]',
    surface: 'bg-[#f7e9ed]',
    text: 'text-[#6f1831]',
    preview: 'showroom',
  },
  {
    name: 'Stockline',
    type: 'Inventory and sales workspace',
    summary:
      'One simple place to track stock, sales, suppliers, and the work that needs attention.',
    icon: PackageSearch,
    accent: 'bg-[#28372f]',
    surface: 'bg-[#e8eee9]',
    text: 'text-[#28372f]',
    preview: 'inventory',
  },
  {
    name: 'Carebook',
    type: 'Booking and follow-up platform',
    summary:
      'A clear booking flow with automatic updates for customers and the service team.',
    icon: CalendarDays,
    accent: 'bg-[#2f3455]',
    surface: 'bg-[#e9eaf3]',
    text: 'text-[#2f3455]',
    preview: 'booking',
  },
]

function ProjectPreview({ type }: { type: string }) {
  if (type === 'inventory') {
    return (
      <div className="grid h-full grid-cols-[82px_1fr] overflow-hidden rounded-[1.7rem] bg-[#15211a] p-3 text-white sm:grid-cols-[112px_1fr] sm:p-4">
        <div className="rounded-2xl bg-white/5 p-3">
          <div className="h-7 w-7 rounded-lg bg-[#b8d5be]" />
          <div className="mt-8 space-y-3">
            {[70, 85, 56, 74].map((width, index) => (
              <div key={`${width}-${index}`} className="h-2 rounded-full bg-white/12" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
        <div className="p-3 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/45 sm:text-xs">Inventory overview</p>
              <p className="mt-1 text-lg font-medium sm:text-2xl">Everything in one view</p>
            </div>
            <div className="size-8 rounded-full bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            {['1,248', '86', '24'].map((value, index) => (
              <div key={value} className="rounded-xl bg-white/7 p-2.5 sm:rounded-2xl sm:p-4">
                <p className="text-base font-medium sm:text-xl">{value}</p>
                <p className="mt-1 text-[9px] text-white/45 sm:text-[11px]">{['Items', 'Low stock', 'Suppliers'][index]}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-2xl bg-[#edf3ee] p-3 text-[#1f2e24] sm:mt-4 sm:p-4">
            <div className="flex h-20 items-end gap-2 sm:h-28">
              {[36, 48, 44, 66, 58, 79, 71, 88].map((height, index) => (
                <span key={`${height}-${index}`} className="flex-1 rounded-t bg-[#477558]" style={{ height: `${height}%`, opacity: 0.35 + index * 0.07 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'booking') {
    return (
      <div className="grid h-full place-items-center overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_50%_30%,#59618b_0%,#343a61_36%,#1d213e_75%)] p-6">
        <div className="w-full max-w-sm rounded-[1.6rem] bg-white p-5 shadow-2xl sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-[#827f8f]">April 2026</p>
              <p className="mt-1 text-lg font-medium text-[#26283e]">Choose a time</p>
            </div>
            <CalendarDays className="size-5 text-[#4a527e]" strokeWidth={1.6} />
          </div>
          <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-[10px] text-[#777485]">
            {Array.from({ length: 21 }, (_, index) => (
              <span key={index} className={`grid aspect-square place-items-center rounded-lg ${index === 11 ? 'bg-[#343a61] text-white' : index > 14 ? 'bg-[#f4f3f6]' : ''}`}>
                {index + 1}
              </span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[10px] text-[#4b4855]">
            {['10:30', '12:00', '3:30'].map((time, index) => (
              <span key={time} className={`rounded-full border px-2 py-2 ${index === 1 ? 'border-[#343a61] bg-[#343a61] text-white' : 'border-black/10'}`}>{time}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid h-full place-items-center overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_70%_20%,#c46f88_0%,#791f3d_38%,#360a19_82%)] p-6 text-white">
      <div className="relative w-full max-w-lg rounded-[1.6rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-7">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <span className="text-sm font-medium">Nexus Motors</span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-[10px]">Browse cars</span>
        </div>
        <div className="grid items-center gap-5 pt-6 sm:grid-cols-[1fr_0.8fr]">
          <p className="font-['Source_Serif_4'] text-4xl leading-[0.96] tracking-[-0.04em] sm:text-5xl">Your next car is closer than you think.</p>
          <div className="grid aspect-square place-items-center rounded-3xl bg-white/10">
            <CarFront className="size-16 sm:size-20" strokeWidth={1.05} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectShowcase() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            title={<>Selected work, built to <span className="font-['Source_Serif_4'] font-normal tracking-[-0.035em] text-[#6f1831]">solve real problems.</span></>}
          />
        </MotionReveal>

        <div className="mt-16 space-y-7">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <MotionReveal key={project.name} delay={index * 0.08}>
                <article className="group grid gap-7 rounded-[2.2rem] border border-black/8 bg-white p-3 shadow-[0_18px_65px_rgba(50,18,29,0.06)] lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch lg:p-4">
                  <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-9">
                    <div>
                      <div className={`grid size-12 place-items-center rounded-2xl ${project.surface} ${project.text}`}>
                        <Icon className="size-5" strokeWidth={1.6} />
                      </div>
                      <p className="mt-8 font-['Source_Serif_4'] text-lg text-[#6f1831]">
                        0{index + 1} / 0{projects.length}
                      </p>
                      <h3 className="mt-2 text-4xl font-medium tracking-[-0.045em] text-[#231a1d] sm:text-5xl">{project.name}</h3>
                      <p className="mt-3 text-base text-[#6f6468]">{project.type}</p>
                      <p className="mt-6 max-w-md text-base leading-7 text-[#51474b]">{project.summary}</p>
                    </div>
                    <a href="#contact" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#6f1831]">
                      Discuss a similar project
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                  <div className="min-h-[380px] overflow-hidden rounded-[1.7rem] sm:min-h-[470px]">
                    <ProjectPreview type={project.preview} />
                  </div>
                </article>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
