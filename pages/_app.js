import "../styles/index.scss"
import Head from "next/head"
import Layout from "../components/layout"
import Custom404 from "./404"

export const siteTitle = "Next.js Ranobelib"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{siteTitle}</title>
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700"
          rel="stylesheet"
        />
      </Head>
      {Component !== Custom404 ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
