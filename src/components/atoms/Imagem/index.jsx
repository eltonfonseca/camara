import React from 'react';
import { Img } from './style';

export default function Imagem({
  url,
  width,
  heigth,
}) {
  return (
    <Img
      src={url}
      width={width}
      heigth={heigth}
    />
  );
}
