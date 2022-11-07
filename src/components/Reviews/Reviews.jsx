import PropTypes from 'prop-types';

import { getReviewsByID } from '../../fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ListItem } from './Reviews.styled';

const Reviews = ({ state }) => {
  const { id } = useParams();
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (allReviews !== []) {
      getReviewsByID(id).then(data => setAllReviews(data.results));
    }
  }, [allReviews, id]);

  return (
    <div>
      <h3>Reviews </h3>
      {allReviews.length > 0
        ? allReviews.map(({ author, content, id }) => (
            <ListItem key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </ListItem>
          ))
        : 'There are no reviews here yet. Try again later!'}
    </div>
  );
};

Reviews.propTypes = {
  state: PropTypes.object,
};

export default Reviews;
