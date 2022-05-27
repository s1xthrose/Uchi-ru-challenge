import React from 'react';
import './NavItem.css';

function NavItem({
  activeState,
  itemText,
  handleClick
}){

  const isActive = activeState ? 'nav__item_active' : '';

  return(
    <button
      className={`nav__item ${isActive}`}
      onClick={handleClick}
    >{itemText}</button>
  )
}

export default NavItem;