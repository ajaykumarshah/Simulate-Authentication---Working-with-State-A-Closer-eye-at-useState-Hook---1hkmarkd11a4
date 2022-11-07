import React, { useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {

  const [obj, setObj] = useState({ name: "", email: "", password: "" });
  const [copyobj, setCopyobj] = useState({ name1: "", email1: "", password1: "" });
  const [status, setStatus] = useState(false);

  const handlechange = () => {
    console.log(copyobj);
    let obj2 = new User(copyobj.email1, copyobj.password1, copyobj.name1);
    console.log(obj2);
    setObj({ ...obj2 });
    setStatus(true);
  }
  const handlechange2 = (event) => {
    if (event.target.id == "signupName") {
      setCopyobj({ name1: event.target.value, email1: copyobj.email1, password1: copyobj.password1 });
      return
    }
    else if (event.target.id == "signupEmail") {
      setCopyobj({ name1: copyobj.name1, email1: event.target.value, password1: copyobj.password1 });
      return;
    }
    else {
      setCopyobj({ name1: copyobj.name1, email1: copyobj.email1, password1: event.target.value });
    }
  }
  const handlelogin = () => {
    console.log("aka");
  }
  const handlelogout = () => {
    setStatus(false);
  }


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
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.password}</td>
          </tr>
        </tbody>
      </table>

      {status == false ? <div>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" value={copyobj.name} onChange={handlechange2} />
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" value={copyobj.email} onChange={handlechange2} />
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" value={copyobj.password} onChange={handlechange2} />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
          />

        </form>
        <button id="signup-button" onClick={handlechange}  >Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" />
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" />
        </form>
        <button id="login-button" onClick={handlelogin}  >Login</button>
      </div> : null}

      {status ? <div>
        <h3 id="username">{obj.name}</h3>
        <h3 id="email">{obj.email}</h3>
        <button id="logout-button" onClick={handlelogout}  >Logout</button>
      </div> : null}
    </div>

  );
};

export default App;
