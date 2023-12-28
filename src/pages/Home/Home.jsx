import React, { useEffect, useState } from 'react';
import { getMovieTrends } from 'services/api';

import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

import { StyledHome } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovieTrends();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <StyledHome>
      <h1 className="title">Trend of the Day</h1>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </StyledHome>
  );
};

export default Home;
