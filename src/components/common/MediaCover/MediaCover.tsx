import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import Box from '@material-ui/core/Box';

import Link from 'src/components/utils/Link';

import useStyles from './useStyles';

type MediaCoverProps = {
  notClickable?: boolean;
  size?: 'small' | 'medium' | 'large';
  link?: string;
  src?: string;
  alt?: string;
  labelTop?: ReactNode;
  labelBottom?: ReactNode;
};

const getSizeValues = (size: string) => {
  switch (size) {
    case 'small':
      return [65, 96];
    case 'medium':
      return [100, 140];
    case 'large':
    default:
      return [128, 180];
  }
};

const MediaCover: FC<MediaCoverProps> = ({
  labelTop,
  labelBottom,
  notClickable,
  src = '/images/image_250x350.jpg',
  link = '#',
  alt = 'Media cover',
  size = 'medium',
}) => {
  const classes = useStyles();

  const sizeValues = getSizeValues(size);

  const Item = (
    // fix incorect height in flexbox
    <Box height={sizeValues[1]} position="relative">
      <Box className={cn(classes.label, classes.labelTop)}>{labelTop}</Box>
      <Image src={src} alt={alt} width={sizeValues[0]} height={sizeValues[1]} />
      <Box className={cn(classes.label, classes.labelBottom)}>{labelBottom}</Box>
    </Box>
  );

  if (notClickable) return Item;

  return <Link href={link}>{Item}</Link>;
};

export default MediaCover;
