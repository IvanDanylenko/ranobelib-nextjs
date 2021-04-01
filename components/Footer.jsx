export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__inner paper">
        <div className="footer__theme-toggler">
          <h3>Тема сайта</h3>
          <span className="footer__theme-previews">
            <div
              className="footer__theme-preview"
              data-toggle-theme="light"
              title="Светлая"
            >
              A
            </div>
            <div
              className="footer__theme-preview"
              data-toggle-theme="dark"
              title="Темная"
            >
              A
            </div>
          </span>
        </div>
        <div className="pb-10">
          В случаях нарушения авторских прав - обращайтесь на почту
          info@gmail.com
        </div>
        <div className="footer__menu">
          <div className="footer__copyright">
            <span>©&nbsp;2021</span>
            <a href="#">RanobeLib</a>
          </div>
          <ul className="footer__nav">
            <li>
              <a
                href="#"
                className="footer__nav-link"
                target="_blank"
                title="Title"
              >
                Обратная связь
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__nav-link"
                target="_blank"
                title="Title"
              >
                Для правообладателей
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__nav-link"
                target="_blank"
                title="Title"
              >
                DMCA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__nav-link"
                target="_blank"
                title="Title"
              >
                Каталог ранобэ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__nav-link"
                target="_blank"
                title="Title"
              >
                Пользовательское соглашение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
