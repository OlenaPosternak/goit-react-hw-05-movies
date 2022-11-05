import { Link } from 'react-router-dom';

import { TrendMovie } from './Trendings.styled';

const Trendings = ({ trendingMovies, state }) => {
  return (
    <div>
      {trendingMovies.map(movie => (
        <TrendMovie key={movie.id}>
          <Link to={`movies/${movie.id}`} state={state}>
            <p>{movie.title}</p>
          </Link>
        </TrendMovie>
      ))}
    </div>
  );
};

export default Trendings;
