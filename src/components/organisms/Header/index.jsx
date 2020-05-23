import React from 'react';
import { SearchBox } from 'components';
import { Container } from './style';

export default function Header({ resource }) {
  return (
    <Container>
      <SearchBox resource={resource} />
    </Container>
  );
}
