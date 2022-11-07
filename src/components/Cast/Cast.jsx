import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { getCastByID } from '../../fetchAPI';
import { useParams } from 'react-router-dom';

const IMG = `https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png`;

const Cast = ({ state }) => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    if (castInfo !== []) {
      getCastByID(id).then(data => setCastInfo(data.cast));
    }
  }, [castInfo, id]);

  console.log(`castInfo`, castInfo);

  return (
    <div>
      {castInfo.length > 0
        ? castInfo.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `${IMG}`
                }
                alt={original_name}
                width="100px"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        : `Sorry! There is no Info about the cast here at this moment. try again Later`}
    </div>
  );
};

Cast.propTypes = {
  state: PropTypes.object,
};

export default Cast;
