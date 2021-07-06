import React, { FC } from 'react';
import NextLink from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

type LinkProps = {
  href: string;
};

const Link: FC<MuiLinkProps & LinkProps> = ({ children, href, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink {...rest}>{children}</MuiLink>
    </NextLink>
  );
};

export default Link;
