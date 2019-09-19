import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Layout from "../components/layout";
import Floatbtn from "../components/floatButton";
import Search from "../components/searchBar";

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(
            registration =>
              console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope
              ),
            err => console.log("ServiceWorker registration failed: ", err)
          );
      });
    }
  }, []);

  return (
    <Layout>
      <Head title="Home" />
      <Search bg="#DD2E54" bgForm="rgba(255, 255, 255, 0.7)" />
      <section id="category">
        <div className="masakan">Masakan</div>
        <div className="snack">Snack</div>
        <div className="minuman">Minuman</div>
      </section>
      <section id="top-picks">
        <label>Top Picks</label>
        <div className="top-list">
          <div className="cardview">
            <div className="pic">hai</div>
            <div>Nasi nasian</div>
            <div>Rp 1500</div>
          </div>
          <div className="cardview">
            <div className="pic">hai</div>
            <div>Nasi nasian</div>
            <div>Rp 1500</div>
          </div>
          <div className="cardview">
            <div className="pic">hai</div>
            <div>Nasi nasian</div>
            <div>Rp 1500</div>
          </div>
        </div>
      </section>
      <section id="warung">
        <div className="pic-warung"></div>
        <div className="pic-warung"></div>
        <div className="pic-warung"></div>
        <div className="pic-warung"></div>
        <div className="pic-warung"></div>
        <div className="pic-warung"></div>
      </section>
      <Floatbtn icon="fas fa-shopping-cart" size="16pt" />
      <Nav />

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading { 
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .top-list {
          display: flex;
        }
        .cardview {
          flex-direction: column;
          text-align: center;
          margin: 15px 7px;
        }
        .pic {
          width: 100px;
          height: 100px;
          background: #ddd;
        }
        .pic-warung {
          width: 100px;
          height: 130px;
          background: #ddd;
          border-radius: 20px;
        }
        #category {
          display: flex;
          justify-content: space-around;
        }
        #category > div {
          color: white;
          padding: 22px;
          margin-top: 12px;
          text-align: center;
          background: #F22451;
          border-radius: 10px;
        }
        #top-picks {
          margin-top: 12px;
          padding: 12px;
          border: 1px solid rgba(0,0,0,.1);
        }
        #top-picks > label {
          color: #DD2E54;
          border-bottom: 2px solid #DD2E54;
        }
        #warung {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: 1fr 1fr 1fr;
          margin: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
