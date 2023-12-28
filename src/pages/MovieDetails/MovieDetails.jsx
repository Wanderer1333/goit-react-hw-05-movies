import React, { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import { getMovieDetails } from 'services/api';
import Loader from 'components/Loader/Loader';

import { StyledCard, StyledMovieDetails } from './MovieDetails.styled';
import { useRef } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const from = useRef(location.state?.from);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const detail = await getMovieDetails(movieId);
        setMovie(detail);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, overview, genres, poster_path } = movie;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <StyledMovieDetails>
        <div>
          <Link to={from.current || '/'}>
            <button className="button">Go back</button>
          </Link>
        </div>
        <StyledCard>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : defaultImg
            }
            alt={title}
            width="300"
          />
          <h2 className="title">{title}</h2>
          <p className="text">
            <b>Overview: </b>
            {overview}
          </p>
          {genres && genres.length > 0 && (
            <p className="text">
              <b>Genres: </b>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
          <div className="inform">
            <p>
              <b> Additional information:</b>
            </p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          {isLoading && <Loader />}
          {error && <p>{error}</p>}

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledCard>
      </StyledMovieDetails>
    </>
  );
};

export default MovieDetails;
