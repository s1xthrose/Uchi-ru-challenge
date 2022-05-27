import React,  { useState, useEffect, useCallback } from 'react';
import {  useLocation } from 'react-router-dom';
import './Nav.css';

import NavItem from '../NavItem/NavItem';

function Nav({
  handleAllCatsClick,
  handleLikedCatsClick,
}){

  const location = useLocation();

  // states for navitems
  const [activeAllCatsButton, setActiveAllCatsButton] = useState(false);
  const [activeLikedCatsButton, setActiveLikedCatsButton] = useState(false);

  // manage navitem active state with router path
  const isButtonActive = useCallback(() => {

    switch (location.pathname) {
      case '/all-cats':
        setActiveAllCatsButton(true);
        setActiveLikedCatsButton(false);
        break;
      case '/liked-cats':
        setActiveLikedCatsButton(true);
        setActiveAllCatsButton(false);
        break;
      case '/not-found':
        setActiveLikedCatsButton(false);
        setActiveAllCatsButton(false);
        break;
      default:
        setActiveLikedCatsButton(false);
        setActiveAllCatsButton(false);
    }

  },[location]);

  // useEffect that checks every changing in isButtonActive callback
  useEffect(()=>{
    isButtonActive();
  }, [isButtonActive]);

  return(
    <nav className="nav">
      <NavItem
        activeState={activeAllCatsButton}
        handleClick={handleAllCatsClick} 
        itemText="Все котики"
      />
      <NavItem
        activeState={activeLikedCatsButton}
        handleClick={handleLikedCatsClick} 
        itemText="Любимые котики"
      />
    </nav>
  )
}

export default Nav;