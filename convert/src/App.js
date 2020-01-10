import './App.css';
import React, { Component, Fragment} from 'react'
import Layout from './components/layout'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
//import Login from './components/Login';
import Program from './components/Program';
import Administrators from './components/Administrators';
import Teachers from './components/Teachers';
import Stdinfo from './components/Stdinfo';
import Description from './components/Description';
import Create from './students/Create';
import Edit from './students/Edit';
import Show from './students/Show';
import Showlist from './students/Showlist';
import Quiz from './components/Quiz';
import QuizList from './Quizes/QuizList';
// import MCQs from './Quizes/MCQs';
import Createteacher from './teachers/Createteacher';
import Editteacher from './teachers/Editteacher';
import Showteacher from './teachers/Showteacher';
import Showlistteacher from './teachers/Showlistteacher';
import {
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export default class App extends Component {
  render() {
    return (
      <Router>
        
        <Fragment>
        
          
          <Route exact path ="/" component={Login}/>
          <section>

            <Switch>

            <PrivateRoute path="/layout">
            <Layout />
          </PrivateRoute>
            <PrivateRoute path="/program">
            <Program />
          </PrivateRoute>
          <PrivateRoute path="/administrators">
            <Administrators />
          </PrivateRoute>
          <PrivateRoute path="/teachers">
            <Teachers />
          </PrivateRoute>
          <PrivateRoute path="/stdinfo">
            <Stdinfo />
          </PrivateRoute>
          <PrivateRoute path="/description">
            <Description />
          </PrivateRoute>
            
            
            {/* CRUD (Student DATABASE) */}
            <Route path="/edit/:id" component={Edit} />
          <PrivateRoute path="/create">
            <Create />
      </PrivateRoute>    
          <Route path="/show/:id" component={Show }/>
          <PrivateRoute path="/showlist">
            <Showlist />
          </PrivateRoute>
            
            {/* QUIZ  */}
            <PrivateRoute path="/quiz">
            <Quiz />
          </PrivateRoute>
          <PrivateRoute path="/quizlist">
            <QuizList/>
          </PrivateRoute>    
           
            {/* CRUD (Teacher DATABASE) */}
            <Route path="/editteacher/:id"
            component={Editteacher}/>
          <PrivateRoute path="/createteacher">
            <Createteacher/>
          </PrivateRoute>
          <Route path="/showteacher/:id"
            component={Showteacher}/>
          <PrivateRoute path="/showlistteacher">
            <Showlistteacher/>
          </PrivateRoute>
            
            </Switch>
          </section>
          </Fragment>
      </Router>
    )
  }
}

export function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>    
      <Button variant="contained" color="primary" 
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Logout    
      </Button>
    </p>
  ) : (
    <h4></h4>    
  );
}

const fakeAuth = {
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

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function Login() {
  
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/layout" } };
  let login = () => {
    fakeAuth.authenticate(() => {
     
    });
  };

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
                      <Button variant="contained" color="primary" onClick={login}>
                      
                      Signin
                    </Button>
                    </Link>
                    <br/><br/>
                    <AuthButton />
      
              </div>
            </div>
  );
}
