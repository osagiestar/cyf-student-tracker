import React from 'react';
import '../EduHomeworkTable/eduhomeworktable.scss';
// import data from './fakeData';

export default function ClassAttendanceTable({data}) {

    let modules = Object.keys(data[0].classAttendance);

    return (
        // we are using the same classes as for Edu Homework Table
        <div className='table-box'>
                <table className='table'>
                    <thead className='table__head'>
                
                        <tr>
                            <th className='table__heading' rowSpan='2'>Student Name</th>

                            {/* creating each module title in the header of the table and also dynamically adding col span  */}
                            {
                                modules.map((module,index)=> <th key={index} className='table__heading' colSpan={Object.keys(data[0].classAttendance[module]).length}>{module}</th>)
                            }
                            
                        </tr>
                            
                        <tr>

                            {/* displaying weeks in a module */}
                            {
                            modules.map(module => {
                                        return Object.entries(data[0].classAttendance[module]).map(([key, value], index) =>
                                            <th key={index} className='table__heading' >{key}</th>
                                        )
                                    })
                            }
                        </tr>
                        
                    </thead>
                    <tbody>
                        

                        {/* displaying each student name and rating */}
                        {
                            data.map((student,index) =>  
                            
                            <tr key={index}>
                                <td key={index} className='table__studentName'>{student.name}</td>  
                                {
                                    modules.map(module => {
                                        return Object.entries(student.classAttendance[module]).map(([key, value], index) =>
                                            <td 
                                            key={index} 
                                            //choose different color background depending on the rating
                                            className={value !== null ? (value === 'yes' ? 'green' : value === 'no' ? 'red' : 'yellow') : 'white'}
                                        >
                                        {value}
                                        </td>
                                        )
                                    })
                                    
                                }        
                            </tr>
                            )
                        }
    
                    </tbody>
                </table>
            </div>
    )
}
