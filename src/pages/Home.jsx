import { Link } from 'react-router-dom'

const heroUrl =
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=2000&q=90'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative bg-gray-100"
        style={{ height: 'calc(100svh - 55px)', minHeight: 'calc(100vh - 55px)' }}
      >
        <img
          src={heroUrl}
          alt="Hero"
          loading="eager"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Intro text */}
      <div className="flex flex-col items-center text-center px-6 py-20 md:py-28">
        <p className="text-[11px] tracking-widest2 uppercase text-brand-gray mb-5">
          Photography
        </p>
        <h1 className="text-2xl md:text-3xl font-light tracking-wide text-brand-black mb-6 max-w-sm leading-snug">
          Gio DeFiore
        </h1>
        <p className="text-[15px] text-brand-gray leading-relaxed max-w-md mb-10">
          Portrait, editorial, and concert photography based in New York.
        </p>
        <Link
          to="/portfolio"
          className="text-[11px] tracking-widest uppercase border-b border-brand-black pb-px hover:opacity-50 transition-opacity duration-200 py-3 -my-3"
        >
          View Work
        </Link>
      </div>
    </div>
  )
}
