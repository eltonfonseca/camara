import React from 'react';
import { Link } from 'react-router-dom';
import { StyleLink } from './style';

export default function LinkComponent({ children, to }) {
  return (
    <StyleLink>
      <Link to={to}>{children}</Link>
    </StyleLink>
  );
}
