import React, { FC, useState, useEffect, useRef } from 'react';
import axiosConfig from 'src/lib/axiosConfig';
import { toast } from 'react-toastify';
import ToastItem from 'src/components/ToastItem';
import Loader from 'react-loader-spinner';

interface IRegister {
  closeModal: Function;
}

const Register: FC<IRegister> = ({ closeModal }) => {
  const [name, setName] = useState('Ivan');
  const [email, setEmail] = useState('danylenko.ivan11@gmail.com');
  const [password, setPassword] = useState('121212');
  const [passwordRepeated, setPasswordRepeated] = useState('121212');
  const [loading, setLoading] = useState(false);

  const nameInput = useRef();

  useEffect(() => {
    nameInput?.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name,
      email,
      password,
    };

    console.log('Register submit was clicked');
    return;

    axiosConfig
      .post('/customer', data)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          signin(res.data);
          setLoading(false);
          closeModal();
        }
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
        toast.error(<ToastItem text="Пользователь с таким email уже зарегистрирован" />, {
          toastId: 'authError',
        });
      });
  };

  return (
    <>
      <div className="modal__content" data-size="small">
        <div className="modal__header">
          <h4 className="modal__title text-truncate">Регистрация</h4>
        </div>
        <div className="modal__body">
          <form action="#" className="form" method="POST" onSubmit={handleSubmit}>
            {/* Form content */}
            {/* <div className="form__subtitle">Вход через логин или email</div> */}
            <div className="form__field">
              <div className="form__input-wrap">
                <input
                  type="text"
                  name="name"
                  className="form__input form__input_icon"
                  placeholder="Логин"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={nameInput}
                />
                <span className="form__field-icon">
                  <i className="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div className="form__field">
              <div className="form__input-wrap">
                <input
                  type="text"
                  name="email"
                  className="form__input form__input_icon"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="form__field-icon">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="form__field">
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
            <div className="form__field">
              <div className="form__input-wrap">
                <input
                  type="password"
                  name="passwordRepeat"
                  className="form__input form__input_icon"
                  placeholder="Повторите пароль"
                  value={passwordRepeated}
                  onChange={(e) => setPasswordRepeated(e.target.value)}
                />
                <span className="form__field-icon">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="form__footer">
              <div className="d-flex align-items-center">
                <button type="submit" className="button button_primary button_md mr-10">
                  Зарегистрироваться
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
            </div>
            {/* Form content end */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
