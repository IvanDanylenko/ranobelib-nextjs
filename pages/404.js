import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/404", undefined, { shallow: true })
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"
        />
        <title>Not Found</title>
      </Head>
      <div className="page_error">
        <div className="code">404</div>
        <div className="message text-truncate">Not Found</div>
      </div>
    </>
  )
}
