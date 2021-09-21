import React from 'react';
import styled from '@material-ui/core/styles/styled';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: 0,
  padding: 0,
  zIndex: 2,
});

export default function LoadingSpinner() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}
