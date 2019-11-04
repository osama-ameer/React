import React from 'react';
import './App.css';
import Mynavbar from './Mynavbar';
import SearchAppBar from './SearchAppBar';
import Example from './Example';
import Card2 from './Card2';
import Card3 from './Card3';
import { Card } from 'material-ui';
import  Search  from './Search';



class App extends React.Component{

  render(){

    return(
      <div className="App">
        <SearchAppBar/>
        <h1>Toyota Models</h1>
        <Example/>
        <Card2/>
        <Card3/>
        {/* <Search/> */}
        
      </div>
    )
  }
}

export default App;

