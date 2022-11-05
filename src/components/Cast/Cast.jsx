import { useState, useEffect } from 'react';
import { getCastByID } from '../../fetchAPI';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    if (castInfo !== []) {
      getCastByID(id).then(data => setCastInfo(data.cast));
    }
  });

  console.log(`castInfo`, castInfo);

  return (
    <div>
      Cast
      {castInfo.map(({id, profile_path,original_name,character} )=>  (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} width="100px"/>
          <p>{original_name}</p>
          <p>character:{character}</p>
        </li>
      ))}
    </div>
  );
};

// {trendingMovies.map(movie => (
//     <TrendMovie key={movie.id}>
//     <Link to={`movies/${movie.id}`} state={state}>
//       <p>{movie.title}</p>
//     </Link>
//   </TrendMovie>
// ))}
