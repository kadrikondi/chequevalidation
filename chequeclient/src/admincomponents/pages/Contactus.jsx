import React, { Component } from 'react'
import SideBarNav from "../layout/sideNavigation";
import "./admin.css";
import moment from "moment";
// import {
// Row,
//     Row,


// } from "mdbreact";

import {Row, Col} from 'react-bootstrap'

import { adminGetSingleContactus, adminDeleteMsg } from '../../component/apidata/api'
export default class SingleContactus extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            date:'',
            message:'',
            subject:'',
            email:'',
            id:''



        }
    }
async handleDeleteMsg() {
        const id = this.props.match.params.id
        console.log(id)
        if (window.confirm('are you sure you want to delete this mesaage')) {
           
            const deleteMsg = await adminDeleteMsg(this.props.match.params.id)
             
            
            alert(deleteMsg)
            if(deleteMsg){
                this.props.history.push('/admin/contactlist')
            }
        }
    }
    async componentDidMount() {
       
        const contactusd = await adminGetSingleContactus(this.props.match.params.id)
       
     
    //  console.log(contactusmsg)
        if (contactusd) {
            this.setState({ subject: contactusd.subject, message:contactusd.message, email:contactusd.email,username:contactusd.username, date:contactusd.date,id:contactusd._id})
        }

        console.log(this.state)
    }

    render() {
        const aa = {
            backgroundColor: '#fff',
            borderRadius: ' 20px'
        }
        const{message,date,email,subject,username}=this.state
        return (
            <div>
                <div className="flexible-content">
                    <SideBarNav />
                    <div id='content' style={aa} className="p-2">
                        <Row>
                            <Col md="12">
                                <h4 className="mt-2">Contactus Mesaage By {username}</h4>
                            
                                  
                                        <div className="card p-2" style={{width:'30rem'}}>
                                        <p className=" p-2 card-body">
                                            <h6><strong>Subject:</strong>&nbsp;&nbsp;{subject}</h6>
                                            <strong>Message:</strong>&nbsp;&nbsp; {message} <br/>
                                            <strong>Email:</strong>&nbsp;&nbsp;<span>{email}</span> 
                                            <br></br>
                                          BY &nbsp;&nbsp;{username} on {moment(date).format("DD/MM/YY")}
                                        </p>
                                        <button className="btn btn-sm btn-danger" id= 'delete' style={{width:'10em'}} onClick={this.handleDeleteMsg.bind(this)}>delete</button> 
                                        </div>
                                
                             



                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }
}
