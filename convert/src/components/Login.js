import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css'


export default class Login extends Component {
    render() {
        return (
            <div className="wraplogin">
              <header>
    <div class="container" >
      <h1 ><Link to='/login'>Student Portal</Link></h1>
      
      
    </div>
  </header>
  
 
    <br/><br/>
              <div style={{justifyContent:'center',width:'290px',alignItems:'center',textAlign:'center',margin:'auto'}}>
    
    
                    <h2>Login</h2><br/>
                    <TextField id="standard-basic" label="Username or email" style={{width:'275px'}}/><br/><br/><br/>
                    <TextField id="standard-basic" label="Password" type="password" style={{width:'275px'}}/><br/><br/><br/><br/><br/>
                    <Link to='/layout' style={{ textDecoration: 'none'}}>
                      <Button variant="contained" color="primary">
                      
                      Signin
                    </Button>
                    <AuthButton />
                    </Link>
                
              </div>
            </div>

        );
    }
}
function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Logout
      </button>
    </p>
  ) : (
    <h3>Not Logged in</h3>
      
    
  );
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
