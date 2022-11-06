import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchedMovies = ({ listOFfilms, state }) => {
  return (
    <ul>
      {listOFfilms.map(film => (
        <li key={film.id}>
          <Link to={`${film.id}`} state={state}>
            <p>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchedMovies.propTypes = {
  listOFfilms: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.object,
};
