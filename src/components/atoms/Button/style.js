import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Style = styled(Link)`
  text-align: center;
  background: ${({ theme }) => theme.colors.buttonColor};
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  transition: .5s;
  border: none;
  outline: none;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
    cursor: pointer;
  }
`;
