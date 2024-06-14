import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './NavBar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-menu'>
        <Menu />
        </div>
      </div>

        <div className='navbar-sign'>
            <p>Sign In</p>
            <button type='button'>Sign up</button>
        </div>

      <div className='navbar-menu_container'>
        {toggleMenu
          ? <RiCloseLine className='hamburger-icon' color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='hamburger-icon' color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />

         <div className='navbar-menu_container-links-sign'>
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
