import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './ImageModal/ImageModall';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { fetchPhotos } from '../api';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [photoModal, setPhotoModal] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setPhotoModal({});
  }

  const searchPhotos = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchPhotos(query.split('/')[1], page);
        setPhotos(prevPhotos => [...prevPhotos, ...fetchedData.results]);
        if (page === fetchedData.total_pages) {
          setLastPage(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);
  return (
    <>
      <SearchBar onSubmit={searchPhotos} />
      {photos.length > 0 && (
        <ImageGallery items={photos} onClick={openModal} setPhotoModal={setPhotoModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && !loading && !lastPage && <LoadMoreBtn loadMore={handleLoadMore} />}
      <Toaster
        position="top-right"
        containerStyle={{
          top: 10,
        }}
        toastOptions={{
          error: {
            iconTheme: {
              primary: '#BF1F2C',
              secondary: 'white',
            },
          },
        }}
      />
      {modalIsOpen && (
        <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} photo={photoModal} />
      )}
    </>
  );
}

export default App;
