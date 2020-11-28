import React from 'react';
import './sidebarcomponent.scss';
import { Link } from 'react-router-dom';
import AnalyticsLogo from '../../assets/icons/side navbar/analytics.svg';
import Student from '../../assets/icons/side navbar/students-cap.svg';

export default function SideBarComponent() {
  let teacherDetails= JSON.parse(localStorage.getItem('token'));
  let name = JSON.stringify(teacherDetails.user);
  var initials = name.match(/\b\w/g) || [];
initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return (
    <div className="sidebar">
      <div className="sidebar__info">
  <div className="sidebar__image">{initials}</div>
        <span>{teacherDetails.user}</span>
      </div>
      <nav className="sidebar__nav">
        <Link className="sidebar__link" to="/students-tracker">
          <img
            className="sidebar__link-img"
            src={AnalyticsLogo}
            alt="analytics"
          />
          Students Tracker
        </Link>
        <Link className="sidebar__link" to="/student/student_data">
          <img className="sidebar__link-img" src={Student} alt="student" />
          Students
        </Link>
      </nav>

      <footer className="sidebar__footer">&copy; 2020 CodeYourFuture</footer>
    </div>
  );
}
