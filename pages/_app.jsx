import "@/styles/index.scss"
import Head from "next/head"

export const siteTitle = "Next.js Ranobelib"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
