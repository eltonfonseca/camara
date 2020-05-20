import styled from 'styled-components';

export const Container = styled.h1`
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ transform }) => transform};
  font-size: ${({ size }) => size}
`;
