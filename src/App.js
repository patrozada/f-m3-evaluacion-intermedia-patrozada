import React from "react";
import PokeList from "./components/PokeList";
import "./App.css";
import pokemon from './services/APIresponse';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : pokemon.map((item)=>
        item = {
          key: item.id,
          id : item.id,
          name : item.name,
          types : item.types,
          evolution : item.evolution,
          url : item.url,
          isFav : false,
        })         
    }
    this.handleClickCard = this.handleClickCard.bind(this);
  }

  handleClickCard(event){
    const targetId = parseInt(event.currentTarget.id);
    const currentIndex=targetId-1
    const {pokemon}=this.state
    this.setState(		
      pokemon[currentIndex]= {
        key: pokemon[currentIndex].key,
        id :  pokemon[currentIndex].id,
        name :  pokemon[currentIndex].name,
        types :  pokemon[currentIndex].types,
        evolution :  pokemon[currentIndex].evolution,
        url :  pokemon[currentIndex].url,
        isFav : !pokemon[currentIndex].isFav
      }      
		);
  }
  

  render(){
    return (
      <div className="container">
        <PokeList 
          pokemon={this.state.pokemon}
          onClickMethod={this.handleClickCard}
        />
      </div>
    )
  }
}


export default App;
