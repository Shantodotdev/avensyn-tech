const footerLinks = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export function SiteFooter() {
  return (
    <footer className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-black/10">
        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-[1.35fr_0.65fr_0.8fr] lg:gap-16">
          <div>
            <a
              href="#top"
              className="group inline-flex items-center text-[#241b1e]"
              aria-label="Avensyn Tech home"
            >
              <img
                src="/avensyn-logo.png"
                alt="Avensyn Tech"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#665b5f]">
              Websites, business software, automation, and Facebook marketing for growing businesses.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm text-[#8a7f83]">Explore</p>
            <div className="mt-5 flex flex-col items-start gap-3.5">
              {footerLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-base text-[#3c3135] transition-colors duration-200 hover:text-[#6f1831]"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="text-sm text-[#8a7f83]">Contact</p>
            <a
              href="mailto:krshanto2005@gmail.com?subject=Project%20discussion"
              className="mt-5 block text-lg font-medium tracking-[-0.025em] text-[#2c2125] transition-colors duration-200 hover:text-[#6f1831]"
            >
              krshanto2005@gmail.com
            </a>
            <a
              href="tel:+8801311237037"
              className="mt-3 block text-base text-[#6d6266] transition-colors duration-200 hover:text-[#6f1831]"
            >
              +8801311237037
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/10 py-6 text-sm text-[#766b6f] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avensyn Tech. All rights reserved.</p>
          <a
            href="#top"
            className="w-fit text-[#4d4246] transition-colors duration-200 hover:text-[#6f1831]"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
