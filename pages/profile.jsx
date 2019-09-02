import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import Floatbtn from "../components/floatButton"
import Nav from "../components/nav"

export default () => (
  <Layout>
    <Head title="Profile" />
    <section id="name">
      <h2>Kimiyuki Maki</h2>
      <h4>121010000</h4>
      <img
        src="/static/pudding.png"
        alt="Profile Picture"
        className="prof-pic"
      />
    </section>
    <section id="saldo">
        <div>
            <h4>Saldo</h4>
            <span>Rp 800</span>
        </div>
        <div>
            <h4>Poin</h4>
            <span>9</span>
        </div>
    </section>
    <section id="detail">
        <h3>
            Email
        </h3>
        <h2>
            user@mail.com
        </h2>
        <h3>
            Phone
        </h3>
        <h2>
            +62876543210
        </h2>
    </section>

    <Floatbtn icon="far fa-edit" size="16pt" />
    <Nav />

    <style jsx>{`
      #name {
        color: white;
        padding: 30px 0;
        text-align: center;
        background: #dd2e54;
      }
      h4,
      h2 {
        margin: 0;
      }
      #name > h4 {
        font-weight: normal;
      }
      #saldo {
        display: grid;
        color: #DD2E54;
        margin-top: 65px;
        text-align: center;
        justify-content: space-around;
        grid-template-columns: 1fr 1fr;
      }
      #saldo > div {
        border: 1px solid rgba(0,0,0,.1);
        padding: 10px 0;
      }
      #saldo > div > h4 {
          margin-bottom: 5px;
      }
      #detail {
          margin-left: 20px;
      }
      #detail > h3 {
          margin: 20px 0 0 0;
          color: #ccc;
    }
    #detail > h3, #detail > h2 {
        font-weight: normal;
    }
      .prof-pic {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        border: 4px solid white;
        margin-bottom: -60px;
        border-radius: 100%;
        position: relative;
        width: 25%;
        padding: 0;
        top: 24px;
      }
    `}</style>
  </Layout>
);
