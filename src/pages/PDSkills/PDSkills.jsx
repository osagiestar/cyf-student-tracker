import React from 'react'
import { Link } from 'react-router-dom';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import PDSkillsTable from '../../components/PDSkillsTable/PDSkillsTable';
import '../EduHomework/eduhomework.scss';

export default function PDSkills() {
    return (
        // we are using the same classes as for Edu Homework Page
        <div className='eduHomeworkPage'>
            <HeadingPageComponent title={'PD Skills'} />
            <Link className='eduHomeworkPage__btn' to='/students-tracker'>&larr; goBack</Link>
            <PDSkillsTable />
        </div>
        
    )
}
