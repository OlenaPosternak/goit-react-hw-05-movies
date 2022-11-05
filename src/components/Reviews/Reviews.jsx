import { getReviewsByID } from '../../fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (allReviews !== []) {
      getReviewsByID(id).then(data => setAllReviews(data.results));
    }
  }, []);

  return <div>
    <h3>Reviews</h3>
    {allReviews.map(({author, content, id})=>(
        <li key={id}>
           <p>Author: {author}</p> 
           <p>{content}</p>
        </li>
    ))}
  </div>;
};
