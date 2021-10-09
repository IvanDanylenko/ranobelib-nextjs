import React, { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

import useStyles from './useStyles';

type LinkProps = {
  href: string;
};

const Link: FC<MuiLinkProps & LinkProps> = ({ children, href, className, ...rest }) => {
  const classes = useStyles();

  return (
    <NextLink href={href} passHref>
      <MuiLink color="textPrimary" className={cn(classes.link, className)} {...rest}>
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
