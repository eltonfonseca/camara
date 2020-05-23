import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Style = styled(Link)`
  text-align: center;
  background: #3A3B3C;
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  color: #B0B3B8;
  font-weight: bold;
  transition: .5s;
  border: none;
  outline: none;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    background: #4a4b4d;
    cursor: pointer;
  }
`;
