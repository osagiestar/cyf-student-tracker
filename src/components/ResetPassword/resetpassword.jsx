import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "materialize-css/dist/js/materialize.min.js";
import Button from "../../components/ButtonComponent/buttoncomponent";
import "./resetpassword.scss";
import M from "materialize-css";

export default function ResetPassword() {
  const history = useHistory();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PostData = () => {
    console.log("hi");
    if (re) {
      alert("invalid email");
      return;
    }
    fetch("/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: "invalid email" });
        } else {
          M.toast({ html: data.message });
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="password-reset">Reset Password</h2>
      <Link className="password-reset" to="/login">
        &larr; goBack
      </Link>
      <div className="reset-input" onClick={PostData}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <Button className="password-reset__btn" title={"reset"} />
      </div>
    </div>
  );
}
