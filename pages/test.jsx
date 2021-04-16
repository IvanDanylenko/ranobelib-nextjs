import TemporaryNavigation from "@/components/TemporaryNavigation";
import Layout from "@/components/Layout";
import { connect } from "react-redux";
import { useState } from "react";
import { signin, signout } from "@/redux/store";
import { ToastContainer, toast, Slide } from "react-toastify";
import ToastItem from "@/components/ToastItem";
import axiosConfig from "@/lib/axiosConfig";

function Test(props) {
  // console.log("props", props)
  const doSomething = () => {
     axiosConfig
      .get("/customer")
      .then(({data}) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Layout>
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
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  signin,
  signout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
