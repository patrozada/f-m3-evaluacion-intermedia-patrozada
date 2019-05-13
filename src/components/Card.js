import React from 'react';

class Card extends React.Component{
  render(){
    const {
      url,
      name,
      types,
      evolution,
    }=this.props;
    return(
      <li>
        <img src={url} alt={name}/>
        <h3 className="pokemonName">{name}</h3>
        <ul className="pokeTypes">
          <li>{types[0]}</li>
          <li>{types[1]}</li>
        </ul>
        <h5>{evolution}</h5>
      </li>
    )
  }
}


export default Card;