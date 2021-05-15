import React, { FC } from 'react';
import Link from 'next/link';

const TemporaryNavigation: FC = () => {
  return (
    <div id="page-navigation" className="paper">
      <Link href="/">
        <a className="link-default">Главная</a>
      </Link>
      <Link href="/catalog">
        <a className="link-default">Каталог</a>
      </Link>

      <Link href="/novel-name">
        <a className="link-default">Новелла</a>
      </Link>
      <Link href="/novel/create">
        <a className="link-default">Cоздать новеллу</a>
      </Link>
      <Link href="/profile">
        <a className="link-default">Профиль пользователя</a>
      </Link>
      <Link href="/novel-name/v1/c1">
        <a className="link-default">Читалка</a>
      </Link>
      <Link href="/404">
        <a className="link-default">404</a>
      </Link>
      <Link href="/test">
        <a className="link-default">Тестовая</a>
      </Link>
      <style jsx>{`
        #page-navigation {
          position: fixed;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          padding: 8px 20px;
          display: flex;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
          border: 1px solid black;
        }
        #page-navigation a {
          white-space: nowrap;
          position: relative;
        }
        #page-navigation a:not(:last-child) {
          margin-right: 15px;
        }
        #page-navigation a:not(:last-child):after {
          content: '';
          display: block;
          position: absolute;
          right: -10px;
          top: 50%;
          width: 4px;
          height: 1px;
          border-radius: 3px;
          background-color: #212529;
        }
      `}</style>
    </div>
  );
};

export default TemporaryNavigation;
