import React from "react";
import Stars from "../components/stars";

export default props => (
  <>
      <div className="menu-items">
        <div className="menu-pic" />
        <b>Nasi Pecel</b>
        <br />
        <span>Rp 7000</span>
        <Stars color="#555" size="9pt" />
      </div>

    <style jsx>
      {`
        .menu-pic {
          width: 120px;
          height: 120px;
          background: #e0e0e0;
        }
        .menu-items {
          margin: 15px;
          text-align: center;
        }
      `}
    </style>
  </>
);
