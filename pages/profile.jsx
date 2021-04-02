import { connect } from "react-redux"
import Layout from "@/components/Layout"
import Custom404 from "@/pages/404"

function ProfilePage(props) {
  const { isAuthenticated } = props.user

  if (!isAuthenticated) {
    return <Custom404 />
  }
  return (
    <Layout>
      <div className="profile container container_responsive">
        <div className="profile-header paper">
          <div className="profile-header__wrap">
            {/* Profile user */}
            <div className="profile-user">
              <div className="profile-user__avatar-wrap">
                <img
                  src="/images/user-placeholder.png"
                  alt="Avatar"
                  className="profile-user__avatar avatar avatar_round avatar_md shadow-sm"
                />
                <div className="online-marker" data-online={1} />
              </div>
              <div className="profile-user__body">
                <div className="profile-user__username">
                  <span className="mr-10">Ivan Danylenko</span>
                </div>
                <div className="profile-user__rank text-muted">
                  <span>Уровень 2</span>
                  <span>&nbsp;•&nbsp;</span>
                  <span>Ранг # Не определен</span>
                </div>
              </div>
            </div>
            {/* End: Profile user */}
            <div className="profile-actions">
              <a
                href="#"
                className="button button_sm"
                title="Изменить настройки"
              >
                <i className="fa fa-cog fa-fw" />
                <span>Настройки</span>
              </a>
            </div>
          </div>
          {/* Start: profile nav */}
          <div className="profile-nav">
            <div className="profile-nav__list tabs-list">
              <a
                href="#"
                className="profile-nav__item tabs__item tabs__item_active"
              >
                Списки
              </a>
              <a href="#" className="profile-nav__item tabs__item">
                Комментарии
              </a>
              <a href="#" className="profile-nav__item tabs__item">
                Друзья
              </a>
              <a href="#" className="profile-nav__item tabs__item">
                Сообщения
              </a>
              <a href="#" className="profile-nav__item tabs__item">
                Игнор-лист
              </a>
              <a href="#" className="profile-nav__item tabs__item">
                Уведомления
              </a>
            </div>
            <div className="profile-info-button text-muted">
              <span>Информация о пользователе</span>
              <i className="fa fa-info-circle" />
            </div>
          </div>
          {/* End: profile nav */}
        </div>
        <div className="bookmark">
          <div className="bookmark-sidebar">
            <div className="bookmark-sidebar__wrap">
              <div className="bookmark-sidebar__panel">
                <div className="bookmark-menu">
                  <div className="bookmark-menu__item">
                    <span className="bookmark-menu__label text-truncate">
                      Все
                    </span>
                    <span className="bookmark-menu__value">1</span>
                  </div>
                  <div className="bookmark-menu__item bookmark-menu__item_active">
                    <span className="bookmark-menu__label text-truncate">
                      Читаю
                    </span>
                    <span className="bookmark-menu__value">1</span>
                  </div>
                  <div className="bookmark-menu__item">
                    <span className="bookmark-menu__label text-truncate">
                      В планах
                    </span>
                    <span className="bookmark-menu__value">0</span>
                  </div>
                  <div className="bookmark-menu__item">
                    <span className="bookmark-menu__label text-truncate">
                      Брошено
                    </span>
                    <span className="bookmark-menu__value">0</span>
                  </div>
                  <div className="bookmark-menu__item">
                    <span className="bookmark-menu__label text-truncate">
                      Прочитано
                    </span>
                    <span className="bookmark-menu__value">0</span>
                  </div>
                  <div className="bookmark-menu__item">
                    <span className="bookmark-menu__label text-truncate">
                      Любимые
                    </span>
                    <span className="bookmark-menu__value">0</span>
                  </div>
                  <div className="bookmark-menu__edit">
                    <span>Редактировать вкладки</span>
                    <i className="fa fa-pencil" />
                  </div>
                </div>
              </div>
              <div className="bookmark-settings">
                <div className="bookmark-settings__group">
                  <div className="bookmark-settings__title">Вид</div>
                  <div className="bookmark-settings__content">
                    <div className="bookmark-settings__item bookmark-settings__item_active">
                      <i className="fa fa-list" />
                      <span className="bookmark-settings__text">Список</span>
                    </div>
                    <div className="bookmark-settings__item">
                      <i className="fa fa-list" />
                      <span className="bookmark-settings__text">Плитка</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wrapper */}
          <div className="bookmark-wrapper">
            <div className="bookmark-input">
              <input
                type="text"
                placeholder="Фильтр по названию"
                className="form__input bookmark-input__filter"
              />
            </div>
            <div className="bookmark-actions">
              <div className="bookmark-actions__edit text-muted">
                Множественное редактирование
              </div>
            </div>
            <div className="bookmark-list paper">
              <div className="bookmark-item">
                <div className="bookmark-item__body">
                  <div className="bookmark-item__cover-wrap">
                    <div
                      className="bookmark-item__cover shadow-sm"
                      style={{
                        backgroundImage: "url(/images/image_250x350.jpg)",
                      }}
                    />
                  </div>
                  <div className="bookmark-item__content">
                    <div className="bookmark-item__info">
                      <div className="bookmark-item__info-header line-clamp">
                        <a href="#" className="bookmark-item__name">
                          <span>Мастер Веры в Себя (Новелла)</span>
                          <span className="bookmark-item__alt-name text-muted">
                            Мастер Веры в Себя (Novel)
                          </span>
                        </a>
                      </div>
                      <div className="bookmark-item__info-subheader">
                        <a href="#">Последняя глава 18</a>
                      </div>
                      <div className="bookmark-item__info-footer">
                        <span className="bookmark-item__continue text-muted">
                          Продолжить [1-1]
                        </span>
                      </div>
                    </div>
                    <div className="bookmark-item__meta">
                      <div className="bookmark-item__meta-title text-muted">
                        <span>Добавлено</span>
                      </div>
                      <div className="bookmark-item__meta-value">
                        <span>19.03.2021</span>
                      </div>
                    </div>
                    <div className="bookmark-item__actions button button_transparent button_sm">
                      <div className="fa fas fa-sm fa-ellipsis-h" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(ProfilePage)
