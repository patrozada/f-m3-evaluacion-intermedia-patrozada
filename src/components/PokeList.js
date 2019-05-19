import React from 'react';
import Card from './Card';
import '../stylesheets/PokeList.css'

class PokeList extends React.Component{
  render(){
    const {pokemon}= this.props;
    return(
      <ul className="listWrap">
        {pokemon.map((item)=>
          <li>
            <Card 
              key={item.id} 
              name={item.name}
              types={item.types}
              url={item.url}
            />
          </li>
        )}
    </ul>
    )
  }
}

export default PokeList;