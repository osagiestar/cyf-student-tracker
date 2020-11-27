
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
export default function ClassAttendanceComponent({data, getDataFromComponents, profileNumber}) {

  const buttons = ["Yes", "No", "Late"]


  const modules = Object.entries(data);

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
    if(!optionModule ){
      alert('Please select a module');
    }else
    if(!optionWeek ){
      alert('Please select a week');
    }else
    if(!attendance ){
      alert('Please rate the student');
    }else{
      let info = {
        studentProfile: profileNumber,
        module: optionModule,
        week: optionWeek,
        score: attendance
      }
      getDataFromComponents(info);
      alert(`Student was rated with ${attendance} for ${optionModule} ${optionWeek} `)
    }
  }
  const handleClickAttendance=(event) => {
    setAttendance(event.target.innerHTML);
  }


  return (
    <div className='class-attendance-container'>
      <HeadingPageComponent title={"Class Attendance"}/>
      <div className="class-attendance">
        <div className= "class-attendance__inputs">
        <label>Modules:</label>
       
        <select
          className="class-attendance__option"
          value={optionModule}
         
          onChange={handleChangeModule}
        >
          <option></option>
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
          <option></option>
            {

              optionModule !== '' 
              ?
              Object.entries(data[optionModule]).map(([key, value], index) => {
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
