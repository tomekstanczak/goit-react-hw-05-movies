import useApi from 'hook/useApi';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/endpointApi';

export default function Cast() {
  const { movieId } = useParams();
  const { data, getResults, isLoading, isError } = useApi(
    getCast,
    movieId,
    false
  );

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <div>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {data &&
          data.cast &&
          data &&
          data.cast.map(actor => <li key={actor.id}>{actor.name}</li>)}
      </ul>
    </div>
  );
}
