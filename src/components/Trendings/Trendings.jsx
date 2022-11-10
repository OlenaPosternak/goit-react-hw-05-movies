import PropTypes from 'prop-types';
import { TrendMovie, Container, FilmLink } from './Trendings.styled';

const Trendings = ({ trendingMovies, state }) => {
  return (
    <Container>
      {trendingMovies.map(({ id, title }) => (
        <TrendMovie key={id}>
          <FilmLink to={`movies/${id}`} state={state}>
            <p>{title}</p>
          </FilmLink>
        </TrendMovie>
      ))}
    </Container>
  );
};

Trendings.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  state: PropTypes.object,
};
export default Trendings;
