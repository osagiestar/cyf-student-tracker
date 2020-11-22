import React from 'react';
import { Link } from 'react-router-dom';
import ClassAttendanceTable from '../../components/ClassAttendanceTable/ClassAttendanceTable';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import '../EduHomework/eduhomework.scss'; 

export default function ClassAttendance() {
    return (
        // we are using the same classes as for Edu Homework Page
        <div className='eduHomeworkPage'>
            <HeadingPageComponent title={'Class Attendance'} />
            <Link className='eduHomeworkPage__btn' to='/student-tracker'>&larr; goBack</Link>
            <ClassAttendanceTable />

        </div>
    )
}
