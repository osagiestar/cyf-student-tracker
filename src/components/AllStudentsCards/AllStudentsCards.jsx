import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import './allstudentscards.scss';

function createInitials(name){
    let nameArray = name.split(' ');
    let formatedName = nameArray.map(name => name[0]);
    return formatedName;
}

export default function AllStudentsCards({students}) {



    return (
        <div>
            {
                students.map((student,index) => {
                    let initials = createInitials(student.name)
                    return <StudentCard key={index} name={student.name} initials={initials} index={index+1} overviewData={student.overview} />
                })
            }
            
        </div>
    )
}
