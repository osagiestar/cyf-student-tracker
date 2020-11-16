import React from 'react';
import './sidebarcomponent.scss'
import { Link } from 'react-router-dom';
import AnalyticsLogo from '../../assets/icons/side navbar/analytics.svg'
import Student from '../../assets/icons/side navbar/students-cap.svg'

export default function SideBarComponent() {
    return (
        <div className='sidebar'>

            <div className="sidebar__info">
                <div className="sidebar__image">
                    CB
                </div>
                <span>Claire Bickley</span>
            </div>
            

            
            <nav className='sidebar__nav'>
                <Link className='sidebar__link' to='/student-tracker'><img className='sidebar__link-img' src={AnalyticsLogo} alt='analytics'/>Students Tracker</Link>
                <Link className='sidebar__link' to='/students'><img className='sidebar__link-img' src={Student} alt='student'/>Students</Link>
            </nav>

            <footer className='sidebar__footer'>
                &copy; 2020 CodeYourFuture
            </footer>
            
        </div>
    )
}
