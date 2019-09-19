import React from 'react';
import Card from "../components/review"
import Stars from "../components/stars"
import Head from '../components/head';

export default()=>
<>
<Head title="Review"/>
<Card padding="10px 25px 25px 25px">
<div className="grid">
    <div className="photo"/>
    <div className="user">
    <h4 style={{margin: 0}}>Fulan</h4>
    <Stars color="orange" size="13px"/>
    </div>
    <p className="tanggal">20 Sept '19</p>
</div>

<p className="komentar">barang ini bagus kak...</p>
<div className="border"/>

<div className="grid">
    <div className="photo"/>
    <div className="user">
    <h4 style={{margin: 0}}>Fulan</h4>
    <Stars color="orange" size="13px"/>
    </div>
    <p className="tanggal">20 Sept '19</p>
</div>
<p className="komentar">Recomended Slurrr</p>
<div className="border"/>

<style jsx>
    {`
    .grid{
        display: grid;
        grid-template-columns: 60px 1fr 70px;
        margin-top: 10%;
    }
    .photo{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #000;
    }
    .user{
        align-self: center;

    }
    .komentar{
        padding-left: 27px;
        margin-top: 10px;
    }
    .border{
        border-bottom: 1px solid;
        width: 50%;
        margin: 0 auto;
    }
    .card{
        padding: 10%;
    }
    .tanggal{
        font-size: 10px;
    }
    `}
</style>
</Card>
</>