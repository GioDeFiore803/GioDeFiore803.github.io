import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ photos, currentIndex, onClose, onNext, onPrev }) {
  const photo = photos[currentIndex]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') onNext()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onNext, onPrev, onClose])

  if (!photo) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Image container — stops propagation so clicking the image doesn't close */}
      <div
        className="relative flex items-center justify-center w-full h-full px-12 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[85vh] max-w-full object-contain animate-fade-in"
        />

        {/* Prev button */}
        <button
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          onClick={onPrev}
          aria-label="Previous photo"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next button */}
        <button
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          onClick={onNext}
          aria-label="Next photo"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Close button */}
      <button
        className="absolute top-4 right-5 text-white/70 hover:text-white transition-colors duration-150 p-1"
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>

      {/* Caption bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-white/60 text-[11px] tracking-widest uppercase">
          {photo.title}
        </span>
        <span className="text-white/40 text-[11px] tracking-wide">
          {currentIndex + 1} / {photos.length}
        </span>
      </div>
    </div>,
    document.body
  )
}
