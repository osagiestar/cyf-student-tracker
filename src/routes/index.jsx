import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import EduHomework from '../pages/EduHomework/EduHomework';
import Front from '../pages/Front/Front';
import ResetPassword from '.././components/ResetPassword/resetpassword'
import Login from '../pages/Login/Login';
import StudentTracker from '../pages/StudentTracker/StudentTracker';
import ClassAttendance from '../pages/ClassAttendance/ClassAttendance';
import PDSkills from '../pages/PDSkills/PDSkills';
import Soon from '../pages/Soon/Soon';
import Students from '../pages/Students/Students';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Front} />
        <Route path="/login" component={Login} />
        <Route path="/reset" component={ResetPassword} />
        <Route exact path="/student-tracker" component={StudentTracker} />
        <Route exact path="/students" component={Students} />
        <Route path="/student-tracker/Edu-Homework" component={EduHomework} />
        <Route path="/student-tracker/Class-Attendance" component={ClassAttendance} />
        <Route path="/student-tracker/PD-Skills" component={PDSkills} />
        <Route path="/student-tracker/Student-Info" component={Soon} />
        <Route path="/student-tracker/Laptop" component={Soon} />
      </BrowserRouter>
    </div>
  );
};  
