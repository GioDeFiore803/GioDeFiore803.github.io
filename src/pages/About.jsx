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
            Giovanni DeFiore
          </h2>
          <p className="text-[15px] text-brand-gray leading-[1.8] mb-5">
            Hi, I'm Giovanni DeFiore, a 20-year-old first-year Photography and
            Advertising major at RIT. I'm passionate about capturing emotion and
            identity through the lens, with a particular love for self portraiture
            and portrait photography.
          </p>
          <p className="text-[15px] text-brand-gray leading-[1.8] mb-5">
            My work focuses on exploring the human experience — how light,
            expression, and environment come together to tell a story. Photography,
            for me, is both a creative outlet and a way to connect with others on
            a deeper level.
          </p>
        </div>
      </div>
    </div>
  )
}
