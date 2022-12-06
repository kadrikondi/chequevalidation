import React from 'react'
import {Row,Col,  Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function joinDivider() {
    const Stylee={
        backgroundColor:'#095a24',
        text:{
            fontWeight:700,
            paddingTop:'30px',
            paddingBottom:'20px',
            fontSize: '25px',
            textAlign:'center',
            
    // lineHeight: '5px',
    color:'#fff'
        }
    }
    return (
        <div>
            <div  style={Stylee}>
                <Container>
                <Row>
   
  <Col xs={12} md={12}> <p  style={Stylee.text} >
      {/* <Jumbotron> */}
<h2><Link to="/join" style={{color:'#fff'}}>DOWNLOAD THE BOOK: “IT’S TIME FOR THE BLACKMAN’S REVOLUTION”</Link></h2>
{/* </Jumbotron> */}
  </p>
 
  </Col>
 

                </Row>
</Container>
            </div>
        </div>
    )
}
