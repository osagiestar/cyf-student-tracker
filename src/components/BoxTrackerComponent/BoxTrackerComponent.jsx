import React from 'react';
import { Link } from 'react-router-dom';
import './boxtrackercomponent.scss';

export default function BoxTrackerComponent({ title, image }) {
  let formatedTitle = title.split(' ').join('-');
  return (
    <Link className="BoxTrackerComponent" to={`/student-tracker/${formatedTitle}`}>
      <img className="BoxTrackerComponent__image" src={image} alt="" />
      <h3 className="BoxTrackerComponent__title">{title}</h3>
    </Link>
  );
}
