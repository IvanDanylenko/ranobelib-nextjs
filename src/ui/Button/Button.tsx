import React, { FC } from 'react';

import MuiButton, { ButtonProps } from '@material-ui/core/Button';

import NextLink from 'next/link';
import classnames from 'classnames';
import useStyles from './useStyles';

interface IHeaderMenuButton {
  regular?: boolean;
}

const HeaderMenuButton: FC<IHeaderMenuButton & ButtonProps> = ({
  children,
  startIcon,
  href,
  regular,
  disableRipple = true,
  ...rest
}) => {
  const classes = useStyles();

  const button = (
    <MuiButton
      classes={{
        root: classnames(classes.root, { [classes.rootIcon]: startIcon && !children }),
        outlined: classes.outlined,
        label: classnames(classes.label, { [classes.regular]: regular }),
        startIcon: classes.startIcon,
        endIcon: classes.endIcon,
      }}
      startIcon={startIcon}
      disableRipple={disableRipple}
      {...rest}
    >
      {children}
    </MuiButton>
  );

  return href ? (
    <NextLink href={href} passHref>
      {button}
    </NextLink>
  ) : (
    button
  );
};

export default HeaderMenuButton;
