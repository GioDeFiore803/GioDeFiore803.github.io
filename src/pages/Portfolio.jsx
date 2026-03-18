import { useState } from 'react'
import { projects } from '../data/photos'
import Lightbox from '../components/Lightbox'

export default function Portfolio() {
  const [lightbox, setLightbox] = useState({ photos: [], index: null })

  const openProject = (project) => {
    setLightbox({ photos: project.photos, index: 0 })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox({ photos: [], index: null })
    document.body.style.overflow = ''
  }

  const next = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.photos.length }))

  const prev = () =>
    setLightbox((s) => ({ ...s, index: (s.index - 1 + s.photos.length) % s.photos.length }))

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden cursor-pointer group bg-gray-100"
            style={{ aspectRatio: '3 / 2' }}
            onClick={() => openProject(project)}
          >
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-5">
              <span className="text-white text-[11px] tracking-widest uppercase">
                {project.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {lightbox.index !== null && (
        <Lightbox
          photos={lightbox.photos}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  )
}
