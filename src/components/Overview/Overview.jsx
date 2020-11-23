import React from 'react';
import './overview.scss';

function returnColourBasedOnVal(val){
    if(val < 35){
        return '#DC3545';
    }
    if(val < 65){
        return '#E9AF01';
    }
    if(val >= 65){
        return '#28A745';
    }
}

export default function Overview() {


    let student = {
        
       overview: {
        'Homeworks Performance': [6,6,6,6,6,6,6,6,10,10],
        'Missing Homeworks': ['yes', 'yes', 'yes', 'no'],
        'Classes Attended': ['no','no','yes', 'late','no'],
        'Classes Late': ['yes', 'no', 'late', 'no']
        }
     
    };


    let overviews = Object.entries(student.overview);
    

    return (
        
            <div className="overview">
            {
                overviews.map(([key, value]) => {
                    let sum = 0;

                    value.forEach(val => {
                        //check and transform strings in numbers to do the maths
                        if(val === 'yes'){
                            val = 10;
                        }
                        if(val === 'no'){
                            val = 0;
                        }
                        if(val === 'late'){
                            val = 5;
                        }
                        
                        sum = sum + val;
                    })

                    let finalResult = Math.round(sum / value.length *10);
                    return (
                        <div className='overview__card'>
                            <div className="overview__card-percent">
                                <svg>
                                    <circle cx='70' cy='70' r='70'></circle>
                                    <circle style={{'strokeDashoffset': `${440 - (440 * finalResult) / 100}`, stroke: returnColourBasedOnVal(finalResult) }} cx='70' cy='70' r='70'></circle>
                                </svg>

                                <div className="number">    
                                    <h2>{finalResult}<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="text">{key}</h2>
                    </div>
                    )
                })
            }
            
                

                
        
            </div>
    
    )
}
