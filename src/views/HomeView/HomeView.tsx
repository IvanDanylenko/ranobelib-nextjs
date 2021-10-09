import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

const HomeView: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <Content />
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default HomeView;
