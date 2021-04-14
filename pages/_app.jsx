import "@/styles/index.scss"
import React from "react"
import Head from "next/head"
import { wrapper } from "@/redux/store"
import { ToastContainer, Slide } from "react-toastify"

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Next.js Ranobelib</title>
    </Head>
    <Component {...pageProps} />
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar
      limit={1}
      transition={Slide}
      closeButton={false}
    />
  </>
)

export default wrapper.withRedux(MyApp)
