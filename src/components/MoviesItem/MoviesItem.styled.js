import styled from 'styled-components';

export const StyledMovieItem = styled.li`
  padding: 10px;
  border: 1px solid blue;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: white;

  .link {
    text-decoration: none;
    color: black;
    font-size: 20px;
    text-align: center;
  }
  .image {
    margin: 0 auto;
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }

    .title {
      text-align: center;
    }
  }
`;
