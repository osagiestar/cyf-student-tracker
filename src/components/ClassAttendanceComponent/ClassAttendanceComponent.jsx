
import Button from "../ButtonComponent/buttoncomponent";
import React, { useState} from "react";
import "./classattendance.scss";
import HeadingPageComponent from "../HeadingPageComponent/HeadingPageComponent";


function ChooseColor(btn) {
  let className ='';
  switch(btn) {
      case 'Yes':
          className = 'green';
          break;
      case 'No':
          className = 'red';
          break;
      case 'Late':
          className = 'yellow';
          break;
      default:
        className = '';  
    }
    return className
}
export default function ClassAttendanceComponent() {

  const buttons = ["Yes", "No", "Late"]




  const classAttendance = {
      'HTML/CSS': {
        week1: 'yes',
        week2: null,
        week3: null
      },
      'JS Quizz 1': {
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

  const modules = Object.entries(classAttendance);

  const [optionModule, setOptionModule] =useState("")
  const [optionWeek, setOptionWeek] =useState("")
  const [attendance, setAttendance] =useState("")

  const handleChangeModule=(event)=> {
    setOptionModule(event.target.value)
  }

  const handleChangeWeek=(event) => {
    setOptionWeek(event.target.value)
  }

  const handleSubmit=(event) => {
    console.log(`Module: ${optionModule} , Week: ${optionWeek}: ${attendance}`);
  }
  const handleClickAttendance=(event) => {
    setAttendance(event.target.innerHTML);
  }


  return (
    <div>
      <HeadingPageComponent title={"Class Attendance"}/>
      <div className="class-attendance">
        <div className= "class-attendance__inputs">
        <label>Modules:</label>
       
        <select
          className="class-attendance__option"
          value={optionModule}
         
          onChange={handleChangeModule}
        >
          <option>Choose a module</option>
          {
          modules.map(([key, value], i) => (
            <option key={i}>{key}</option>
          ))}
        </select>

        <label>Week:</label>
        <select
          className="class-attendance__option"
          // value={optionWeek}
          onChange={handleChangeWeek}
        >
          
            {

              optionModule !== '' 
              ?
              Object.entries(classAttendance[optionModule]).map(([key, value], index) => {
                return <option key={index}>{key}</option>
              }
              
              )
              :
              ''
              
            }
          </select>
        </div>
    
        <div className="class-attendance__buttons">
          <label>Attended: </label>
          {buttons.map((btn, i)=> <Button onClick={handleClickAttendance} title={btn} key ={i} className={ChooseColor(btn)}/>)}
          
        </div>
        <Button onClick={handleSubmit} title={"SUBMIT"} className={"submit"}/>
      </div>
    </div>
  );
}
