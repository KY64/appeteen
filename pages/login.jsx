import React from "react" 
import Card from "../components/card"
import Button from "../components/buttonlogin"

export default () =>

<Card>
<div style={{display: "grid"}}>
        <input type="email" name="email" id="ed_email" placeholder="Email" />
      
        <input
          type="password"
          name="Password"
          id="ed_password"
          placeholder="Password"
        />
          <div className="forgot"><a href="#">Forgot Password?</a></div>
          <button className="loginGoogle">Login with Google</button>
      <Button />
</div>
<style jsx global>{`
body {
    background: #DD2E54;
    font-family: 'Open Sans', sans-serif;
}

div {
    margin: 0 auto;
    display: block;
}

.loginGoogle{
    margin: 0 auto;
    font-size: 10pt;
    width: 80%;
    display: block;
    margin-top: 5%;
    padding: 10px 10px;
    border: 1.5px solid #C0C0C0;
    border-radius: 5px;
    background: none;
    margin-bottom: 15%;
}

.forgot{
    margin-right: 50px;
    margin-bottom: 20%;
    text-decoration: none;
    color: #DD2E54;
    font-size: 10pt;
}

#ed_email{
    width: 70%;
    display: block;
    font-size: 10pt;
    margin: 0 auto;
    margin-bottom: 5%;
    border: none;
    border-bottom: 2px inset #DD2E54;
    padding: 10px 10px;
    outline: none;
}

#ed_password{
    width: 70%;
    display: block;
    font-size: 10pt;
    margin: 0 auto;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px inset #DD2E54;
    padding: 10px 10px;
    outline: none;
}
 
`}</style>
</Card>
