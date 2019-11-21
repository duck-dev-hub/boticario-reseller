import React from 'react';
import StyledLink from './styles';

const LinkForm = ({ content, to, ...props }) => (
  <StyledLink to={to} {...props}>
    {content}
  </StyledLink>
);

export default LinkForm;
