import styled from 'styled-components';

export const StyleLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  a {
    position: absolute;
    color: white;
    text-decoration: none;
    font-size: 36pt;
    text-transform: uppercase;
    font-weight: bold;
  }

  a:after {
    display: block;
    content: "";
    border-bottom: solid 3px white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  a:hover:after {
    transform: scaleX(1);
  }
`;
