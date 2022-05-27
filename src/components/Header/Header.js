import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'

function Header({
  handleAllCatsClick, 
  handleLikedCatsClick,
}){
  return(
    <header className="header">
      <Nav
        handleAllCatsClick={handleAllCatsClick}
        handleLikedCatsClick={handleLikedCatsClick}
      />
    </header>
  )
}

export default Header;