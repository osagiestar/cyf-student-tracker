import React from 'react'
import './header.scss';
import Logo from '../../assets/images/logo.png';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt=""/>
        </header>
    )
}
