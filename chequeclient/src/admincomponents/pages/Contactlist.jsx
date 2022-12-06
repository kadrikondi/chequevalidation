import React, { Component } from 'react'
import SideBarNav from "../layout/sideNavigation";
import "./admin.css";
import moment from "moment";
// import {
// Row,
//     Row,


// } from "mdbreact";

import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { adminGetAllContactus } from '../../component/apidata/api'
export default class Contactlist extends Component {
    constructor() {
        super()
        this.state = {
            allcontactus: []

        }
    }

    async componentWillMount() {
        const contactus = await adminGetAllContactus()
     

        if (contactus) {
            this.setState({ allcontactus: contactus })
        }
    }

    render() {
        const aa = {
            backgroundColor: '#fff',
            borderRadius: ' 20px'
        }
        return (
            <div>
                <div className="flexible-content">
                    <SideBarNav />
                    <div id='content' style={aa} className="p-2 ">
                        <Row>
                            <Col md="12"  >
                                <h4 className="mt-2">Contact List</h4>
                                {this.state.allcontactus ? this.state.allcontactus.map((contactus, index) => {

                                    const { username,  subject, date ,_id} = contactus
                                    return (
                                        <ul className="list-group p-2 dar" key ={index} >
                                       <Link to={`/admin/contactusdetail/${_id}`}> <li className="list-group-item">
                                   <strong>Subject:</strong>&nbsp;&nbsp;{subject}&nbsp;&nbsp;
                                          by :&nbsp;{username} on {moment(date).format("DD/MM/YY")}
                                          
                                        
                                        </li> </Link>
                                       
                                        </ul>
                                    )
                                }) : <p>No contactus list </p>}



                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }
}
