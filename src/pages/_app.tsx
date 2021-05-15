import React, { FC, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '@/styles/index.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import wrapper from '@/store';
import { ToastContainer, Slide } from 'react-toastify';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
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
  );
};

export default wrapper.withRedux(MyApp);
