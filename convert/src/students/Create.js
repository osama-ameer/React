import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import firebase from '../Firebase';

export default class Create extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('students');
        this.state = {
          name: '',
          fathername: '',
          nic: '',
          dob:'',
          contact: '',
          address: '',
          email:'',
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name, fathername, nic, dob, contact, address ,email} = this.state;
    
        this.ref.add({
          name,
          fathername,
          nic,dob,
          contact,
          address,
          email
        }).then((docRef) => {
          this.setState({
            name: '',
            fathername: '',
            nic: '',
            dob:'',
            contact: '',
            address: '',
            email:''
          });
          this.props.history.push("/showlist")
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    
    render() {
        const { name, fathername, nic,dob, contact, address, email } = this.state;
        return (
            <div class="wrap">
  <header>
    <div class="container">
      <h1><Link to='/'>Student's site</Link></h1>
      <nav>
        <ul className="navig">
          <li className="dsh"><Link to='/' className='m4' >DASHBOARD</Link></li>
          {/* <li><a href="about-us.html" class="m2">About Us</a></li>
          <li><a href="articles.html" class="m3">Our Articles</a></li> */}
          <li className="dsh" ><Link to ='/login' className='m1'  >LOGOUT</Link></li>
          {/* <li class="last"><a href="sitemap.html" class="m5">Sitemap</a></li> */}
        </ul>
      </nav>
      
    </div>
  </header>
  <div className="container">
    <aside style={{width:'188px', marginTop:'18px', marginLeft:'-15px'}}>
      <h3>Categories</h3>
      <ul className="categories">
        <li><span><Link to ="/program">Programs</Link></span></li>
        <li><span><Link to ="/stdinfo">Student Info</Link></span></li>
        <li><span><Link to ="/teachers">Teachers</Link></span></li>
        <li><span><Link to ="/description">Descriptions</Link></span></li>
        <li><span><Link to ="/administrators">Administrators</Link></span></li>
        <li><span><Link to ="/quiz">Quiz</Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
    <h2>STUDENT <span>INFORMATION</span></h2>
    <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD STUDENT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/showlist" class="btn btn-primary">Students List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Student Name" />
              </div>
              <div class="form-group">
                <label for="fathername">Father's Name:</label>
                <input type="text" class="form-control" name="fathername" value={fathername} onChange={this.onChange} placeholder="Father's Name" />
              </div>
              <div class="form-group">
                <label for="nic">NIC:</label>
                <input type="text" class="form-control" name="nic" value={nic} onChange={this.onChange} placeholder="NIC" />
              </div>
              <div class="form-group">
                <label for="dob">Date Of Birth:</label>
                <input type="text" class="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="Date Of Birth" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input type="text" class="form-control" name="contact" value={contact} onChange={this.onChange} placeholder="Contact" />
              </div>
              
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email " />
              </div>
              
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
 </div>
    </section>
    
  </div>
  
</div>

        );
    }
}
