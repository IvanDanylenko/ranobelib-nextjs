import React, { FC, useState, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import Create from '@material-ui/icons/Create';
import Notifications from '@material-ui/icons/Notifications';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

import DropdownList from 'src/components/common/DropdownList';
import UserAvatar from 'src/components/common/UserAvatar';

import useMenu from 'src/hooks/useMenu';

import useStyles from './useStyles';

import { addContent, userMenuContent } from '../../menuData';

const HeaderRightMenu: FC = () => {
  const classes = useStyles();

  const [isAuth, setIsAuth] = useState(true);

  userMenuContent.forEach(
    (item) => item.label === 'Выход' && (item.action = () => setIsAuth(false)),
  );

  const notAuthMenu = [
    {
      id: 1,
      startIcon: <Brightness2Outlined />,
    },
  ];

  const authMenu = [
    {
      id: 1,
      startIcon: <Create />,
      dropdownContent: addContent,
    },
    {
      id: 2,
      startIcon: <Notifications />,
    },
    {
      id: 3,
      startIcon: <BookmarkBorder />,
    },
  ];

  const { renderMenu: renderNotAuthMenuItems } = useMenu(notAuthMenu);

  const { renderMenu: renderAuthMenuItems } = useMenu(authMenu);

  const renderNotAuthMenu = useMemo(() => {
    return (
      <>
        <Button onClick={() => setIsAuth(true)} className={classes.button}>
          Вход
        </Button>
        <Button onClick={() => setIsAuth(true)} variant="outlined" className={classes.button}>
          Регистрация
        </Button>
        {renderNotAuthMenuItems}
      </>
    );
  }, [isAuth]);

  const renderAuthMenu = useMemo(() => {
    return (
      <>
        {renderAuthMenuItems}
        <DropdownList content={userMenuContent} placement="bottom-end">
          <UserAvatar className={classes.userAvatar} size="small" notClickable />
        </DropdownList>
      </>
    );
  }, [isAuth]);

  return (
    <Grid container alignItems="center">
      {isAuth ? renderAuthMenu : renderNotAuthMenu}
    </Grid>
  );
};

export default HeaderRightMenu;
