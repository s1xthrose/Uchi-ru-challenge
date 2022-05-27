import React from 'react';
import './AllCats.css';

import CardsList from '../CardsList/CardsList';

const AllCats = React.forwardRef((
{ allImages,
  handleLike,
  handleDislike,
  savedCards,
  path,
  isDisabled
}, ref ) => {
  
  return(
    <CardsList
      path={path}
      handleLike={handleLike}
      handleDislike={handleDislike} 
      allCards={allImages}
      ref={ref}
      savedCards={savedCards}
      isDisabled={isDisabled}
    />
  )
})

export default AllCats;