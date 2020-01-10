import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase'

export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
          student: {},
          key: ''
        };
      }
    
      componentDidMount() {
        const ref = firebase.firestore().collection('students').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              student: doc.data(),
              key: doc.id,
       //       isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }
    
      delete(id){
        firebase.firestore().collection('students').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/showlist")
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
          <li class="dsh"><Link to='/' class='m4' >DASHstudent</Link></li>
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
        <li><span><Link to ="/description">Description</Link></span></li>
        <li><span><Link to ="/administrators">Administrators</Link></span></li>
        <li><span><Link to ="/quiz">Quiz</Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
    <h2>STUDENT <span>INFORMATION</span></h2>
    
    <h4><Link to="/showlist" class="btn btn-primary">Student List</Link></h4>
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          
            <h3 class="panel-title">
              {this.state.student.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Father's Name:</dt>
              <dd>{this.state.student.fathername}</dd>
              <dt>nic:</dt>
              <dd>{this.state.student.nic}</dd>
              <dt>dob:</dt>
              <dd>{this.state.student.dob}</dd>
              <dt>contact:</dt>
              <dd>{this.state.student.contact}</dd>
              <dt>address:</dt>
              <dd>{this.state.student.address}</dd>
              <dt>email:</dt>
              <dd>{this.state.student.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
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
