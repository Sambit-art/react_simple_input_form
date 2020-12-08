import React from "react";
import "./styles.css";

export default function App() {
  function cheakinput(){
    var email=document.getElementById("email");
    if(email.checkValidity()==true){
      email.style.borderBottom="3px solid green"
    }else{
      email.style.borderBottom="3px solid red"
    }
  }
  function getinput(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    console.log(email,password)
  }
  return (
    <div className="Login">
      <input  id="email" type="email" onChange={cheakinput} placeholder="ENTER YOUR EMAIL" required/>
      <input id="password" type="password" onChange={cheakinput} placeholder="ENTER YOUR PASSWORD" required />
      <button onClick={getinput}>Login</button>
    </div>
  );
}
