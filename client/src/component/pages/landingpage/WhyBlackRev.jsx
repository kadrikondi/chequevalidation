import React from 'react'
import {Row,Col, Container, Card} from 'react-bootstrap'
import "./assets/css/style.css"
export default function WhyBlackRev() {
    const cardTxt={
  fontSize:'18px',
  textAlign:'left'
    }
    return (
        <div style={{backgroundColor:'#f7f7f7', paddingBottom:'30px'}}>
             
   
       <Container className="pt-">
           <div className="section-title">
 <h2 >THE BLACKMAN'S REVOLUTION</h2>
 </div>
  <Row>
 <Col xs={12} md={4}>
 <Card >
  <Card.Body>
    <Card.Title style={{fontWeight:700}}><strong>WHAT WE STAND FOR</strong></Card.Title>
  
    <Card.Text style={cardTxt}>
     We are committed to seeking a far-reaching and deep-rooted turnaround of Nigeria and indeed Africa. We opine that the kind of government we have in Nigeria is a reflection of the people of Nigeria, and the socio-political and economic situation is a product of the nature of the society and people of … 
    </Card.Text>

     {/* <Button variant="primary">Go somewhere</Button> */}
    <Card.Link href="/about">Learn More</Card.Link>
  </Card.Body>
</Card>
 </Col>
 <Col xs={12} md={4}>
 <Card >
  <Card.Body>
    <Card.Title style={{fontWeight:700}}><strong>WHY THE BLACKMAN'S REVOLUTION</strong></Card.Title>
  
    <Card.Text style={cardTxt}>
    Nigeria as well as many African countries are comatose and very close to becoming failed states. If we look away and do nothing as our country slide down the slope of catastrophe, we are sure of the complete collapse of the country. Indeed urgency is required to save the situation…
    </Card.Text>

     {/* <Button variant="primary">Go somewhere</Button> */}
    <Card.Link href="/about">Learn More</Card.Link>
  </Card.Body>
</Card>
 </Col>
 <Col xs={12} md={4}>
 <Card >
  <Card.Body>
    <Card.Title style={{fontWeight:700}}><strong>WHAT YOU STAND TO GAIN</strong></Card.Title>
  
    <Card.Text style={cardTxt}>
   By joining The Blackman's Revolution  you stand to gain so much, a few of which include:
A. You are one of the reformed and sane people who deserve to aspire to the position of leadership at any level in the country <br/>
B. You become one of the strong team that will lead the country to prosperity

    </Card.Text>

     {/* <Button variant="primary">Go somewhere</Button> */}
    <Card.Link href="/about">Learn More</Card.Link>
  </Card.Body>
</Card>
 </Col>

  </Row>

       </Container>




        </div>
    )
}
