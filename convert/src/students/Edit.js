import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase'

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          key: '',
          fathername: '',
          name: '',
          nic: '',
          dob:'',
          contact: '',
          address: '',
          email:''
        };
      }
    
      componentDidMount() {
        const ref = firebase.firestore().collection('students').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            const student = doc.data();
            this.setState({
              key: doc.id,
              fathername: student.fathername,
              name: student.name,
              nic: student.nic,
              dob: student.dob,
              contact: student.contact,
              address: student.address,
              email: student.email,
            });
          } else {
            console.log("No such document!");
          }
        });
      }
    
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({student:state});
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { fathername, name, nic, dob,
        contact,
        address,email } = this.state;
    
        const updateRef = firebase.firestore().collection('students').doc(this.state.key);
        updateRef.set({
          fathername,
          name,
          nic,
          dob,   
          contact,
          address,email
        }).then((docRef) => {
          this.setState({
            key: '',
            fathername: '',
            name: '',
            nic: '',
            dob,
          contact,
          address,
          email
          });
          this.props.history.push("/show/"+this.props.match.params.id)
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    
    render() {
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
        <li><span><Link to ="/description">Description</Link></span></li>
        <li><span><Link to ="/administrators">Administrators</Link></span></li>
        <li><span><Link to ="/quiz">Quiz</Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
    <h2>STUDENT <span>INFORMATION</span></h2>
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD STUDENT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">STUDENT DATA</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Student Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Student name" />
              </div>
              <div class="form-group">
                <label for="fathername">Father's name:</label>
                <input type="text" class="form-control" name="fathername" value={this.state.fathername} onChange={this.onChange} placeholder="Father's name" />
              </div>
              <div class="form-group">
                <label for="nic">nic:</label>
                <input type="text" class="form-control" name="nic" value={this.state.nic} onChange={this.onChange} placeholder="nic" />
              </div>
              <div class="form-group">
                <label for="dob">dob:</label>
                <input type="text" class="form-control" name="dob" value={this.state.dob} onChange={this.onChange} placeholder="dob" />
              </div>
              <div class="form-group">
                <label for="contact">contact:</label>
                <input type="text" class="form-control" name="contact" value={this.state.contact} onChange={this.onChange} placeholder="contact" />
              </div>
              <div class="form-group">
                <label for="address">address:</label>
                <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="address" />
              </div>
              <div class="form-group">
                <label for="email">email:</label>
                <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
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
