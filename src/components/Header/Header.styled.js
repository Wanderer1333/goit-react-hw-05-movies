import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #b4bffb;
  border: 1px solid blue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .naw {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .header_link {
    font-size: 22px;
    font-weight: 600;
    color: black;
    padding: 12px;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;

    &.active {
      border: 1px solid #1f2dc9;
      border-radius: 10px;
      background-color: aliceblue;
      color: blue;
    }
    `;
