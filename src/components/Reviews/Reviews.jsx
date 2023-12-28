import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getReview = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        console.log('Movie ID:', movieId);

        setReviews(reviewsData.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getReview();
  }, [movieId]);

  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};
export default Reviews;
