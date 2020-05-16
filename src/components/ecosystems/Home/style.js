import styled from 'styled-components';

export const Screen = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  ${(props) => props.position}: 0;
  background: url(${(props) => props.backgroundUrl}) center center no-repeat;
  background-size: cover;
  transition: 1s;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.backgroundColor};
    opacity: ${(props) => props.opacity};
  }

  &:hover {
    opacity: 88%;
  }
`;
