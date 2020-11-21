import React from 'react';
import './buttoncomponent.scss'

export default function Button({title}) {
    return (
      <button className="btn">
        {title}
      </button>
    );
   }