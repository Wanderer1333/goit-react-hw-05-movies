import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  padding: 20px;
  margin: 0 auto;

  .button {
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #b4bffb;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #303f9f;
    }
  }
`;

export const StyledCard = styled.div``;
