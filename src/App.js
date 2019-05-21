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
    const targetId = event.currentTarget.id;
    console.log([targetId]);
  //   this.setState(prevState => {
  //     return {
  //     //   pokemon[{(parseInt(targetId)-1)}]: {
  //     // isFav : !this.state.isFav
  //   }
  // }
}
  render() {
    return (
      <div className="container">
        <PokeList 
          pokemon={this.state.pokemon}
          onClickMethod={this.handleClickCard}
        />
      </div>
    );
    }
}


export default App;
