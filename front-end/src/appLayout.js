import React from 'react';
import styled from '@material-ui/core/styles/styled';
import Container from '@material-ui/core/Container';

import { TestComponent } from './components/tests';

const AppRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
});

const AppLayout = () => {
  return (
    <AppRoot>
      <div>SHOPPING LIST</div>
      <Container>
        <TestComponent />
      </Container>
    </AppRoot>
  );
};

export default AppLayout;
