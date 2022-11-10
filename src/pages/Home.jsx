import { fetchTrending } from 'fetchAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Trendings from '../components/Trendings/Trendings';

import { Container } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  //   useEffect(() => {
  //     fetchTrending().then(data => setTrendingMovies(data));
  //   }, []);

  useEffect(() => {
    async function getTrendings() {
      try {
        fetchTrending().then(data => setTrendingMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    getTrendings();
  }, []);

  return (
    <Container>
      <h1>Trending Today</h1>
      <Trendings trendingMovies={trendingMovies} state={{ from: location }} />
    </Container>
  );
};

export default Home;
