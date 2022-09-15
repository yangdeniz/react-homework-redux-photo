import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPhotos } from '../redux/photo-slice';
import Photo from './photo';

function Photos() {
  const photos = useSelector(selectPhotos);
  const [visiblePhotoStartIndex, setVisiblePhotoStartIndex] = useState(0);
  const maxPhotosVisible = 3;

  const moveLeft = () => {
    setVisiblePhotoStartIndex(prev => prev === 0 ? 0 : prev - 1);
  }

  const moveRight = () => {
    setVisiblePhotoStartIndex(prev => prev === photos.length - maxPhotosVisible ? prev : prev + 1);
  }

  return (
    <div className='photos'>
      <div className={`arrow arrow-left ${visiblePhotoStartIndex === 0 ? 'hidden' : ''}`} onClick={moveLeft}></div>
      {photos
        .slice(visiblePhotoStartIndex, visiblePhotoStartIndex + maxPhotosVisible)
        .map(photo => <Photo key={photo.id} {...photo} />)
      }
      <div 
        className={`arrow arrow-right ${photos.length < maxPhotosVisible || visiblePhotoStartIndex + maxPhotosVisible === photos.length ? 'hidden' : ''}`} 
        onClick={moveRight}>
      </div>
    </div>
  );
}

export default Photos;