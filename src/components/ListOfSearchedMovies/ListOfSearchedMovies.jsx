import { Link } from 'react-router-dom';

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
