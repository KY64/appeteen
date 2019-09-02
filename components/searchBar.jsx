import React from "react";

export default () => (
    <div id="search-bar">
      <input type="text" name="search-form" id="search-form" placeholder="Search" />
    <style jsx>{`
      #search-bar {
          background: #dd2e54;
          padding: 15px;
        }
        #search-form {
            background: rgba(255, 255, 255, 0.7);
            border-radius: 50px;
            padding: 6px 14px;
            font-size: 12pt;
            outline: none;
            border: none;
            width: 90%;
        }
        input
        `}</style>
    </div>
);
