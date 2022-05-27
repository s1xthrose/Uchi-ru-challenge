import React from 'react';
import './NotFound.css';

function NotFound({ header, description }){
  return(
    <div className="notfound">
      <h2 className="notfound__heading">{header}</h2>
      <p className="notfound__paragraph">{description}</p>
      <div className="notfound__image"></div>
    </div>
  )
}

export default NotFound;