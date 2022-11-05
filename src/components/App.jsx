import { Route, Routes, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import {MovieInfo} from '../pages/MovieDetails'
import { Container, HeaderNav } from './App.styled';



export const App = () => {
  return (
    <>
      <Container>
        <div>
          <span role="img" aria-label="Popcorn">
            🍿
          </span>{' '}
          Movies
        </div>
        <HeaderNav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </HeaderNav>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieInfo/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

