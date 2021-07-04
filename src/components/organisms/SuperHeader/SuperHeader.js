import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../../constants';
import SearchInput from '../../molecules/SearchInput';
import UnstyledButton from '../../atoms/UnstyledButton';
import Icon from '../../atoms/Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      Free shipping on domestic orders over $75
      <Search />
      <HelpButton>Help</HelpButton>
      <Cart id='shopping-bag' strokeWidth={1} />
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
  padding: 12px var(--horizontalPadding);
`;

const Search = styled(SearchInput)`
  margin-left: auto;
`;

const HelpButton = styled(UnstyledButton)`
  color: ${COLORS.gray[300]};
`;

const Cart = styled(Icon)`
  color: ${COLORS.gray[300]};
`;

export default SuperHeader;
