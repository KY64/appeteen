import React from "react"
import Card from "../components/cardPolos"
import BtnDana from "../components/ButtonDana"
import BtnTunai from "../components/ButtonTunai"
import BtnOrder from "../components/ButtonOrder"

export default() =>
<>
<Card>
    <div style={{display: 'grid'}}>
        <h1 className="tv_detail">Detail Transaksi</h1>
        <div className="underLine">
        <ul>
            <li>
                Nasi Pecel <span style={{float: "right"}}> x1 </span>
            </li>
            <li>
                Es Teh <span style={{float: "right"}}> x1 </span>
            </li>
        </ul>

        <p className="tv_total">Total 
        <span style={{float: "right"}} className="ang_total"> 
        Rp. 16.000
        </span></p>
        </div>
    </div>
    <style jsx global>
        {`
        ul {
            padding-left: 0;
            list-style: none;
        }

        .tv_total{
            font-size: 12pt;
            font-weight: bold;
        }

        .tv_detail{
            font-size: 12pt;
            color: #DD2E54;
        }

        .tv_met{
        margin-top: 5%;
        margin-bottom: 3%;
        font-size: 12pt;
        margin-left: 15%;
        color: #DD2E54;
        display: inline-block;
        }

        .underLine{
            padding: 0 15px;
            border-top: 2px solid #DD2E54;
            width: 100%;
            margin-left: -15px;
            margin-top: -8px;
        }

        `}
    </style>
</Card>

<span className="tv_met">Methode Pembayaran</span>

<BtnDana />
<BtnTunai />
<BtnOrder />

</>
