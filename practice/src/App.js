import React from 'react';
import logo from './logo.svg';
import './App.css';

import  { Component } from 'react'

class App extends Component {

 constructor(props) {
   super(props);
   this.state = {
     name: "Osama Ameer",
     course: "React",
     age: "20"
   };
 }
 
 
  
  
  render() {
    return (
      <div className="App-header" >
        <h2>{this.state.name}</h2>
        <h2>{this.state.course}</h2>
        
      </div>
    );
  }
}

export default App;
