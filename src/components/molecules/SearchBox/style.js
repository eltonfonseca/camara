import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 30px;
  font-size: 14pt;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.fontColor};
  outline: none;
  border-radius: 50px 0px 0px 50px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 0px 50px 50px 0px;
  outline: none;
  cursor: pointer;
  height: 50px;
`;

export const SearchIcon = styled(Search)`
  width: 30px;
  color: ${({ theme }) => theme.colors.fontColor};
`;
