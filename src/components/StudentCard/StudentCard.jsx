import React from 'react'
import { Link } from 'react-router-dom';
import MiniOverview from '../MiniOverview/MiniOverview';
import './studentcard.scss';

export default function StudentCard({name, initials, profile, index, overviewData}) {
   
    return (
        <Link to={`/student/profile/${profile}`} className='student-card'>

            <div className="student-card__info">
                <div className="student-card__image">{initials}</div>
                <h2 className="student-card__name" >{index}. {name}</h2>
            </div>

            
            <MiniOverview data={overviewData} />
        </Link>
    )
}
