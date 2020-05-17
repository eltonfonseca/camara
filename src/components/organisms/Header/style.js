import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const Container = styled.div`
  background: #242526;
  padding: 20px;
  box-shadow: 0px 0px 3px 0px black;
`;

export const SearchInput = styled.input`
  height: 30px;
  font-size: 14pt;
  background: #4A4B4D;
  border: none;
  padding: 10px;
  color: white;
  outline: none;
  border-radius: 50px 0px 0px 50px;

  &::placeholder {
    color: #B0B3B8;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
`;

export const SearchIcon = styled(Search)`
  width: 30px;
  color: #B0B3B8;
`;