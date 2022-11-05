import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../fetchAPI';

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
    <div>
      <Link to={backLinkHref}>
        <button>Go back 🔙 </button>
      </Link>

      <h1>
        {title}({release_date && release_date.slice(0, 4)})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${picture}`}
        alt={title}
        width="200"
      />
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
      <div>
        <Link to="cast">Cast</Link>
      </div>
      <div>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
