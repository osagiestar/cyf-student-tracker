import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Front from '../pages/Front/Front';
import Login from '../pages/Login/Login';
import StudentTracker from '../pages/StudentTracker/StudentTracker';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/front" component={Front} />
        <Route path="/student-tracker" component={StudentTracker} />
      </BrowserRouter>
    </div>
  );
};
