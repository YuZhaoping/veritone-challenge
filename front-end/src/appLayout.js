import React from 'react';
import styled from '@material-ui/core/styles/styled';
import MuiContainer from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import TopNavbar from './components/TopNavbar';

import {
  ShoppingListPage
} from './pages';

const AppRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

const Container = styled(MuiContainer)({
  position: 'relative',
});

const AppLayout = () => (
  <Router>
    <AppRoot>
      <Header />
      <TopNavbar />
      <Container>
        <Switch>
          <Route path='/shopping-list'><ShoppingListPage /></Route>
          <Redirect to='/shopping-list' />
        </Switch>
      </Container>
    </AppRoot>
  </Router>
);

export default AppLayout;
