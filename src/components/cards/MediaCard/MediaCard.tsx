import React from 'react';

import cn from 'classnames';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';

import MediaCover from 'src/components/common/MediaCover';
import Link from 'src/components/common/Link';

import useStyles from './useStyles';

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Link href="/" color="inherit" underline="none" className={classes.link}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <MediaCover size="small" notClickable />
        </Grid>
        <Grid item xs={true}>
          <Box pl={0.5}>
            <Typography className={classes.title}>Мастер веры в себя (Новелла)</Typography>
            <Grid container alignItems="center">
              <Typography className={classes.subtitle}>1044218</Typography>
              <Visibility className={cn(classes.subtitle, classes.icon)} />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
};

export default MediaCard;
