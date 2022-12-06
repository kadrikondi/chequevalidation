import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'
export default class Volunteer extends Component {
    render() {
        return (
            <div>
              
                <Container>
                      <h2 className="text-center"> Volunteer</h2>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={8}>
                     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd6zWUfuLCpuvfeTcBVGjQT4VBJdmjRxvZESs8vE47gmmtDiw/viewform?embedded=true"  marginHeight={0} marginWidth={0} width={700} height={800} frameBorder={0} title="volunteer">Loading…</iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
