import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useApi from 'hook/useApi';
import { getHomepageMovies } from 'services/endpointApi';

export default function Home() {
  const { isLoading, isError, data, getResults } = useApi(getHomepageMovies);

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {data.map((movie, index) => (
          <li key={index}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
