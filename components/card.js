import React from "react"


export default (props) =>
<>
<h1 style= {{color: "white"}}><center>LOGIN</center></h1>
<div className="card">
{props.children}
<style jsx>{`
.card{
    width: 50%;
    padding-bottom: 70px;
    padding-top: 70px;
    background: white;
    margin: 0 auto;
    border-top-left-radius: 180px;
    border-top-right-radius: 180px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;    
}
.login{
    color: #FFF;
}
`}</style>
</div>
</>