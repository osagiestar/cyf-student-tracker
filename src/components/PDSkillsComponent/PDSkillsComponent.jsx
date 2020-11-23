import React,{useState} from 'react';
import './headingpagecomponent.scss';

export default function PDSkillsComponent (){

    let studentProfile ={
    studentInfo: {
        name: 'fdsfds',
        email: '...'
        },
    overview: {
        'Homeworks Performance': [6,6,6,6,6,6,6,6,10,10],
        'Missing Homeworks': ['yes', 'yes', 'yes', 'no'],
        'Classes Attended': ['no','no','yes', 'late','no'],
        'Classes Late': ['yes', 'no', 'late', 'no']
        },
    PDSkills: {
        'Communication': null,
        'Motivation': null,
        'Collaboration & Team Work': null,
        'Resilience': null,
        'Growth Mindset': null,
        'Organisation': null,
        'Attention to detail': null,
        'Punctuality': null,
        'Focus ': null,
        'Language Proficiency': null,
        'Self-confidence': null,
        'Pro-active Learning': null
    }
}

    let valueArr = [];
    let skillsObject = studentProfile.PDSkills;
    let skillsArr = Object.keys(skillsObject);
    console.log(skillsArr);

    const[option, setOption]= useState(0);

    function handleChange(e){
        setOption(e.target.value);
    };


    function handleClick (e){
        valueArr[option] = e.target.innerText;
        console.log(valueArr);
    }

    function setResult (){
        skillsArr.map((s,ind) => studentProfile.PDSkills[s]=valueArr[ind]);
        console.log(studentProfile.PDSkills);
    }
    return (
    <div className = 'main-cover'>
        <h1 className= 'component-name'>PD Skills</h1>
        <div className='PDSkills-cover'> 

            <label for="PDSkills">Skill</label>

            <select id="PDSkills" value={option} onChange ={handleChange}>
                {skillsArr.map((s,ind) => {valueArr.push(skillsObject[s]);
                    return <option value={ind} >{s}</option>}
                )};
            </select>
        </div>

        <div className= 'SkillLevel-cover'>

            <label>Skill Level</label>

            <button className='excellent-button' onClick={handleClick} >Excellent</button>
            <button className='very-good-button' onClick={handleClick} >Very Good</button>	            
            <button className='excellent-button' onClick={handleClick} >Average</button>	            
            <button className='excellent-button' onClick={handleClick} >Below Average</button>	            
            <button className='excellent-button' onClick={handleClick} >Poor</button>
            
            <button className='excellent-button' onClick={setResult} >SUBMIT</button>
        </div>

    </div>
    );
};