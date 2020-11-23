import React,{useState} from 'react';
import './headingpagecomponent.scss';
import data from './fakeData';

export default function PDSkillsComponent (){

    const[option, setOption]= useState('0');

    function handleChange(e){
        setOption({value: e.target.value});
    };

    let pdSkillsArr = [
        {value:1, skill:'Communication'},
        {value:2, skill:'Motivation'},
        {value:3, skill:'Team Work'},
        {value:4, skill:'Resilience'},
        {value:5, skill:'Growth Mindset'},
        {value:6, skill:'Organization'},
        {value:7, skill:'Attention to Details'},
        {value:8, skill:'Punctuality'},
        {value:9, skill:'Language Proficiency'},
        {value:10, skill:'Self-Confidence'},
        {value:11, skill:'Pro-Active Learning'},
        {value:12, skill:'Focus'},
    ]

    let skillLevelArr = [
        {id = 1, skillLevel: 'Excellent'},
        {id = 2, skillLevel: 'Very Good'},
        {id = 3, skillLevel: 'Average'},
        {id = 4, skillLevel: 'Below Average'},
        {id = 5, skillLevel: 'Poor'}
    ];

    const[skill, setSkill] = useState('');

    function handleClick (e){
        setSkill()
    }

    return (
        <div className = 'main-cover'>
            <h1 className= 'component-name'>
            PD Skills
            </h1>
        <div className='PDSkills-cover'> 
            <label for="PDSkills">Skill</label>
            <select id="PDSkills" value = {option} onChange ={handleChange}>
                {pdSkillsArr.map(s=>{
                    <option value={s.value} >{s.skill}</option>
                })};
            </select>
        </div>
        <div className= 'SkillLevel-cover'>
            <label>Skill Level</label>
                {skillLevelArr.map(k=>{
                    <button className='excellent-button' onCLick = {handleClick}>{k.skillLevel}</button>
                })};
        </div>

        </div>

    );
};