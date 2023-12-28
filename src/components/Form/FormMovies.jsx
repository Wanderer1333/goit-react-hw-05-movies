import { StyledFormMovies } from './FormMovies.styled';

const FormMovies = ({ setSearchParams }) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.title.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <StyledFormMovies onSubmit={handleFormSubmit}>
      <label>
        <input
          className="input"
          name="title"
          type="text"
          autoComplete="off"
          autoFocus
          required
          placeholder="Enter the name of the movie"
        />
      </label>
      <button type="submit" className="button">
        Search
      </button>
    </StyledFormMovies>
  );
};

export default FormMovies;
