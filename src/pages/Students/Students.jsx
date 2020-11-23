import React,{useState} from 'react';
import './students.scss';
import HeadingPageComponent from '../../components/HeadingPageComponent/HeadingPageComponent'
import SideBarComponent from '../../components/SideBarComponent/SideBarComponent'
import AllStudentsCards from '../../components/AllStudentsCards/AllStudentsCards';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import fakeData from './fakeData';


function filterData(data, term){
    return fakeData.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
}

export default function Students() {

    const getSearchedValAndFilterData = (term) => {
        setData(filterData(data, term));
    }
    
    const [data, setData] = useState(fakeData);
    
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
