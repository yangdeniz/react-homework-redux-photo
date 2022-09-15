import { useSelector } from 'react-redux';
import { selectCurrentPhoto } from '../redux/photo-slice';
import Photo from './photo';

function CurrentPhoto() {
  const currentPhoto = useSelector(selectCurrentPhoto);

  if (!currentPhoto)
    return <div className='photo'></div>;

  return (
    <Photo {...currentPhoto} />
  );
}

export default CurrentPhoto;