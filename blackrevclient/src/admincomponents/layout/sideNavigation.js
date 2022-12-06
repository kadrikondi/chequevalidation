import React, {
    Component
} from 'react';
import Logo from "../../component/asset/img/vanguard.jpg";
// import {
//     MDBListGroup,
//     MDBListGroupItem,
//     MDBIcon,
//    MDBBtn,
   
// } from 'mdbreact';
import {FaUsers} from "react-icons/fa"
import { ListGroup,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../pages/admin.css'
import './sideNav.css';

// const TopNavigation = () =>

class TopNavigation extends Component {
   state = {
       collapse: false,
       id: '',
       name: '',
       admin: []
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
   async componentWillMount() {
    const token = localStorage.getItem('adminuserId')
     if(!token){
       window.location.href='/adminsigninlog'
    // this.props.history.push('/adminsignin')
     }
}

//  async componentDidMount(){
      
//  }
    render(){
       
    return (
 
        <div>
         

                  
        <div className= "adminsidebar-fixed position-fixed"
            id="sidebaradmin">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={Logo}/>
            </a>
          
            <ListGroup className="list-group-flush">
                <NavLink exact={true} to="/admindashboard" activeClassName="activeClass">
                    < ListGroup.Item className = " btn-primary" >
                        {/* <MDBIcon icon="chart-pie" className="mr-3 "/> */}
                     Dashboard
                    </ListGroup.Item>
                </NavLink>
                 

                
              
      
     <NavLink to = "/admin/users"
     activeClassName = "activeClass"  style={{color:'white'}}>
       <Button caret color="primary">
           {/* <MDBIcon icon="user" className="mr-3 "/> */}
           <i>{FaUsers}</i>
      Registered Users
            </Button>
       </NavLink>
 < NavLink to = "/admin/contactlist"
     activeClassName = "activeClass"  style={{color:'white'}}>
       <Button caret color="primary">
           
        
       ContactUs Message
            </Button>
       </NavLink>
 
      
   
               
               
                
                
               

                
             
            
            </ListGroup>
        </div>
        </div>
    );
    }
}

export default TopNavigation;