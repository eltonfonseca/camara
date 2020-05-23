import styled from 'styled-components';

export const Container = styled.p`
  text-transform: uppercase;
  color: ${({ fontColor }) => fontColor};
  padding: 0px 5px 0px 5px;
  background: ${({ color }) => color};
  border-radius: 0px 3px 3px 0px;
`;
