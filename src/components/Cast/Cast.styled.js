import styled from 'styled-components';

export const StyledCatsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledListItem = styled.li`
  padding: 8px;
  border: 1px solid blue;
  border-radius: 10px;
  background-color: #b4bffb;
`;
