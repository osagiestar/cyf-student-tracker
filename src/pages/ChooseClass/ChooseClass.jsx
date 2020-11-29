import React from 'react';
import './chooseclass.scss'

import { useHistory } from "react-router-dom";

const ChooseClass = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/students-tracker");
  }
  let myToken = JSON.parse(localStorage.getItem('token'));
  

  return(
    <div className="container-chooseClass">
      <div className="welcome-msg">
        <h3>Welcome back <span className="userName">{myToken.user} </span>!</h3>
        <p>Please choose which class would you like to access:</p>
      </div>
      <div className="btnDiv">
        {
        
        
        Object.entries(myToken.class).map(([key, value], index) => {
            return <button key={index} className="container-chooseClass__btn" onClick={handleClick}>{value}</button>
        })
      
        
        }
      </div>
    </div>
  )
}
export default ChooseClass
