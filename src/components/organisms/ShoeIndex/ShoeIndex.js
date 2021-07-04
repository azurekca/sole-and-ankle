import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../../constants';

import ShoeGrid from '../../organisms/ShoeGrid';
import ShoeSidebar from '../../organisms/ShoeSidebar';

const ShoeIndex = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <Wrapper>
      <StyledShoeSidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <StyledShoeGrid activeCategory={activeCategory} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: var(--horizontalPadding);
`;

const StyledShoeSidebar = styled(ShoeSidebar)`
  flex: 1;
`;

const StyledShoeGrid = styled(ShoeGrid)`
  flex: 3;
`;

export default ShoeIndex;
