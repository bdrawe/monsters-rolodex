import logo from './logo.svg';
import React , { Component } from 'react'
import './App.css';

//component is part of the react library
//component also have built in methods. 

class App extends Component {
  constructor() {
    //super helps us with this by calling React.Component's constructor()
    super();

    this.state = {
      monsters: [
        {
          name: "Zion",
          id: "001"
        },
        {
          name: "Addie",
          id: "002"
        },
        {
          name: "Bryce",
          id: "003"
        }
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monsters => (
            <h1 key={monsters.id}> {monsters.name} </h1>
        ))}
      </div>
    )
  }
};

export default App;
