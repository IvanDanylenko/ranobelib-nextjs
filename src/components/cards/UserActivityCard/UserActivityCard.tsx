import React from 'react';
import NextLink from 'next/link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinearProgress from '@material-ui/core/LinearProgress';

import UserAvatar from 'src/components/common/UserAvatar';
import useStyles from './useStyles';

const UserActivityCard = () => {
  const classes = useStyles();

  const renderTop = (
    <Grid container justify="space-between">
      <Grid item>
        <NextLink href="/" passHref>
          <Link color="textPrimary" className={classes.username}>
            master
          </Link>
        </NextLink>
      </Grid>
      <Grid item>
        <Typography className={classes.rank}>#1</Typography>
      </Grid>
    </Grid>
  );

  const renderBottom = (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.small}>Уровень: 16</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.small}>3182 / 3564</Typography>
        </Grid>
      </Grid>
      <LinearProgress variant="determinate" value={60} />
    </>
  );

  return (
    <Grid container spacing={1}>
      <Grid item>
        <UserAvatar notClickable />
      </Grid>
      <Grid item xs={true}>
        <Grid container justify="space-between" direction="column" className={classes.fullHeight}>
          <Grid item>{renderTop}</Grid>
          <Grid item>{renderBottom}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserActivityCard;
