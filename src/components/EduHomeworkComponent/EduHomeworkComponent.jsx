import React, { useState } from 'react';
import './eduHomeworkComponent.scss'
const EduHomeworkComponent = () => {
  const [selectModules, setSelectModules] = useState("")
  const [selectWeeks, setSelectWeeks] = useState("")
  //An array of numbers for the user to choose to rate the students with.
  const ratings = [0,1,2,3,4,5,6,7,8,9,10];
  //A function to select the module that the user wants to give ratings.
  const handleModulesChange = (event) =>{
    setSelectModules(event.target.selectModules)
  }
  //A function to select which week of the module to rate
  const handleWeeksChange = (event) =>{
    setSelectWeeks(event.target.selectWeeks)
  }
  //A function to handle the rating submission given to the student with a pop-up confirmation incase a button clicked accidentally.
  const handleSubmitButton = (_isYes) => {
    const isYes = prompt(` Are you sure you want to rate the student. Enter (Yes) to continue`, _isYes || '')
    if (isYes === null || isYes.toLowerCase() === 'no') {
      return
    }
    if (isYes === '') {
      alert("The input can't be empty \n Please enter (Yes) to continue")
      handleSubmitButton()
      return
    }
    if (isYes.toLowerCase() === 'yes') {
      //to do add your action if they chose yes
    } else {
      alert(`Please enter (Yes) to continue,\n You entered (${isYes})`)
      handleSubmitButton(_isYes)
    }
  }
return (
  <div className="container">
    <div className="modules-weeks">
      <div className="select">
        <label for="modules">Modules:</label>
        <select className="modules" value = {selectModules} onChange ={handleModulesChange}>
        <option value="modules-0">Select Module</option>
          <option value="modules-1">HTML-CSS</option>
          <option value="modules-2">Javascript-1</option>
          <option value="modules-3">Javascript-2</option>
          <option value="modules-4">Javascript-3</option>
          <option value="modules-5">React</option>
          <option value="modules-6">Node</option>
          <option value="modules-7">SQL</option>
          <option value="modules-8">MongoDB</option>
          <option value="modules-9">Final project</option>
        </select>
      </div>
      <div className="select">
        <label for="weeks">Weeks:</label>
        <select className="weeks" value={selectWeeks} onChange={handleWeeksChange}>
          <option value="weeks-0">Select Week</option>
          <option value="weeks-1">Week-1</option>
          <option value="weeks-2">Week-2</option>
          <option value="weeks-3">Week-3</option>
        </select>
      </div>
    </div>
    <div className="student-score">
      <label for="score">Student Score:</label>
      {ratings.map(score => (<button onClick={handleSubmitButton}> {score}</button>))}
    </div>
  </div>
)
}

export default EduHomeworkComponent