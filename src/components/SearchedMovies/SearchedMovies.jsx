import PropTypes from 'prop-types';
import { FilmLink, FilmItem } from './SearchedMovies.styled';

export const SearchedMovies = ({ listOFfilms, state }) => {
  return (
    <ul>
      {listOFfilms.map(({id, title}) => (
        <FilmItem key={id}>
          <FilmLink to={`${id}`} state={state}>
            <p>{title}</p>
          </FilmLink>
        </FilmItem>
      ))}
    </ul>
  );
};

SearchedMovies.propTypes = {
  listOFfilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  state: PropTypes.object,
};
