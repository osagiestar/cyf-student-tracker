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

export default function PDSkillsComponent (){

    const buttons = ['Excellent', 'Very Good', 'Average', 'Below Average', 'Poor'];

    let studentProfile ={

        profile: 1,
        studentInfo: {
              name: "Ekip",
              location: "Birmingham",
              email: "ekip123@yahoo.com",
              phone: "07771112223",
              slackId: "Ekip321"
  
        },
        overview: {
            'Homeworks Performance': [6,6,6,6,6,6,6,6,10,10],
            'Missing Homeworks': ['yes', 'yes', 'yes', 'no'],
            'Classes Attended': ['no','no','yes', 'late','no'],
            'Classes Late': ['yes', 'no', 'late', 'no']
        },

        eduHomework: {
            'HTML/CSS': {
              week1: null,
              week2: null,
              week3: null
            },
            'JS Quizz 1': {
              week1: null,
              week2: null,
              week3: null
            },
            'JavaScript 1': {
              week1: null,
              week2: null,
              week3: null
            },
            'JavaScript 2': {
             week1: null,
             week2: null,
             week3: 5
           },
           'JavaScript 3': {
             week1: null,
             week2: null,
             week3: null
           }
         },

        PDSkills: {
            'Communication': 'Very Good',
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
        },
        classAttendance: {
            'HTML/CSS': {
              week1: 'yes',
              week2: null,
              week3: null
            },
            'JS Quizz 1': {
              week1: null,
              week2: 'no',
              week3: null
            },
            'JavaScript 1': {
              week1: null,
              week2: null,
              week3: null
            },
            'JavaScript 2': {
             week1: null,
             week2: null,
             week3: null
           },
           'JavaScript 3': {
             week1: null,
             week2: null,
             week3: null
           }
         }
}


    let valueArr = [];
    let skillsObject = studentProfile.PDSkills;
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
            studentProfile.PDSkills[option] = rate;
            console.log(studentProfile.PDSkills);
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