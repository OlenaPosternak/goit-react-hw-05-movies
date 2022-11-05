import { getReviewsByID } from '../../fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {ListItem} from './Reviews.styled'


const Reviews = () => {
  const { id } = useParams();
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (allReviews !== []) {
      getReviewsByID(id).then(data => setAllReviews(data.results));
    }
  }, []);

  return (
    <div>
      <h3>Reviews  </h3>
      {allReviews.length>0? allReviews.map(({ author, content, id }) => (
        <ListItem key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </ListItem>
      )):'There is now reviews here yet'}
    </div>
  );
};

export default Reviews;