import React from 'react';
import { Style } from './style';

export default function Button({ children, url }) {
  return (
    <Style to={url}>{children}</Style>
  );
}
