import "./login.css";
import logo from"./hrLogo.png";
// import { Modal, Button } from "react-bootstrap";
// import AddUser from "../../components/modal/AddUser";
// import { useState } from "react";

import {LoginRequest} from './LoginRequest';
import React from "react";



const Login = ({ email, password, user, setEmail, setPassword, setUser }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    await LoginRequest(email, password, setUser);

    setEmail("");
    setPassword("");
  };




  return (
    <div className="opaqueLayer">
      <div className="loginWrapper">
        <div className="loginBox">
          <div className="logoBox">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
          <form onSubmit={submitHandler} className="inputBlock">
      <input
      className="email"
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  type="submit" className="signupBTN">Login</button>
      <h1>{user ? `Logged in as ${user}` : "Wrong Details"}</h1>
    </form>
        </div>
      </div>
      </div>
    
        
 




  );
};



export default Login;