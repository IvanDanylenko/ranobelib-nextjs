import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';

import useMenu from 'src/hooks/useMenu/useMenu';

import { menuItems } from './constants';

const HeaderMenu: FC = () => {
  const { renderMenu } = useMenu(menuItems);

  return (
    <Grid container component="nav" alignItems="center">
      {renderMenu}
    </Grid>
  );
};

export default HeaderMenu;
