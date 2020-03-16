import React,  { Component } from 'react';
// import logo from './logo.svg';
import {place} from './Places';
import CardList from './CardList';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      place:place
      // searchfield:''
    }
  }

  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value})
  //   // console.log(event.target.value);
  // }

  render(){
    // const filteredPlace=this.state.place.filter(place =>{
    //   return place.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })

    return( 

      <div className = 'pa1'>
        <h1 className = 'f1'> Travel guide </h1>
        <div classname = 'container'>
          <img src = 'bangladesh.jpg' alt = 'bangladesh'/>
        </div>
        <div class="centered">Bangladesh</div>
        <h1 className = 'f2'> Tourist Places </h1>
        <CardList place = {this.state.place}/>
      </div>
    )
  }
}

export default App; 
