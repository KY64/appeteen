import React from "react";

export default props => (
  <main>
    {props.children}
    <style jsx global>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        color: #5d5d5d;
      }
    `}</style>
  </main>
);
