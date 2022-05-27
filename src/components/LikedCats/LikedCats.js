import React from 'react';
import Card from '../Card/Card';

import NotFound from '../NotFound/NotFound';

function LikedCats ({
  path,
  catData,
  handleLike,
  handleDislike,
  savedCards,
  isDisabled
}){

  // check if there are no liked cats
  const hasSavedCats = catData.length > 0 ? true : false;

  return( 
    hasSavedCats ? ( 
      <ul className="card-list card-list__liked">
        { catData.map((item, index) => (
          <Card
            isDisabled={isDisabled}
            path={path} 
            key={index}
            cardItem={item}
            handleLike={handleLike}
            handleDislike={handleDislike}
            savedCards={savedCards}
          />
        ))}
      </ul>
    ) : ( 
      <NotFound 
        header="мяу"
        description="здесь пока нет котиков"
      />)
  )
}

export default LikedCats;