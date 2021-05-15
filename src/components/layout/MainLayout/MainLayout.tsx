import React, { FC } from 'react';
import Head from 'next/head';
import { Header, Footer } from '@/components/layout';
import TemporaryNavigation from '../../TemporaryNavigation';

const MainLayout: FC = ({ children }) => {
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
  );
};

export default MainLayout;
