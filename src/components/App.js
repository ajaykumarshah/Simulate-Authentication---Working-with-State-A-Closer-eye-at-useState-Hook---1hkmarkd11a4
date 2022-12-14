import React from "react";
import "../styles/App.css";
import User from "../models/user";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [signUpForm, setSignUpForm] = useState({
    signupEmail: "",
    signupPassword: "",
    signupConfirmPassword: "",
    signupName: "",
  });

  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const onChangeSignupForm = (event) => {
    setSignUpForm({
      ...signUpForm,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeLoginForm = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const getUser = (email) => {
    return users.find((user) => user.email === email) || null;
  };

  const registerUser = async (email, password, confirmPassword, name) => {
    if (password !== confirmPassword || getUser(email)) {
      return false;
    }
    const user = new User(email, password, name);
    setUsers((previousState) => previousState.concat(user));
    return true;
  };

  const loginUser = (email, password) => {
    const user = getUser(email);
    if (loggedInUser || !user || user.password !== password) return false;
    setLoggedInUser(user);
    return true;
  };

  const logoutUser = () => {
    if (!loggedInUser) return false;
    setLoggedInUser(null);
    return true;
  };

  return (
    <div id="main">
      <table id="all-users">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!loggedInUser ? (
        <div>
          <form className="signup-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="signupName"
              id="signupName"
              onChange={onChangeSignupForm}
              value={signUpForm.signupName}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="signupEmail"
              id="signupEmail"
              onChange={onChangeSignupForm}
              value={signUpForm.signupEmail}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="signupPassword"
              id="signupPassword"
              onChange={onChangeSignupForm}
              value={signUpForm.signupPassword}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="signupConfirmPassword"
              id="signupConfirmPassword"
              onChange={onChangeSignupForm}
              value={signUpForm.signupConfirmPassword}
            />
          </form>
          <button
            id="signup-button"
            onClick={() =>
              registerUser(
                signUpForm.signupEmail,
                signUpForm.signupPassword,
                signUpForm.signupConfirmPassword,
                signUpForm.signupName
              )
            }
          >
            Signup
          </button>
          <form className="login-styles">
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              name="loginEmail"
              type="email"
              value={loginForm.loginEmail}
              onChange={onChangeLoginForm}
            />
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              name="loginPassword"
              type="password"
              value={loginForm.loginPassword}
              onChange={onChangeLoginForm}
            />
          </form>
          <button
            id="login-button"
            onClick={() =>
              loginUser(loginForm.loginEmail, loginForm.loginPassword)
            }
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h3 id="username">{loggedInUser.name}</h3>
          <h3 id="email">{loggedInUser.email}</h3>
          <button id="logout-button" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;