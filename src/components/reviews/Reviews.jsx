import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviev, setMovieReviev] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErrror] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6f0a7e90748cec36ca14cbe73d2c8153`
        );
        console.log(data.results);
        setMovieReviev(data.results);
      } catch (error) {
        console.log(error, 'Error');
        setIsErrror(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <div>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {movieReviev.length > 0 ? (
          movieReviev.map(review => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p>{review.author}</p>
            </li>
          ))
        ) : (
          <p> We don't have any reviewes for this movie</p>
        )}
      </ul>
    </div>
  );
}
