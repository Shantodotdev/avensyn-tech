import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const clientLogos = [
  'Northstar',
  'Prime Motors',
  'Greenfield',
  'Atlas Group',
  'Sundarban',
  'Orion Works',
]

function ClientLogoMarquee() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[1.75rem] bg-[linear-gradient(115deg,#4f1022_0%,#7d1735_48%,#5a1027_100%)] py-4 shadow-[0_22px_70px_rgba(80,16,38,0.22)] sm:py-5">
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 h-48 w-80 rounded-full bg-[#d9829d]/20 blur-3xl"
        animate={reduceMotion ? undefined : { x: [-220, 1250] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
      />
      <p className="relative z-10 mb-4 text-center text-sm text-white/65">
        Trusted by growing teams
      </p>
      <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 sm:px-8 lg:gap-24 lg:px-12"
              aria-hidden={group === 1}
            >
              {clientLogos.map((logo) => (
                <span
                  key={`${group}-${logo}`}
                  className="whitespace-nowrap text-lg font-medium tracking-[-0.035em] text-white/68 transition-colors duration-300 hover:text-white sm:text-xl"
                >
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden px-4 pb-4 pt-28 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-44 top-24 size-[38rem] rounded-full bg-[#e3a0b4]/32 blur-[115px]"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 130, 35, 0], y: [0, 70, 20, 0], scale: [1, 1.16, 1.06, 1] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-44 top-40 size-[36rem] rounded-full bg-[#6f1831]/18 blur-[125px]"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -145, -45, 0], y: [0, -55, 35, 0], scale: [1, 1.18, 1.08, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[24%] top-[16%] h-[25rem] w-[42rem] rounded-[50%] bg-[#f0c4d0]/30 blur-[120px]"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 170, 55, 0], y: [0, 45, -20, 0], scale: [1, 1.12, 0.96, 1] }
          }
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-x-[14%] top-28 h-[540px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.64),transparent_72%)] blur-3xl" />
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center py-8 text-center sm:py-5"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="max-w-6xl text-[clamp(3.4rem,8.5vw,7.2rem)] leading-[0.98] font-medium tracking-[-0.058em] text-[#20171a]">
          Digital systems that help businesses{' '}
          <motion.span
            className="relative isolate inline-block overflow-hidden rounded-[0.18em] px-[0.12em] py-[0.035em] font-['Source_Serif_4'] leading-[0.92] font-normal tracking-[-0.035em] text-white"
            initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#5a1027,#8c1e40_58%,#641229)]" />
            <motion.span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/3 -z-[5] w-1/3 skew-x-[-18deg] bg-white/18 blur-xl"
              animate={reduceMotion ? undefined : { x: ['0%', '520%'] }}
              transition={{ duration: 2.8, delay: 1.2, repeat: Infinity, repeatDelay: 3.6, ease: 'easeInOut' }}
            />
            <span className="relative">move forward.</span>
          </motion.span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#655b5f] sm:mt-5 sm:text-xl">
          We design and build websites, business software, and automation that
          help you attract customers and run daily work with less hassle.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-7 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#6f1831] px-6 py-3.5 text-base font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#541124] hover:shadow-[0_18px_38px_rgba(111,24,49,0.24)]"
          >
            Discuss your project
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d8ccd0] bg-white px-6 py-3.5 text-base font-medium text-[#3c3034] transition duration-300 hover:border-[#6f1831]/30 hover:bg-[#fbf5f7]"
          >
            See our approach
            <ArrowDownRight className="size-4" />
          </a>
        </div>
      </motion.div>

      <ClientLogoMarquee />
    </section>
  )
}
