import React from 'react';
import styled from 'styled-components/macro';

import SuperHeader from '../SuperHeader';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader></SuperHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Header;
