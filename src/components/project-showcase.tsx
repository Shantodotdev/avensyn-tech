import {
  ArrowUpRight,
  Building2,
  CarFront,
  Clapperboard,
  Factory,
  HeartPulse,
  House,
  PartyPopper,
  ShoppingBag,
  Store,
  UsersRound,
} from 'lucide-react'
import { MotionReveal } from './motion-reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    name: 'Khatayon Software',
    type: 'Dhrupodi Fashions retail operations platform',
    summary:
      'A connected retail system for sales, inventory, customer accounts, branch transfers, and business reporting across Dhrupodi Fashions.',
    icon: Store,
    surface: 'bg-[#e8eee9]',
    text: 'text-[#28372f]',
    preview: 'operations',
    screenshot: '/khatayon-device.png',
  },
  {
    name: 'Memorica',
    type: 'Event planning and consultation website',
    summary:
      'A polished website showcasing event services, celebration types, past work, and a simple way to book a consultation.',
    icon: PartyPopper,
    surface: 'bg-[#f7e9ed]',
    text: 'text-[#8b2947]',
    preview: 'booking',
    screenshot: '/memorica.png',
  },
  {
    name: 'Prenda Solution',
    type: 'Garment manufacturing and sourcing website',
    summary:
      'A corporate website presenting garment manufacturing, sourcing, product ranges, sustainability commitments, client work, and direct contact options.',
    icon: Factory,
    surface: 'bg-[#eef0e5]',
    text: 'text-[#4b5836]',
    preview: 'showcase',
  },
  {
    name: 'Blood Sheba',
    type: 'Blood donor search and registration platform',
    summary:
      'A bilingual platform that helps people find local blood donors, register volunteers, and connect quickly when blood is needed.',
    icon: HeartPulse,
    surface: 'bg-[#fae8e8]',
    text: 'text-[#a3262d]',
    preview: 'showcase',
    screenshot: '/blood-sheba-device.png',
  },
  {
    name: 'Star Office',
    type: 'Star Elevator business operations platform',
    summary:
      'An all-in-one workspace for managing clients, elevator projects, offers, inventory, orders, payments, expenses, and team workflows.',
    icon: Building2,
    surface: 'bg-[#e9eaf3]',
    text: 'text-[#343a61]',
    preview: 'operations',
    screenshot: '/star-office.png',
  },
  {
    name: 'GTD Media Production',
    type: 'Climate storytelling and video production website',
    summary:
      'A content-rich website for films, production services, portfolios, events, articles, project discussions, and the company’s climate work.',
    icon: Clapperboard,
    surface: 'bg-[#e5f0ed]',
    text: 'text-[#28594f]',
    preview: 'showcase',
    screenshot: '/gtd-media.png',
  },
  {
    name: 'Bangladesh Wadokai Karate Do',
    type: 'Karate community and dojo management platform',
    summary:
      'The official BWKD website combines public information with member profiles, payments, printable ID cards, and daily dojo administration.',
    icon: UsersRound,
    surface: 'bg-[#f4eee2]',
    text: 'text-[#775626]',
    preview: 'showcase',
  },
  {
    name: 'Shanto Motors',
    type: 'Vehicle showroom and inventory website',
    summary:
      'A conversion-focused dealership website with searchable stock, detailed vehicle pages, showroom galleries, finance guidance, and direct WhatsApp, phone, and visit options.',
    icon: CarFront,
    surface: 'bg-[#edf5e5]',
    text: 'text-[#46621f]',
    preview: 'showcase',
  },
  {
    name: 'Noksha Habitat',
    type: 'Residential property discovery website',
    summary:
      'A premium real estate website for exploring projects, floor plans, construction progress, private viewings, overseas buyer services, and landowner partnerships.',
    icon: House,
    surface: 'bg-[#eee9df]',
    text: 'text-[#6c5135]',
    preview: 'showcase',
  },
  {
    name: 'Siyam Shilam Ghor',
    type: 'Karate equipment storefront and order management',
    summary:
      'A Bangladesh-focused online store with product variants, embroidery options, a persistent cart, cash-on-delivery checkout, stock-aware orders, and private store management.',
    icon: ShoppingBag,
    surface: 'bg-[#f0eee9]',
    text: 'text-[#292722]',
    preview: 'showcase',
    url: 'https://siyamkarate.vercel.app/',
  },
]

function ProjectPreview({
  name,
  screenshot,
}: {
  name: string
  screenshot?: string
}) {
  if (screenshot) {
    return (
      <img
        src={screenshot}
        alt={`${name} software interface`}
        className="block h-full w-full max-w-full object-cover object-top"
      />
    )
  }

  return <div className="h-full w-full bg-[#f4e9ed]" aria-hidden="true" />
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
                <article className="group grid gap-7 rounded-[2.2rem] border border-black/8 bg-white p-3 shadow-[0_18px_65px_rgba(50,18,29,0.06)] lg:grid-cols-2 lg:items-stretch lg:p-4">
                  <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-9">
                    <div>
                      <div className={`grid size-12 place-items-center rounded-2xl ${project.surface} ${project.text}`}>
                        <Icon className="size-5" strokeWidth={1.6} />
                      </div>
                      <p className="mt-8 font-['Source_Serif_4'] text-lg text-[#6f1831]">
                        {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 text-4xl font-medium tracking-[-0.045em] text-[#231a1d] sm:text-5xl">{project.name}</h3>
                      <p className="mt-3 text-lg leading-7 text-[#6f6468]">{project.type}</p>
                      <p className="mt-6 max-w-md text-base leading-7 text-[#51474b]">{project.summary}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {'url' in project && project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#6f1831]"
                        >
                          Visit live website
                          <ArrowUpRight className="size-4" />
                        </a>
                      ) : null}
                      <a href="#contact" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#6f1831]">
                        Discuss a similar project
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                  <div className="aspect-video w-full min-w-0 self-center overflow-hidden rounded-[1.7rem]">
                    <ProjectPreview
                      name={project.name}
                      screenshot={'screenshot' in project ? project.screenshot : undefined}
                    />
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
