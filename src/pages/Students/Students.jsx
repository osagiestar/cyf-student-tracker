import React,{useState, useEffect} from 'react';
import './students.scss';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent'
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent'
import AllStudentsCards from '../../components/AllStudentsCards/AllStudentsCards';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
// import fakeData from './fakeData';


function filterData(data, term){
    return data.filter(item => item.studentInfo.Name.toLowerCase().includes(term.toLowerCase()));
}

export default function Students() {
    
    const [data, setData] = useState([]);
 
    useEffect(() => {
        fetch("https://stingy-cherry-sight.glitch.me/student/student_data")
          .then((res) => res.json())
          .then((res) => {
              setData(res)
            })
          .catch((err) => { 
            console.error(err);
          });
    }, [])

    const getSearchedValAndFilterData = (term) => {
        setData(filterData(data, term));
    }

  
    
    return (
        <div className='studentsPage'>
            <SideBarComponent />

            <div className='studentsPage__rightSide'>
                <HeadingPageComponent title={'Students'}/>

                <div className='studentsPage__rightSide-inputs'>
                    <SearchComponent  getSearchedValAndFilterData={getSearchedValAndFilterData}/>
    
                </div>
                
                <AllStudentsCards students={data}/>
            </div>
            
        </div>
    )
}
