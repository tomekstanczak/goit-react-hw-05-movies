import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErrror] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getResaults = async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=6f0a7e90748cec36ca14cbe73d2c8153'
        );
        console.log(data);
        setMoviesList(data.results);
      } catch (error) {
        setIsErrror(true);
        console.error('error');
      } finally {
        setIsLoading(false);
      }
    };
    getResaults();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {moviesList.map((movie, index) => (
          <li key={index}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
