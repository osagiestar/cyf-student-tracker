import React from 'react'
import './studenttracker.scss'

import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent'
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent'
import BoxTrackerComponent from '../../components/BoxTrackerComponent/BoxTrackerComponent'
import attendance from '../../assets/icons/student tracker page/attendance.svg'
import homework from '../../assets/icons/student tracker page/homework.svg'
import information from '../../assets/icons/student tracker page/information.svg'
import laptop from '../../assets/icons/student tracker page/laptop.svg'
import skills from '../../assets/icons/student tracker page/skills.svg'


export default function StudentTracker() {

    const boxTrackerInfo = [
        {
            image: homework,
            title: 'Edu Homework'
        },
        {
            image: skills,
            title: 'PD Skills'
        },
        {
            image: attendance,
            title: 'Class Attendance'
        },
        {
            image: information,
            title: 'Student Info'
        },
        {
            image: laptop,
            title: 'Laptop'
        }
    ]

    return (
        <div className='studentTrackerPage'>
            <SideBarComponent />

            <div className="studentTrackerPage__rightSide">
                <HeadingPageComponent title={'Student Tracker'} />

                <div className="studentTrackerPage__content">
                    {
                        boxTrackerInfo.map((info,index)=> <BoxTrackerComponent key={index} image={info.image} title={info.title} /> )
                    }
                </div>
                
                
            </div>
            
            
        </div>
    )
}
