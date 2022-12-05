import React, { Component } from 'react'
import SideBarNav from '../layout/sideNavigation'

import { Link } from "react-router-dom"

export default class SingleUser extends Component {
    constructor() {
        super()
        this.state = {
            
            text:"",
           
        }
    }
   
    
    handleText(e) {
        this.setState({ text: e.target.value })
      
    }

    render() {
        
        return (
            <div className="flexible-content">
                <SideBarNav />
                <div id="content" className="p-2 container mt-5 ">
  <div className="col-lg-4 col-0"></div>
                    <div className="card mt-3 col-lg-6 col-md-8 col-10 mt-5" >
                        <nav className="navbar navbar-light justify-content-start " >

                            <form className="form-inline" style={{ width: '70%' }} >
                                <input className="form-control mr-sm-2" type="search" placeholder="Search by db id" aria-label="Search" value={this.state.text} onChange={this.handleText.bind(this)} />
                                <Link to={`/admin/view/user/${this.state.text}`}>
                                    <button className="btn btn-outline-primary  btn-sm my-sm-0" type="submit" >Search</button> </Link>
                            </form>
                        </nav>
                        </div>
                </div>

            </div>
        )
    }
}
