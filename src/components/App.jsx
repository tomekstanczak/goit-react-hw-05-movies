import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const NavLayout = lazy(() => import('./navLayout/NavLayout'));
const Home = lazy(() => import('./home/Home'));
const Movies = lazy(() => import('./movies/Movies'));
const MoviesDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
