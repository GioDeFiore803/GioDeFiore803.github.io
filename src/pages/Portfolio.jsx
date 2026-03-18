import { photos } from '../data/photos'
import PhotoGrid from '../components/PhotoGrid'
import Lightbox from '../components/Lightbox'
import useLightbox from '../hooks/useLightbox'

export default function Portfolio() {
  const lightbox = useLightbox(photos)

  return (
    <div>
      <PhotoGrid photos={photos} onPhotoClick={lightbox.open} />

      {lightbox.isOpen && (
        <Lightbox
          photos={photos}
          currentIndex={lightbox.currentIndex}
          onClose={lightbox.close}
          onNext={lightbox.next}
          onPrev={lightbox.prev}
        />
      )}
    </div>
  )
}
