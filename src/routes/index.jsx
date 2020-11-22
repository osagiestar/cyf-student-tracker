import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import EduHomework from '../pages/EduHomework/EduHomework';
import Front from '../pages/Front/Front';
import ResetPassword from '.././components/ResetPassword/resetpassword'
import Login from '../pages/Login/Login';
import StudentTracker from '../pages/StudentTracker/StudentTracker';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Front} />
        <Route path="/login" component={Login} />
        <Route path="/reset" component={ResetPassword} />
        <Route exact path="/student-tracker" component={StudentTracker} />
        <Route path="/student-tracker/Edu-Homework" component={EduHomework} />
      </BrowserRouter>
    </div>
  );
};
