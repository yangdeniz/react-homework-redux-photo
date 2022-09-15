import './App.css';
import CurrentPhoto from './components/current-photo';
import Loader from './components/loader';
import Photos from './components/photos';

function App() {
  return (
    <div className='container'>
      <CurrentPhoto />
      <Loader />
      <Photos />
    </div>
  );
}

export default App;
