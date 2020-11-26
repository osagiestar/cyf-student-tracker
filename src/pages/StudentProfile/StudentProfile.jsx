import React from 'react';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';
import StudentInfo from '../../components/StudentInfo/StudentInfo';
import Overview from '../../components/Overview/Overview';
import './studentprofile.scss';
import PDSkillsComponent from '../../components/PDSkillsComponent/PDSkillsComponent';

export default function StudentProfile() {

    let studentProfile ={

        profile: 1,
        studentInfo: {
              Name: "Ekip Kalir",
              Location: "Birmingham",
              Email: "ekip123@yahoo.com",
              Phone: "07771112223",
              SlackId: "Ekip321"
  
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

    return (
        <div className='studentProfile'>

            <SideBarComponent />

        <div className='studentProfile__rightSide'>
            <HeadingPageComponent title={studentProfile.studentInfo.Name} />
            <StudentInfo data={studentProfile.studentInfo}/>
            <Overview />

            <PDSkillsComponent data={studentProfile.PDSkills}/>

        </div>
            
        </div>
    )
}
