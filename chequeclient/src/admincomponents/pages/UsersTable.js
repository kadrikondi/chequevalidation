import React, { Component } from 'react'

import {Row , Col, Card, Table} from "react-bootstrap"
import SideBarNav from '../layout/sideNavigation'
import './admin.css'
//  import $ from 'jquery';
import {
  CSVLink,
 
} from "react-csv";
import {Link} from "react-router-dom"
import {allUsers} from '../../component/apidata/api'


export default class UsersTable extends Component {
  constructor(){
    super()
    this.state={
      users:[],
      searchText:"",
      lengty:"",
        csvData:[]

    }
  }




  async componentDidMount(){
    const users = await allUsers()
    console.log(users)
    
   
    if(users){
        this.setState({
          users: users,
          csvData:users
        })
    }
  }
    async handleSearch(e) {
      this.setState({
        searchText: e.target.value
      })
    }
    async handleLength(){

    }

  
  render() {
    const users = this.state.users.filter((user) => {

      return (user.surname.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1 || user.country.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1 || user.state.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1)
      //  indexOf(this.state.searchText.toLowerCase())!==-1;

    })
    const {csvData}=this.state

    return (
      <div>
        < div className = "flexible-content" >
      <SideBarNav />
        <div id = "content"
      className = "p-2" >
      <Row>
      <Col md="12">
        <Card className="mt-5">
          <div className="gradient-card-header blue darken-2">
          < h4 className = "h4-responsive text-white text-right" > REGISTERED MEMBERS OF BLACK REVOLUTION DATA
          
            <CSVLink data = {
                csvData
              }
              filename = {
                "Blackrevolutionmembers.csv"
              }
              className = "btn btn-success btn-sm ml-5 " > Export To Excel </CSVLink>

           
        </h4>
            
          </div> 
        
          <Card.Body>
            <div className="container row ">         <input className="form-control col-10" type="text"
                  onChange={this.handleSearch.bind(this)} value={this.state.searchText} placeholder="Search user by surname or country name or state" aria-label="Search" />  <button className="col-2">{users.length} Users</button>
                  </div>

            <Table   style={{height:'400px'}}
            hover striped bordered variant="dark" responsive >
              <thead color='dark'>
                <tr>
                  <th>S/N</th>
                   <th>Actions</th>
                  <th>Surname</th>
                  <th>Firstname</th>
                  <th>MiddleName</th>
                  <th>Email</th>
                  <th>Gender</th>

                  <th>Country</th>
                  <th>State</th>
                  <th>Phone </th>
                  <th>Age Group</th>
                  <th>Education</th>
                  <th>Worktype</th>
                 

                </tr>
              </thead>
              <tbody>

                 {users ? (users.map((user, index) => {
                   const {surname,firstname,lastname,email,phone,education,country, state,worktype ,gender,_id,agegroup}=user
              
                  return(  <tr key={index}>
                  <td>{index+1}</td>
                   <td><Link className='btn btn-sm btn-warning'   to={`/admin/view/user/${_id}`} >view</Link> </td>
                  <td>{surname}</td>
                  <td>{firstname}</td>
                  <td>{lastname}</td>
                  <td>{email}</td>
                  <td>{gender}</td>
                  <td>{country}</td>
                  <td>{state}</td>
                   <td>{phone}</td>
                   <td>{agegroup}</td>
                    <td>{education}</td>
                    <td>{worktype}</td>
                 
                
                  
                 
                  
                  
                
                </tr>
                
                )
                  })
                  ): ( <h3> No User </h3>)
                  }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div> 
    </div>

      </div>
    )
  }
}



