import React, { useEffect } from 'react';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';
import useApi from 'hook/useApi';
import { getMovieDetails } from 'services/endpointApi';

export default function MoviesDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const { isLoading, data, getResults } = useApi(
    getMovieDetails,
    movieId,
    false
  );
  console.log(data);

  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
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
            src={`https://image.tmdb.org/t/p/w500${data && data.poster_path}`}
            alt={data && data.title}
            width="200px"
            height="300px"
          ></img>
        </div>
        <div>
          {isLoading && <p>Loading ...</p>}
          <h1> {data && data.title}</h1>
          <h2>Overview</h2>
          {isLoading && <p>Loading ...</p>}
          <p>{data && data.overview}</p>
          <h3>Genres</h3>
          {isLoading && <p>Loading ...</p>}
          <p>
            {data &&
              data.genres &&
              data.genres.map(genre => genre.name).join(', ')}
          </p>
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
