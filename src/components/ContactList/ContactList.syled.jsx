import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 15px;
  margin: 20px auto;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  padding: 5px;
  border-radius: 7px;

  :hover,
  :focus {
    transform: scale(1.025);
    background-color: #fff;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover,
    :focus {
      transform: scale(1.025);
      background-color: #5a79c1;
    }
    &:active {
      scale: 0.95;
      border-radius: 50%;
      outline: 5px solid #f12828a9;
      outline-offset: 7px;
    }
  }
`;
