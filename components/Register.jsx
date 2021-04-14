import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { signin } from "@/redux/store"
import { toast } from "react-toastify"
import ToastItem from "@/components/ToastItem"

function Register({ closeModal, signin }) {
  const [name, setName] = useState("Ivan")
  const [email, setEmail] = useState("danylenko.ivan11@gmail.com")
  const [password, setPassword] = useState("121212")
  const [passwordRepeated, setPasswordRepeated] = useState("121212")

  const nameInput = useRef()

  useEffect(() => {
    nameInput.current.focus()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      password,
    }

    console.log("Data", data)

    axios
      .post("/api/auth/register", data)
      .then((res) => {
        if (res.data) {
          console.log("Res data", res.data)
          signin(res.data)
          closeModal()
        }
      })
      .catch((error) => {
        // console.error("Error", error)
        toast.error(
          <ToastItem text="Пользователь с таким email уже зарегистрирован" />,
          {
            toastId: "authError",
          }
        )
      })
  }

  return (
    <>
      <div className="modal__content" data-size="small">
        <div className="modal__header">
          <h4 className="modal__title text-truncate">Регистрация</h4>
        </div>
        <div className="modal__body">
          <form
            action="#"
            className="form"
            method="POST"
            onSubmit={handleSubmit}
          >
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
              <button type="submit" className="button button_primary button_md">
                Зарегистрироваться
              </button>
            </div>
            {/* Form content end */}
          </form>
        </div>
      </div>
    </>
  )
}

export default connect(null, { signin })(Register)
