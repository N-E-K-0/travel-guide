import React,  { Component } from 'react';
import {place} from './Places';
import CardList from './CardList';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      place:place,
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){

    return( 

      <div className = 'pa1'>
        <h1 className = 'f1 tc'> Travel guide </h1>
        <div className = 'container'>
          <img src = 'bangladesh.jpg' alt = 'bangladesh'/>
        </div>
        <div className="centered">Bangladesh</div><br /><br /><br /><br />
        <h1 className = 'f2 tc'> Tourist Places </h1>
        <CardList 
          place = {this.state.place}
        />
      </div>
    )
  }
}

export default App; 
