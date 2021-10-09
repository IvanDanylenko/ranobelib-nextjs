import React from 'react';

import cn from 'classnames';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import MediaCover from 'src/components/common/MediaCover';
import Link from 'src/components/utils/Link';

import useStyles from './useStyles';

const PopularMediaCard = () => {
  const classes = useStyles();

  return (
    <Box width={128}>
      <Box mb={1}>
        <MediaCover size="large" />
      </Box>
      <Link href="/">
        <Typography className={cn(classes.lineClamp, classes.title)}>
          Мастер Веры в Себя (Новелла)
        </Typography>
      </Link>
    </Box>
  );
};

export default PopularMediaCard;
