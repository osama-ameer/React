import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase'

export default class Showlistteacher extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('teachers');
        this.unsubscribe = null;
        this.state = {
          teachers: []
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        const teachers = [];
        querySnapshot.forEach((doc) => {
          const { fathername, name, nic,dob,
            contact,
            address,email } = doc.data();
          teachers.push({
            key: doc.id,
            doc, // DocumentSnapshot
            fathername,
            name,
            nic,
            dob,
            contact,
            address,
            email
           
          });
        });
        this.setState({
          teachers
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    render()

     {
        return (
            <div class="wrap">
            <header>
              <div class="container">
                <h1><Link to='/'>Student's site</Link></h1>
                <nav>
                  <ul className="navig">
                    <li className="dsh"><Link to='/' className='m4' >DASHstudent</Link></li>
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
              <h2>Teacher <span>INFORMATION</span></h2>
              <div class="panel panel-default">
          <div class="panel-heading">
            
          </div>
          <div class="panel-body">
            <h4><Link to="/createteacher">+Add Teacher</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Father's Name</th>
                  <th>NIC</th>
                  <th>DOB</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  

                </tr>
              </thead>
              <tbody>
                {this.state.teachers.map(teacher =>
                  <tr>
                    <td><Link to={`/showteacher/${teacher.key}`}>{teacher.name}</Link></td>
                    <td>{teacher.fathername}</td>
                    <td>{teacher.dob}</td>
                    <td>{teacher.nic}</td>
                    <td>{teacher.contact}</td>
                    <td>{teacher.email}</td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
           </div>
              </section>
              
            </div>
            
          </div>
        )
    }
}
