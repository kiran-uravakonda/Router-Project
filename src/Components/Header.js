import React from 'react';
import {Link } from "react-router-dom";
import '../Components/Header.css'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
          Home:'Home',
          About:'About',
          Contact:'Contact'
        }
    }
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand nav-link" href="#">Logo</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" to='/'>{this.state.Home}</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <Link className="nav-link" to='/About'>{this.state.About}</Link>
        </li>
        <li className="nav-item ">
          {/* <a className="nav-link" href="#" >
            Contact
          </a> */}

      <Link className="nav-link" to='/Contact'>{this.state.Contact}</Link>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
            </>
        )
    }
}

export default Header;