import styled from 'styled-components';

export const Container = styled.div`
  background: #242526;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
`;

export const Header = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: url(${(props) => props.url}) center center no-repeat;
  background-size: cover;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Partido = styled.div`
  display: flex;
`;

export const Name = styled.h1`
  font-size: 14pt;
  font-weight: bold;
`;

export const Label = styled.p`
  text-transform: uppercase;
  background: #3895FF;
  padding: 0px 5px 0px 5px;
  border-radius: 3px 0px 0px 3px;
`;

export const Sigla = styled.p`
  text-transform: uppercase;
  padding: 0px 5px 0px 5px;
  background: #F7C045;
  border-radius: 0px 3px 3px 0px;
`;

export const Button = styled.button`
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
  font-size: 14px;

  &:hover {
    background: #4a4b4d;
    cursor: pointer;
  }
`;
