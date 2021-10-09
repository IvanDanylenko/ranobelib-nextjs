import { DropdownContentType } from 'src/components/common/DropdownList';

import MailOutline from '@material-ui/icons/MailOutline';
import Add from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications';
import Bookmark from '@material-ui/icons/Bookmark';
import Person from '@material-ui/icons/Person';
import Block from '@material-ui/icons/Block';
import Settings from '@material-ui/icons/Settings';
import Mail from '@material-ui/icons/Mail';
import ExitToApp from '@material-ui/icons/ExitToApp';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Shuffle from '@material-ui/icons/Shuffle';
import MenuBook from '@material-ui/icons/MenuBook';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

import { Newspaper, Chat, AccountRemove } from 'src/assets/icons';

export const catalogContent: DropdownContentType[] = [
  {
    id: 1,
    label: 'Японской',
  },
  {
    id: 2,
    label: 'Корейской',
  },
  {
    id: 3,
    label: 'Китайской',
  },
  {
    id: 4,
    label: 'Английской',
  },
  {
    id: 5,
    label: 'Авторской',
  },
  {
    id: 6,
    label: 'Фанфиков',
  },
  {
    id: 7,
    divider: true,
  },
  {
    id: 8,
    label: 'Весь',
  },
  {
    id: 9,
    label: 'Случайный тайтл',
  },
];

export const moreContent: DropdownContentType[] = [
  {
    id: 1,
    label: 'Новости',
    startIcon: <Newspaper />,
  },
  {
    id: 2,
    label: 'Контакты',
    startIcon: <MailOutline />,
  },
  {
    id: 3,
    label: 'Рандом',
    startIcon: <Shuffle />,
  },
];

export const addContent: DropdownContentType[] = [
  {
    id: 1,
    label: 'Добавить мангу',
    startIcon: <Add />,
  },
  {
    id: 2,
    label: 'Добавить команду',
    startIcon: <PeopleAlt />,
  },
  {
    id: 3,
    label: 'Добавить автора',
    startIcon: <MenuBook />,
  },
  {
    id: 4,
    divider: true,
  },
  {
    id: 5,
    label: 'Мои добавления 1',
    startIcon: <LibraryBooks />,
  },
];

export const userMenuContent: DropdownContentType[] = [
  {
    id: 1,
    label: 'Профиль пользователя',
    link: '/',
    startIcon: <Person />,
  },
  {
    id: 2,
    label: 'Мои закладки',
    link: '/',
    startIcon: <Bookmark />,
  },
  {
    id: 3,
    label: 'Уведомления',
    startIcon: <Notifications />,
  },
  {
    id: 4,
    label: 'Мои комментарии',
    startIcon: <Chat />,
  },
  {
    id: 5,
    label: 'Личные сообщения',
    startIcon: <Mail />,
  },
  {
    id: 6,
    label: 'Список друзей',
    startIcon: <PeopleAlt />,
  },
  {
    id: 7,
    label: 'История банов',
    startIcon: <Block />,
  },
  {
    id: 8,
    label: 'Игнор-лист',
    startIcon: <AccountRemove />,
  },
  {
    id: 9,
    divider: true,
  },
  {
    id: 10,
    label: 'Настройки',
    startIcon: <Settings />,
  },
  {
    id: 11,
    label: 'Выход',
    startIcon: <ExitToApp />,
    danger: true,
  },
];
