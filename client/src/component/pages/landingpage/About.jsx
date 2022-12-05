import React from 'react'
import "./assets/css/style.css"
import Logo from './assets/imag/logo.png'
import {Container, Row ,Col} from 'react-bootstrap'
export default function About() {
    
    return (
        <div >
            
            <Container>

        <div className="section-title ">
            <h2>ABOUT US</h2>
            <Row className="content "> 

               
                   <Col xs={6} md={4}>
                   <img src={Logo}  id="imageo"alt="" />
                   </Col>

 

    <Col xs={12} md={8}>
<p id="aboutt" style={{textAlign:'justify'}}><strong>We are a group of people who are striving to ensure that Nigeria and indeed Africa do not become failed states. We have a strong conviction that it is Nigerians and indeed Africans who can develop the countries economically, socially, politically, and culturally. We stand to join hands with our people to distant ourselves from those routes that have taken us to the abyss of underdevelopment and pursue those ways that will make us raise our heads with pride in the comity of nations.</strong></p>
</Col> 

            </Row>
        </div>
        </Container>
        </div>
    )
}
