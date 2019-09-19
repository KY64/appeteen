import React from "react";
import ButtonPesan from "../components/ButtonPesan";
import Nav from "../components/nav";
import Layout from "../components/layout";
import Head from "../components/head";
import Star from "../components/stars";
import Dropdown from "../components/DropdownButton"

export default () => (
  <Layout>
    <Head title="detail produk" />
    <div className="grid">
      <div className="photo"></div>
      <div>
        <h3 className="tv_Nasi">Nasi Pecel</h3>
        <h4 className="tv_price">7000</h4>
      </div>
    </div>
    <div className="star" >
    <Star color="orange" size="25px"/>
    <span className="jumlahUser">(15)</span> 
    <p className="tv_Ulasan">Ulasan</p>
    </div>
    <Dropdown margin="-10px 0 -20px 46%"/>
    <div>
      <h5 className="tv_Deskripsi">Deskripsi</h5>
      <p className="deskripsi">
        pecel adalah suatu makanan khas madiun yang terdiri dari rempah rempah
        bumi pilihan. manfaat dari makan pecel adalah tambah sehat.
      </p>
    </div>
    <div className="posisiButton">
      <ButtonPesan />
    </div>
    <Nav />

    <style jsx>
      {`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 10%;
        }

        .photo {
          margin-left: 5%;
          margin-top: 5%;
          width: 130px;
          height: 130px;
          background-color: #000;
        }

        .tv_Nasi {
          text-align: left;
          margin: 25% 0 10px 0;
          font-weight: bold;
          color: black;
        }

        .tv_price {
          margin: 0 0 0 0;
          text-align: left;
        }

        .star{
            text-align: center;
            margin-top: 5%;
            border: 1px solid;
        }

        .tv_Ulasan {
          text-align: center;
          font-size: 13px;
          margin: 3px 0 10px 0;
        }

        .tv_Deskripsi {
          color: #dd2e54;
          font-size: 15px;
          padding-left: 2%;
        }

        .jumlahUser{
            margin: 20px 0 20px 0;
        }

        .deskripsi {
          padding-left:2%;
          margin: -15px 0 0 0;
          color: #5d5d5d;
        }

        .posisiButton {
          margin-top: 20%;
        }
      `}
    </style>
  </Layout>
);
