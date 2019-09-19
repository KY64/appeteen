import React from "react";

export default props => (
    <div id="search-bar">
      <input type="text" name="search-form" id="search-form" placeholder="Search" />
    <style jsx>{`
      #search-bar {
          background: ${props.bg};
          padding: 15px;
        }
        #search-form {
            background: ${props.bgForm};
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
