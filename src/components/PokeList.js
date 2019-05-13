import React from 'react';
import Card from './Card';

class PokeList extends React.Component{
  render(){
    const {pokemon}= this.props;
    return(
      <ul className="listWrap">
        {pokemon.map((item)=>
          <Card 
            key={item.id} 
            name={item.name}
            types={item.types}
            evolution={item.evolution}
            url={item.url}
          />
        )}
    </ul>
    )
  }
}

export default PokeList;