import React, { useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {

  const [obj, setObj] = useState({ name: "", email: "", password: "" });
  const [copyobj, setCopyobj] = useState({ name1: "", email1: "", password1: "", password2: "" });
  const [logInfo, setLoginfo] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);

  const handlechange = () => {
    // console.log(copyobj);
    let obj2 = new User(copyobj.email1, copyobj.password1, copyobj.name1);
    // console.log(obj2);
    setObj({ ...obj2 });

    if (copyobj.password1 == copyobj.password2) {
      setStatus2(true);

    }
  }
  const handlechange2 = (event) => {
    event.persist();
    if (event.target.id == "signupName") {
      setCopyobj({ name1: event.target.value, email1: copyobj.email1, password1: copyobj.password1, password2: copyobj.password2 });
      return
    }
    else if (event.target.id == "signupEmail") {
      setCopyobj({ name1: copyobj.name1, email1: event.target.value, password1: copyobj.password1, password2: copyobj.password2 });
      return;
    }
    else if (event.target.id == "signupConfirmPassword") {
      setCopyobj({ name1: copyobj.name1, email1: copyobj.email1, password1: copyobj.password1, password2: event.target.value });
      return;
    }

    else {
      setCopyobj({ name1: copyobj.name1, email1: copyobj.email1, password1: event.target.value, password2: copyobj.password2 });
    }
  }

  const handlechange3 = (event) => {
    if (event.target.id == "loginEmail") {
      setLoginfo({ email: event.target.value, password: logInfo.password });
      return
    }
    else if (event.target.id = "loginPassword") {
      setLoginfo({ email: logInfo.email, password: event.target.value });
      return
    }
  }
  const handlelogin = () => {
    if (copyobj.password1 == logInfo.password && copyobj.email1 == logInfo.email) {
      setStatus(true);
    }
    // setStatus(true);
  }
  const handlelogout = () => {
    setStatus(false);
  }


  return (
    <div id="main">
      {status2 ? <table id="all-users">
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
      </table> : null
      }

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
            value={copyobj.password2}
            onChange={handlechange2}
          />

        </form>
        <button id="signup-button" onClick={handlechange}>Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" value={logInfo.email} onChange={handlechange3} />
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" value={logInfo.password} onChange={handlechange3} />
        </form>
        <button id="login-button" onClick={handlelogin} >Login</button>
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
