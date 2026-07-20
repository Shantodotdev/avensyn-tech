import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: ReactNode
  description?: string
  light?: boolean
}

export function SectionHeading({
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={description ? 'grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end' : ''}>
      <h2
        className={`max-w-4xl text-5xl leading-[0.98] font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl ${light ? 'text-white' : 'text-[#21191c]'}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-xl text-base leading-7 lg:justify-self-end ${light ? 'text-white/65' : 'text-[#6b6064]'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
