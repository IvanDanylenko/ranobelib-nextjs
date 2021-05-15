import React, { FC } from 'react';
import { MainLayout } from '@/components/layout';

const HomePage: FC = () => {
  return (
    <MainLayout>
      <div className="container container_offset">
        <div className="page__wrapper page__wrapper_left">
          <div className="section paper">
            <div className="section__body">
              <h2 className="page__title">Обновления популярного ранобэ</h2>
              <div className="hot-media-wrap">
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{
                      backgroundImage: 'url("/images/image_250x350.jpg")',
                    }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 18</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Мастер веры в себя (Новелла)
                  </a>
                </div>
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{
                      backgroundImage: 'url("/images/image_250x350.jpg")',
                    }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 18</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Мастер веры в себя (Новелла)
                  </a>
                </div>
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{
                      backgroundImage: 'url("/images/image_250x350.jpg")',
                    }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 18</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Мастер веры в себя (Новелла)
                  </a>
                </div>
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{
                      backgroundImage: 'url("/images/image_250x350.jpg")',
                    }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 18</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Мастер веры в себя (Новелла)
                  </a>
                </div>
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{
                      backgroundImage: 'url("/images/image_250x350.jpg")',
                    }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 18</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Мастер веры в себя (Новелла)
                  </a>
                </div>
                <div className="hot-media-item">
                  <a
                    href="#"
                    className="media-card"
                    style={{ backgroundImage: 'url("/images/no-image.png")' }}
                  >
                    <div className="media-card__caption">
                      <div className="media-card__title">Том 1 Глава 189</div>
                    </div>
                  </a>
                  <a href="#" className="hot-media-item__name link-default">
                    Путь Великого Правителя (Новелла)
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* section end*/}
          <div className="h-lists">
            <section className="h-lists__section section paper">
              <div className="section__body">
                <div className="page__title">Последние новости</div>
                <div className="h-list-items">
                  <div className="h-list-item">
                    <div className="h-list-item__title text-truncate">
                      <a href="#" className="link-default">
                        Заголовок новости
                      </a>
                    </div>
                    <div className="h-list-item__info">
                      <span className="h-list-item__user">
                        <i className="fa fa-fw fa-user" />
                        <span>viktor</span>
                      </span>
                      <span className="h-list-item__date">2 недели назад</span>
                    </div>
                  </div>
                </div>
                <a href="#" className="link-default">
                  <span>Все новости</span>
                  <i className="fa fa-angle-right fa-fw" />
                </a>
              </div>
            </section>
            <section className="h-lists-section section paper">
              <div className="section__body">
                <div className="page__title">Последние темы форума</div>
                <div className="h-list-items">
                  <div className="h-list-item">
                    <div className="h-list-item__title text-truncate">
                      <a href="#" className="link-default">
                        Заголовок темы
                      </a>
                    </div>
                    <div className="h-list-item__info">
                      <span className="h-list-item__user">
                        <i className="fa fa-fw fa-user" />
                        <span>viktor</span>
                      </span>
                      <span className="h-list-item__date">2 недели назад</span>
                    </div>
                  </div>
                </div>
                <a href="#" className="link-default">
                  <span>Все темы</span>
                  <i className="fa fa-angle-right fa-fw" />
                </a>
              </div>
            </section>
          </div>
          {/* h-lists end */}
          <section className="section paper tabs">
            <div className="section__header section__header_tabs">
              <strong className="section__header-title">Новые главы</strong>
            </div>
            <div className="section__body">
              <div className="updates">
                {/* updates item 1 */}
                <div className="updates__item">
                  <div className="updates__left">
                    <div className="updates__type">Авторский</div>
                    <a href="#">
                      <div
                        className="cover updates__cover"
                        style={{
                          backgroundImage: 'url("/images/image_thumb.jpg")',
                        }}
                      />
                    </a>
                  </div>
                  <div className="updates__right">
                    <div className="updates__header">
                      <div className="updates__header-top">
                        <div className="updates__labels">
                          <div className="m-label m-label_success">новое</div>
                        </div>
                        <h4 className="updates__name text-truncate">
                          <a href="#" className="link-default">
                            Мастер веры в себя (Новелла)
                          </a>
                        </h4>
                      </div>
                      <div className="updates__header-bottom">
                        <div className="updates__date">Сегодня</div>
                      </div>
                    </div>
                    <div className="updates__body">
                      <div className="updates__chapters">
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                      </div>
                      <button className="updates__more">показать еще 1 главу</button>
                    </div>
                  </div>
                </div>
                {/* updates item 2 */}
                <div className="updates__item">
                  <div className="updates__left">
                    <div className="updates__type">Авторский</div>
                    <a href="#">
                      <div
                        className="cover updates__cover"
                        style={{
                          backgroundImage: 'url("/images/image_thumb.jpg")',
                        }}
                      />
                    </a>
                  </div>
                  <div className="updates__right">
                    <div className="updates__header">
                      <div className="updates__header-top">
                        <div className="updates__labels">
                          <div className="m-label m-label_success">новое</div>
                        </div>
                        <h4 className="updates__name text-truncate">
                          <a href="#" className="link-default">
                            Мастер веры в себя (Новелла)
                          </a>
                        </h4>
                      </div>
                      <div className="updates__header-bottom">
                        <div className="updates__date">Сегодня</div>
                      </div>
                    </div>
                    <div className="updates__body">
                      <div className="updates__chapters">
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                        <a href="#" className="updates__chapter">
                          <strong className="updates__chapter-vol">Том 1 Глава 1</strong>
                          <span className="updates__chapter-name text-truncate">
                            Название главы
                          </span>
                        </a>
                      </div>
                      <button className="updates__more">показать еще 1 главу</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* updates end */}
            </div>
          </section>
        </div>
        {/* page__wrapper end*/}
        {/* ASIDE */}
        <aside className="aside aside_right home-sidebar">
          <div className="aside__panel paper top-user-list">
            <h3 className="aside__title">
              <span className="aside__title-inner">Топ активных недели</span>
            </h3>
            <div className="aside__content">
              <div className="top-user">
                <img
                  src="/images/user-placeholder.png"
                  alt="user name"
                  className="top-user__avatar"
                />
                <div className="top-user__body">
                  <div className="top-user__username text-truncate">
                    <a href="#" className="link-default">
                      viktor
                    </a>
                  </div>
                  <div className="top-user__rank">#1</div>
                  <div>
                    <div className="top-user__exp">4056 / 5400</div>
                    <div className="top-user__lvl">Уровень: 20</div>
                  </div>
                  <div className="top-user__bar">
                    <div className="top-user__bar-fill" style={{ width: '91%' }} />
                  </div>
                </div>
              </div>
              {/* top-user end*/}
              <div className="top-user">
                <img
                  src="/images/user-placeholder.png"
                  alt="user name"
                  className="top-user__avatar"
                />
                <div className="top-user__body">
                  <div className="top-user__username text-truncate">
                    <a href="#" className="link-default">
                      viktor
                    </a>
                  </div>
                  <div className="top-user__rank">#1</div>
                  <div>
                    <div className="top-user__exp">4056 / 5400</div>
                    <div className="top-user__lvl">Уровень: 20</div>
                  </div>
                  <div className="top-user__bar">
                    <div className="top-user__bar-fill" style={{ width: '91%' }} />
                  </div>
                </div>
              </div>
              {/* top-user end*/}
              <div className="top-user">
                <img
                  src="/images/user-placeholder.png"
                  alt="user name"
                  className="top-user__avatar"
                />
                <div className="top-user__body">
                  <div className="top-user__username text-truncate">
                    <a href="#" className="link-default">
                      viktor
                    </a>
                  </div>
                  <div className="top-user__rank">#1</div>
                  <div>
                    <div className="top-user__exp">4056 / 5400</div>
                    <div className="top-user__lvl">Уровень: 20</div>
                  </div>
                  <div className="top-user__bar">
                    <div className="top-user__bar-fill" style={{ width: '91%' }} />
                  </div>
                </div>
              </div>
              {/* top-user end*/}
            </div>
          </div>
          <div className="aside__panel paper genre">
            <h3 className="aside__title">
              <span className="aside__title-inner">Жанры</span>
            </h3>
            <div className="aside__content tags">
              <div className="tags__short">
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  гендерная интрига
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
                <a href="#" className="tags__item">
                  арт
                </a>
              </div>
              <div className="tags__more">
                <span>Развернуть</span>
                <i className="fa fa-fw fa-caret-down" />
              </div>
              <div className="tags__more">
                <span>Свернуть</span>
                <i className="fa fa-fw fa-caret-up" />
              </div>
            </div>
          </div>
          <div className="aside__panel paper">
            <h3 className="aside__title">
              <span className="aside__title-inner">Категории</span>
            </h3>
            <div className="aside__content tags">
              <a href="#" className="tags__item">
                Японской
              </a>
              <a href="#" className="tags__item">
                Японской
              </a>
              <a href="#" className="tags__item">
                Японской
              </a>
              <a href="#" className="tags__item">
                Японской
              </a>
              <a href="#" className="tags__item">
                Японской
              </a>
              <a href="#" className="tags__item">
                Японской
              </a>
            </div>
          </div>
          <div className="aside__panel paper">
            <h3 className="aside__title">
              <span className="aside__title-inner">Популярное Ранобэ</span>
            </h3>
            <div>
              <a href="#" className="list-item">
                <div
                  className="list-item__cover"
                  style={{ backgroundImage: 'url("/images/image_thumb.jpg")' }}
                />
                <div className="list-item__body">
                  <h3 className="list-item__title">Мастер веры в себя (Новелла)</h3>
                  <h4 className="list-item__subtitle">
                    <span>1003142</span>
                    <i className="fa fa-eye" />
                  </h4>
                </div>
              </a>
              <a href="#" className="list-item">
                <div
                  className="list-item__cover"
                  style={{ backgroundImage: 'url("/images/image_thumb.jpg")' }}
                />
                <div className="list-item__body">
                  <h3 className="list-item__title">Мастер веры в себя (Новелла)</h3>
                  <h4 className="list-item__subtitle">
                    <span>1003142</span>
                    <i className="fa fa-eye" />
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="aside__panel paper">
            <h3 className="aside__title">
              <span className="aside__title-inner">Новое Ранобэ</span>
            </h3>
            <div>
              <a href="#" className="list-item">
                <div
                  className="list-item__cover"
                  style={{ backgroundImage: 'url("/images/image_thumb.jpg")' }}
                />
                <div className="list-item__body">
                  <h3 className="list-item__title">Мастер веры в себя (Новелла)</h3>
                  <h4 className="list-item__subtitle">
                    <span>1003142</span>
                    <i className="fa fa-eye" />
                  </h4>
                </div>
              </a>
              <a href="#" className="list-item">
                <div
                  className="list-item__cover"
                  style={{ backgroundImage: 'url("/images/image_thumb.jpg")' }}
                />
                <div className="list-item__body">
                  <h3 className="list-item__title">Мастер веры в себя (Новелла)</h3>
                  <h4 className="list-item__subtitle">
                    <span>1003142</span>
                    <i className="fa fa-eye" />
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default HomePage;
