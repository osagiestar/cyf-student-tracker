import React from "react";
import { Link } from "react-router-dom";
import "./front.scss";
import Button from "../../components/ButtonComponent/buttoncomponent";

export default function Front(props) {
  return (
    <div className="front-page">
      <h1 className="front-page-title">
        Code Your Future Progress 
        <br /> Tracking App
      </h1>
      <Link to="/auth/login">
        <Button title={"Login as a Teacher"} />
      </Link>
    </div>
  );
}
