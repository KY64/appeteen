import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Layout from "../components/layout";
import Search from "../components/searchBar";
import Stars from "../components/stars";
import Item from "../components/menuItem";

const printItem = amount => {
  for (var i = 0; i < amount; i++) {
    return <Item />;
  }
};

export default () => (
  <Layout>
    <Head title="Profil Warung" />
    <div
      className="fas fa-arrow-left"
      style={{
        color: "white",
        background: "#DD2E54",
        display: "block",
        padding: "22px"
      }}
    ></div>
    <section id="profile">
      <div className="prof-pic"></div>
      <div className="prof-detail">
        <h2 style={{ fontWeight: "normal", margin: 0 }}>Warung Pojok</h2>
        <Stars color="#ddd" size="12pt" />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    <div style={{ boxShadow: "0px 2px 2px rgba(0,0,0,.1)" }}>
      <Search bg="white" bgForm="#f0f0f0" />
    </div>

    <section id="paling-laris">
      <div
        style={{
          borderBottom: "2px solid #E6224C",
          width: "120px",
          marginTop: "10px"
        }}
      >
        <legend
          style={{ paddingBottom: "4px", color: "#DD2E54", marginLeft: "12px" }}
        >
          Paling Laris
        </legend>
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
      </div>
    </section>

    <section id="katalog">
      <div
        style={{
          borderBottom: "2px solid #E6224C",
          width: "120px",
          marginTop: "10px"
        }}
      >
        <legend
          style={{ paddingBottom: "4px", color: "#DD2E54", marginLeft: "12px" }}
        >
          Katalog
        </legend>
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
      </div>
    </section>
    <Nav />
    <style jsx>
      {`
        #profile {
          background: #dd2e54;
          display: grid;
          grid-template-columns: 95px 1fr;
          padding: 5px 22px;
        }

        #katalog {
            margin-bottom: 50px;
        }
        
        .prof-pic {
          height: 75px;
          width: 75px;
          border-radius: 100%;
          background: #e0e0e0;
        }

        .prof-detail {
          color: white;
        }

        .description {
          font-style: italic;
          font-weight: lighter;
          margin-top: 8px;
        }
        .items {
          overflow: scroll;
          display: flex;
        }
      `}
    </style>
  </Layout>
);
