import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { AnotherName } from './myaction';




class App extends React.Component {
  render(props) {

    console.log(this.props)



    return (
      <div className="App-header">
        <h1>I am App Component</h1>
        <h3>Hello! my name is {this.props.myname}</h3>
        <button className="btn" onClick={()=>{this.props.changeName("Osama Ameer")}}>ChangeName</button>
        
      </div>
    );
  }
}
const mapStateToProps =(state) => {
  return{
   myname:state.name,
  
 } }

 const mapDispatchToProps=(dispatch)=>{
   return{
     changeName:(name)=>{dispatch(AnotherName(name))}

   }
 }



export default connect(mapStateToProps,mapDispatchToProps)(App);
