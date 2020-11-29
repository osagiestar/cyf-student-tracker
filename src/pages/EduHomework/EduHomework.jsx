import React, {useEffect, useState} from 'react';
import './eduhomework.scss';
import EduHomeworkTable from '../../components/EduHomeworkTable/EduHomeworkTable';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import { Link } from 'react-router-dom';
// import fakeData from './fakeData'


export default function EduHomework() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://stingy-cherry-sight.glitch.me/students/Edu-Homework")
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => {
            console.error(err);
          });
    }, [])
 

    return data.length > 0 
    ?

    (
        <div className='eduHomeworkPage'>
            <HeadingPageComponent title={'Edu Homework'} />
            <Link className='eduHomeworkPage__btn' to='/students-tracker'>&larr; goBack</Link>
            <EduHomeworkTable data={data} />

        </div>
    )
    :
    <div>Loading...</div>
}