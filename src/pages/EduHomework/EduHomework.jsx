import React from 'react';
import './eduhomework.scss';
import EduHomeworkTable from '../../components/EduHomeworkTable/EduHomeworkTable';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import { Link } from 'react-router-dom';


export default function EduHomework() {

    return (
        <div className='eduHomeworkPage'>
            <HeadingPageComponent title={'Edu Homework'} />
            <Link className='eduHomeworkPage__btn' to='/students-tracker'>&larr; goBack</Link>
            <EduHomeworkTable />

        </div>
    )
}
