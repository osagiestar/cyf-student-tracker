import React from 'react';
import './studentinfo.scss';

export default function StudentInfo({data}) {

    
    let studentInfo = Object.entries(data);
    console.log(studentInfo)

    return (
        <div className='student-info'>
            {
                studentInfo.map(([key,value], index) => 
                <p key={index}><span className='student-info__title'>{key}: </span>{value}</p>
                )
            }
           
            
        </div>
    )
}
