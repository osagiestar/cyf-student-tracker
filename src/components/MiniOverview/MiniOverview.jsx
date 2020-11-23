import React from 'react';
import './minioverview.scss';

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

export default function MiniOverview() {


    let student = {
        
       overview: {
        'Homeworks Performance': [10,10,10,10,10,10,10,10,10,10],
        'Missing Homeworks': ['yes', 'yes', 'yes', 'no'],
        'Classes Attended': ['no','no','yes', 'late','no'],
        'Classes Late': ['yes', 'no', 'late', 'no']
        }
     
    };


    let overviews = Object.entries(student.overview);
    

    return (
        
            <div className="mini-overview">
            {
                overviews.map(([key, value], index) => {
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
                        <div key={index} className='mini-overview__card'>
                            <div className="mini-overview__card-percent">
                                <svg>
                                    <circle cx='20' cy='20' r='20'></circle>
                                    <circle style={{'strokeDashoffset': `${120 - (120 * finalResult) / 100}`, stroke: returnColourBasedOnVal(finalResult) }} cx='20' cy='20' r='20'></circle>
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
