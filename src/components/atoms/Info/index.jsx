import React from 'react';
import {
  Name,
  Data,
  Container,
} from './style';

export default function Info({ title, info }) {
  return (
    <Container>
      <Name>
        {title}
      </Name>
      <Data>
        {info}
      </Data>
    </Container>
  );
}
