import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #1b3a79;

  @media (max-width: 700px) {
      display: block;
      text-align: center;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  overflow: hidden;

  @media (max-width: 700px) {
      text-align: center;
      justify-content: center;
  }
`;

export const A = styled(Link)`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  padding: .45rem;
  margin: 0 .25rem;
  color: #fff;

  &:hover {
      color: #3a791b;
  }
`;

export const Title = styled.h2`
  color: #3a791b;
`;
