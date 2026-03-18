import { useState } from 'react'

export default function PhotoCard({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="relative overflow-hidden cursor-pointer group bg-gray-100"
      style={{ aspectRatio: '3 / 2' }}
      onClick={() => onClick(photo)}
    >
      <img
        src={photo.thumb}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
        <span className="text-white text-[11px] tracking-widest uppercase">
          {photo.title}
        </span>
      </div>
    </div>
  )
}
