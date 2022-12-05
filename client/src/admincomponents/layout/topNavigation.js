import React, { Component } from 'react';
import {
Navbar,
 Dropdown, NavDropdown, Nav, 
} from 'react-bootstrap';
import {FaUser} from 'react-icons/fa'
import {
    Link,
    NavLink
} from 'react-router-dom'

import {
    AdminData,
    adminGetAllContactus
} from '../../component/apidata/api';

class TopNavigation extends Component {
    state = {
        collapse: false,
        id:'',
        name:'',
        admin:[],
        contactMessage:[]
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
 async componentWillMount(){
     const id = await JSON.parse(localStorage.getItem("adminuserId"))

     this.setState({
         id: id
     })
     const token = JSON.parse(localStorage.getItem('admintoken'))

     if (token) {

         const ADmin = await AdminData(id)
         console.log("response"+ADmin)
          console.log("response" + id)
        
         if (ADmin){

             this.setState({
                 name: ADmin.name,
                 admin:ADmin
                 
             })
             
   
         }



     }
     const message = await adminGetAllContactus();
    
     this.setState({contactMessage:message});
 }
 
    async handleLogout(){
         await localStorage.removeItem("admintoken");
         await window.localStorage.clear();

    }

    render() {
      
        return (
            <div className="mt-5">
            <Navbar className="flexible-navbar ml-5" light expand="md" scrolling>
                
                <div href="/">
                    <Navbar.Brand>
                       Blackrevolution ADmin
                    </Navbar.Brand>
                    <strong> <span className="mr-3">Admin LogOn: &nbsp;{this.state.name}</span> </strong>
                </div>
                <Navbar.Toggle onClick = { this.onClick } />
                <Navbar.Collapse isOpen = { this.state.collapse } navbar>
                    <Navbar left>
                        
                      <NavLink to="/admin/users"> Registered User</NavLink>||
                        <NavLink to = "/admin/contactlist" className="ml-2 btn " > Contact Message <span className="badge badge badge-primary">{this.state.contactMessage.length}</span> </NavLink>
                    </Navbar>
                    < Nav className = " ml-5" >
                     
                            <NavLink to='/adminsigninlog' onClick={this.handleLogout.bind(this)} className="btn btn-danger btn-sm">
                    Logout
                </NavLink>
                       
                        </Nav>








{/* Mobile Nav */}

                         < div className = ''
          id = 'mobilenav' >
                      
                <Link exact={true} to="/admindashboard" activeClassName="activeClass">
                    
                    
                        Dashboard
                    
                </Link> &nbsp;||
              
                <Dropdown>
      <NavDropdown caret color="primary">
           {/* <Icon icon="user" className="mr-3 "/>
            */}
            <i>{FaUser}</i>
     User
      </NavDropdown>
      <Nav basic>
        <NavDropdown.Item><NavLink to="/admin/users" activeClassName="activeClass">
               
                       
                        Users
              
               


                </NavLink></NavDropdown.Item>
        <NavDropdown.Item><Link to='/admin/search/user'>Search</Link></NavDropdown.Item>
        
      </Nav>
    </Dropdown>
                
                
                <Dropdown>
      <NavDropdown caret color="primary">
       Contactus
      </NavDropdown>
      <Nav basic>
        <NavDropdown.Item><Link to="/admin/complain" activeClassName="activeClass">
                         Complain
               


                </Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/admin/contactus'>Contactus</Link></NavDropdown.Item>
        
      </Nav>
    </Dropdown>
                
                  
               



                
                <Dropdown>
      <NavDropdown caret color="primary">
      Projects
      </NavDropdown>
      <Nav basic>
          <NavDropdown.Item > < Link to = "/admin/newproject"
          activeClassName = "activeClass" >


             New Projects


              </Link></NavDropdown.Item >
          <NavDropdown.Item>
              <Link to="/admin/pendingp" activeClassName="activeClass">
                   
                       PendingMonetize
              
               


                </Link></NavDropdown.Item>
        <NavDropdown.Item>
                <Link to="/admin/paidp" activeClassName="activeClass">
                   

                        PaidProject
                   
               


                </Link></NavDropdown.Item>
        <NavDropdown.Item><NavLink to="/admin/freep" activeClassName="activeClass">
                   
                       
                        FreeProjects
                  
        
                </NavLink></NavDropdown.Item>
        <NavDropdown.Item> <Link to="/admin/projects" activeClassName="activeClass">
                   
                        
                        Projects
                    
        
                </Link></NavDropdown.Item>
         <NavDropdown.Item >
             <NavLink to="/admin/buyers" activeClassName="activeClass">
                  
                        
                        Project Buyers
                     </NavLink>
               
</NavDropdown.Item>
        
      </Nav>
    </Dropdown>

                
                <Dropdown>
      <NavDropdown caret color="primary">
       Cashout
      </NavDropdown>
      <Nav basic>
        <NavDropdown.Item> <Link to="/admin/cashout" activeClassName="activeClass">
                  
                        
                        CashoutRequst
                   


                </Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/admin/approvedcashout" activeClassName="activeClass">
                
                       
                        ApprovedCashout
                   
               


                </Link></NavDropdown.Item>
        <NavDropdown.Item>
                <Link to = "/admin/allcashout"
                activeClassName = "activeClass" >
                   
                       
                        AllCashout
                   
               


                </Link></NavDropdown.Item>
        
       
      </Nav>
    </Dropdown>

    <Dropdown>
      <NavDropdown caret color="primary">
        Blog
      </NavDropdown>
      <Nav basic>
        <NavDropdown.Item><Link to='/admin/createblog'>Createpost</Link></NavDropdown.Item>
        <NavDropdown.Item > <Link to='/admin/blogposts' > AllPost </Link></NavDropdown.Item >
                
      </Nav>
    </Dropdown>

               
             
            
            </div>    
                    
                </Navbar.Collapse>
            </Navbar>

            {/* mobile nav */}
         
            </div>
        );
    }
}

export default TopNavigation;