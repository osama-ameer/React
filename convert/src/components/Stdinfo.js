import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AuthButton} from '../App'

export default class Stdinfo extends Component {
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
          <li  className="hi" style={{marginTop:'-38px',marginLeft:'50pc'}}><AuthButton/></li>
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
        <li><span><Link to ="/administrators">Administrators</Link></span></li>
        <li><span><Link to ="/description">Descriptions</Link></span></li>
      
        <li><span><Link to ="/quiz">Quiz </Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
    <h2>STUDENT <span>INFORMATION</span></h2>
    <h4><Link to ="/create">+ADD STUDENT</Link></h4>
    <h4><Link to ="/showlist">VIEW STUDENT LIST</Link></h4>
 </div>
    </section>
    
  </div>
  
</div>

        );
    }
}
