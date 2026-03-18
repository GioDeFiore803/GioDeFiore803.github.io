import { useState, useCallback } from 'react'

export default function useLightbox(photos) {
  const [currentIndex, setCurrentIndex] = useState(null)

  const open = useCallback((photo) => {
    const index = photos.findIndex((p) => p.id === photo.id)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }, [photos])

  const close = useCallback(() => {
    setCurrentIndex(null)
    document.body.style.overflow = ''
  }, [])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % photos.length)
  }, [photos.length])

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length)
  }, [photos.length])

  return {
    isOpen: currentIndex !== null,
    currentIndex,
    open,
    close,
    next,
    prev,
  }
}
