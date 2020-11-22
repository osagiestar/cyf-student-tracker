import React,{useState} from 'react';
import './headingpagecomponent.scss';

export default function PDSkillsComponent (){

    const[option, setOption]= useState('');

    function handleChange(e){
        setOption({value: e.target.value});
    };


    return (
        <div className = 'main-cover'>
            <h1 className= 'component-name'>
            PD Skills
            </h1>
        <div className='PDSkills-cover'> 
            <label for="PDSkills">Skill</label>
            <select id="PDSkills" value = {option} onChange ={handleChange}>
                <option value="PDSkills-1">Communication</option>
                <option value="PDSkills-2">Motivation</option>
                <option value="PDSkills-3">Team Work</option>
                <option value="PDSkills-4">Resilience</option>
                <option value="PDSkills-5">Growth Mindset</option>
                <option value="PDSkills-6">Organization</option>
                <option value="PDSkills-6">Attention to Details</option>
                <option value="PDSkills-8">Punctuality</option>
                <option value="PDSkills-9">Language Proficiency</option>
                <option value="PDSkills-10">Self-Confidence</option>
                <option value="PDSkills-11">Pro-Active Learning</option>
                <option value="PDSkills-12">Focus</option>
            </select>
        </div>
        <div className= 'SkillLevel-cover'>
            <label>Skill Level</label>
            <button className='excellent-button'>Excellent</button>
            <button className='very-good-button'>Very Good</button>
            <button className='average-button'>Average</button>
            <button className='below-average-button'>Below Average</button>
            <button className='poor-button'>Poor</button>
        </div>

        </div>

    );
};