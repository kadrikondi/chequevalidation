import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BrandLogo from '../asset/img/logo.png'
import "./Head.css"

export default class Header extends Component {
    render() {

        const NavStyle={
            fontWeight:'bold',
            fontFamily:'roboto',
            textTransform:'uppercase',
            paddingRight:'30px'
        }
        return (
            <div>
                <div>
        {/* Navigation fixed-top id="header"*/}
        <nav className="navbar navbar-expand-lg navbar" >
          <div className="container-fluid d-flex align-items-center">
            <Link className="navbar-brand p0" to="/">
              <img src={BrandLogo} alt="pic" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " style={{color:'white', backgroundColor:'green'}} >  <i className="" >&#9776;</i></span>
         
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" style={NavStyle} to="/">Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                
                         <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" style={NavStyle} to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link  className="dropdown-item" to="/about" style={NavStyle}>About Us</Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/aimandobj" style={NavStyle}>Aim and Objectives</Link>
          
        
        </div>
      </li>


                <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" style={NavStyle} to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Get Involved
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link  className="dropdown-item" to="/join" style={NavStyle}>Join</Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/volunteer" style={NavStyle}>Become a Volunteer</Link>
          
        
        </div>
      </li>
                <li className="nav-item">
                  <li className="nav-item dropdown">
        <Link className="nav-link " style={NavStyle} to="/book" >
      The Book
        </Link>
        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
       <a  style={NavStyle} className="dropdown-item" href="https://www.amazon.com/dp/B09GTMJY9Q" target ="_blank" rel="noreferrer"> Download On Amazon</a>
          <div className="dropdown-divider" />
       <a className="dropdown-item" to="/aimandobj" style={NavStyle} target ="_blank" href="https://www.smashwords.com/books/view/1105564" rel="noreferrer">Download on SmashWords</a> */}
          
        
        {/* </div> */}
      </li>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus" style={NavStyle}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* /.container */}
      </div>
            </div>
        )
    }
}
