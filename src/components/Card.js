
import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Card.css'

class Card extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   isFav: false
    // }
    // this.handleClickCard = this.handleClickCard.bind(this);
  // }
  // handleClickCard(){
  //   this.setState({
  //     isFav : !this.state.isFav
  //   })
   }
  swapStyles(){
    let favClassName = 'pokeCard '
    const {isFav}=this.props;
    if (isFav){
      favClassName += "favStyle"
      return favClassName;
    }else{
      favClassName += "regularStyle"
      return favClassName;
    }
  }
  render(){
    const {
      id,
      url,
      name,
      types,
      onClickMethod,
    }=this.props;
    return(
      <div onClick={onClickMethod} id = {id} className={this.swapStyles()}
      >
        <img className="pokePic" src={url} alt={name}/>
        <div className="pokemonName">
          <h3 >{name}</h3>
        </div>
        <ul className="pokeTypes">
          {types.map((item, index) => <li key={`${name}${index}`} className="type">{types[index]}</li>)}
        </ul>
      </div>
    )
  }
}

export default Card;


Card.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};
