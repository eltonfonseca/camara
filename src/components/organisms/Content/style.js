import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${({ align }) => (
    align === 'wrap'
      ? css`flex-wrap: wrap;`
      : css`
        flex-direction: column;
        align-items: center;
        `)}
`;
