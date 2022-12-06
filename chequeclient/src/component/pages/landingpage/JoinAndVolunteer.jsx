import React from 'react'
import {Row,Col,Button, Container,Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function JoinAndVolunteer() {
    return (
        <div style={{backgroundColor:'#f7f7f7'}}>
            

    <Container className="pt-5">
        <Row>
            <Col xs={12} md={7} lg={7} >
            <Jumbotron style={{backgroundColor:'white'}}>
              <h3>BE PART OF THE BLACKMAN'S REVOLUTION</h3>
<p> Join and become agent of positive Social Change that will bring about a better Nigeria</p>
  <Link to='/join'><Button variant="outline-success" size='lg'> JOIN THE VANGUARDS FOR THE BLACKMAN'S REVOLUTION</Button></Link> 
            </Jumbotron>
            </Col>
             <Col xs={12} md={5} lg={5}>
            <Jumbotron  style={{backgroundColor:'white'}}>
              <h3>BECOME A VOLUNTEER OR FACILITATOR</h3>
              <p> Volunteer yourself to influence social change</p>

<Link to='/join'></Link><Button  variant="outline-success"size='lg'> VOLUNTEER</Button>
            </Jumbotron>
            </Col>
           
        </Row>

    </Container>

        </div>
    )
}
