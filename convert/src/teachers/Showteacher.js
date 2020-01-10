import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase'
import {
    useHistory,
  
} from "react-router-dom";

export default class Showteacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
          teacher: {},
          key: ''
        };
      }
    
      componentDidMount() {
        const ref = firebase.firestore().collection('teachers').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              teacher: doc.data(),
              key: doc.id,
              isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }
    
      delete(id){
        firebase.firestore().collection('teachers').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/showlistteacher")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    
    render() {
        return (
            <div class="wrap">
  <header>
    <div class="container">
      <h1><Link to='/'>Student's site</Link></h1>
      <nav>
        <ul class="navig">
          <li class="dsh"><Link to='/' class='m4' >DASHBOARD</Link></li>
          {/* <li><a href="about-us.html" class="m2">About Us</a></li>
          <li><a href="articles.html" class="m3">Our Articles</a></li> */}
          <li class="dsh" ><Link to ='/login' class='m1'  >LOGOUT</Link></li>
          {/* <li class="last"><a href="sitemap.html" class="m5">Sitemap</a></li> */}
        </ul>
      </nav>
      
    </div>
  </header>
  <div class="container">
    <aside style={{width:'188px', marginTop:'18px', marginLeft:'-15px'}}>
      <h3>Categories</h3>
      <ul class="categories">
        <li><span><Link to ="/program">Programs</Link></span></li>
        <li><span><Link to ="/stdinfo">Student Info</Link></span></li>
        <li><span><Link to ="/teachers">Teachers</Link></span></li>
        <li><span><Link to ="/name">names</Link></span></li>
        <li><span><Link to ="/administrators">Administrators</Link></span></li>
        <li><span><Link to ="/quiz">Quiz</Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
    <h2>Teachers <span>INFORMATION</span></h2>
    <h4><Link to="/showlistteacher" class="btn btn-primary">Teachers List</Link></h4>
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          
            <h3 class="panel-title">
              {this.state.teacher.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Father's Name:</dt>
              <dd>{this.state.teacher.fathername}</dd>
              <dt>Nic:</dt>
              <dd>{this.state.teacher.nic}</dd>
              <dt>Date Of Birth:</dt>
              <dd>{this.state.teacher.dob}</dd>
              <dt>Contact:</dt>
              <dd>{this.state.teacher.contact}</dd>
              <dt>Dddress:</dt>
              <dd>{this.state.teacher.address}</dd>
              <dt>Email:</dt>
              <dd>{this.state.teacher.email}</dd>
            </dl>
            <Link to={`/editteacher/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
 </div>
    </section>
    
  </div>
  
</div>

        )
    }
}
