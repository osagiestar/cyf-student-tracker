import React, {useState, useEffect} from 'react';
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

   

    const location = useLocation();
    

    let path = location.pathname.split('');
    let profileNumber;
    if(path[path.length-2] !== '/'){
       profileNumber = path[path.length-2] + path[path.length-1]; 
      
    }else{
       profileNumber = path[path.length-1]; 
    }


    const [dataTobeSend, setDataTobeSend] = useState({});
    const [dataRecieved, setDataRecieved] = useState({})
  

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
          setDataRecieved(res) 
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
      });

    

      useEffect( () => {
        fetch(`https://stingy-cherry-sight.glitch.me/student/profile/${profileNumber}`)
        .then((res) => res.json())
        .then((res) => {
          setDataRecieved(res) 
          
        })
        .catch((err) => {
          console.error(err);
        });
      }, [])
      

      
    

      return Object.entries(dataRecieved).length > 0 ?  (
        <div className='studentProfile'>

            <SideBarComponent />

        <div className='studentProfile__rightSide'>
            <HeadingPageComponent title={dataRecieved.studentInfo.Name} />
            <StudentInfo data={dataRecieved.studentInfo}/>
            <Overview data={dataRecieved.overview} />

            <EduHomeworkComponent data={dataRecieved.eduHomework} getDataFromComponents={getDataFromComponents} profileNumber={dataRecieved.profile}/>
            <PDSkillsComponent data={dataRecieved.PDSkills} getDataFromComponents={getDataFromComponents} profileNumber={dataRecieved.profile}/>
            <ClassAttendanceComponent data={dataRecieved.classAttendance} getDataFromComponents={getDataFromComponents} profileNumber={dataRecieved.profile}/>

        </div>
            
        </div>
    )
    :
     <div>Loading</div>
}
