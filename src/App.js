import React from "react";
import PokeList from "./components/PokeList";
import "./App.css";
import pokemon from './services/APIresponse';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : pokemon,
      pokemonFav : []
    }
  }

  render() {
    return (
      <div className="container">
        <PokeList 
          pokemon={this.state.pokemon}
        />
      </div>
    );
    }
}


export default App;
