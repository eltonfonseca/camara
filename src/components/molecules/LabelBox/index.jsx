import React from 'react';
import { Label, InfoLabel } from 'components';
import { Container } from './style';

export default function LabelBox({
  color,
  label,
  info,
  bgLabel,
  bgInfo,
}) {
  return (
    <Container>
      <Label fontColor={color} color={bgLabel}>{label}</Label>
      <InfoLabel fontColor={color} color={bgInfo}>{info}</InfoLabel>
    </Container>
  );
}
