import React from 'react';
import './eduhomeworktable.scss'
import data from './fakeData'

export default function EduHomeworkTable() {

    let modules = Object.keys(data[0].eduHomework);

    return (
        <div className='table-box'>
                <table className='table'>
                    <thead className='table__head'>
                
                        <tr>
                            <th className='table__heading' rowSpan='2'>Student Name</th>

                            {/* creating each module title in the header of the table and also dynamically adding col span  */}
                            {
                                modules.map((module,index)=> <th key={index} className='table__heading' colSpan={Object.keys(data[0].eduHomework[module]).length}>{module}</th>)
                            }
                            
                        </tr>
                            
                        <tr>

                            {/* displaying weeks in a module */}
                            {
                            modules.map(module => {
                                        return Object.entries(data[0].eduHomework[module]).map(([key, value], index) =>
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
                                        return Object.entries(student.eduHomework[module]).map(([key, value], index) =>
                                            <td key={index} className={value !== null ? (value <= 3 ? 'red' : value >= 8 ? 'green' : 'yellow') : 'white'}>{value}</td>
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
