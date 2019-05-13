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
      <li className="pokeCard">
        <img src={url} alt={name}/>
        <h3 className="pokemonName">{name}</h3>
        <ul className="pokeTypes">
          <li className="type">{types[0]}</li>
          <li className="type">{types[1]}</li>
        </ul>
        <h5>{evolution}</h5>
      </li>
    )
  }
}


export default Card;