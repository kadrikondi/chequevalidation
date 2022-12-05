import React from 'react'
import { Container, Button,Col,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './SmButtonJoinAndBook.css'
export default function SmButtonJoinAndBook() {
    return (
        <div>
            <Container id="btnAndBook"  >
          <Row>
    <Col xs={12} sm={12} >
          
       <Link to='/join' className="mt-"  ><Button  variant="succss" size="sm" className="mt-" style={{backgroundColor:'#095a24',color:'#fff'}} >Join The Blackman's Revolution</Button></Link> </Col>
       <Col>
       <Link to='/join'  xs={12} sm={12}  ><Button variant="succes" size="sm" style={{backgroundColor:'#095a24',color:'#fff'}}>The Book "It's Time For The Blackman's Revolution"</Button></Link> 
       </Col>


</Row>

</Container> 

<hr />
        </div>
    )
}
