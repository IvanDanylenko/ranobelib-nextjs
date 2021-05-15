import React, { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import axiosConfig from '@/lib/axiosConfig';
import { signin } from '@/redux/store';
import { toast } from 'react-toastify';
import ToastItem from '@/components/ToastItem';
import Loader from 'react-loader-spinner';

const Login: FC = ({ signin, closeModal, openRegisterModal }) => {
  const [email, setEmail] = useState('danylenko.ivan11@gmail.com');
  const [password, setPassword] = useState('121212');
  const [loading, setLoading] = useState(false);

  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password,
    };

    axiosConfig
      .get(`/customer?q=${JSON.stringify(data)}`)
      .then((res) => {
        if (res.data.length) {
          signin(res.data[0]);
          closeModal();
        } else {
          setLoading(false);
          toast.error(<ToastItem text="Неверный логин или пароль" />, {
            toastId: 'authError',
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error', error);
        toast.error(<ToastItem text="Произошла ошибка входа" />, {
          toastId: 'authError',
        });
      });
  };

  return (
    <div className="modal__content" data-size="small">
      <div className="modal__header">
        <h4 className="modal__title text-truncate">Авторизация</h4>
        <div className="modal__close" onClick={closeModal}>
          <i className="fa fa-close"></i>
        </div>
      </div>
      <div className="modal__body">
        <form action="#" className="form" method="POST" onSubmit={handleSubmit}>
          {/* Form content */}
          {/* <div className="form__subtitle">Вход через логин или email</div> */}
          <div className="form__field">
            <div className="form__input-wrap">
              <input
                type="text"
                name="email"
                className="form__input form__input_icon"
                placeholder="Логин или email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailInput}
              />
              <span className="form__field-icon">
                <i className="fa fa-user"></i>
              </span>
            </div>
          </div>
          <div className="form__field">
            <div className="form__description text-right">
              <a href="#" tabIndex="-1" className="link-default">
                Забыли пароль?
              </a>
            </div>
            <div className="form__input-wrap">
              <input
                type="password"
                name="password"
                className="form__input form__input_icon"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="form__field-icon">
                <i className="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="form__footer">
            <div className="d-flex align-items-center">
              <button type="submit" className="button button_primary button_md mr-10">
                Войти
              </button>
              <Loader
                type="ThreeDots"
                color="#818181"
                height={20}
                width={20}
                visible={loading}
                className="d-flex align-items-center"
              />
            </div>
            <button type="button" className="link-default" onClick={openRegisterModal}>
              Регистрация
            </button>
          </div>
          {/* Form content end */}
        </form>
      </div>
    </div>
  );
};

export default connect(null, { signin })(Login);
