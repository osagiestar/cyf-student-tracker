import React, { useState } from "react";
import "./logincomponent.scss";
import { useHistory } from "react-router-dom";

export default function LoginComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    let information = {
      userName: userName,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    };
    fetch("https://stingy-cherry-sight.glitch.me/login", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          localStorage.setItem("token", res.token); //storing the token in localStorage.
          history.push("/choose-class");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error login in please try again!");
      });
    setUserName("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <div>
          <h1>Log In</h1>
        </div>
        <div className="text-box">
          <input
            name="userName"
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="text-box">
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <input type="submit" className="login-box-btn" value="Log In" />
        </div>
        <ul>
          <li>
            <a href="#">Forgot your password ?</a>
          </li>
        </ul>
      </form>
    </div>
  );
}
