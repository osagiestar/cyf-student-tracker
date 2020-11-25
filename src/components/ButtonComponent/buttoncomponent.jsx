import React from 'react';
import './buttoncomponent.scss'

export default function Button({title, className, onClick}) {
    return (
      <button onClick={onClick} className={`btn btn__${className}`}>
        {title}
      </button>
    );
   }