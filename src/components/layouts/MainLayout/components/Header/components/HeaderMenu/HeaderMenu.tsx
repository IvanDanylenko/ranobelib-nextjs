import React, { FC } from 'react';
import NextLink from 'next/link';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import MenuRounded from '@material-ui/icons/MenuRounded';
import ArrowDropDownRounded from '@material-ui/icons/ArrowDropDownRounded';
import Search from '@material-ui/icons/Search';
import ForumOutlined from '@material-ui/icons/ForumOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import useMenu from 'src/hooks/useMenu/useMenu';

// temporary
const catalogDropdownContent = [
  {
    id: 1,
    label: 'Японской',
  },
  {
    id: 2,
    divider: true,
  },
  {
    id: 3,
    label: 'Весь',
    startIcon: <Search />,
    danger: true,
  },
  {
    id: 4,
    label: 'Случайный тайтл',
    danger: true,
  },
];

const HeaderMenu: FC = () => {
  const menu = [
    {
      id: 1,
      label: 'Каталог',
      startIcon: <MenuRounded />,
      endIcon: <ArrowDropDownRounded />,
      dropdownContent: catalogDropdownContent,
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
      dropdownContent: catalogDropdownContent,
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
