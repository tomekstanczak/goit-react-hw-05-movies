import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErrror] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      try {
        const gettedCast = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6f0a7e90748cec36ca14cbe73d2c8153`
        );
        console.log(gettedCast);
        const { cast } = gettedCast.data;
        console.log(cast);
        setMovieCast(cast);
      } catch (error) {
        console.log(error, 'Error');
        setIsErrror(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading ...</p>}
        {movieCast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}
