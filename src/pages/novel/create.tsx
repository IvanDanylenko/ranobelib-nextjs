import React, { FC } from 'react';
import { MainLayout } from '@/components/layout';

const NovelCreate: FC = () => {
  return (
    <MainLayout>
      <div className="container container_offset container_center">
        <div className="section paper media-edit">
          <div className="section__header">
            <strong>Создание тайтла</strong>
          </div>
          <div className="media-edit-uploader">
            <div className="uploader uploader_cover">
              <div className="uploader__title">Обложка</div>
              <div className="uploader__wrap">
                <label className="uploader-trigger">
                  <div className="uploader-trigger__caption">
                    <div className="uploader-trigger__icon">
                      <i className="fa fa-cloud-upload"></i>
                    </div>
                    <div className="uploader-trigger__text">
                      Нажмите или перетащите изображение для загрузки
                    </div>
                  </div>
                  <input type="file" className="hidden" accept="image/*" hidden />
                </label>
                <div className="uploader-preview is-empty">
                  <div className="uploader-preview__img"></div>
                  <button className="uploader-preview__remove">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="uploader uploader_background">
              <div className="uploader__title">Обложка</div>
              <div className="uploader__wrap">
                <label className="uploader-trigger">
                  <div className="uploader-trigger__caption">
                    <div className="uploader-trigger__icon">
                      <i className="fa fa-cloud-upload"></i>
                    </div>
                    <div className="uploader-trigger__text">
                      Нажмите или перетащите изображение для загрузки
                    </div>
                  </div>
                  <input type="file" className="hidden" accept="image/*" hidden />
                </label>
                <div className="uploader-preview is-empty">
                  <div className="uploader-preview__img"></div>
                  <button className="uploader-preview__remove">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <form className="form">
            <input type="hidden" name="cover" />
            <input type="hidden" name="background" />
            <div className="media-edit-form">
              <div className="alert alert_sm alert_danger">Поле Имя обязательно для заполнения</div>

              <div className="form__field">
                <label htmlFor="name" className="form__label">
                  Оригинальное название (без иероглифов)
                </label>
                <input className="form__input" id="name" name="name" type="text" />
                <div className="form__error">Кажется такой тайтл существует</div>
              </div>

              <div className="form__field">
                <label htmlFor="otherNames" className="form__label">
                  Альтернативные названия
                  <span className="text-muted small">(иероглифы вставляйте сюда)</span>
                </label>
                <input
                  className="form__input"
                  id="otherNames"
                  name="otherNames"
                  type="text"
                  placeholder='альтернативные названия, разделяя их символом "/"'
                />
                <div className="form__error">Кажется такой тайтл существует</div>
              </div>

              <div className="row">
                <div className="col form__field">
                  <label htmlFor="types" className="form__label">
                    Тип
                  </label>
                  <select
                    name="types"
                    id="types"
                    className="form__input form__select"
                    defaultValue="10"
                  >
                    <option value="10">Япония</option>
                    <option value="11">Корея</option>
                    <option value="12">Китай</option>
                    <option value="13">Английский</option>
                    <option value="14">Авторский</option>
                    <option value="15">Фанфик</option>
                  </select>
                </div>

                <div className="col form__field">
                  <label htmlFor="releaseDate" className="form__label">
                    Год релиза
                  </label>
                  <input className="form__input" id="releaseDate" name="releaseDate" type="text" />
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="author" className="form__label">
                  Автор
                  <a href="#" className="link-default button_link float-right" target="_blank">
                    Добавить автора
                  </a>
                </label>
                <input className="form__input" id="author" name="author" type="text" />
              </div>

              <div className="row">
                <div className="col form__field">
                  <label htmlFor="novelStatusId" className="form__label">
                    Статус тайтла
                  </label>
                  <select
                    id="novelStatusId"
                    name="novelStatusId"
                    className="form__input form__select"
                    defaultValue="1"
                  >
                    <option value="1">Онгоинг</option>
                    <option value="2">Завершён</option>
                    <option value="3">Анонс</option>
                    <option value="4">Приостановлен</option>
                    <option value="5">Выпуск прекращён</option>
                  </select>
                </div>

                <div className="col form__field">
                  <label htmlFor="translationStatusId" className="form__label">
                    Статус перевода
                  </label>
                  <select
                    id="translationStatusId"
                    name="translationStatusId"
                    className="form__input form__select"
                    defaultValue="1"
                  >
                    <option value="1">Продолжается</option>
                    <option value="2">Завершён</option>
                    <option value="3">Заморожен</option>
                    <option value="4">Заброшен</option>
                  </select>
                </div>

                <div className="col form__field">
                  <label htmlFor="caution" className="form__label">
                    Контент для взрослых
                  </label>
                  <select
                    id="caution"
                    name="caution"
                    className="form__input form__select"
                    defaultValue="1"
                  >
                    <option value="1">Нет</option>
                    <option value="2">Да 16+</option>
                    <option value="3">Да 18+</option>
                  </select>
                </div>

                <div className="col form__field">
                  <label htmlFor="edit" className="form__label">
                    Загрузка глав
                  </label>
                  <select
                    id="edit"
                    name="edit"
                    className="form__input form__select"
                    defaultValue="1"
                  >
                    <option value="1">Создатель и переводчики</option>
                    <option value="2">Все</option>
                    <option value="3">Да 18+</option>
                  </select>
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="summary" className="form__label">
                  Описание
                </label>
                <textarea
                  className="form__textarea"
                  name="summary"
                  id="summary"
                  rows={5}
                ></textarea>
              </div>
              {/* Media edit form end */}
            </div>

            <div className="section__footer">
              <div>
                <button className="button button_green button_md" type="submit">
                  Создать
                </button>
                <a href="/" className="button button_md">
                  Назад
                </a>
              </div>
            </div>
            {/* Form end */}
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default NovelCreate;
