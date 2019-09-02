import React from "react"


export default (props) =>
<>
<div className="card">
{props.children}
<style jsx>{`
.card{
    width: 72%;
    padding: 0 15px;
    background: white;
    margin: 0 auto;
    margin-top: 17%;
    border-radius: 30px;
    border: 1.5px solid #ECECEC;
}
`}</style>
</div>
</>