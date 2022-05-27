import React from 'react';
import './LikeButton.css';

function LikeButton ({
  handleLike,
  isLiked,
  isDisabled
}) {

  const isLikedClassName = isLiked ? 'like-button_active' : '';

  return(
    <button 
      className={`like-button ${isLikedClassName}`}
      onClick={handleLike}
      disabled={isDisabled ? true : false}
    ></button>
  )
}

export default LikeButton;