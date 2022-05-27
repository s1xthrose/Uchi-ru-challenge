import React from 'react';
import './CardsList.css';

import Card from '../Card/Card';
import MoreCatsLoading from '../MoreCatsLoading/MoreCatsLoading';

const CardsList = React.forwardRef((
{
  allCards,
  handleLike,
  handleDislike,
  savedCards,
  path,
  isDisabled
}, ref) => {

  return (
    <>
    <ul className="card-list">{
      allCards.images.map((cardItem, index) => (
        <Card
          isDisabled={isDisabled}
          path={path} 
          key={index}
          cardItem={cardItem}
          handleLike={handleLike}
          handleDislike={handleDislike}
          savedCards={savedCards}
        />
      ))
      }
    </ul>
    { allCards.fetching && (<MoreCatsLoading />)}
    <div
      className='card-list__bottom-boundary'
      ref={ref} 
    />
    </>
  )
} );

export default CardsList;

