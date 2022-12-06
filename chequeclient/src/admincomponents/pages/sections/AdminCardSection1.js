import React, { Component } from 'react'
// import { Card, Card.Body, i, Row, Col, Card.Text } from 'mdbreact';
import {

  allUsers,
  allNgUsers,
  allMaleUsers,
  allFemaleUsers
 
} from '../../../component/apidata/api'
import {Card ,Row,Col} from 'react-bootstrap'


export default class AdminCardSection1 extends Component {
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
      <div>
        <Row className="mb-4">
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
              <i icon="money-bill-alt" className="primary-color"/>
                <div className="data">
                  <p>FEMALE</p>
                  <h4>
    <strong>{ allfemaleusers.length}</strong>
                  </h4>
                </div>
              </div>
              <Card.Body>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" className="progress-bar bg-primary" role="progressbar"
                    style={{width: `${ allfemaleusers.length}%`}}></div>
                </div>
    <Card.Text> We Have <strong>{allfemaleusers.length}</strong> Female </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
      
                <div className="data">
                  <p>All MALE</p>
                  <h4>
    <strong>{allmaleusers.length}</strong>
                  </h4>
                </div>
              </div>
              <Card.Body>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: `${allmaleusers.length}%`}}></div>
                </div>
              <Card.Text> We Have <strong>{allmaleusers.length}</strong> Male </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
              <i icon="chart-pie" className="light-blue lighten-1"/>
                <div className="data">
                  <p>NIGERIAN USERs</p>
                  <h4>
    <strong>{allngusers.length}</strong>
                  </h4>
                </div>
              </div>
              <Card.Body>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: `${allngusers.length}%`}}></div>
                </div>
                <Card.Text> We Have <strong>{allngusers.length}</strong> Nigerians </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
              <i icon="chart-bar" className="red accent-2"/>
                <div className="data">
                  <p>All Users</p>
                  <h4>
                    <strong>{allusers.length}</strong>
                  </h4>
                </div>
              </div>
              <Card.Body>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: `${allusers.length}%`}}></div>
                </div>
               <Card.Text> We Have <strong>{allusers.length}</strong> Users </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>

      </div>
    )
  }
}

