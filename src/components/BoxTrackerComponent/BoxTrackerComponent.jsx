import React from 'react'
import { Link } from 'react-router-dom'
import './boxtrackercomponent.scss'

export default function BoxTrackerComponent({title, image}) {
    return (
        <Link className='BoxTrackerComponent' to={`/student-tracker/${title}`}>
            <img className='BoxTrackerComponent__image' src={image} alt=""/>
            <h3 className='BoxTrackerComponent__title'>{title}</h3>
        </Link>
    )
}
