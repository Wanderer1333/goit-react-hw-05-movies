import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesForQuery } from 'services/api';

import FormMovies from '../../components/Form/FormMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Button from 'components/ButtonLoadMore/Button';
import { StyledMovie } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesForQuery(query, page);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <StyledMovie>
      <FormMovies setSearchParams={setSearchParams} />
      <div className="container">
        {movies.length > 0 && <MoviesList movies={movies} />}
        {movies.length !== movies && !isLoading && (
          <Button onClick={loadMore} />
        )}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    </StyledMovie>
  );
};

export default Movies;
