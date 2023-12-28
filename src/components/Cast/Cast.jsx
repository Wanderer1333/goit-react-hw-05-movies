import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/api';
import { useParams } from 'react-router-dom';

import { StyledCatsList, StyledListItem } from './Cast.styled';

const Cast = () => {
  const [castNames, setCastNames] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      try {
        const castData = await getMovieCredits(movieId);

        setCastNames(castData);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  const defaultImg = 'https://cdn-icons-png.flaticon.com/256/21/21104.png';

  return (
    <div>
      <StyledCatsList>
        {castNames.cast && castNames.cast.length > 0 ? (
          castNames.cast.map(cast => (
            <StyledListItem key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </StyledListItem>
          ))
        ) : (
          <p>Loading cast information...</p>
        )}
      </StyledCatsList>
    </div>
  );
};

export default Cast;
