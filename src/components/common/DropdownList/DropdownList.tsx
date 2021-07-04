import React, { FC, ReactNode, ReactElement, useState, useMemo } from 'react';

import cn from 'classnames';

import Tippy from '@tippyjs/react';

import NextLink from 'next/link';
import { PopperPlacementType } from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import useStyles from './useStyles';

import 'tippy.js/animations/shift-toward-subtle.css';

export interface DropdownContentType {
  id: number | string;
  label?: string | ReactNode;
  divider?: boolean;
  link?: string;
  icon?: string;
  danger?: boolean;
  startIcon?: ReactNode;
  action?: () => void;
}

interface DropdownListProps {
  content: DropdownContentType[];
  placement?: PopperPlacementType;
  children: ReactElement;
}

const DropdownList: FC<DropdownListProps> = ({ children, content, placement = 'bottom-start' }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const renderMenu = useMemo(() => {
    return content.map(({ id, label, link, divider, danger, startIcon, action }) => {
      if (divider)
        return (
          <Box key={id} p={1}>
            <Divider />
          </Box>
        );

      const Item = (
        <Button
          key={id}
          className={cn(classes.button, { [classes.danger]: danger })}
          startIcon={startIcon}
          onClick={() => action && action()}
          disableRipple
          fullWidth
        >
          {label}
        </Button>
      );

      const LinkItem = link && (
        <NextLink key={id} href={link} passHref>
          {Item}
        </NextLink>
      );

      return <MenuItem key={id}>{LinkItem ? LinkItem : Item}</MenuItem>;
    });
  }, [content]);

  return (
    <Tippy
      visible={open}
      placement={placement}
      arrow={false}
      theme="light"
      offset={[0, 7]}
      duration={150}
      animation="shift-toward-subtle"
      interactive
      content={
        <Paper>
          <ClickAwayListener mouseEvent={open ? 'onClick' : false} onClickAway={handleClose}>
            <MenuList className={classes.list} onClick={handleClose}>
              {renderMenu}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      }
    >
      <Box onClick={handleClick}>{children}</Box>
    </Tippy>
  );
};

export default DropdownList;
