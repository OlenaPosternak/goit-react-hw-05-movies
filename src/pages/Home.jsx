import { fetchTrending } from 'fetchAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Trendings from '../components/Trendings/Trendings';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchTrending().then(data => setTrendingMovies(data));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <Trendings trendingMovies={trendingMovies} state={{ from: location }} />
    </div>
  );
};

export default Home;
