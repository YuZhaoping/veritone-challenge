import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Container from '@material-ui/core/Container';

import Header from './components/Header';

import {
  ShoppingListPage
} from './pages';

const AppRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

const AppLayout = () => {
  return (
    <AppRoot>
      <Header />
      <Container>
        <ShoppingListPage />
      </Container>
    </AppRoot>
  );
};

export default AppLayout;
