import { Suspense } from "react";

import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../fetchAPI';

import { Container, MainInfo, Line, BackButton } from './MovieDetails.styled';

import { TiStarFullOutline } from "react-icons/ti";
import { BiBody } from "react-icons/bi";


export const MovieInfo = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        <div>
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
        </div>
      </MainInfo>
      <Line />
      <div>
        <h3>Additional Information</h3>
        <ul>
        <li>
          <Link to="cast"><BiBody size="16px"/> Cast </Link>
        </li>
        <li>
          <Link to="reviews"> <TiStarFullOutline size="16px" /> Reviews </Link>
        </li>
        </ul>
     
        <Line />
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
