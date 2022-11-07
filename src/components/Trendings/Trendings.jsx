import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { TrendMovie, Container } from './Trendings.styled';

const Trendings = ({ trendingMovies, state }) => {
  return (
    <Container>
      {trendingMovies.map(movie => (
        <TrendMovie key={movie.id}>
          <Link to={`movies/${movie.id}`} state={state}>
            <p>{movie.title}</p>
          </Link>
        </TrendMovie>
      ))}
    </Container>
  );
};

Trendings.propTypes = {
  trendingMovies: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.object,
};
export default Trendings;