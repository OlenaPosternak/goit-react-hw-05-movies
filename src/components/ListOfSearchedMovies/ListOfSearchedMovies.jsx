import PropTypes from 'prop-types';
import { FilmLink, FilmItem } from './ListOfSearchedMovies.styled';

export const SearchedMovies = ({ listOFfilms, state }) => {
  return (
    <ul>
      {listOFfilms.map(film => (
        <FilmItem key={film.id}>
          <FilmLink to={`${film.id}`} state={state}>
            <p>{film.title}</p>
          </FilmLink>
        </FilmItem>
      ))}
    </ul>
  );
};

SearchedMovies.propTypes = {
  listOFfilms: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.object,
};
