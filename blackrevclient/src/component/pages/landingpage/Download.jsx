import React, { Component } from 'react'
import {Container,Row, Col, Button ,Card, } from 'react-bootstrap'
import BookImg from "../../asset/img/blackrevolutionbook.jpg"
export default class Download extends Component {
    render() {
        return (
            <div>
              
                <Container>
                      <h2 className="text-center mt-5"> Download The Book : <span style={{backgroundColor:'green', color:'white', textTransform:'uppercase'}}>"It's Time For the Blackman's Revolution"</span></h2>
                      
                      <Row className=" mt-5">
                       <Col lg={6}  className="mb-5 ">
<Card style={{ width: 'rem' }}>
  <Card.Img variant="top" src={BookImg} />
  <Card.Body>
    <Card.Title>IT'S TIME FOR THE BLACKMAN'S REVOLUTION(Hard Cover Copy)</Card.Title>
    <Card.Text>
      Buy the papercopy of the book "It's Time for the Blackman's Revolution" By Dr Y.A Habeeb.
    </Card.Text>
     <a target="_blank" href="https://flutterwave.com/store/theblackmansrevolutionstore/7jl4ukzylkxb"  rel="noreferrer">
    <Button variant="primary">BUY Now</Button></a>
  </Card.Body>
</Card>                       </Col>
                       <Col lg={6}  className="mb-5">
<Card style={{ width: 'rem' }}>
  <Card.Img variant="top" src={BookImg} />
  <Card.Body>
    <Card.Title>IT'S TIME FOR THE BLACKMAN'S REVOLUTION (SoftCopy)</Card.Title>
    <Card.Text>
      Buy the Softcopy of the book "It's Time for the Blackman's Revolution" By Dr Y.A Habeeb.
    </Card.Text> 
    <a target="_blank" href="https://flutterwave.com/pay/dryabook"  rel="noreferrer">
    <Button variant="primary">Buy Now</Button></a>
  </Card.Body>
</Card>                       </Col>

                      </Row>
                    <Row>
                        
                        <Col lg={12}  className="mb-5">
  <div  className="text-center mt-5">
                             <a target ="_blank" href="https://www.amazon.com/dp/B09GTMJY9Q" rel="noreferrer">  <Button variant="s" size="lg" style={{backgroundColor:'#095a24', color:'#fff'}}>Download on Amazon</Button></a> &nbsp; <a target ="_blank" href="https://www.smashwords.com/books/view/1105564" rel="noreferrer">  <Button variant="s" size="lg" style={{backgroundColor:'#095a24', color:'#fff'}}>Download on smashwords</Button></a>
                              </div>
                        </Col>
                 
                   
                      
                    </Row>
                </Container>
            </div>
        )
    }
}
