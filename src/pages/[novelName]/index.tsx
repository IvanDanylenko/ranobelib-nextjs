import React, { FC } from 'react';
import { MainLayout } from '@/components/layout';

const NovelPage: FC = () => {
  return (
    <MainLayout>
      <div
        className="media-background"
        style={{
          backgroundImage: 'url("/images/novel-single-cover-bg.jpg")',
        }}
      />
      <div className="container container_responsive">
        <div className="media-container">
          <div className="media-sidebar">
            <div className="media-sidebar__cover paper section">
              <img src="/images/image_250x350.jpg" alt="Мастер Веры в Себя (Novel)" />
              <div className="media-sidebar-actions">
                <a href="#" className="media-sidebar-actions__item">
                  <i className="fa fa-rss" />
                </a>
                <div className="media-sidebar-actions__item">
                  <i className="fa fa-exclamation-triangle" />
                </div>
                <a href="#" className="media-sidebar-actions__item">
                  <i className="fa fa-plus-square" />
                </a>
                <a href="#" className="media-sidebar-actions__item">
                  <i className="fa fa-pencil" />
                </a>
              </div>
            </div>
            <div className="media-sidebar__buttons section">
              <a href="#" className="button button_block button_primary">
                Начать читать
              </a>
              <button className="button button_block button_primary button_label">
                <i className="fa fa-folder icon" />
                <span className="text-truncate">Добавить в список</span>
                <i className="fa fa-chevron-down icon" />
              </button>
            </div>
            <div className="media-info-list paper">
              <a href="#" className="media-info-list__item" target="_blank">
                <div className="media-info-list__title">Тип</div>
                <div className="media-info-list__value">Авторский</div>
              </a>
              <div className="media-info-list__item">
                <div className="media-info-list__title">Формат выпуска</div>
                <div className="media-info-list__value">Веб</div>
              </div>
              <a href="#" className="media-info-list__item" target="_blank">
                <div className="media-info-list__title">Год релиза</div>
                <div className="media-info-list__value">2021</div>
              </a>
              <a href="#" className="media-info-list__item" target="_blank">
                <div className="media-info-list__title">Статус тайтла</div>
                <div className="media-info-list__value">Онгоинг</div>
              </a>
              <a href="#" className="media-info-list__item" target="_blank">
                <div className="media-info-list__title">Статус перевода</div>
                <div className="media-info-list__value">Продолжается</div>
              </a>
              <div className="media-info-list__item">
                <div className="media-info-list__title">Автор</div>
                <div className="media-info-list__value">Arthur Sparrow</div>
              </div>
              <div className="media-info-list__item">
                <div className="media-info-list__title">Просмотров</div>
                <div className="media-info-list__value">273</div>
              </div>
              <div className="media-info-list__item">
                <div className="media-info-list__title">Загружено глав</div>
                <div className="media-info-list__value">15</div>
              </div>
            </div>
          </div>
          <div className="media-content media-content_side">
            <div className="media-name section">
              <div className="media-name__body">
                <div className="media-name__main text-truncate">Мастер Веры в Себя (Новелла)</div>
                <div className="media-name__alt text-truncate">Master of Self-Belief</div>
              </div>
              <div className="media-rating-wrap">
                <div className="media-rating">
                  <i className="fa fa-star" />
                  <div className="media-rating__value">5</div>
                  <div className="media-rating__votes">3</div>
                </div>
                <button className="media-rating-button button button_sm button_white">
                  <i className="fa fa-star-o" />
                  <span>Оценить</span>
                </button>
              </div>
            </div>
            <div className="tabs paper">
              <div className="media-tabs">
                <div className="tabs__wrapper">
                  <ul className="tabs__list">
                    <li className="tabs__item tabs__item_active">Информация</li>
                    <li className="tabs__item">Главы</li>
                    <li className="tabs__item">Комментарии</li>
                    <li className="tabs__item">Обсуждения</li>
                    <div
                      className="tabs__line"
                      style={{ width: 90, transform: 'translateX(0px)' }}
                    />
                  </ul>
                </div>
              </div>
              {/* START: info */}
              <div className="tabs__content">
                <div className="media-section media-section_info">
                  <div className="media-description media-description_short">
                    <div className="media-description__text">
                      После смерти младшей сестры Ки Чжен По, его родители стали слишком сильно
                      опекать своего уже единственного ребёнка, не понимая, что таким образом только
                      ограничивали его во всех планах.
                      <br />
                      <br />
                      Услышав, что компания "Новокорп" анонсировали первую игру в виртуальной
                      реальности, которая давала чувство полного погружения, ГГ понял, что это его
                      единственный шанс выбраться из этого унылого мира.
                      <br />
                      <br />
                      Но он ещё не понимал, что его мир был не таким уж и плохим местом, так как по
                      ошибке системы его перенесло в самую опасную точку континента, где каждая
                      букашка могла за секунды убить паренька.
                      <br />
                      <br />
                      Да и вообще оказалось, что это и не игра вовсе. Но наш юный друг не зная об
                      этом, слепо верил в своё бессмертие и искал ещё больше риска и опасности, за
                      все годы, которые он не мог это сделать в реальном мире.
                    </div>
                    <button className="media-description__expand">Подробнее...</button>
                  </div>
                  <div className="media-tags">
                    <a href="#" className="media-tags__item">
                      фэнтези
                    </a>
                    <a href="#" className="media-tags__item">
                      боевые искусства
                    </a>
                    <a href="#" className="media-tags__item">
                      приключения
                    </a>
                    <a href="#" className="media-tags__item">
                      драма
                    </a>
                    <a href="#" className="media-tags__item">
                      сэйнэн
                    </a>
                    <a href="#" className="media-tags__item">
                      ЛитРПГ
                    </a>
                    <a href="#" className="media-tags__item">
                      Выживание
                    </a>
                    <a href="#" className="media-tags__item">
                      ГГ мужчина
                    </a>
                    <a href="#" className="media-tags__item">
                      Видеоигры
                    </a>
                    <div className="media-tags__item media-tags__item_more">
                      <i className="fa fa-ellipsis-h" />
                    </div>
                  </div>
                </div>
                <div className="media-section media-section_teams">
                  <div className="media-section__head">
                    <div className="media-section__title">Переводчики</div>
                  </div>
                  <div className="team-list">
                    <a href="#" className="team-list__item">
                      <div
                        className="team-list__cover"
                        style={{
                          backgroundImage: 'url("/images/no-image.png")',
                        }}
                      />
                      <div className="team-list__name">
                        <span>Артур Спароу</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="media-section media-section_slider">
                  <div className="media-section__head">
                    <div className="media-section__title">
                      <span>Похожее</span>
                      <a href="#">добавить ещё</a>
                    </div>
                    <div className="media-slider-arrows">
                      <div className="media-slider-arrows__arrow">
                        <i className="fa fa-chevron-left" />
                      </div>
                      <div className="media-slider-arrows__arrow">
                        <i className="fa fa-chevron-right" />
                      </div>
                    </div>
                  </div>
                  <div className="media-slider">
                    <div className="media-slider__wrap">
                      <div className="media-slider__item">
                        <a href="#" className="list-item list-item_inline">
                          <div
                            className="list-item__cover"
                            style={{
                              backgroundImage: 'url("/images/image_thumb.jpg")',
                            }}
                          />
                          <div className="list-item__body">
                            <div className="list-item__head">Схож по жанрам</div>
                            <div className="list-item__name">Мастер Веры в Себя (Новелла)</div>
                            <div className="list-item__meta">
                              <span>Авторский</span>
                              <span>Онгоинг</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="media-slider__item">
                        <a href="#" className="list-item list-item_inline">
                          <div
                            className="list-item__cover"
                            style={{
                              backgroundImage: 'url("/images/image_thumb.jpg")',
                            }}
                          />
                          <div className="list-item__body">
                            <div className="list-item__head">Схож по жанрам</div>
                            <div className="list-item__name">Мастер Веры в Себя (Новелла)</div>
                            <div className="list-item__meta">
                              <span>Авторский</span>
                              <span>Онгоинг</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="media-slider__item">
                        <a href="#" className="list-item list-item_inline">
                          <div
                            className="list-item__cover"
                            style={{
                              backgroundImage: 'url("/images/image_thumb.jpg")',
                            }}
                          />
                          <div className="list-item__body">
                            <div className="list-item__head">Схож по жанрам</div>
                            <div className="list-item__name">Мастер Веры в Себя (Новелла)</div>
                            <div className="list-item__meta">
                              <span>Авторский</span>
                              <span>Онгоинг</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="media-slider__item">
                        <a href="#" className="list-item list-item_inline">
                          <div
                            className="list-item__cover"
                            style={{
                              backgroundImage: 'url("/images/image_thumb.jpg")',
                            }}
                          />
                          <div className="list-item__body">
                            <div className="list-item__head">Схож по жанрам</div>
                            <div className="list-item__name">Мастер Веры в Себя (Новелла)</div>
                            <div className="list-item__meta">
                              <span>Авторский</span>
                              <span>Онгоинг</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-section media-section_stats">
                  <div className="media-section__column">
                    <div className="media-section__head">
                      <div className="media-section__title">
                        <span>В списках у 36 человек</span>
                      </div>
                    </div>
                    <div className="media-stats">
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">Читаю</div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div
                              className="media-stats__progress-bar progress__bar"
                              style={{ width: '33.3%' }}
                            />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">33.3%</div>
                        <div className="media-stats__column media-stats__count">12</div>
                      </div>
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">В планах</div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div
                              className="media-stats__progress-bar progress__bar"
                              style={{ width: '50%' }}
                            />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">50%</div>
                        <div className="media-stats__column media-stats__count">18</div>
                      </div>
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">Брошено</div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div
                              className="media-stats__progress-bar progress__bar"
                              style={{ width: '2.8%' }}
                            />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">2.8%</div>
                        <div className="media-stats__column media-stats__count">1</div>
                      </div>
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">Любимые</div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div className="progress__bar" style={{ width: '5.6%' }} />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">5.6%</div>
                        <div className="media-stats__column media-stats__count">2</div>
                      </div>
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">Другое</div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div
                              className="media-stats__progress-bar progress__bar"
                              style={{ width: '8.3%' }}
                            />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">8.3%</div>
                        <div className="media-stats__column media-stats__count">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="media-section__column">
                    <div className="media-section__head">
                      <div className="media-section__title">
                        <span>Оценки пользователей</span>
                      </div>
                      <div className="media-rating media-rating_sm">
                        <i className="fa fa-star" />
                        <div className="media-rating__value">5</div>
                        <div className="media-rating__votes">3</div>
                      </div>
                    </div>
                    <div className="media-stats">
                      <div className="media-stats__item">
                        <div className="media-stats__column media-stats__title">
                          <span>5</span>
                          <i className="fa fa-star" />
                        </div>
                        <div className="media-stats__column media-stats__progress">
                          <div className="progress">
                            <div
                              data-score={5}
                              className="media-stats__progress-bar progress__bar"
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                        <div className="media-stats__column media-stats__percent">100%</div>
                        <div className="media-stats__column media-stats__count">3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: info */}
              {/* START: chapters */}
              <div className="tabs__content tabs__content_show">
                <div className="media-chapters">
                  <div className="media-chapters__head">
                    <div className="media-section media-chapters__actions">
                      <button className="button button_sm button_transparent media-chapters__sort">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 113.144 90.311"
                          className="mr-5"
                        >
                          <path
                            className="media-chapters__sort-arr-left"
                            d="M54.79 24.23L32.214 1.654l-.003-.003a5.686 5.686 0 00-.41-.371c-.066-.054-.135-.1-.202-.15-.08-.06-.159-.123-.242-.179-.08-.053-.164-.1-.246-.15-.076-.044-.15-.092-.228-.134-.084-.045-.17-.083-.256-.123-.081-.039-.161-.08-.244-.114-.084-.034-.169-.062-.254-.092-.089-.032-.177-.066-.268-.094-.084-.026-.17-.044-.256-.066-.093-.023-.185-.05-.28-.068-.098-.02-.198-.032-.298-.046-.082-.012-.163-.027-.247-.036a5.68 5.68 0 00-1.114 0c-.083.009-.164.024-.247.036-.1.014-.2.026-.299.046-.095.019-.186.045-.28.068-.085.022-.17.04-.255.066-.091.028-.18.062-.268.094-.085.03-.17.058-.254.092-.083.035-.163.075-.244.114-.086.04-.172.078-.256.123-.078.042-.152.09-.228.135-.082.049-.165.096-.246.15-.083.055-.162.117-.242.177-.067.05-.136.097-.202.15a5.63 5.63 0 00-.41.372l-.003.003L1.653 24.23a5.645 5.645 0 007.983 7.983L22.578 19.27v65.395a5.644 5.644 0 1011.288 0V19.271L46.81 32.213a5.645 5.645 0 007.982-7.982z"
                          />
                          <path
                            className="media-chapters__sort-arr-right"
                            d="M103.508 58.098L90.566 71.04V5.645a5.644 5.644 0 10-11.289 0V71.04L66.335 58.098a5.645 5.645 0 00-7.982 7.983L80.93 88.658l.004.003c.13.13.267.254.41.371.065.054.134.1.202.151.08.06.158.122.242.178.08.054.163.1.246.15.076.045.15.092.227.134.084.045.17.083.257.123.08.039.16.08.244.114.083.034.168.062.253.092.09.032.177.066.268.094.085.026.17.044.256.066.093.023.185.05.28.068.1.02.2.031.299.046.082.011.163.027.247.035.37.037.743.037 1.114 0 .083-.008.164-.024.247-.035.1-.015.2-.026.299-.046.094-.019.186-.045.279-.069.086-.02.172-.04.256-.065.091-.028.18-.062.268-.094.085-.03.17-.058.253-.093.084-.034.163-.075.244-.113.086-.04.173-.078.257-.124.078-.041.151-.089.227-.134.082-.049.166-.096.246-.15.084-.055.162-.117.242-.177.067-.05.136-.097.202-.151.142-.116.278-.239.408-.368l.006-.006L111.49 66.08a5.645 5.645 0 00-7.982-7.982z"
                          />
                        </svg>
                        <span>Сортировать</span>
                      </button>
                    </div>
                  </div>
                  <div className="media-chapters__list">
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter media-chapter_new">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                    <div className="media-chapter">
                      <div className="media-chapter__icon">
                        <i className="fa fa-eye-slash" />
                      </div>
                      <div className="media-chapter__body">
                        <div className="media-chapter__name text-truncate">
                          <a href="#" className="link-default">
                            Том 1 Глава 18
                          </a>
                        </div>
                        <div className="media-chapter__username text-truncate">
                          <a href="#" className="link-default">
                            <i className="fa fa-user-o fa-fw" />
                            <span>Артур Спароу</span>
                          </a>
                        </div>
                        <div className="media-chapter__date">19.03.2021</div>
                      </div>
                      <div className="media-chapter__actions">
                        <a href="#" className="media-chapter__icon media-chapter__icon_edit">
                          <i className="fa fa-pencil fa-fw" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: chapters */}
              {/* START: comments */}
              <div className="tabs__content">
                <div className="media-section">
                  <div className="empty">
                    <div>Здесь пока нет ни одного комментария</div>
                    <a href="#">Добавить комментарий</a>
                  </div>
                </div>
              </div>
              {/* END: comments */}
              {/* START: discussions */}
              <div className="tabs__content">
                <div className="media-discussions media-section">
                  <div className="empty">
                    <div>Здесь пока нет ни одного обсуждения</div>
                    <a href="#">Создать обсуждение</a>
                  </div>
                </div>
              </div>
              {/* END: discussions */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NovelPage;
