import React from 'react';
import HeadingPageComponent from '../HeadingPageComponent/HeadingPageComponent';
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

export default function Overview({data}) {

    let overviews = Object.entries(data);
    
    return (
        <div className="overviewComponent">
            <HeadingPageComponent title={'Overview'} />
        
            <div className="overview">
                
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
                        <div key={index} className='overview__card'>
                            <div className="overview__card-percent">
                                <svg>
                                    <circle cx='30' cy='30' r='30'></circle>
                                    <circle style={{'strokeDashoffset': `${190 - (190 * finalResult) / 100}`, stroke: returnColourBasedOnVal(finalResult) }} cx='30' cy='30' r='30'></circle>
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
        </div>
        
    
    )
}
