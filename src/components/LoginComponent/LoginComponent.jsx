import React, {useState } from "react";
import "./logincomponent.scss";
import { useHistory, Link } from "react-router-dom";
import Button  from "../../components/ButtonComponent/buttoncomponent";

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
    <div className="login-box">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1>Log In</h1>
        </div>
          <input
            name="Username"
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <div onClick={handleSubmit}>
        <Button title= {"Login"} />
        </div>    
      </form>
      <div>
      <Link to="/reset">Forgot your password ?</Link>
      </div>
      
    </div>
  );
}
