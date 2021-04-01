import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import TemporaryNavigation from "./TemporaryNavigation"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700"
          rel="stylesheet"
        />
      </Head>
      <TemporaryNavigation />
      <Header />
      <div className="page">
        <div className="page__inner">{children}</div>
        <Footer />
      </div>
    </>
  )
}
