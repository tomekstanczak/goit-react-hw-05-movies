import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './NavLayout.module.css';

export default function NavLayout() {
  return (
    <div>
      <header>
        <menu className={css.menuStyle}>
          <NavLink
            to="/goit-react-hw-05-movies"
            className={css.link}
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black',
              };
            }}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="movies"
            className={css.link}
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black',
              };
            }}
            end
          >
            Movies
          </NavLink>
        </menu>
      </header>
      <Suspense fallback={<div>Loading... </div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

<NavLink
  to="/messages"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? 'bold' : '',
      color: isPending ? 'red' : 'black',
      viewTransitionName: isTransitioning ? 'slide' : '',
    };
  }}
>
  Messages
</NavLink>;
