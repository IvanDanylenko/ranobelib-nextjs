import React, { FC } from 'react';
import TemporaryNavigation from '@/components/TemporaryNavigation';
import { MainLayout } from '@/components/layout';
import { connect } from 'react-redux';
import { useState } from 'react';
import { signin, signout } from '@/redux/store';
import { ToastContainer, toast, Slide } from 'react-toastify';
import ToastItem from '@/components/ToastItem';
import axiosConfig from '@/lib/axiosConfig';

const Test: FC = (props) => {
  // console.log("props", props)
  const doSomething = () => {
    axiosConfig
      .get('/customer')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <MainLayout>
      <TemporaryNavigation />
      <div className="container container_responsive container_offset">
        <h1>Test page</h1>
        {/* WRITE CODE HERE */}
        {/* <h2>Hello </h2> */}

        <button className="button" onClick={doSomething}>
          Notify
        </button>

        {/* container end */}
        {/* WRITE CODE HERE */}
      </div>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          li {
            margin-bottom: 10px;
            font-size: 18px;
          }
        `}
      </style>
    </MainLayout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = {
  signin,
  signout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
