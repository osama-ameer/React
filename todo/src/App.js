import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';
import TextField from '@material-ui/core/TextField';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      todos:[],
      text:"",
      currentIndex:null
  
    }
  
  
  
  }
  
  
  
  
  delete =(id)=>{
    let newTodo = this.state.todos.slice();
    newTodo.splice(id,1)
    this.setState({
      todos:newTodo
    })
  
  }
              add=(text)=>{
                console.log(text)
                let newTodo = this.state.todos;
                newTodo.push(text)
                this.setState({
                  todos:newTodo
                })
              }
  
              edit =(index)=>{
                let {todos,text,currentIndex} =this.state;
  
                this.setState({
                  text:todos[index],
                  currentIndex:index
  
                })
  
  
              }
  
                    inputHandler =(e)=>{
                    
                      const text = e.target.value;
                      console.log(text)
                      this.setState({
                        text:text
                      })
                    }
                  
  
  
  
  
  
  renderHeader =()=>(
    <div>
     
      <TextField
        id="outlined-uncontrolled"
        label="Write Here"
        defaultValue="foo"
        type="text" 
        onChange={this.inputHandler} 
        value={this.state.text}
        
        margin="normal"
        variant="outlined"
      />
    
      <Button className="btnad" color="primary" onClick={()=>{this.add(this.state.text)}}>Add</Button>{' '}
     <br/>
     {this.state.currentIndex ==null ?<div></div>:<Button>UPDATE</Button> }
    </div>
  )
  
  
  render(){
    let {text,todos,currentIndex} =this.state;
  
    const renderTodos = <ol>
      
      {todos.map((todo,id)=>{
          return(
            <li key={id}>{todo}
            <Button className="btnedit" color="primary" onClick={()=>this.edit(id)}>Edit</Button>{' '}
            <Button color="primary" className="btndel" onClick={()=>this.delete(id)}>Delete</Button>{' '}
            
            
           
            
            </li>
            
  
          )
      }) }
  
    </ol> 
  
  
    return(
   
     <div className="App-header"> 
             <h1> My Todos</h1>
        {this.renderHeader()}
        {renderTodos}
      </div>
  
  )
  
  }
  
  
  }
  
  
export default App;
