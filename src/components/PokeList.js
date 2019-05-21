import React from 'react';
import Card from './Card';
import '../stylesheets/PokeList.css'

class PokeList extends React.Component{

  render(){
    const {pokemon, onClickMethod}= this.props;
    return(
      <ul className="listWrap">
        {pokemon.map((item)=>
          <li>
            <Card 
              id = {item.id}
              key={item.id} 
              name={item.name}
              types={item.types}
              url={item.url}
              isFav = {item.isFav}
              onClickMethod = {onClickMethod}
            />
          </li>
        )}
    </ul>
    )
  }
}

export default PokeList;