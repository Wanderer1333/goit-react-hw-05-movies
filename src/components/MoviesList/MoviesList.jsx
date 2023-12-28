import MoviesItem from 'components/MoviesItem/MoviesItem';
import { StyledMoviesList } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.map(({ id, poster_path, title }) => (
        <MoviesItem key={id} id={id} image={poster_path} title={title} />
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
