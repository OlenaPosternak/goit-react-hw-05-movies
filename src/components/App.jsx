import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { MovieInfo } from '../pages/MovieDetails';

import { Container, HeaderNav, HeaderLinks, Line } from './App.styled';

// import Reviews from '../components/Reviews/Reviews';
// import Cast from '../components/Cast/Cast';
// import Movies from '../pages/Movies';

const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <Container>
        <HeaderNav>
          <HeaderLinks to="/" end>
            <div role="img" aria-label="Popcorn">
              🍿
            </div>{' '}
            <p>Home</p>
          </HeaderLinks>
          <HeaderLinks to="/movies">Movies</HeaderLinks>
        </HeaderNav>
        <Line />
      </Container>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="movies" element={<Movies />} />
         <Route path="movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
