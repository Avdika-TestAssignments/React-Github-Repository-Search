import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 20px;
  border: solid 2px #1b3a79;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;

  &:focus {
    border-color: #1b3a79;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: solid 2px #1b3a79;
  border-radius: 5px;
  background-color: #1b3a79;
  color: white;
  outline: none;
  cursor: pointer;
`;
