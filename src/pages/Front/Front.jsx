import React from "react";
import "./front.scss";
import background from "../../assets/images/background.jpg";

export default function Front(props) {
  const handleSubmit = () => {
    props.history.push("/login");
  };
  return (
    <div className="front-page">
      <img
        className="front-page__logo"
        src={background}
        alt="backgroundImage"
      />
      <h1 className="front-page-title">CodeYourFuture Homework Tracking App</h1>
      <button className="front-page-button" onClick={handleSubmit}>
        Login as a Teacher
      </button>
    </div>
  );
}
