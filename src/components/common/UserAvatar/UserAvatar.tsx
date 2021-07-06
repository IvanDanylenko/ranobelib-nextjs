import React, { FC } from 'react';
import Image from 'next/image';

import Box from '@material-ui/core/Box';

import Link from 'src/components/common/Link';

type UserAvatarProps = {
  notClickable?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const getSizeValue = (size: string) => {
  switch (size) {
    case 'small':
      return 36;
    case 'medium':
      return 50;
    case 'large':
    default:
      return 70;
  }
};

const UserAvatar: FC<UserAvatarProps> = ({ notClickable, className, size = 'medium' }) => {
  const sizeValue = getSizeValue(size);

  const Item = (
    <Box css={{ height: sizeValue + 'px' }} className={className}>
      <Image
        src="/images/user-placeholder.png"
        alt="User image"
        width={sizeValue}
        height={sizeValue}
      />
    </Box>
  );

  if (notClickable) return Item;

  return <Link href="link-to-profile">{Item}</Link>;
};

export default UserAvatar;
