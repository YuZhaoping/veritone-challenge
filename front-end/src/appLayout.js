import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';

import {
  ShoppingListPage
} from './pages';

const AppRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

const AppLayout = () => (
  <Router>
    <AppRoot>
      <Header />
      <Container>
        <Switch>
          <Route path='/'><ShoppingListPage /></Route>
        </Switch>
      </Container>
    </AppRoot>
  </Router>
);

export default AppLayout;
