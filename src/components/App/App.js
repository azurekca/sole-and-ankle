import React from 'react';
import styled from 'styled-components/macro';

import Header from '../organisms/Header';
import ShoeIndex from '../organisms/ShoeIndex';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <ShoeIndex />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px var(--horizontalPadding);
`;

export default App;
