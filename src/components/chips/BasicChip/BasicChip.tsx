import React, { FC } from 'react';
import cn from 'classnames';

import Chip, { ChipProps } from '@material-ui/core/Chip';

import Link from 'src/components/common/Link';

import useStyles from './useStyles';

type BasicChipProps = {
  href?: string;
};

const BasicChip: FC<ChipProps & BasicChipProps> = ({
  size = 'small',
  href,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const Item = (
    <Chip
      size={size}
      classes={{ root: cn(classes.chip, className), clickable: classes.clickable }}
      {...rest}
    />
  );

  if (href) {
    return (
      <Link href={href} underline="none">
        {Item}
      </Link>
    );
  }

  return Item;
};

export default BasicChip;
