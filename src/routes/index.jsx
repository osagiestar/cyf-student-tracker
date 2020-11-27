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
import ChooseClass from '../pages/ChooseClass/ChooseClass';
import StudentProfile from '../pages/StudentProfile/StudentProfile';
export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Front} />
        <Route path="/auth/login" component={Login} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/choose-class" component={ChooseClass} />
        <Route exact path="/students-tracker" component={StudentTracker} />
        <Route exact path="/student/student_data" component={Students} />
        <Route exact path="/student/profile/:profile" component={StudentProfile} />
        <Route path="/students/Edu-Homework" component={EduHomework} />
        <Route path="/students/Class-Attendance" component={ClassAttendance} />
        <Route path="/students/PD-Skills" component={PDSkills} />
        <Route path="/students/Student-Info" component={Soon} />
        <Route path="/students/Laptop" component={Soon} />
      </BrowserRouter>
    </div>  
  );
};  
