import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import PDSkillsTable from '../../components/PDSkillsTable/PDSkillsTable';
import '../EduHomework/eduhomework.scss';
// import fakeData from './fakeData'

export default function PDSkills() {


    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://stingy-cherry-sight.glitch.me/students/PD-Skills")
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
            <HeadingPageComponent title={'PD Skills'} />
            <Link className='eduHomeworkPage__btn' to='/students-tracker'>&larr; goBack</Link>
            <PDSkillsTable data={data}/>
        </div>
    :
        <div>Loading...</div>  
    
}
