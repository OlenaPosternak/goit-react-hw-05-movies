import { Suspense, useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { SearchForm } from '../components/SerchForm/Search';
import { SearchedMovies } from '../components/SearchedMovies/SearchedMovies';
import { fetchFilteredMovies } from '../fetchAPI';
import { Loader } from '../components/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const location = useLocation();

  //   useEffect(() => {
  //     if (movieName !== ``) {
  //       fetchFilteredMovies(movieName).then(data => setFilms(data));
  //     }
  //   }, [movieName]);


  
  useEffect(() => {
    if (movieName !== ``) {
      async function filterMovies() {
        try {
          fetchFilteredMovies(movieName).then(data => {
            if (data.results.length === 0) {
              toast.warn('Please try another word for request!', {
                theme: 'dark',
              });
            }
            setFilms(data.results);
          });
        } catch (error) {
          console.log(error);
        }
      }
      filterMovies();
    }
  }, [movieName]);

  const onSubmitSerach = name => {
    setFilms([]);

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SearchForm onSearch={onSubmitSerach} />
        <Link state={{ from: `/movies/${searchParams}` }}>
          <SearchedMovies listOFfilms={films} state={{ from: location }} />
        </Link>
        <ToastContainer autoClose={3000} closeOnClick />
      </Suspense>
    </>
  );
};

export default Movies;
