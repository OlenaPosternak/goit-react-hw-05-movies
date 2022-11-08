import PropTypes from 'prop-types';
import { TrendMovie, Container, FilmLink } from './Trendings.styled';

const Trendings = ({ trendingMovies, state }) => {
  return (
    <Container>
      {trendingMovies.map(movie => (
        <TrendMovie key={movie.id}>
          <FilmLink to={`movies/${movie.id}`} state={state}>
            <p>{movie.title}</p>
          </FilmLink>
        </TrendMovie>
      ))}
    </Container>
  );
};

Trendings.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  state: PropTypes.object,
};
export default Trendings;
