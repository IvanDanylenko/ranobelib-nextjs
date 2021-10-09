import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import Create from '@material-ui/icons/Create';
import Notifications from '@material-ui/icons/Notifications';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

import { IUseMenuOption } from 'src/hooks/useMenu/types';
import { addContent } from '../../menuData';

export const notAuthMenuItems: IUseMenuOption[] = [
  {
    id: 1,
    StartIcon: Brightness2Outlined,
  },
];

export const authMenuItems: IUseMenuOption[] = [
  {
    id: 1,
    StartIcon: Create,
    dropdownContent: addContent,
  },
  {
    id: 2,
    StartIcon: Notifications,
  },
  {
    id: 3,
    StartIcon: BookmarkBorder,
  },
];
