import React,{useState} from 'react';
import Button from '../ButtonComponent/buttoncomponent';
import HeadingPageComponent from '../HeadingPageComponent/HeadingPageComponent';
import './PDSkillsComponent.scss';


function ChooseColor(btn) {
    let className ='';
    switch(btn) {
        case 'Excellent':
            className = 'green';
            break;
        case 'Very Good':
            className = 'blue';
            break;
        case 'Average':
            className = 'yellow';
            break;
        case 'Below Average':
            className = 'pink';
            break;
        case 'Poor':
            className = 'red';
            break;
          
        default:
          className = '';  
      }

      return className
}

export default function PDSkillsComponent ({data, getDataFromComponents, profileNumber}){

    const buttons = ['Excellent', 'Very Good', 'Average', 'Below Average', 'Poor'];

    


    let valueArr = [];
    let skillsObject = data;
    let skillsArr = Object.keys(skillsObject);

    const[option, setOption]= useState('');
    const[rate, setRate]= useState('');

    function handleChange(e){
        
        
        setOption(e.target.value)
        

    };


    function handleClick (e){
        valueArr[option] = e.target.innerHTML;
        setRate(e.target.innerHTML)
        
    }
    

    function setResult (){
        if(option !== '') {
            data[option] = rate;
            
            let info = {
                studentProfile: profileNumber,
                skill: option,
                score: rate
              }
              getDataFromComponents(info);
              
            alert(`Student was rated with ${rate} for ${option} `)
        }else{
            alert(`Please select a skill from the dropdown menu`)
        }

        
        
    }

    
    return (
    <div className = 'PDSkills'>
        <HeadingPageComponent title={'PD Skills'} />
        <div className='PDSkills__input'> 

            <label >Skill</label>

            <select className='PDSkills__input-select' value={option} onChange ={handleChange}>
            <option className='PDSkills__input-option' ></option>
                {
                skillsArr.map((skill,index) => {
                    valueArr.push(skillsObject[skill]);
                    return <option className='PDSkills__input-option' key={index} >{skill}</option>}
                )};
            </select>
        </div>

        <div className='PDSkills__buttons'>

            <label>Skill Level</label>

            {
                buttons.map((btn,index)=> <Button 
                className={ChooseColor(btn)}
                title= {btn}
                key= {index} 
                onClick={handleClick}
                />
                    
                )
            }
            
            
            
        </div>
        <Button onClick={setResult} title={'SUBMIT'} className={'submit'} />

    </div>
    );
};