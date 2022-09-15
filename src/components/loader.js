import { useDispatch } from 'react-redux';
import { uploadPhoto } from '../redux/photo-slice';

function Loader() {
  const dispatch = useDispatch();

  const fileToDataUrl = file => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', evt => resolve(evt.currentTarget.result));
    fileReader.addEventListener('error', evt => reject(new Error(evt.currentTarget.error)));
    fileReader.readAsDataURL(file);
  });

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    for (let url of urls) {
      dispatch(uploadPhoto(url));
    }
  };

  return (
    <div className='photo-loader'>Выбрать фото
      <input type='file' onChange={handleSelect} />
    </div>
  );
}

export default Loader;