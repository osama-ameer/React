import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { firebaseConfig, db } from './firebase';



export default class App extends React.Component {

  constructor() {
    super();
    this.state={

      title:"",
      article:"",
      data:[]

    }
    
  }


  inputhandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state)
  }

  componentDidMount(){
    let data=[];
     db.on("value",(snapshot)=>{
       var obj = snapshot.val();
     for(var props in obj)
      data.push(obj[props])
     this.setState({
       data:data
     })
     data=[]
     })
   
   }
  
 
  submit=()=>{
    const {title,article}=this.state;
    const data={
      title:title,
      article:article
  }
  db.push(data).then(()=>{
    this.setState({
      title:"",article:""
    })
  }).catch((err)=>{
    console.log(err)
  })

  }



  delete =()=>{
    db.child('').remove()



  }

  render() {
    return (
      <div className="App-header">

<Typography component="h1" variant="h4">
          FIREBASE WORK
        </Typography>
        <br/>
        <TextField name="title" value={this.state.title} onChange={this.inputhandler} label="Title" variant="outlined" className="field"></TextField><br/>
        <TextField name="article" value={this.state.article} onChange={this.inputhandler} label="Article" variant="outlined" className="field"></TextField><br/>
        
          <Button  variant="contained" color="primary" onClick={this.submit} >SUBMIT</Button>
          
        
        

        {this.state.data.map((value,id)=>{
         return(
           
           
        <div key={id}>
        
          <br/>
          
          <Paper className="papr" >
        <Typography variant="h5" component="h3">
        {value.title}
        </Typography>
        <Typography component="p">
        {value.article}
        </Typography>
      
      </Paper>
      
          
                      </div>
                      
          )
            })}

      </div>
    )
  }
}

