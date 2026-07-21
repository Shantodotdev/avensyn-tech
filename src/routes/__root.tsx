import type { ReactNode } from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { SmoothScroll } from '../components/smooth-scroll'
import appCss from '../app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Avensyn Tech — Websites, software, and automation',
      },
      {
        name: 'description',
        content:
          'Avensyn Tech builds practical websites, business software, and automation for growing businesses in Bangladesh.',
      },
      { property: 'og:title', content: 'Avensyn Tech' },
      {
        property: 'og:description',
        content:
          'Practical websites, software, and automation for growing businesses.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Source+Serif+4:wght@400;500&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="min-h-full scroll-smooth bg-white">
      <head>
        <HeadContent />
      </head>
      <body className="m-0 min-h-full overflow-x-clip bg-white antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Scripts />
      </body>
    </html>
  )
}
