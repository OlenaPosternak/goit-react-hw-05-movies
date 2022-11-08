import { Suspense } from 'react';

import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../fetchAPI';

import {
  Container,
  MainInfo,
  MovieDescripton,
  Line,
  BackButton,
  AdditionalInfoItem,
  AdditionalInfoLink,
} from './MovieDetails.styled';

import { TiStarFullOutline } from 'react-icons/ti';
import { BiBody } from 'react-icons/bi';
import { Loader } from 'components/Loader';

export const MovieInfo = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  console.log(`location`, location)
  console.log(`location.state`,location.state)
  console.log(`location.state.from`,location.state?.from)

  const [genres, setGenres] = useState([]);
  const [picture, setPicture] = useState('');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieByID(id).then(data => {
      setMovie(data);
      setGenres(data.genres);
      setPicture(data.poster_path);
    });
  }, [id]);

  const { title, overview, popularity, release_date } = movie;

  return (
    <Container>
      <Link to={backLinkHref}>
        <BackButton>Go back 🔙 </BackButton>
      </Link>
      <MainInfo>
        <img
          src={`https://image.tmdb.org/t/p/w500/${picture}`}
          alt={title}
          width="200"
        />
        <MovieDescripton>
          <h1>
            {title}({release_date && release_date.slice(0, 4)})
          </h1>

          <p>User Score: {Math.round(Number(popularity))}% </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres !== [] &&
            genres.map(gen => (
              <span key={gen.id}>
                {' '}
                <span>{gen.name}</span>
              </span>
            ))}
        </MovieDescripton>
      </MainInfo>
      <Line />
      <div>
        <h3>Additional Information</h3>
        <ul>
          <AdditionalInfoItem>
            <AdditionalInfoLink to="cast" state={location.state}>
              <BiBody size="16px" /> Cast{' '}
            </AdditionalInfoLink>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <AdditionalInfoLink to="reviews" state={location.state}>
              {' '}
              <TiStarFullOutline size="16px" /> Reviews{' '}
            </AdditionalInfoLink>
          </AdditionalInfoItem>
        </ul>

        <Line />
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
