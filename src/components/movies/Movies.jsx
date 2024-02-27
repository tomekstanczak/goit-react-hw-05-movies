import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import useApi from 'hooks/Api';
import css from './Movies.module.css';

export default function Movies() {
  const [searchingMovie, setSearchingMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('query');

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=6f0a7e90748cec36ca14cbe73d2c8153&query=${searchQuery}`;
  const { isLoading, data, getResaults } = useApi(apiUrl);

  useEffect(() => {
    if (searchQuery) {
      setSearchingMovie(searchQuery);
      getResaults(searchQuery);
    }
  }, [searchParams]);

  const handleChange = event => {
    const value = event.target.value;
    setSearchingMovie(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchingMovie });
    navigate(`?query=${searchingMovie}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} className={css.inputStyle} />
        <button type="button" className={css.inputStyle} onClick={handleSubmit}>
          Search
        </button>
      </form>
      <ul>
        {isLoading && <p>Loading ...</p>}
        {data.map((movie, index) => (
          <li key={index}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
