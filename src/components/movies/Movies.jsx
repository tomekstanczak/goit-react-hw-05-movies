import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import useApi from 'hook/useApi';
import css from './Movies.module.css';
import { searchMovies } from 'services/endpointApi';

export default function Movies() {
  const [searchingMovie, setSearchingMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('query');

  const { isLoading, data, getResults } = useApi(searchMovies, searchQuery);

  useEffect(() => {
    if (searchQuery) {
      setSearchingMovie(searchQuery);
      getResults(searchQuery);
    }
    // eslint-disable-next-line
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
