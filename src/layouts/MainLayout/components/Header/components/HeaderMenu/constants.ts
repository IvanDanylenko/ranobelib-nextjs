import MenuRounded from '@material-ui/icons/MenuRounded';
import ArrowDropDownRounded from '@material-ui/icons/ArrowDropDownRounded';
import Search from '@material-ui/icons/Search';
import ForumOutlined from '@material-ui/icons/ForumOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import { IUseMenuOption } from 'src/hooks/useMenu/types';
import { catalogContent, moreContent } from '../../menuData';

export const menuItems: IUseMenuOption[] = [
  {
    id: 1,
    label: 'Каталог',
    StartIcon: MenuRounded,
    EndIcon: ArrowDropDownRounded,
    dropdownContent: catalogContent,
    action: () => console.log('Click'),
  },
  {
    id: 2,
    label: 'Поиск',
    link: '#',
    StartIcon: Search,
  },
  {
    id: 3,
    label: 'Форум',
    StartIcon: ForumOutlined,
  },
  {
    id: 4,
    label: 'FAQ',
    StartIcon: HelpOutlineOutlined,
  },
  {
    id: 5,
    StartIcon: MoreHoriz,
    dropdownContent: moreContent,
  },
];
