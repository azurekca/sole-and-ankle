import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../../utils';

const ShoeCard = ({ shoe, className }) => {
  const onSale = Boolean(shoe.salePrice);
  const newShoe = isNewShoe(shoe.releaseDate);
  const badgeText = onSale ? 'Sale' : newShoe ? 'Just Released!' : '';
  const badgeClass = onSale ? 'on-sale' : newShoe ? 'new-shoe' : '';

  return (
    <Card href={shoe.slug} className={className}>
      <Badge className={badgeClass}>{badgeText}</Badge>
      <ShoeImage src={shoe.imageSrc} alt='' />
      <MetaWrapper>
        <Row>
          <ShoeName>{shoe.name}</ShoeName>
          <RegPrice className={onSale ? 'on-sale' : ''}>
            {formatPrice(shoe.price)}
          </RegPrice>
        </Row>
        <Row>
          <ShoeOptions>{pluralize('Colour', shoe.numOfColors)}</ShoeOptions>
          {onSale ? <SalePrice>{formatPrice(shoe.salePrice)}</SalePrice> : null}
        </Row>
      </MetaWrapper>
    </Card>
  );
};

const Card = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  line-height: ${19 / 16};
  position: relative;
  text-decoration: none;
`;

const Badge = styled.span`
  border-radius: 2px;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  padding: 9px 9px 7px 10px;
  position: absolute;
  top: 12px;
  right: -4px;
  &.on-sale {
    background-color: ${COLORS.primary};
  }
  &.new-shoe {
    background-color: ${COLORS.secondary};
  }
`;

const ShoeImage = styled.img`
  background-color: ${COLORS.gray[100]};
  border-radius: 16px 16px 4px 4px;
  object-fit: contain;
  width: 100%;
  aspect-ratio: 340 / 312;
`;

const MetaWrapper = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShoeName = styled.h3`
  font-weight: ${WEIGHTS.medium};
`;
const ShoeOptions = styled.p`
  color: ${COLORS.gray[700]};
`;

const RegPrice = styled.p`
  &.on-sale {
    color: ${COLORS.gray[700]};
    text-decoration: line-through;
  }
`;
const SalePrice = styled.p`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeCard;
