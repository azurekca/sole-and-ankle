import React from 'react';
import styled from 'styled-components/macro';

import { NAV } from '../../../data';
import { COLORS, WEIGHTS } from '../../../constants';

import Logo from '../../atoms/Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader />
      <MainNav aria-label='primary'>
        <LogoLink />
        {NAV.map((link, index) => (
          <Link key={index} href={`/${link}`}>
            {link}
          </Link>
        ))}
      </MainNav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MainNav = styled.nav`
  align-items: baseline;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  gap: 48px;
  height: 72px;
  justify-content: center;
  padding: 21px var(--horizontalPadding) 23px;
`;

const LogoLink = styled(Logo)`
  margin-right: auto;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  text-transform: uppercase;
  &:last-of-type {
    margin-right: auto;
  }
  &.active,
  &:active,
  &:hover {
    color: ${COLORS.secondary};
  }
`;

export default Header;
