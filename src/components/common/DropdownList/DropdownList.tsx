import React, { FC, ReactNode, useRef, useState, useMemo } from 'react';

import cn from 'classnames';

import NextLink from 'next/link';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import useStyles from './useStyles';

export interface DropdownItemType {
  id: number | string;
  label?: string;
  divider?: boolean;
  link?: string;
  icon?: string;
  danger?: boolean;
  startIcon?: ReactNode;
  action?: () => void;
}

interface DropdownListProps {
  content: DropdownItemType[];
}

const DropdownList: FC<DropdownListProps> = ({ content, children }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChooseItem = (action?: () => void) => {
    action && action();
    handleClose();
  };

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
          className={cn(classes.button, { [classes.danger]: danger })}
          startIcon={startIcon}
          onClick={() => handleChooseItem(action)}
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
    <Box>
      <div ref={anchorRef} onClick={handleClick}>
        {children}
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => {
          return (
            <Grow
              {...TransitionProps}
              timeout={100}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>{renderMenu}</MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          );
        }}
      </Popper>
    </Box>
  );
};

export default DropdownList;
