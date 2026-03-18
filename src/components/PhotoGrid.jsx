import PhotoCard from './PhotoCard'

export default function PhotoGrid({ photos, onPhotoClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line">
      {photos.map((photo) => (
        <div key={photo.id} className="bg-white">
          <PhotoCard photo={photo} onClick={onPhotoClick} />
        </div>
      ))}
    </div>
  )
}
