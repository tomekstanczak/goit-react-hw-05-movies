import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import css from './Movies.module.css';

export default function Movies() {
  const [searchingMovie, setSearchingMovie] = useState('');
  const [searchedMovieData, setSearchedMovieData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      setSearchingMovie(searchQuery);
      getMovie(searchQuery);
    }
  }, [searchParams]);

  const getMovie = async searchQuery => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6f0a7e90748cec36ca14cbe73d2c8153&query=${searchQuery}`
      );
      setSearchedMovieData(data.results);
    } catch (error) {
      console.error('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = event => {
    const value = event.target.value;
    setSearchingMovie(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchingMovie });
    navigate(`?query=${searchingMovie}`);
    localStorage.setItem('query', searchingMovie);
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
        {searchedMovieData.map((movie, index) => (
          <li key={index}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
