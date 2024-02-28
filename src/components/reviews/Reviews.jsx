import useApi from 'hook/useApi';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/endpointApi';

export default function Reviews() {
  const { movieId } = useParams();
  const { data, isLoading, isError, getResults } = useApi(getReviews, movieId);

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <div>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {data.length > 0 ? (
          data.map(review => (
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
