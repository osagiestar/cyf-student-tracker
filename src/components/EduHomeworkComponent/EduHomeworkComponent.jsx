import React, { useState } from 'react';
import HeadingPageComponent from '../HeadingPageComponent/HeadingPageComponent';
import './eduHomeworkComponent.scss'
const EduHomeworkComponent = () => {
  //Array of numbers for the user to give score
  const scoreRatings = [0,1,2,3,4,5,6,7,8,9,10]
  //Fake data similar to the one should be in the database
  const classHomework = {
      'HTML/CSS': {
        week1: 'yes',
        week2: null,
        week3: null
      },
      'JS Quiz 1': {
        week1: null,
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
  };
  const homeworkModules = Object.entries(classHomework);
  const [selectModule, setSelectModule] =useState("")
  const [selectWeek, setSelectWeek] =useState("")
  const [attendance, setAttendance] =useState("")
  //A function to handle the module selection
  const handleModuleSelect=(event)=> {
    setSelectModule(event.target.value)
  }
  //A function to handle the week selection
  const handleWeekSelect=(event) => {
    setSelectWeek(event.target.value)
  }
  //A function to handle the submitted score for the chosen module and week
  const handleBtnSelect=(event) => {
    console.log(`Module: ${selectModule} , Week: ${selectWeek}: Score: ${attendance}`);
  }
  //A function to handle the score assigned to the student
  const handleClickedScore=(event) => {
    setAttendance(event.target.innerHTML);
  }
  return (
    <div>
      <HeadingPageComponent title={"Edu Homework"}/>
      <div className="edu-homework">
        <div className= "edu-homework__inputs">
        <label>Modules:</label>
        <select
          className="edu-homework__option"
          value={selectModule}
          onChange={handleModuleSelect}>
          <option>Choose a module</option>
          {
          homeworkModules.map(([key, value], i) => (
            <option key={i}>{key}</option>
          ))}
        </select>

        <label>Week:</label>
        <select
          className="edu-homework__option"
          value={selectWeek}
          onChange={handleWeekSelect}  >
            {
              selectModule !== '' 
              ?
              Object.entries(classHomework[selectModule]).map(([key, value], index) => {
                return <option key={index}>{key}</option>
              } 
              )
              :
              ''  
            }
          </select>
        </div>
        <div className="edu-homework__scoreRatings">
          <label>Student Score: </label>
          {scoreRatings.map((btn, i)=> (<button onClick={handleClickedScore} key ={i} > {btn}</button>))}
        </div>
        <button onClick={handleBtnSelect} className={"submit"}>SUBMIT</button>
      </div>
    </div>
  );
}
export default EduHomeworkComponent