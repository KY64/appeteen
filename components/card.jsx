import React from "react"


export default (props) =>
<>
<h1 style= {{color: "white"}}><center>LOGIN</center></h1>
<div className="card">
{props.children}
<style jsx>{`
.card{
    width: 100%;
    padding: 25px 0;
    background: white;
    margin: 0 auto;
    border-radius: 40px;    
}
.login{
    color: #FFF;
}
`}</style>
</div>
</>