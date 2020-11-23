import React,{useState} from 'react';
import './searchcomponent.scss';

export default function SearchComponent({getSearchedValAndFilterData}) {

    
    const handleChange =(e) => {
        e.preventDefault();

        getSearchedValAndFilterData(e.target.value)
    }

    return (
        <div className='search-box' >
            <input 
                type="search" 
                className='search-box__input' 
                placeholder='Search ...' 

                onChange={handleChange}
            />
        </div>
    )
}
