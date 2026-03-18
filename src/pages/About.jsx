const portraitUrl =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=85'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Photo */}
        <div className="bg-gray-100" style={{ aspectRatio: '4/5' }}>
          <img
            src={portraitUrl}
            alt="Gio DeFiore"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center pt-2">
          <p className="text-[11px] tracking-widest2 uppercase text-brand-gray mb-4">
            About
          </p>
          <h2 className="text-xl font-light tracking-wide mb-8 text-brand-black">
            Gio DeFiore
          </h2>
          <p className="text-[15px] text-brand-gray leading-[1.8] mb-5">
            Gio DeFiore is a New York–based photographer specializing in portrait,
            editorial, and concert photography. With a background in fine art and a
            keen eye for light and emotion, Gio crafts images that resonate long
            after the shutter clicks.
          </p>
          <p className="text-[15px] text-brand-gray leading-[1.8] mb-5">
            Their work has appeared in publications and alongside artists across
            the music and fashion industries. Each shoot is approached with the
            same intention: to reveal something true about the subject.
          </p>
          <p className="text-[13px] italic text-brand-gray">
            Based in New York, NY — available for commissions worldwide.
          </p>
        </div>
      </div>
    </div>
  )
}
