import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ClassAttendanceTable from '../../components/ClassAttendanceTable/ClassAttendanceTable';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import '../EduHomework/eduhomework.scss'; 
// import fakeData from './fakeData';

export default function ClassAttendance() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://stingy-cherry-sight.glitch.me/students/Class-Attendance")
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => {
            console.error(err);
          });
    }, [])
 


    return data.length > 0 
    ?
        // we are using the same classes as for Edu Homework Page
        <div className='eduHomeworkPage'>
            <HeadingPageComponent title={'Class Attendance'} />
            <Link className='eduHomeworkPage__btn' to='/students-tracker'>&larr; goBack</Link>
            <ClassAttendanceTable data={data}  />

        </div>
    :
        <div>Loading...</div>
}
