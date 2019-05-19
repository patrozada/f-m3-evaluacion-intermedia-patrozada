
import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Card.css'

class Card extends React.Component{
  render(){
    const {
      url,
      name,
      types,
    }=this.props;
    return(
      <li className="pokeCard">
        <img className="pokePic" src={url} alt={name}/>
        <div className="pokemonName">
          <h3 >{name}</h3>
        </div>
        <ul className="pokeTypes">
          {types.map((item, index) => <li key={`${name}${index}`} className="type">{types[index]}</li>)}
        </ul>
      </li>
    )
  }
}

export default Card;


Card.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};
