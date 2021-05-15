import React, { FC } from 'react';

const HeaderReader: FC = () => {
  return (
    <header className="header header_reader">
      <div className="reader-header__wrapper">
        <div className="reader-header-action reader-header-action_icon">
          <i className="fa fa-bars fa-fw"></i>
        </div>
        <a href="#" className="reader-header-action reader-header-action_full">
          <div className="reader-header-action__title text-truncate">
            SSS-Class Suicide Hunter (Novel)
          </div>
          <div className="reader-header-action__text text-truncate">
            Охотник-самоубийца SSS-класса (Новелла)
          </div>
        </a>
        <div className="reader-header-actions">
          <a href="#" className="reader-header-action reader-header-action_icon">
            <i className="fa fa-angle-left fa-lg"></i>
          </a>
          <div className="reader-header-action">
            <div className="reader-header-action__title text-truncate">Оглавление</div>
            <div className="reader-header-action__text text-truncate">Том 1 Глава 22</div>
          </div>
          <a href="#" className="reader-header-action reader-header-action_icon">
            <i className="fa fa-angle-right fa-lg"></i>
          </a>
        </div>
        <div className="reader-header-actions reader-header-actions_right">
          <div className="reader-header-action reader-header-action_icon">
            <i className="fa fa-bookmark"></i>
          </div>
          <div className="reader-header-action reader-header-action_icon">
            <i className="fa fa-exclamation"></i>
          </div>
          <div className="reader-header-action reader-header-action_icon">
            <i className="fa fa-cog"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderReader;
