import { useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { signin } from "@/redux/store"
import { toast } from "react-toastify"

function Login({ closeModal, signin }) {
  const [email, setEmail] = useState("danylenko.ivan11@gmail.com")
  const [password, setPassword] = useState("121212")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    axios
      .post("/api/auth/login", data)
      .then((res) => {
        if (res.data.ok) {
          signin()
          closeModal()
        } else {
          toast("Неверный логин или пароль", {
            toastId: "authError",
          })
        }
      })
      .catch((error) => {
        console.error("Error", error)
      })
  }

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
            <button type="submit" className="button button_primary button_md">
              Войти
            </button>
            <a href="#" className="link-default">
              Регистрация
            </a>
          </div>
          {/* Form content end */}
        </form>
      </div>
    </div>
  )
}

export default connect(null, { signin })(Login)
