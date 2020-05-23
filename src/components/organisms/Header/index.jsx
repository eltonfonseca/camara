import React from 'react';
import { SearchBox, Switcher } from 'components';
import { Container } from './style';

export default function Header({ resource }) {
  return (
    <Container>
      <SearchBox resource={resource} />
      <Switcher />
    </Container>
  );
}
