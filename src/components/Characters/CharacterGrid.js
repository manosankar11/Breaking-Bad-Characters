import React from 'react'
import Spinner from '../UI/Spinner'
import CharacterItem from './CharacterItem'
import '../Characters/CharacterItem.css';

const CharacterGrid = ({items,isLoading}) => {
    return isLoading ? ( 
        <Spinner />
     ) : (
         <section className="cards" >
             {items.map(item =>(
                 <CharacterItem key={item.char_id} item= {item} />
             ))}
         </section>
      )
}

export default CharacterGrid;
