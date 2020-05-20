import React from 'react';
import { Label, InfoLabel } from 'components';
import { Container } from './style';

export default function LabelBox({
  label,
  info,
  bgLabel,
  bgInfo,
}) {
  return (
    <Container>
      <Label color={bgLabel}>{label}</Label>
      <InfoLabel color={bgInfo}>{info}</InfoLabel>
    </Container>
  );
}
