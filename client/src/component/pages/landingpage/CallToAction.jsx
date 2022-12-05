import React from 'react'
import {Row,Col, Button, Container} from 'react-bootstrap'
import {Link} from "react-router-dom"
import './corousal.css'
export default function CallToAction() {
    const Stylee={
        backgroundColor:'#424242',
        text:{
            fontWeight:700,
            paddingTop:'20px',
            paddingBottom:'20px',
            fontSize: '25px',
            
    // lineHeight: '5px',
    color:'#fff'
        },
        butt:{
            paddingTop:'30px',
            fontWeight:'bold'
        }
    }
    return (
        <div>
            <div  style={Stylee}>
                <Container>
                <Row>
   
  <Col xs={12} md={8}> <p  style={Stylee.text} >
  STEPS FOR NIGERIA AND AFRICA NOT TO BECOME FAILED STATES AND OUR YOUTHS TO HAVE PROSPEROUS FUTURE AND COUNTRIES THEY CAN CALL THEIRS
  </p>
  </Col>
 <Col xs={12} md={4}>
  <p style={Stylee.butt} id='btnhideonsm'>
   <Link to='/join'><Button variant="succes" size="lg " style={{backgroundColor:'#095a24', color:'#fff'}} >Join The Blackman's Revolution</Button></Link> 
  </p>

   <p >
   <Link to='/join' id='btnshowonsm' ><Button variant="succes" size="md " style={{backgroundColor:'#095a24', color:'#fff'}} >Join The Blackman's Revolution</Button></Link> 
  </p>
</Col>

                </Row>
</Container>
            </div>
        </div>
    )
}
