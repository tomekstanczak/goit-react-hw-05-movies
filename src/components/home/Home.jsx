import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useApi from 'hooks/Api';

export default function Home() {
  const apiUrl =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=6f0a7e90748cec36ca14cbe73d2c8153';
  const { isLoading, isError, data, getResaults } = useApi(apiUrl);

  useEffect(() => {
    getResaults();
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
