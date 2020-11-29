import React from 'react';
import './header.scss';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <a href='/'>
      <header className="header">
        <img className="header__logo" src={Logo} alt="" />
      </header>
    </a>
  );
}
