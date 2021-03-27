import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Tippy from "@tippyjs/react"

export default function Header() {
  const catalogDropdownRef = useRef()
  const authorDropdownRef = useRef()

  const handleCatalogDropdownClick = () => {
    catalogDropdownRef.current._tippy.hide()
  }
  const handleAuthorDropdownClick = () => {
    authorDropdownRef.current._tippy.hide()
  }

  return (
    <header className="header">
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
            <Tippy
              placement="bottom-start"
              arrow={false}
              theme="light"
              trigger="click"
              offset={[0, 7]}
              duration="200"
              animation="shift-toward-subtle"
              interactive
              ref={catalogDropdownRef}
              content={
                <div className="menu">
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Японской
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Корейской
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Китайской
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Английской
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Авторской
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Фанфиков
                  </a>
                  <div className="menu__divider"></div>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Весь
                  </a>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleCatalogDropdownClick}
                  >
                    Случайный тайтл
                  </a>
                </div>
              }
            >
              <div className="header-menu__item dropdown">
                <span>
                  <i className="fa fa-bars" />
                  <span>Каталог</span>
                  <i className="fa fa-caret-down" />
                </span>
              </div>
            </Tippy>
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
          <button className="hidden button header__sign header__sign-in">
            Вход
          </button>
          <a href="#" className="hidden button header__sign header__sign-up">
            Регистрация
          </a>
          <div className="hidden header-right-menu__item drowdown header-button">
            <div className="header-button__icon tooltip">
              <i className="fa fa-moon-o" />
            </div>
          </div>
          {/* USERS WITH REGISTRATION TEMPLATE*/}
          <div className="header-right-menu__item drowdown header-button">
            <Tippy
              placement="bottom-end"
              arrow={false}
              theme="light"
              trigger="click"
              hideOnClick={true}
              offset={[0, 7]}
              duration="200"
              animation="shift-toward-subtle"
              interactive
              ref={authorDropdownRef}
              content={
                <div className="menu">
                  <Link href="/novel/create">
                    <a
                      className="menu__item"
                      onClick={handleAuthorDropdownClick}
                    >
                      <i className="fa fa-plus fa-fw"></i>
                      Добавить мангу
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleAuthorDropdownClick}
                  >
                    <i className="fa fa-users fa-fw"></i>
                    Добавить команду
                  </a>
                  <a
                    onClick={handleAuthorDropdownClick}
                    href="#"
                    className="menu__item"
                  >
                    <i className="fa fa-book fa-fw"></i>
                    Добавить автора
                  </a>
                  <div className="menu__divider"></div>
                  <a
                    href="#"
                    className="menu__item"
                    onClick={handleAuthorDropdownClick}
                  >
                    <i className="fa fa-list-alt fa-fw"></i>
                    Мои добавления
                    <span className="menu__label">0</span>
                  </a>
                </div>
              }
            >
              <div className="header-button__icon">
                <i className="fa fa-pencil" />
              </div>
            </Tippy>
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
            <Image
              className="header-right-menu__avatar"
              src="/images/user-placeholder.png"
              alt="User image"
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
