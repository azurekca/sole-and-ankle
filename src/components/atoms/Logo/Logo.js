import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../../constants';

const Logo = ({ className, delegated }) => {
  return (
    <Link href='/' className={className}>
      <Wrapper {...delegated}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
