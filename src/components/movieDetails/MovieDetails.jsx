import React, { useEffect, useState } from 'react';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';

export default function MoviesDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({
    overview: '',
    poster_path: '',
    title: '',
    genres: [],
  });

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=6f0a7e90748cec36ca14cbe73d2c8153`
        );
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.log(error, 'Error');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(`/movies?query=${localStorage.getItem('query')}`);
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.boxMovieStyle}>
        <div>
          {isLoading && <p>Loading ...</p>}
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width="200px"
            height="300px"
          ></img>
        </div>
        <div>
          {isLoading && <p>Loading ...</p>}
          <h1>{movieDetails.title}</h1>
          <h2>Overview</h2>
          {isLoading && <p>Loading ...</p>}
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          {isLoading && <p>Loading ...</p>}
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.additionalStyle}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="cast">CAST</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
