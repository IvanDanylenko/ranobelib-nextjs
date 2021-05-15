import React from 'react';
import { NextPage } from 'next';
import TemporaryNavigation from '@/components/TemporaryNavigation';
import { MainLayout } from '@/components/layout';
import { connect } from 'react-redux';
import { useState } from 'react';
import { signin, signout } from '@/redux/store';
import { ToastContainer, toast, Slide } from 'react-toastify';
import ToastItem from '@/components/ToastItem';
import axiosConfig from '@/lib/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';

const Test: NextPage = (props) => {
  // console.log("props", props)
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);
  const doSomething = () => {
    dispatch({ type: 'LOGIN' });
    console.log(auth);
  };
  return (
    // <MainLayout>
    <>
      <TemporaryNavigation />
      <div className="container container_responsive container_offset">
        <h1>Test page</h1>
        {/* WRITE CODE HERE */}
        {/* <h2>Hello </h2> */}

        <button className="button" onClick={doSomething}>
          Notify
        </button>
        {/* <div>{auth}</div> */}
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
      {/* </MainLayout> */}
    </>
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
