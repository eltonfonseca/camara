import styled from 'styled-components';

export const Container = styled.label`
  text-transform: uppercase;
  color: ${({ fontColor }) => fontColor};
  background: ${({ color }) => color};
  padding: 0px 5px 0px 5px;
  border-radius: 3px 0px 0px 3px;
`;
