import Link from "next/link"

export default function TemporaryNavigation() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #page-navigation {\n        position: fixed;\n        bottom: 10px;\n        left: 50%;\n        transform: translateX(-50%);\n        z-index: 1000;\n        padding: 8px 20px;\n        /* border: 1px solid gray; */\n        display: flex;\n        box-shadow: 0 0 1px rgba(0, 0, 0, .6)\n    }\n\n    #page-navigation a {\n        white-space: nowrap;\n        position: relative;\n    }\n\n    #page-navigation a:not(:last-child) {\n        margin-right: 15px;\n    }\n\n    #page-navigation a:not(:last-child):after {\n        content: '';\n        display: block;\n        position: absolute;\n        right: -10px;\n        top: 50%;\n        width: 4px;\n        height: 1px;\n        border-radius: 3px;\n        background-color: #212529;\n    }\n",
        }}
      />
      <div id="page-navigation" className="paper">
        <Link href="/">
          <a className="link-default">Главная</a>
        </Link>
        <Link href="/catalog">
          <a className="link-default">Каталог</a>
        </Link>

        <Link href="/novel">
          <a className="link-default">Новелла</a>
        </Link>
        <Link href="/novel/create">
          <a className="link-default">Cоздать новеллу</a>
        </Link>
        <Link href="/profile">
          <a className="link-default">Профиль пользователя</a>
        </Link>
      </div>
    </div>
  )
}
