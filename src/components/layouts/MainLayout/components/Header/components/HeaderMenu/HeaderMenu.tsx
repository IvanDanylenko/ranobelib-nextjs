import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';

import MenuRounded from '@material-ui/icons/MenuRounded';
import ArrowDropDownRounded from '@material-ui/icons/ArrowDropDownRounded';
import Search from '@material-ui/icons/Search';
import ForumOutlined from '@material-ui/icons/ForumOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import useMenu from 'src/hooks/useMenu/useMenu';

import { catalogContent, moreContent } from '../../menuData';

const HeaderMenu: FC = () => {
  const menu = [
    {
      id: 1,
      label: 'Каталог',
      startIcon: <MenuRounded />,
      endIcon: <ArrowDropDownRounded />,
      dropdownContent: catalogContent,
      action: () => console.log('Click'),
    },
    {
      id: 2,
      label: 'Поиск',
      link: '#',
      startIcon: <Search />,
    },
    {
      id: 3,
      label: 'Форум',
      startIcon: <ForumOutlined />,
    },
    {
      id: 4,
      label: 'FAQ',
      startIcon: <HelpOutlineOutlined />,
    },
    {
      id: 5,
      startIcon: <MoreHoriz />,
      dropdownContent: moreContent,
    },
  ];

  const { renderMenu } = useMenu(menu);

  return (
    <Grid container component="nav" alignItems="center">
      {renderMenu}
    </Grid>
  );
};

export default HeaderMenu;
