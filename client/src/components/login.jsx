import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import MasterNavbar from "./MasterNavbar";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [successfulForm, setSuccessfulForm] = useState(false);
  const [headerName, setheaderName] = useState();
  const [headerId, setheaderId] = useState();
    
  const handleHeaderIDChange = (data) => {
    setheaderId(data);
  };

  const handleHeaderNameChange = (data) => {
    setheaderName(data);
  };

  const handleEmailChange = (evt) => {
    evt.preventDefault();

    setEmail(evt.target.value);
  };

  const handlePassChange = (evt) => {
    evt.preventDefault();

    setPass(evt.target.value);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const checkUser = {
      email_address: email,
      password: pass,
    };

    axios
      .post("http://localhost:8000/login", { checkUser })
      .then((res) => {
        console.log(
          "inside front end - signUpUsers.js - consloe log res...want to set token",
          res.data
        );

        //set headerName with full_name from backend..
        handleHeaderNameChange(res.data.full_name);
        handleHeaderIDChange(res.data.user_id);

        //store token in local storage
        try {
          localStorage.setItem("token", JSON.stringify(res.data));
        } catch (e) {}

        const myUserToken = localStorage.getItem("token");

        if (myUserToken) {
          console.log("token exist", myUserToken);
        } else {
          console.log("token DOESNT  exist");
        }

        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.error("login error LOGIN JSX: ", err);
      });
  };

  if (successfulForm) {
    return <Redirect to="/homeUsers" />;
  }

  return (
    <div>
      <MasterNavbar headerName={headerName} />

      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={handlePassChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
        <p className="forgot-password text-right">
          <a href="/sign-up">Looking to Register?</a>
        </p>
      </form>
    </div>
  );
}
