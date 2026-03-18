import { useState } from 'react'
import { photos, categories } from '../data/photos'
import PhotoGrid from '../components/PhotoGrid'
import Lightbox from '../components/Lightbox'
import useLightbox from '../hooks/useLightbox'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const lightbox = useLightbox(photos)

  const filtered =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className="flex items-center gap-6 px-6 md:px-10 py-8 border-b border-brand-line overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[11px] tracking-widest uppercase transition-opacity duration-200 pb-px whitespace-nowrap ${
              activeCategory === cat
                ? 'border-b border-brand-black opacity-100'
                : 'opacity-40 hover:opacity-80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <PhotoGrid photos={filtered} onPhotoClick={lightbox.open} />

      {/* Lightbox */}
      {lightbox.isOpen && (
        <Lightbox
          photos={filtered}
          currentIndex={lightbox.currentIndex}
          onClose={lightbox.close}
          onNext={lightbox.next}
          onPrev={lightbox.prev}
        />
      )}
    </div>
  )
}
