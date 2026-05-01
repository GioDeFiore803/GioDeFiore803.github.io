import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center px-6"
      style={{
        height: 'calc(100svh - 55px)',
        minHeight: 'calc(100vh - 55px)',
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex flex-col items-center text-center text-white">
        <p className="text-[11px] tracking-widest2 uppercase text-white/80 mb-6">
          Photography
        </p>

        <h1
          className="font-light tracking-tight leading-none mb-8 text-white select-none"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 12rem)' }}
        >
          Giovanni
          <br />
          DeFiore
        </h1>

        <p className="text-[15px] text-white/80 leading-relaxed max-w-md mb-10">
          New York-Based Photographer
        </p>
        <Link
          to="/portfolio"
          className="text-[11px] tracking-widest uppercase text-white border-b border-white pb-px hover:opacity-60 transition-opacity duration-200 py-3 -my-3"
        >
          View Work
        </Link>
      </div>
    </div>
  )
}
