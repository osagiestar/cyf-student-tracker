import React, { useState } from 'react';
import HeadingPageComponent from '../HeadingPageComponent/HeadingPageComponent';
import Button from '../ButtonComponent/buttoncomponent';
import './eduhomeworkcomponent.scss'
const EduHomeworkComponent = ({data, getDataFromComponents, profileNumber}) => {
  //Array of numbers for the user to give score
  const scoreRatings = [0,1,2,3,4,5,6,7,8,9,10]
  //Fake data similar to the one should be in the database

  const homeworkModules = Object.entries(data);
  const [selectModule, setSelectModule] =useState("")
  const [selectWeek, setSelectWeek] =useState("")
  const [score, setScore] =useState("")
  //A function to handle the module selection
  const handleModuleSelect=(event)=> {
    setSelectModule(event.target.value)
  }
  //A function to handle the week selection
  const handleWeekSelect=(event) => {
    setSelectWeek(event.target.value)
  }
  //A function to handle the submitted score for the chosen module and week
  const handleSubmit=(event) => {
      if(!selectModule ){
        alert('Please select a module');
      }else
      if(!selectWeek ){
        alert('Please select a week');
      }else
      if(!score ){
        alert('Please rate the student');
      }else{
        let info = {
          studentProfile: profileNumber,
          module: selectModule,
          week: selectWeek,
          score: score
        }
        console.log('infoFromEduHomework', info);
        getDataFromComponents(info);
        alert(`Student was rated with ${score} for ${selectModule} ${selectWeek} `)
        
      }
      
      
    
  }
  //A function to handle the score assigned to the student
  const handleClickedScore=(event) => {
    setScore(event.target.innerHTML);
  }
  return (
    <div className='edu-homework-container'>
      <HeadingPageComponent title={"Edu Homework"}/>
      <div className="edu-homework">
        <div className= "edu-homework__inputs">
        <label>Modules:</label>
        <select
          className="edu-homework__option"
          value={selectModule}
          onChange={handleModuleSelect}
        >
          <option></option>
          {
          homeworkModules.map(([key, value], i) => (
            <option key={i}>{key}</option>
          ))}
        </select>

        <label>Week:</label>

        <select
          className="edu-homework__option"
          value={selectWeek}
          onChange={handleWeekSelect}  
          >
            <option></option>
            {
              selectModule !== '' 
              ?
              Object.entries(data[selectModule]).map(([key, value], index) => {
                return <option key={index}>{key}</option>
              } 
              )
              :
              ''  
            }
          </select>
        </div>
        <div className="edu-homework__scoreRatings">
          <label>Score: </label>
          {scoreRatings.map((btn, i)=> (<button className='edu-homework__btn' onClick={handleClickedScore} key ={i} > {btn}</button>))}
        </div>

        <Button className={'submit'} title={'SUBMIT'} onClick={handleSubmit}/>
        
      </div>
    </div>
  );
}
export default EduHomeworkComponent
