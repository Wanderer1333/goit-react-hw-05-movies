import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { StyledMovieItem } from './MoviesItem.styled';

const MoviesItem = ({ id, image, title }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} state={{ from: location }} className="link">
        <img
          src={image ? `https://image.tmdb.org/t/p/w300/${image}` : defaultImg}
          width={300}
          alt="poster"
          className="image"
        />
        <h2 className="title">{title}</h2>
      </Link>
    </StyledMovieItem>
  );
};

export default MoviesItem;
