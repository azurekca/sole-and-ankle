import React from 'react';
import styled from 'styled-components/macro';

import { SHOE_CATEGORIES } from '../../../data';
import { COLORS, WEIGHTS } from '../../../constants';

import Breadcrumbs from '../../atoms/Breadcrumbs';

const ShoeSidebar = ({ activeCategory, setActiveCategory, className }) => {
  const handleLinkClick = (event, category) => {
    event.preventDefault();
    console.log(event.target);
    setActiveCategory(category);
  };
  return (
    <Wrapper className={className}>
      <Breadcrumbs>
        <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs>
      <ProductNav aria-label='Shoe Category'>
        {SHOE_CATEGORIES.map((category, index) => (
          <Link
            key={index}
            onClick={event => handleLinkClick(event, category)}
            href={`/${category.toLowerCase()}`}
            className={category === activeCategory ? 'active' : ''}>
            {category}
          </Link>
        ))}
      </ProductNav>
    </Wrapper>
  );
};

const Wrapper = styled.aside``;

const ProductNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  line-height: ${32 / 16};
  text-decoration: none;
  &.active,
  &:active,
  &:hover {
    color: ${COLORS.primary};
  }
`;
export default ShoeSidebar;
