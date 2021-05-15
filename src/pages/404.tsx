import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import TemporaryNavigation from '@/components/TemporaryNavigation';

interface ICustom404 {
  text?: string;
  code?: string;
}

const Custom404: NextPage<ICustom404> = ({ text, code }) => {
  return (
    <>
      <TemporaryNavigation />
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito" />
        <title>{text ? text : 'Not Found'}</title>
      </Head>
      <div className="page_error">
        <div className="code">{code ? code : '404'}</div>
        <div className="message text-truncate">{text ? text : 'Not Found'}</div>
      </div>
    </>
  );
};

export default Custom404;
