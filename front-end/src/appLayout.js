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
  HomePage,
  ShoppingListPage,
  ToDoPage
} from './pages';

const AppRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

const Container = styled(MuiContainer)({
  flexGrow: 1,
  position: 'relative',
  padding: 0,
});

const AppLayout = () => (
  <Router>
    <AppRoot>
      <Header />
      <TopNavbar />
      <Container>
        <Switch>
          <Route exact path='/'
            children={(props) => (<HomePage {...props}/>)}
          />
          <Route path='/shopping-list'
            children={(props) => (<ShoppingListPage {...props}/>)}
          />
          <Route path='/todo'
            children={(props) => (<ToDoPage {...props}/>)}
          />
          <Redirect to='/' />
        </Switch>
      </Container>
    </AppRoot>
  </Router>
);

export default AppLayout;
