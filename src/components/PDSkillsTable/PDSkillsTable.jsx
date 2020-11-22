import React from 'react';
import '../EduHomeworkTable/eduhomeworktable.scss';
import data from './fakeData'

export default function PDSkillsTable() {

    let skills = Object.keys(data[0].PDSkills);

    return (
        // we are using the same classes as for Edu Homework Table
        <div className='table-box'>
                <table className='table'>
                    <thead className='table__head'>
                
                        <tr>
                            <th className='table__heading' rowSpan='2'>Student Name</th>

                            {/* creating each skill title in the header of the table   */}
                            {
                                skills.map((skill,index)=> <th key={index} className='table__heading' >{skill}</th>)
                            }
                            
                        </tr>
                            
                        
                        
                    </thead>
                    <tbody>
                        

                        {/* displaying each student name and skill rating */}
                        {
                            data.map((student,index) =>  
                            
                            <tr key={index}>
                                <td key={index} className='table__studentName'>{student.name}</td>  
                                {
                                    
                                    Object.entries(student.PDSkills).map(([key, value], index) =>
                                        <td 
                                            key={index} 
                                            //choose different color background depending on the skill rating
                                            className={
                                                value !== null ? 
                                                (value == 'Below Average' ? 'red-darker' : value == 'Poor' ? 'red' : value == 'Average' ? 'yellow' : value == 'Very Good' ? 'green' : 'green-darker') : 
                                                'white'} 
                                        >
                                        {value}
                                        </td>
                                    )
                                    
                                    
                                }        
                            </tr>
                            )
                        }
    
                    </tbody>
                </table>
            </div>
    )
}
