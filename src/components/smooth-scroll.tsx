import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    let animationFrame = 0

    function update(time: number) {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(update)
    }

    animationFrame = window.requestAnimationFrame(update)

    function handleAnchorClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest('a')
      const href = link?.getAttribute('href')

      if (!href || (!href.startsWith('/#') && !href.startsWith('#'))) return

      const hash = href.startsWith('/#') ? href.slice(1) : href
      const target = document.querySelector(hash)

      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -110 })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return children
}
