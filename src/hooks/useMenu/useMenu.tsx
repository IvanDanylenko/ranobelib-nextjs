import React, { useMemo, ReactNode } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import Button from '@material-ui/core/Button';
import DropdownList, { DropdownContentType } from 'src/components/common/DropdownList';
import useStyles from './useStyles';

type optionType = {
  id: number | string;
  label?: string | ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  link?: string;
  dropdownContent?: DropdownContentType[];
  action?: () => void;
};

const useMenu = (options: optionType[]) => {
  if (!options) return {};

  const classes = useStyles();

  const renderMenu = useMemo(() => {
    return options.map(({ id, label, startIcon, endIcon, link, dropdownContent, action }) => {
      const Item = (
        <Button
          key={id}
          classes={{
            root: cn(classes.button, { [classes.iconButton]: !label }),
            startIcon: classes.startIcon,
            iconSizeMedium: cn({ [classes.iconSizeMedium]: label }),
          }}
          startIcon={startIcon}
          endIcon={endIcon}
          onClick={() => action && action()}
        >
          {label}
        </Button>
      );

      if (link) {
        return (
          <NextLink key={id} href={link} passHref>
            {Item}
          </NextLink>
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
