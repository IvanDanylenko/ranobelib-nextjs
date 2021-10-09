import React from 'react';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PopularMediaCard from 'src/components/cards/PopularMediaCard';

import useStyles from './useStyles';

const PopularMediaSection = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Box px={2} pt={1} pb={2}>
        <Typography component="h2" variant="h6" gutterBottom>
          Обновления популярного ранобэ
        </Typography>
        <Grid container wrap="nowrap" spacing={2} className={classes.overflow}>
          {/* <Grid item>
            <PopularMediaCard />
          </Grid>
          <Grid item>
            <PopularMediaCard />
          </Grid>
          <Grid item>
            <PopularMediaCard />
          </Grid> */}
          <Grid item>
            <PopularMediaCard />
          </Grid>
          <Grid item>
            <PopularMediaCard />
          </Grid>
          <Grid item>
            <PopularMediaCard />
          </Grid>
          <Grid item>
            <PopularMediaCard />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PopularMediaSection;
