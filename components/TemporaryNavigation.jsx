import Link from "next/link"

export default function TemporaryNavigation() {
  return (
    <div id="page-navigation" className="paper">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #page-navigation {\n        position: fixed;\n        bottom: 10px;\n        left: 50%;\n        transform: translateX(-50%);\n        z-index: 1000;\n        padding: 8px 20px;\n        /* border: 1px solid gray; */\n        display: flex;\n        box-shadow: 0 0 1px rgba(0, 0, 0, .6)\n    }\n\n    #page-navigation a {\n        white-space: nowrap;\n        position: relative;\n    }\n\n    #page-navigation a:not(:last-child) {\n        margin-right: 15px;\n    }\n\n    #page-navigation a:not(:last-child):after {\n        content: '';\n        display: block;\n        position: absolute;\n        right: -10px;\n        top: 50%;\n        width: 4px;\n        height: 1px;\n        border-radius: 3px;\n        background-color: #212529;\n    }\n",
        }}
      />
      <Link href="/">
        <a className="link-default">Главная</a>
      </Link>
      <Link href="/catalog">
        <a className="link-default">Каталог</a>
      </Link>

      <Link href="/novel-name">
        <a className="link-default">Новелла</a>
      </Link>
      <Link href="/novel/create">
        <a className="link-default">Cоздать новеллу</a>
      </Link>
      <Link href="/profile">
        <a className="link-default">Профиль пользователя</a>
      </Link>
      <Link href="/novel-name/v1/c1">
        <a className="link-default">Читалка</a>
      </Link>
      <Link href="/404">
        <a className="link-default">404</a>
      </Link>
      <Link href="/test">
        <a className="link-default">Тестовая</a>
      </Link>
    </div>
  )
}
