import React from "react"

export default (props)=>
<>
<button className="dropdown">v</button>
<style jsx>
    {`
    .dropdown{
        width: 30px;
        height: 30px;
        color: black;
        border-radius: 100%;
        background: white;
        margin: ${props.margin};
        display: block;
    }
    `}
</style>
</>