import React from 'react';
import {
  Container,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './style';

export default function Header() {
  return (
    <Container>
      <SearchInput type="text" placeholder="Buscar" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}
