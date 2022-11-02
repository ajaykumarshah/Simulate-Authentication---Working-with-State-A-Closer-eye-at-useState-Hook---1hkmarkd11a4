import React from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
  return (
    <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{/** user's name */}</td>
            <td>{/** user's email */}</td>
            <td>{/** user's password */}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" />
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" />
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
          />
        </form>
        <button id="signup-button">Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" />
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" />
        </form>
        <button id="login-button">Login</button>
      </div>

      <div>
        <h3 id="username">{/** Logged in user's name */}</h3>
        <h3 id="email">{/** Logged in user's email */}</h3>
        <button id="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default App;
