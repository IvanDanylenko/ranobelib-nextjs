import Header from "./Header"
import Footer from "./Footer"
import TemporaryNavigation from "./TemporaryNavigation"

export default function Layout({ children }) {
  return (
    <>
      <TemporaryNavigation />
      <Header />
      <div className="page">
        <div className="page__inner">{children}</div>
        <Footer />
      </div>
    </>
  )
}
