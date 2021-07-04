import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../../constants';
import SearchInput from '../../molecules/SearchInput';
import UnstyledButton from '../../atoms/UnstyledButton';
import Icon from '../../atoms/Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <PromoText>Free shipping on domestic orders over $75</PromoText>
      <Search />
      <HelpLink href='/help'>Help</HelpLink>
      <Cart>
        <Icon id='shopping-bag' strokeWidth={1} />
      </Cart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.white};
  display: flex;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  gap: 24px;
  height: 40px;
  align-items: center;
  padding-left: var(--horizontalPadding);
  padding-right: var(--horizontalPadding);
`;

const PromoText = styled.span``;

const Search = styled(SearchInput)`
  margin-left: auto;
`;

const HelpLink = styled.a`
  color: ${COLORS.gray[300]};
  text-decoration: none;
`;

const Cart = styled(UnstyledButton)`
  color: ${COLORS.gray[300]};
`;

export default SuperHeader;
