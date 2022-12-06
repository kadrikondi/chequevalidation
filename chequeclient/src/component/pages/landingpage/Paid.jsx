import React, { Component } from 'react'
import {Container,Row, Col, Button ,Card, } from 'react-bootstrap'
import BookPdf from "../../asset/img/IT’S TIME FOR THE BLACKMAN'S REVOLUTION.pdf"
export default class Paid extends Component {
    render() {
        return (
            <div>
              
                <Container>
                      <h2 className="text-center mt-5 "> Thank You for purchasing the Book :
                      <br></br>
                      </h2>
                      <h2 className="text-center mt-2"> <span style={{backgroundColor:'green', color:'white', textTransform:'uppercase'}} className="p-2">"It's Time For the Blackman's Revolution"</span></h2>

                      <h3 className="text-center"> Click On the Button Below to Download Your Copy</h3>
                      
                      
                    <Row>
                        
                        <Col lg={12}  className="mb-5">
  <div  className="text-center mt-5">
                             <a target ="_blank" href={BookPdf} rel="noreferrer" download>  <Button variant="s" size="lg" style={{backgroundColor:'#095a24', color:'#fff'}}>Download Now</Button></a> 
                              </div>
                        </Col>
                 
                   
                      
                    </Row>
                </Container>
            </div>
        )
    }
}
