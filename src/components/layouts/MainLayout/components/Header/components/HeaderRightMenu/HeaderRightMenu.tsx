import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import Create from '@material-ui/icons/Create';
import Notifications from '@material-ui/icons/Notifications';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

import useMenu from 'src/hooks/useMenu';

import useStyles from './useStyles';

const menu = [
  {
    id: 1,
    startIcon: <Brightness2Outlined />,
  },
  {
    id: 2,
    startIcon: <Create />,
  },
  {
    id: 3,
    startIcon: <Notifications />,
  },
  {
    id: 4,
    startIcon: <BookmarkBorder />,
  },
];

const HeaderRightMenu: FC = () => {
  const classes = useStyles();

  const { renderMenu } = useMenu(menu);

  return (
    <Grid container alignItems="center">
      <Button href="/login" className={classes.button}>
        Вход
      </Button>
      <Button href="/register" variant="outlined" className={classes.button}>
        Регистрация
      </Button>
      {renderMenu}
    </Grid>
  );
};

export default HeaderRightMenu;
