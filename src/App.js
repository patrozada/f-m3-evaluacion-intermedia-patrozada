import React from "react";
import PokeList from "./components/PokeList";
import "./App.css";
import pokemon from './services/APIresponse';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon : {
        id:'',
        name:'',
        types:[],
        url:''
      },
      isFavorite:false,
    }
  }

  render() {
    return (
      <div className="container">
        <PokeList 
          pokemon={pokemon}
        />
      </div>
    );
    }
}


export default App;
