import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import TippyDropdown from '@/components/TippyDropdown';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Modal from '@/lib/modal';

const Header: FC = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const closeLoginModal = () => setLoginModalIsOpen(false);
  const closeRegisterModal = () => setRegisterModalIsOpen(false);

  const openRegisterModal = () => {
    setLoginModalIsOpen(false);
    setRegisterModalIsOpen(true);
  };

  const catalogDropdownContent = [
    [
      {
        title: 'Японской',
      },
      {
        title: 'Корейской',
      },
      {
        title: 'Китайской',
      },
      {
        title: 'Английской',
      },
      {
        title: 'Авторской',
      },
      {
        title: 'Фанфиков',
      },
    ],
    [
      {
        title: 'Весь',
      },
      {
        title: 'Случайный тайтл',
      },
    ],
  ];
  const addDropdownContent = [
    [
      {
        href: '/novel/create',
        icon: 'fa-plus',
        title: 'Добавить мангу',
      },
      {
        icon: 'fa-users',
        title: 'Добавить команду',
      },
      {
        icon: 'fa-book',
        title: 'Добавить автора',
      },
    ],
    [
      {
        icon: 'fa-list-alt',
        title: 'Мои добавления',
        label: '1',
      },
    ],
  ];
  const userMenuDropdownContent = [
    [
      {
        href: '/profile',
        icon: 'fa-user',
        title: 'Профиль пользователя',
      },
      {
        icon: 'fa-bookmark',
        title: 'Мои закладки',
      },
      {
        icon: 'fa-bell',
        title: 'Уведомления',
      },
      {
        icon: 'fa-comment',
        title: 'Мои комментарии',
      },
      {
        icon: 'fa-envelope',
        title: 'Личные сообщения',
      },
      {
        icon: 'fa-users',
        title: 'Список друзей',
      },
      {
        icon: 'fa-ban',
        title: 'История банов',
      },
      {
        icon: 'fa-user-times',
        title: 'Игнор-лист',
      },
    ],
    [
      {
        icon: 'fa-cog',
        title: 'Настройки',
      },
      {
        icon: 'fa-sign-out',
        title: 'Выход',
        addClass: 'text-danger',
        action: console.log('HI'),
      },
    ],
  ];

  return (
    <header className="header">
      {!isAuth && (
        <>
          <Modal
            isOpen={loginModalIsOpen}
            closeTimeoutMS={150}
            onRequestClose={closeLoginModal}
            overlayClassName="modal"
            className="modal__inner"
          >
            <Login closeModal={closeLoginModal} openRegisterModal={openRegisterModal} />
          </Modal>
          <Modal
            isOpen={registerModalIsOpen}
            closeTimeoutMS={150}
            onRequestClose={closeRegisterModal}
            overlayClassName="modal"
            className="modal__inner"
          >
            <Register closeModal={closeRegisterModal} />
          </Modal>
        </>
      )}
      <div className="header__inner">
        <div className="header__item header__left">
          <Link href="/">
            <a>
              <Image
                src="/images/ranobe.png"
                alt="RanobeLib"
                width={145}
                height={45}
                quality={100}
              />
            </a>
          </Link>
        </div>
        <nav className="header__item header__menu">
          <div className="header-menu">
            <TippyDropdown placement="bottom-start" content={catalogDropdownContent}>
              <div className="header-menu__item dropdown">
                <span>
                  <i className="fa fa-bars" />
                  <span>Каталог</span>
                  <i className="fa fa-caret-down" />
                </span>
              </div>
            </TippyDropdown>
            <div className="header-menu__item">
              <span>
                <i className="fa fa-search" />
                <span>Поиск</span>
              </span>
            </div>
            <div className="header-menu__item">
              <span>
                <i className="fa fa-comments-o" />
                <span>Форум</span>
              </span>
            </div>
            <div className="header-menu__item">
              <span>
                <i className="fa fa-question-circle" />
                <span>FAQ</span>
              </span>
            </div>
            <div className="header-menu__item drowdown header-button">
              <div className="header-button__icon">
                <i className="fa fa-ellipsis-h" />
              </div>
            </div>
          </div>
        </nav>

        <div className="header__item header-right-menu">
          {/* UNREGISTERED USERS TEMPLATE */}
          {!isAuth && (
            <>
              <button
                className="button header__sign header__sign-in"
                onClick={() => setLoginModalIsOpen(true)}
              >
                Вход
              </button>
              <button
                className="button header__sign header__sign-up"
                onClick={() => setRegisterModalIsOpen(true)}
              >
                Регистрация
              </button>
              {/* <Link href="/register">
                <a className="button header__sign header__sign-up">
                  Регистрация
                </a>
              </Link> */}
              <div className="header-right-menu__item drowdown header-button">
                <div className="header-button__icon tooltip">
                  <i className="fa fa-moon-o" />
                </div>
              </div>
            </>
          )}

          {/* USERS WITH REGISTRATION TEMPLATE*/}
          {isAuth && (
            <>
              <div className="header-right-menu__item drowdown header-button">
                <TippyDropdown placement="bottom-end" content={addDropdownContent}>
                  <div className="header-button__icon">
                    <i className="fa fa-pencil" />
                  </div>
                </TippyDropdown>
              </div>
              <div className="header-right-menu__item drowdown header-button">
                <div className="header-button__icon tooltip">
                  <i className="fa fa-bell" />
                </div>
              </div>
              <div className="header-right-menu__item drowdown header-button">
                <div className="header-button__icon tooltip">
                  <i className="fa fa-bookmark-o" />
                </div>
              </div>
              <div className="header-right-menu__item drowdown">
                <TippyDropdown placement="bottom-end" content={userMenuDropdownContent}>
                  <div>
                    <Image
                      className="header-right-menu__avatar"
                      src="/images/user-placeholder.png"
                      alt="User image"
                      width={36}
                      height={36}
                    />
                  </div>
                </TippyDropdown>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
