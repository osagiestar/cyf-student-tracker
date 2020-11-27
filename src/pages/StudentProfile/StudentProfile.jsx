import React, {useState} from 'react';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent';
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent';
import StudentInfo from '../../components/StudentInfo/StudentInfo';
import Overview from '../../components/Overview/Overview';
import './studentprofile.scss';
import PDSkillsComponent from '../../components/PDSkillsComponent/PDSkillsComponent';
import EduHomeworkComponent from '../../components/EduHomeworkComponent/EduHomeworkComponent';
import ClassAttendanceComponent from '../../components/ClassAttendanceComponent/ClassAttendanceComponent';
import { useLocation } from 'react-router-dom'

export default function StudentProfile() {

    let studentsProfile =[
      {

        profile: 1,
        studentInfo: {
              Name: "Ekip Kalir",
              Location: "Birmingham",
              Email: "ekip123@yahoo.com",
              Phone: "07771112223",
              SlackId: "Ekip321"
  
        },
        overview: {
            'Homeworks Performance': [5,5,5,5,5,5,5,5,8,5],
            'Missing Homeworks': ['yes', 'yes', 'yes', 'no'],
            'Classes Attended': ['yes','yes','yes', 'late','no'],
            'Classes Late': ['yes', 'yes', 'late', 'no']
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
},
{

  profile: 2,
  studentInfo: {
        Name: "Osman Hajr",
        Location: "Birmingham",
        Email: "Osman@yahoo.com",
        Phone: "07771112223",
        SlackId: "Osman"

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
},{

  profile: 3,
  studentInfo: {
        Name: "Adebola",
        Location: "Birmingham",
        Email: "Osman@yahoo.com",
        Phone: "07771112223",
        SlackId: "Osman"

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
    ]

    const location = useLocation();
    

    let path = location.pathname.split('');
    let profileNumber;
    if(path[path.length-2] !== '/'){
       profileNumber = path[path.length-2] + path[path.length-1]; 
      
    }else{
       profileNumber = path[path.length-1]; 
    }

    let studentProfile = studentsProfile.filter(student => student.profile == profileNumber);

    const [dataTobeSend, setDataTobeSend] = useState({});
  

    const getDataFromComponents = (data) => {
      setDataTobeSend(data);
    }
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTobeSend),
    };
    fetch(`https://stingy-cherry-sight.glitch.me/student/profile/${profileNumber}`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return (
        <div className='studentProfile'>

            <SideBarComponent />

        <div className='studentProfile__rightSide'>
            <HeadingPageComponent title={studentProfile[0].studentInfo.Name} />
            <StudentInfo data={studentProfile[0].studentInfo}/>
            <Overview data={studentProfile[0].overview} />

            <EduHomeworkComponent data={studentProfile[0].eduHomework} getDataFromComponents={getDataFromComponents} profileNumber={studentProfile[0].profile}/>
            <PDSkillsComponent data={studentProfile[0].PDSkills} getDataFromComponents={getDataFromComponents} profileNumber={studentProfile[0].profile}/>
            <ClassAttendanceComponent data={studentProfile[0].classAttendance} getDataFromComponents={getDataFromComponents} profileNumber={studentProfile[0].profile}/>

        </div>
            
        </div>
    )
}
