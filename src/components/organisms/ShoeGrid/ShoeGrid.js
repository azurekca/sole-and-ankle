import React from 'react';
import styled from 'styled-components/macro';

import { SHOES } from '../../../data';
import { COLORS, WEIGHTS } from '../../../constants';

import Select from '../../molecules/Select';
import ShoeCard from '../../organisms/ShoeCard';

const ShoeGrid = ({ activeCategory, className }) => {
  const [sortId, setSortId] = React.useState('releaseDate');

  // derived state
  SHOES.sort((a, b) => b[sortId] - a[sortId]);

  return (
    <Wrapper className={className}>
      <GridHeader>
        <CurrentCategory>{activeCategory}</CurrentCategory>
        <SortDropdown
          label='Sort'
          value={sortId}
          onChange={event => setSortId(event.target.value)}>
          <option value='releaseDate'>Newest Releases</option>
          <option value='price'>Price</option>
        </SortDropdown>
      </GridHeader>
      <Shoes>
        {SHOES.map((shoe, index) => (
          <StyledShoeCard key={index} shoe={shoe} />
        ))}
      </Shoes>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const GridHeader = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const CurrentCategory = styled.h1`
  color: ${COLORS.gray[900]};
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  line-height: ${24 / 16}rem;
`;

const SortDropdown = styled(Select)``;

const Shoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const StyledShoeCard = styled(ShoeCard)`
  flex: 1 1 340px;
`;

export default ShoeGrid;
