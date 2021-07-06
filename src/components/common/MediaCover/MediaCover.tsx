import React, { FC } from 'react';
import Image from 'next/image';

import Box from '@material-ui/core/Box';

import Link from 'src/components/common/Link';

type MediaCoverProps = {
  notClickable?: boolean;
  size?: 'small' | 'medium' | 'large';
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

const MediaCover: FC<MediaCoverProps> = ({ notClickable, size = 'medium' }) => {
  const sizeValues = getSizeValues(size);

  const Item = (
    <Box css={{ height: sizeValues[1] + 'px' }}>
      <Image
        src="/images/image_250x350.jpg"
        alt="Media cover"
        width={sizeValues[0]}
        height={sizeValues[1]}
      />
    </Box>
  );

  if (notClickable) return Item;

  return <Link href="link-to-media-page">{Item}</Link>;
};

export default MediaCover;
