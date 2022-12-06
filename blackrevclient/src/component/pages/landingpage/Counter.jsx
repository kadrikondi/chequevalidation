import React, { Component } from 'react'
import {Row,Col,  Container} from 'react-bootstrap'
import {FaMale, FaFemale,FaFlag,FaUsers} from "react-icons/fa";
import "./assets/css/style.css"
import {

  allUsers,
  allNgUsers,
  allMaleUsers,
  allFemaleUsers
 
} from '../../apidata/api'
export default class Counter extends Component {

     constructor(){
    super()
    this.state={
    
     allusers:[],
    allngusers: [],
    allfemaleusers:[],
    allmaleusers:[]
   
    
    }
    
  }
   async componentWillMount(){
    

     const allusers =await allUsers()
     const allngusers = await allNgUsers()
     const allmaleusers =await allMaleUsers()
     const allfemaleusers= await allFemaleUsers()
     
     this.setState({allusers:allusers, allngusers:allngusers, allfemaleusers:allfemaleusers, allmaleusers:allmaleusers})
    
     
 
    
    }
    render() {
          const {
      allmaleusers,
     
    
      allfemaleusers,
      allusers,
   allngusers,
     
    } = this.state
        return (
            <div id="counts" className="counts">
            <Container>

                <Row>

                    <Col lg={3} md={6}>
                    <div className="count-box card">
              <i className="icofont-simple-smile"><FaUsers/></i>
              <span data-toggle="counter-up">{ allusers.length}</span>
              <p> Members </p>
            </div>
                    </Col>
                    <Col lg={3} md={6}>
                    <div className="count-box card">
              <i className="icofont-simple-smile"><FaMale/></i>
              <span data-toggle="counter-up">{allmaleusers.length}</span>
              <p>All Male</p>
            </div>
                    </Col>
                       <Col lg={3} md={6}>
                    <div className="count-box card">
              <i className="icofont-simple-smile"><FaFemale /></i>
              <span data-toggle="counter-up">{allfemaleusers.length}</span>
              <p>All Female</p>
            </div>
                    </Col>

                     <Col lg={3} md={6}>
                    <div className="count-box card">
              <i className="icofont-simple-smile"><FaFlag/></i>
              <span data-toggle="counter-up">{allngusers.length} </span>
              
              <p>Nigeria Member</p>
            </div>
                    </Col>
                </Row>
            </Container>
                

            </div>
        )
    }
}
