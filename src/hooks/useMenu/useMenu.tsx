import React, { useMemo } from 'react';
import cn from 'classnames';

import Button from '@material-ui/core/Button';

import DropdownList from 'src/components/common/DropdownList';
import Link from 'src/components/utils/Link';

import { IUseMenuOption } from './types';
import useStyles from './useStyles';

const useMenu = (options: IUseMenuOption[]) => {
  if (!options) return {};

  const classes = useStyles();

  const renderMenu = useMemo(() => {
    return options.map(({ id, label, StartIcon, EndIcon, link, dropdownContent, action }) => {
      const Item = (
        <Button
          key={id}
          classes={{
            root: cn(classes.button, { [classes.iconButton]: !label }),
            startIcon: classes.startIcon,
            iconSizeMedium: cn({ [classes.iconSizeMedium]: label }),
          }}
          startIcon={StartIcon && <StartIcon />}
          endIcon={EndIcon && <EndIcon />}
          onClick={() => action && action()}
        >
          {label}
        </Button>
      );

      if (link) {
        return (
          <Link key={id} href={link}>
            {Item}
          </Link>
        );
      }

      if (dropdownContent) {
        return (
          <DropdownList key={id} content={dropdownContent}>
            {Item}
          </DropdownList>
        );
      }

      return Item;
    });
  }, [options]);

  return { renderMenu };
};

export default useMenu;
