import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';

import Sidebar from './components/Sidebar';

const HomeLayout: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        Home Content
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
