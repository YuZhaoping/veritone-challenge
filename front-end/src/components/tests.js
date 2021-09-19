import React from 'react';
import Typography from '@material-ui/core/Typography';

export const TestComponent = () => (
  <React.Fragment>
  <Typography variant="h3">TestComponent</Typography>
  <div className='hello font-dosis' >
    {'Hello Veritone'} <span className='font-nunito'>to Challenge</span>
  </div>
  <div className='material-icons-outlined'>mode_edit</div>
  <div className='material-icons-outlined'>delete</div>
  </React.Fragment>
);
