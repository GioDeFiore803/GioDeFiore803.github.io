export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20 text-center">
      <p className="text-[11px] tracking-widest2 uppercase text-brand-gray mb-6">
        Contact
      </p>
      <h2 className="text-xl font-light tracking-wide text-brand-black mb-10">
        Get in touch
      </h2>

      <a
        href="mailto:giovannidefiore3@gmail.com"
        className="text-[15px] md:text-[17px] tracking-wide text-brand-black border-b border-brand-line pb-px hover:border-brand-black transition-colors duration-200 mb-12 break-all"
      >
        giovannidefiore3@gmail.com
      </a>

      {/* Social links */}
      <div className="flex items-center gap-8 mt-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/giod.photo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-brand-gray hover:text-brand-black transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/giovannidefiore/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-brand-gray hover:text-brand-black transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
